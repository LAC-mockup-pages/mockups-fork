// Actions and logic

const questionList = [
  "I've lost my password. How do I retrieve it?",
  "The data check reports don't come up, what should I do?",
  "We need an additional log-in, how do we get one?"
];

const answerList = [
  [
    'There is a "Forgot Password" function available on the loginscreen. After entering your username, a temporary password will be emailed to you. That temporary password should be used to login to ASISTS, at which point you will be immediately directed to change your password to one of your choice.',
    "If this process does not work for you, please email asists@gmail.com to request assistance."
  ],
  [
    "The Data Check reports come up as separate windows.  If you select a report and it never appears please check to see if your pop up blocker is on; if so you will want to disable it"
  ],
  [
    "To view a slideshow about the new procedure, please use this link: ",
    "https://docs.google.com/presentation/d/1YDS7N_L4ogiGdxkwyuCCjGYl2zo3iHjo8Lw3uxGA5KM/edit?usp=sharing",
    "To request a Single New User please use this form: ",
    "https://docs.google.com/forms/d/e/1FAIpQLSccqpE92wpLBLekUoXskSFWtPf4ik81riyc9Tt18sRLTmXobg/viewform?usp=sf_link",
    "To request Multiple New Users at the same time, please use this request form:",
    "https://docs.google.com/spreadsheets/d/1EDORIweHOmevJu2OfdaD4u6csIoVVbA9S4mMsg5pO48/edit?usp=sharing"
  ]
];

const createAnswerText = arr => {
  let result = "";
  for (let str of arr) {
    if (str.startsWith("http")) {
      result += `<a href="${str}" target="blank">${str}</a>`;
    } else {
      result += `<p>${str}</p>`;
    }
  }
  return result;
};

$(document).ready(() => {
  for (i = 0; i < questionList.length; i++) {
    const topic = $("<div></div>").attr("id", "topic" + i);
    const question = $("<div></div>")
      .attr("class", "question")
      .text(questionList[i]);
    const answerText =
      answerList[i].length > 1
        ? createAnswerText(answerList[i])
        : $("<p></p>").text(answerList[i][0]);

    const answer = $("<div></div>")
      .attr("class", "answer")
      .append(answerText);

    $(topic).append(question, answer);

    $(".list").append(topic);
  }
});
