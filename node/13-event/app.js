// 이벤트가 발생할때마다 등록된 두개의 콜백함수가 순차적으로 호출됩니다.
// eventEmitter은 node.js자체적으로 사용할수도 있고 우리가 eventEmitter을 만들어서
// 이벤트에 관심있는 콜백함수를 등록해놓고 특정한 이벤트를 발생시킬 수도 있습니다.
// 이벤트 이름과 전달하고자하는 데이터를 명시해주면 콜백함수에서 데이터를 접근할 수 있습니다.
// eventEmitter는 node.js자체적으로도 사용하고 있는데요. createReadStream을 이용하면
// readStream을 만들어주는데요. stream.Readable이라는 클래스를 상속하는데
// Readable은 Node.Readable을 상속하고 ReadableStream은 결국 EventStream을 상속합니다.

const EventEmitter = require("events");
const emitter = new EventEmitter();
// 등록된 콜백함수를 중재할 수도 있습니다.
const callback1 = (args) => {
  console.log("first callback - ", args);
};
emitter.on("jiyoon", callback1);

emitter.on("jiyoon", (args) => {
  console.log("first callback - ", args);
});

emitter.on("jiyoon", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("jiyoon", { message: 1 });
emitter.emit("jiyoon", { message: 2 });
emitter.removeListener("jiyoon", callback1); // emitter을 제거할 수 있습니다.
emitter.removeAllListeners(); // 명시하지 않으면 모든 이벤트에 대해서 등록된 콜백함수를 제거할 수 있습니다.
emitter.emit("jiyoon", { message: 3 });

// first callback -  { message: 1 }
// second callback -  { message: 1 }
// first callback -  { message: 2 }
// second callback -  { message: 2 }
// first callback -  { message: 3 }
// second callback -  { message: 3 }
