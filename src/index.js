import EchoWorker from "./echo.worker";

const echoWorker = new EchoWorker();

echoWorker.onmessage = function (e) {
  console.log("Message received from worker");
  console.log(e.data);
};

setTimeout(() => {
  console.log("Post message to worker");
  echoWorker.postMessage([1, 2]);
}, 1000);
