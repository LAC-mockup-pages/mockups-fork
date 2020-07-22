// event-view after selecting an avent in list

import { createRosterBloc } from "./roster-view.js";

export const createEventView = (tdList, labelObj) => {
  const fullLength = tdList.length;
  const halfLength = Math.ceil(fullLength / 2);
  let leftBloc = "";
  let rightBloc = "";
  let rosterBloc = createRosterBloc();

  for (let i = 0, j = halfLength; i < halfLength, j < fullLength; i++, j++) {
    const tdLeft = tdList[i];
    const tdRight = tdList[j];
    leftBloc += elementInput({
      keyVal: $(tdLeft).attr("data-name"),
      labelVal: $(tdLeft).attr("data-label"),
      value: $(tdLeft).text(),
      labelClassVal: "",
      classVal: "",
      option: "",
      optionHidden: " form-group",
    });

    rightBloc += elementInput({
      keyVal: $(tdRight).attr("data-name"),
      labelVal: $(tdRight).attr("data-label"),
      value: $(tdRight).text(),
      labelClassVal: "",
      classVal: "",
      option: "",
      optionHidden: " form-group",
    });
  }

  const eventView = `${rosterBloc}
  <form role="form" id="event-view-form" class="container-fluid row event-view">
      <div class="col-md-6 left-event-view">${leftBloc}</div>
      <div class="col-md-6 right-event-view">${rightBloc}</div>
      <button type="button" id="save-changes-btn" form="event-view-form" class="btn btn-primary">Save Changes</button>
      <button type="button" id="cancel-changes-btn" form="event-view-form" class="btn btn-default">Cancel</button>
    </form>
  `;
  return eventView;
};
