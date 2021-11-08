// 데이터베이스의 데이터 조회
// select.hbs 파일과 연동

import express from "express"; // router 사용 위해 express 선언
import { selectSql } from "../database/sql" // sql 파일의 selectsql 모듈 사용
// 중괄호는 사용자가 만든 모듈 사용 시 사용
const router = express.Router(); // router 기능 사용

router.get('/', async function(req, res) { // '/select' 를 '/' 로 축약해서 표현
    const employee = await selectSql.getEmployee(); // department 에 getdepartment 함수 값 저장

    res.render('select', { // select.hbs 파일을 불러오기
        title: '학생',
        employee
    }); // title, department 데이터 값 념겨주기
});

module.exports = router;