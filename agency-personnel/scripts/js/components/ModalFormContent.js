// Content for Editing in Modal Form

export const createEditForm = (content) => {
  $(content).each(function (indx) {
    $(this)
      .children("input, select")
      .prop("disabled", false)
      .removeAttr("disabled");
  });
  return content;
};
