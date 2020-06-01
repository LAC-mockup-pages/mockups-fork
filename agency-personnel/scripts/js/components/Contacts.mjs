import { topBanner, tableBody } from "../main.mjs";
import { getPersProgressContacts } from "../data-server.mjs";

export const contactsView = () => {
  const blockName = "Progress Contact";
  const header = topBanner(blockName, [
    ["Date", "col-sm-2"],
    ["Type", "col-sm-2"],
    ["Notes", "col-sm-8"],
  ]);
  // Sorting by date descending
  const recordList = getPersProgressContacts.sort(
    (a, b) => new Date(b.ContactDate) - new Date(a.ContactDate)
  );
  recordList.forEach(
    (record) => (record.ContactDesc = record.ContactDesc.trim())
  );
  const body = tableBody(recordList, blockName, [
    "ID",
    "PersonnelID",
    "ContactType",
  ]);

  return `<div class="col-md-6">
            ${header + body}
          </div>`;
};
