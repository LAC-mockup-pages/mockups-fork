//* Adding a new record

function addRecord(e, element) {
  e.stopPropagation();
  const blockName = $(element)
    .attr("data-blockId")
    .split("-");
  console.log("blockName :", blockName);
  return false;
}

//TODO Editing a record in a table
