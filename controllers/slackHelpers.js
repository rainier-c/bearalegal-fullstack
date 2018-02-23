// Declare lets for common responses
let apologies = [
  "Shoot", 
  "Aw shucks", 
  "Gosh", 
  "Oh darn", 
  "Woops"
];
let greetings = [
  "Howdy there!",
  "Yo!",
  "Hello!",
  "So nice to see you!",
  "Hola!",
  "Well hello there!"
];

const sendResponse = (req, res, commands, command) => {
  // Build response object
  let response = {};
  response.response_type = "in_channel";
  response.channel = "req.body.channel_id";
  response.text = `Here you go– the latest ${command.full}!`;

  // Construct Slack attachments
  response.attachments = [
    {
      actions: [
        {
          type: "button",
          text: `Download`,
          url: `${process.env.BEARALEGAL_URL}/api/documents/${command.short}`
        }
      ]
    }
  ];

  // Send response back to Slack
  res.json(response);
};

const sendHelp = (req, res, commands) => {
  let attachmentsText = "";

  for (var key in commands) {
    attachmentsText += `\nType \`\/legal ${
      commands[key].short
    }\` and I'll fetch the ${commands[key].full}`;
  }

  let response = {};
  response.response_type = "in_channel";
  response.channel = "req.body.channel_id";
  response.text = `${
    greetings[Math.floor(Math.random() * greetings.length)]
  } I'm Bearalegal, your virtual paralegal. Below are some simple tasks I can help you with!`;
  response.attachments = [
    {
      title: "Forms & Policies",
      text: attachmentsText,
      color: "#7CD197"
    }
  ];

  res.json(response);
};

const sendError = (req, res) => {
  let response = {};
  response.response_type = "in_channel";
  response.channel = "req.body.channel_id";
  response.text = `${
    apologies[Math.floor(Math.random() * apologies.length)]
  }, it looks like I'm not sure how to help. Sorry about that! Please type \`/legal \` to see the ways I can help you!`;

  res.json(response);
};

module.exports.sendHelp = sendHelp;
module.exports.sendResponse = sendResponse;
module.exports.sendError = sendError;
