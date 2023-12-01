const fs = require("fs");

// hightWaterMark참고자료: https://nodejs.org/api/stream.html

// readStream을 통해서 스트림을 순차적으로 가져올 수 있습니다.
const readStream = fs.createReadStream("./file.txt", {
  //   highWaterMark: 8, // 8byte
  // 읽고 쓸 때 얼마나 많은 사이즈르 읽어와서 저장했다가 처리할 것인지 stream이 한번에 처리할 수 있는 양을 결정합니다.
  // default는 64bytes가 됩니다.
  //   encoding: "utf8",
});

const data = [];

// stream은 조금조금씩 읽어오기 때문에 이벤트 베이스입니다.
// stream에서 이벤트가 조금씩 도착하면 알려줍니다.
// createReadStream이 반환값은 ReadStream입니다.
// ReadStream은 addListener을 등록할 수 있습니다.
// 이벤트가 발생하면 addListener을 이용하여 거기에 맞게 처리할 수 있습니다.

// addListener을 사용해도 된고 on이라는 메서드를 사용할 수도 있습니다.

readStream.on("data", (chunk) => {
  //   console.log(chunk);
  data.push(chunk);
  console.count("data");
}); // readStream에 데이터가 들어오면 chunk(전체적인 데이터가 아니라 부분적인 한 버퍼의 덩어리)가 올 수 있습니다.
// chunk는 버퍼일 수도 있고 encoding옵션을 'utf8'로 설정했다면 문자열이 올 수도 있습니다.

readStream.on("end", () => {
  console.log(data.join(""));
});
readStream.on("error", (error) => {
  console.error(error);
});
// addListener와 on은 모두 자기 오브젝트 자체를 리턴합니다.
// 따로따로 하지않고 합칠 수도 있습니다.
