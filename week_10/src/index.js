import express from "express"; // node_modules 의 express 모듈 사용 (express 약어 사용)
import logger from "morgan"; // node_modules 의 morgan 모듈 사용 (logger 약어 사용)
import path from "path"; // node_modules 의 path 모듈 사용 (path 약어 사용) /경로 설정

import loginRouter from "../routes/login"; // routes 폴더의 login.js 파일 사용 /로그인 화면 기능
import deleteRouter from "../routes/delete"; // routes 폴더의 update.js 파일 사용 /관리자 계정 로그인 시 화면 기능
import selectRouter from "../routes/select"; // routes 폴더의 select.js 파일 사용 /일반 사용자 로그인 시 선택 화면 기능

const PORT = 3000; // 사용할 포트 , 자유롭게 수정 가능

const app = express(); // app이라는 객체의 이름으로 express 기능 사용 express : http 기능을 통해 서버를 사용할 수 있게 해주는 모듈

// app의 기능 사용
// 
app.use(express.urlencoded({extended:false})); // 웹의 복잡한 구조를 다루기 편하게 함 (웹에서 데이터 다루기 편하게)
app.use(express.json());

app.set('views', path.join(__dirname, '../views')) // 웹화면에 어떤 파일과 형식을 사용할 것인지?
app.set('view engine', 'hbs')

app.use(logger("dev")); // log 를 좀 더 자세히

app.use('/', loginRouter); // 로그인 화면의 router 주소
app.use('/delete', deleteRouter); // home 화면에서 delete 주소로 갔을 때 해당 화면이 나타남
app.use('/select', selectRouter); // home 화면에서 select 주소로 갔을 때 사용할 router

// router 모두 선언 후 
// 서버를 실행
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
}) 