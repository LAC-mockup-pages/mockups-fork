//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: non-nrs
//* =======================================

import {
  createOptionList,
  nonNRSCategories,
  nonNRSGoals,
  nonNRSSites
} from "../main.js";

export const createNonNRSContent = (list) => {
  const tableBodyContent = [];
  const orderedList = list.sort(
    (item1, item2) =>
      Number(item2.FY) - Number(item1.FY) ||
      Number(item1.Category_Key) - Number(item2.Category_Key)
  );
  console.log("orderedList :>> ", orderedList);
  for (const record of orderedList) {
    const { ID, Category_Key, GoalID, FY, MetGoal, ReferralSiteID } = record;
    const yesNoList = [
      { key: "False", value: "No" },
      { key: "True", value: "Yes" }
    ];
    const optionListCategory = createOptionList(nonNRSCategories, Category_Key);
    const optionListGoal = createOptionList(nonNRSGoals, GoalID);
    const optionListSites = createOptionList(nonNRSSites, ReferralSiteID);
    const optionListGoalMet = createOptionList(yesNoList, MetGoal);

    const row = `
    <tr id=${ID} data-original-title="Click to Edit" data-toggle="tooltip" data-placement="left">
      <td>
        <div class="form-group input-field">
          <input type="text" disabled name="FY" value=${FY}>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="Category_Key">
            ${optionListCategory}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="GoalID">
            ${optionListGoal}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="GoalMet">
            ${optionListGoalMet}
          </select>
        </div>
      </td>
      <td>
        <div class="form-group input-field">
          <select class="modal-select" disabled name="ReferralSiteID">
            ${optionListSites}
          </select>
        </div>
      </td>
    </tr>
    `;
    tableBodyContent.push(row);
  }
  return tableBodyContent.join("");
};
