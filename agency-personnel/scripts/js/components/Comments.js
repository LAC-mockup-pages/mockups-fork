import { personnelData, topBanner } from "../main.js";

export const commentsView = () => {
  const blockName = "Comments";
  const header = topBanner(blockName);
  const { PersComments } = personnelData[0];
  const commentList = PersComments.split("\n")
    .map((str) => `<p class="comment-line">${str}</p>`)
    .join("");
  // console.log("commentList :>> ", commentList);
  const body = `
  <div class="color-select" id="comments" data-table="getPersonnel" data-toggle="tooltip" data-placement="left"
  data-original-title="Click to Edit">
  ${commentList}
  </div>`;
  return header + body;
};

// commentList is an array of all <p></p> in Comments block
// returns a string with carriage returns (\n) in a <textarea>
export const commentsContent = (commentList) => {
  let comments = [];
  if (commentList.length) {
    $(commentList).each(function (indx) {
      const innerText = $(this).text();
      comments.push(`${innerText}\n`);
    });
  }
  const commentString = comments.join("\n").trim();
  return `
  <textarea class="comments-modal-area" data-table="getPersonnel" name="PersComments">${commentString}</textarea>`;
};
