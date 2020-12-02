import { personnelData, topBanner } from "../main.js";

const commentsView = () => {
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
  const commentsArea = header + body;
  return commentsArea;
};

export default commentsView;
