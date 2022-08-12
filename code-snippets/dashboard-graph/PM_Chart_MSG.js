$(document).ready(function () {

    var progName = getAgencyName();
    var progID = getAgency();
    var source = {};
    get_MSG();

    // Init functions for page load
    function get_MSG() {

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ agencyID: progID }),
            async: false,
            url: 'PM_dashboard_data.asmx/Get_PM_MSG',
            cache: false,
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                source = $.parseJSON(data.d);

                var settings = {
                    title: "MSG % by EFL ",
                    description: " ",

                    enableAnimations: true,
                    animationDuration: 1000,
                    backgroundColor: '#2479b5',
                    showLegend: true,
                    padding: { left: 5, top: 5, right: 5, bottom: 5 },
                    titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                    source: source,
                    xAxis:
					{
					    unitInterval: 1,
					    visible: false,
					    //gridLines: { interval: 2 }
					},

                    categoryAxis:
							{
							    dataField: 'EFL_DESC',
							    //textRotationAngle: 0,
							    //showTickMarks: true,
							    //valuesOnTicks: false,
							    //tickMarksInterval: 1,
							    tickMarksColor: '#888888',
							    //unitInterval: 1,
							    //gridLinesInterval: 1,
							    gridLinesColor: '#888888',
							    //showLabels: false,
							    //visible: false,
							    //axisSize: 'auto'
							},
                    colorScheme: 'scheme03',
                    seriesGroups:
											[
												{
												    type: 'column',
												    columnsGapPercent: 50,
												    seriesGapPercent: 5,
												    useGradientColors: false,
												    valueAxis:
													{
													    minValue: 0,
                                                        axisSize: 'auto',
                                                        visible: true,
													    description: 'Number of Students'
													},
												    series: [
															{ dataField: 'Enrollment', displayText: 'Enrollment', lineColor: '#cccccc', fillColor: '#ac8fc2' },
															{ dataField: 'MSGCount', displayText: 'MSGCount', lineColor: '#cccccc', fillColor: '#e3e3e3' }
													]
												},
                                                {
                                                    type: 'line',
                                                    valueAxis:
                                                        {
                                                            minValue: 0,
                                                            unitInterval: .1,
                                                            description: 'MSG Rate',
                                                            postion: "left",
                                                        },
                                                    series: [
                                                        { dataField: 'MSGPer', displayText: 'MSG %' }
                                                    ]
                                                }

											]

                };
                $('#jqxChart').jqxChart(settings);

                $("#print").click(function () {
                    // Create table for printing apended to hidden table in page so it only shows when printing
                    $("#dt").remove();
                    var keys = $.map(source[0], function (value, key) {
                        return key;
                    });
                    $('#display').append('<table id="dt" class="table" align="left" cellspacing="0" cellpadding="0" border="0" style="width:750px;"><tr id="dth"></tr></table>');
                    $.each(keys, function (key, value) {
                        $('#dth').append('<th>' + value + '</th>');
                    });
                    $.each(source, function (key, val) {
                        var tr = $('<tr></tr>');
                        $.each(val, function (k, v) {
                            $('<td>' + v + '</td>').appendTo(tr);
                        });
                        tr.appendTo('#dth');
                    });

                    var content = $('#jqxChart')[0].outerHTML;
                    var tblprint = $('#display')[0].outerHTML;
                    var newWindow = window.open('', '', 'width=800, height=600'),
				document = newWindow.document.open(),
				pageContent =
					'<!DOCTYPE html>' +
					'<html>' +
					'<head>' +
					'<link rel="stylesheet" href="../Styles/style.css" type="text/css" />' +
					'<meta charset="utf-8" />' +
                    '<meta name="viewport" content="width=device-width, initial-scale=1" />' +
					'<title>Student Information Chart</title>' +
					'</head>' +
					'<body id="printPG">' + content + tblprint + '</body></html>';
                    document.write(pageContent);
                    document.close();
                    newWindow.print();
                });
                $("#print").jqxButton({});
            },
            error: function (err) {
                alert(err.toString);
            }
        });
    } //get_MSG
   
});  //$(document).ready
