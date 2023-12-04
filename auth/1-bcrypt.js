const bcrypt = require("bcrypt");

const password = "abcd1234";

// saltOrRounds를 너무 긴 숫자를 해버리면 서버에서 가입을 할 때마다 이것을 처리하는데
// cpu를 사용하는데 계산하기 때문에 좋지않습니다. 너무 지나치게 hash를 하는 것은 좋지 않습니다.
// 보통은 10~12를 추천
// 서버의 성능과 여러가지를 고려 8, 10, 12가 적절
const hashed = bcrypt.hashSync(password, 10);
console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync("abcd1234", hashed); // 서버에서는 비동기 방식이 좋다.
console.log(result);

// 사용자의 패스워드를 좀 더 안전하게 보관
// salt라는 것은 암호화를 좀 더 확실하게 안전하게 하기 위해서 사용하는
// 추가적인 데이터
