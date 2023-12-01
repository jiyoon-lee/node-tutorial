// 서버에서 동영상 전체가 아니라 잘게잘게 나눈 데이터를 조금씩 보내어 주는것을 스트리밍이라고 합니다.
// 이런것을 프로그래시브 다운로드라고 합니다.
// 사용자가 동영상을 보는 속도보다 조금씩 다운받는 속도가 빠르다면 버퍼링을 이용해서 버퍼를 채워둘 수 있습니다.
// 다운로드 받는 속도보다 사용자가 보는 속도가 더 빠르다면 충분히 쌓여있는 버퍼가 없어서 버퍼링에 걸립니다.
// 사용자가 게임을 하는 장면을 녹화하면서 조금씩의 데이터를 스트리밍하게 되고
// 서버에서는 스트리밍한 데이터를 버퍼링해두었다가 작은작은 단위의 mp4 파일을 실시간으로 보고있는 사용자들에게
// 보내줍니다.

// 컴퓨터에서도 큰 사이즈의 파일을 한번에 다 읽는다면 파일의 데이터를 메모리에 다 가져와야하는데
// 만약 파일이 굉장히 커서 메모리보다 더 크면 안되기 때문에 조금씩의 작은 단위의 데이터(버퍼)를
// 스트리밍해서 메모리로 가지고 오면 됩니다. 버퍼와 스트리밍은 메모리와 시간에 효율적입니다.
// 서버에서 파일을 다 읽을 때까지 기다렸다가 사용자에게 보내주는 것이 아니라 파일을 조금씩 읽으면서 사용자에게
// 보내줄 수 있기 때문입니다.

// 버퍼라고 하는 것은 우리 메모리에서 고정된 사이즈의 메모리 덩어리로 보면 됩니다.
// 숫자의 배열이라고 볼 수 있습니다. 메모리에 들어있는 데이터 자체를 가리킵니다.
// 데이터에 있는 byte 그 자체를 가리킨다.

const fs = require("fs");

const buf = Buffer.from("Hi"); // Hi를 메모리에 올릴 때 실제로 어떤 형태가 될까.
console.log(buf); // <Buffer 48 69> 유니코드 형태 입니다.
console.log(buf.length); // 2 'H', 'i' 2개
console.log(buf[0]); // 75 접근할 때는 buf의 array형태로 되어있습니다.
console.log(buf[1]); // 105 이번에는 아스키 코드 형태로 출력됩니다.
console.log(buf.toString()); // 문자열 형태로 변환하고 싶다면 기본 인코딩은 utf8

// 직접 버퍼를 만들 수 있습니다.
const buf2 = Buffer.alloc(2); // 사이즈가 2개인 버퍼를 만듭니다.
// 위 함수를 이용하면 메모리에서 사용가능한 메모리(덩어리)를 찾아서 덩어리를 초기화 시켜줍니다.
// 덩어리를 찾긴하는데 초기화 시켜주지 않는 api도 있습니다.
const buf3 = Buffer.allocUnsafe(2); // 기존의 데이터가 들어있으나 사용되지 않는 메모리라면 공간은 확보하지만 초기화하지 않습니ㅏ.
// 초기화 하지 않기때문에 alloc보다 allocUnsafe가 더 빠르지만 데이터가 들어있을 수도 있으므로 초기화를 항상 해주는 것이 좋습니다.
buf2[0] = 72;
buf2[1] = 105;

console.log(buf2);
console.log(buf2.toString());
console.log(buf3);

// buf2에 있는 내용을 buf3으로 옮겨오고 싶다면
buf2.copy(buf3);
console.log(buf3);
console.log(buf3.toString());

// 버퍼는 문자열이 될 수 도 있고 숫자가 될 수도 있고 데이터를 raw형태로, 메모리에 있는 바이트 단위로 처리할 수 있게 해줍니다.

// concat: 여러가지 버퍼를 모을 수 있습니다.
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());