import { personnelData, topBanner } from "../main.mjs";

const commentsView = () => {
  const blockName = "Comments";
  const header = topBanner(blockName);
  const { PersComments } = personnelData[0];
  const body = `<form role="form" id="comments-area">
  <textarea class="input-field dark-text" name="PersComments">${PersComments}</textarea></form>`;
  const commentsArea = header + body;
  return `<div class="col-md-6">${commentsArea}</div>`;
};

export default commentsView;
