// home page 에 처음 접속하면 로그인 화면
// view 폴더의 login.hbs 파일과 연동
// login.hbs 에서 데이터를 넘길 때 받는 파일

import express from "express";
import { selectSql } from "../database/sql"; // 선택과 관련된 query 함수 불러오기
// sql 파일에서 selectsql 모듈 사용

const router = express.Router(); // express 에서 router 기능 사용

// login.hbs 파일을 찾아서 웹브라우저에 뿌려주기
router.get('/', (req, res) => {
    res.render('login');
});

// 삽입 버튼을 눌렀을 때 처리하는 부분
// login.hbs 에서 값을 post 로 넘겨주기 때문에 home.js 에서도 post로 받는다.
router.post('/', async (req, res) => {
    const vars = req.body; // login.hbs 에서 넘겨주는 데이터 저장 / object type 이므로 vars.id, vars.password 와 같이 접근 가능
    const users = await selectSql.getUsers(); // sql.js 의 getUsers() 함수를 통해 mysql 의 user 정보 가져오기
    let whoAmI = ''; // admin 인지 user 인지 구분 / let은 값을 바꿀 수 있는 변수
    let checkLogin = false; // 로그인을 하였는지 확인 / 초기값은 FALSE

    users.map((user)=> { // callback 함수를 받아 하나씩 체크하며 기능을 수행 ( 좀 더 간편한 for loop ) / user 는 parameter, function 이 생략됨
        // map 에서 파라미터를 불러오면 하나씩 증가하며 확인함. for loop 에서 user[i] 기능을 수행
        console.log(user.Id);
        if (vars.id === user.Id && vars.password === user.Password) { // 입력한 id, passward 와 user table 의 id, password 를 하나씩 비교, 데이터 베이스에 있다면
            console.log('login success!'); // login success 출력
            checkLogin = true; // 로그인 하였는지 확인하는 변수 true 로 변경 
            if (vars.id === 'admin') { // 입력한 id 가 admin 이라면
                whoAmI = 'admin'; // 관리자 계정
            }
            else { // 입력한 id가 user 라면
                whoAmI = 'user'; // 사용자 계정
            }
        }
    })

    if (checkLogin && whoAmI === 'admin') { // 로그인 성공했고 관리자 계정이라면
        res.redirect('/delete'); // delete 페이지로 이동
    }
    else if (checkLogin && whoAmI === 'user') { // 로그인 성공했고 사용자 계정이라면
        res.redirect('/select'); // select 페이지로 이동
    }
    else { // 로그인에 실패했다면
        console.log('login failed!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>"); // 경고창 띄우기, send 로 html 태그 값 전송
    }
})

module.exports = router;