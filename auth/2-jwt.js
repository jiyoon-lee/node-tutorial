const jwt = require("jsonwebtoken");

const secret = "67464274C21C9ADFC59A635CA6768";
// payload: 토큰을 보낼 때 담고싶은 데이터를 만들면 된다.
// 이것이 너무 커지면 네트워크 데이터를 많이 소모할 수 있으므로
// 정말 필수적인 데이터만 넣는 것이 중요

// secret key는 서버에서 가지고있을 중요한 데이터이므로
// 서버에서만 보관하고있는 secret key를 만들어야 함.
// 임의의 문자열을 사용해도 되지만 조금더 안전한 토큰을 만들고 싶다면
// 임의의 강력한 패스워드를 만드는 사이트를 이용
// 권고되는 사이즈는 32characters 입니다.
// 엄밀히 말하면 256bit 32byte가 됩니다.
const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  secret,
  {
    expiresIn: 2, // 2초안에 만료가 됩니다.
  }
);

// invalid token
// const edited =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDE1Mjc3MDB9.6eM9byoWWQYfxonZj6u3jsFPow7M2GvIjRZgsiI7jxo";

// valid token
// const edited =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTUyNzkzNn0.ApXN9TVrZjSdmmzpccma5h1ifVSm0IAKJxlNM47nc8U";
// JsonWebTokenError: invalid signature
// 한번 발행된 토큰은 변경되면 안됩니다.
// 무언가를 변경한다면 마지막의 최종적은 signature가 변경되기 때문에
// 한번 변경을 하면 이제는 우리가 발행한 토큰이 아니기 때문에 사용자가 악의적으로 변경을 했는지 확인 가능
jwt.verify(token, secret, (error, decoded) => {
  console.log(error, decoded);
});

console.log(token);

// TokenExpiredError: jwt expired
setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded); // undefined
  });
}, 3000);
