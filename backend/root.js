const { GoogleGenerativeAI } = require("@google/generative-ai");
// api fetch
const genAI = new GoogleGenerativeAI("AIzaSyDzSK_VNYgRjKtocL29voSQdOuw44iMNVQ");

async function run() {
// model choose done !!
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  const texta = "ayush";
  const prompt = `my name is ${texta}`
// prompt generate
  const result = await model.generateContent(prompt);
  const response = await result.response;
  // convert into text format
  const text = response.text();
  console.log(text);
}
// run one time
run();
