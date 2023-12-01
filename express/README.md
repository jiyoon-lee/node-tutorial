```js
const express = require('express')
const app = express()

// 첫번째 인자: URL/Path
// 두번째 인자: Callback
// 요청들어온 request object와 우리가 반응할 수 있는 response object와 다음으로 넘어갈 수 있는 next가 인자로 들어오고 해당하는 경로에 대하여 인자를 보내고 싶으면 전달받은 response object를 이용해서 send를 호출하면 됩니다.

// express에서 사용하는 콜백함수, request를 받고 response를 처리할 수 있고 next를 받아서 들어오는 이 함수를 미들웨어라고 합니다.
// express를 한 문장으로 표현하라고 한다면 express는 미들웨어의 연속이다. 미들웨어의 체인이다라고 표현할 수 있습니다.

// 수많은 미들웨어의 체인으로 만들어져 있는 것이 express입니다.

// app.use를 사용하면 get, post 이런 모든 것 request를 처리할 수 있는 함수입니다.
// use를 이용해 모든 path에 대해 다 처리를 하는 미들웨어를 하나 만들고
// 또 다른 app.use를 이용하여 모든 경로에 대해서 header에 대해서 처리하는 미들웨어를 하나 만들고
// app.get이라는 함수를 이용해서 root 경로에 해당하는 미들웨어를 하나 만들고 app.get에 '/post'라는
// 미들웨어를 하나 만들고 이렇게 미들웨어를 서로 연결해주는 것이 express입니다.
app.get('/post', function(req, res, next) {
    res.send(...)
})

app.post('/posts', function(req, res, next) {
    res.send(...)
})

app.put('/posts:/:id', function(req, res, next) {
    res.send(...)
})

app.delete('/posts/:id', function(req, res, next) {
    res.send(...)
})

app.listen(8080)
```

next함수를 호출하여 다음 미들웨어로 이동하고 response에 한번 반응하고 나면 더 이상 그 다음에 있는
미들웨어에는 반응하지 않습니다. 한번 response를 보내고 나면 그 다음 미들웨어는 실행되지 않습니다.
이처럼 요청이 들어왔을 때 서로 해당이 안되면 제일 마지막에 등록된 미들웨어가 실행이 되고
마지막으로 등록된 미들웨어에서 에러를 던지거나 사용자에게 response를 응답할 수 있습니다.
