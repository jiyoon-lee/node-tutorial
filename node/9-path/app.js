const path = require("path");

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\Users\jiyoo\OneDrive\Desktop\node-tutorial\9-path\app.js'

console.log(__dirname);
console.log(__filename);

// 운영체제마다 표현되는 경로가 다르므로 각각 다른 식으로 표기되어져야 합니다.
// path를 이용해서 운영체제별로 경로 표기법이 달라져도 잘동작하도록 만들어줍니다.

console.log(path.sep); // 경로 구분자: \
console.log(path.delimiter); // 환경변수 구분자: ;

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

// isAbsolute : 절대경로인지 상대경로인지 알 수 있습니다.
console.log("isAbsolute", path.isAbsolute(__dirname)); // 절대경로
console.log("isAbsolute", path.isAbsolute("../")); // 상대경로

// normalize: 경로에서 에러가 있고 좀 이상할 때 알아서 고쳐줍니다.
console.log(path.normalize("./folder///////sub"));

// join: 현재 디렉토리 안에 새로운 폴더를 만드려면
console.log(__dirname + "/" + "image"); // window에서 이상한 경로가 됩니다.
console.log(__dirname + path.sep + "image"); // 운영체제의 구분자를 사용하여 경로를 만듭니다.
console.log(path.join(__dirname, "image")); // 두 인자를 조인해줍니다.

// ※ 운영체제 별로 경로 표기법이 달라지기 때문에 손으로 직접 작성하기
// 보다는 path.sep나 join을 사용하여 운영체제 별로 잘 동작할 수 있도록 만들어주는 것이 중요합니다.
