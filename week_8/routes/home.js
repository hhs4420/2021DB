// 데이터베이스에서 삽입 기능 구현
// view 폴더의 home.hbs 파일과 연동
// home.hbs 에서 데이터를 넘길 때 받는 파일

import express from "express";
import { insertSql, selectSql } from "../database/sql"; // 삽입과 관련된 query 함수 불러오기
// sql 파일에서 insertsql, selectsql 모듈 사용

const router = express.Router(); // express 에서 router 기능 사용

// home.hbs 파일을 찾아서 웹브라우저에 뿌려주기
router.get('/', (req, res) => {
    res.render('home');
});

// 삽입 버튼을 눌렀을 때 처리하는 부분
// home.hbs 에서 값을 post 로 넘겨주기 때문에 home.js 에서도 post로 받는다.
router.post('/', (req, res) => {
    const vars = req.body; // home.hbs 에서 넘겨주는 데이터 저장
    const var_lenth = Object.keys(req.body).length; // 넘어오는 데이터의 개수

    if (var_lenth > 4) { // 데이터의 길이가 4보다 클 경우 (employee 데이터)
        const data = { // 데이터라는 객체에 값 저장
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };
        insertSql.setEmployee(data); // setemployee 함수에 data 넘겨줌
    }
    else { // 데이터의 길이가 4보다 작을 경우 (department data)
        const data = { // 데이터라는 객체에 값 저장
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data); // setdepartment 함수에 data 넘겨줌
    }
    res.redirect('/'); // 페이지 이동을 하지 않고 새로고침
})

module.exports = router;