// alert("Hello World");

// function createParagraph() {
//   let para = document.createElement("p");
//   para.textContent = "You clicked the button!";
//   document.body.appendChild(para);
// }

// const button = document.getElementById("btn");
// button.addEventListener("click", createParagraph);

// const button = document.getElementById("btn");
// button.addEventListener("mouseover", () => {
//   alert("พี่ขาอย่าทับหนู");
// });

// Telegram
const TELEGRAM_BOT_KEY = "";
const CHAT_ID = "";

// Proxy server
const PROXY_SERVER = "";

// Code
const TELEGRAM_NOTIFY_SERVER = `https://api.telegram.org/bot${TELEGRAM_BOT_KEY}/sendMessage`;
const btn = document.getElementById("btn");

function submitHandler() {
  // Get message from input
  const input = document.getElementById("input");
  const message = input.value;

  // Do not send if message is empty
  if (!message) return;

  // Sending
  const url = `${PROXY_SERVER}/${TELEGRAM_NOTIFY_SERVER}`;
  const body = {
    chat_id: CHAT_ID,
    text: message,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      origin: "localhost",
    },
    body: JSON.stringify(body),
  })
    .then(() => {
      alert(`Sent message: ${message}`);
      // Clearing input
      input.value = "";
    })
    .catch((err) => {
      alert(err);
    });
}
btn.addEventListener("click", submitHandler);
