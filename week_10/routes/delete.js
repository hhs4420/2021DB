// 데이터베이스의 데이터 삭제 기능

// delete.hbs 와 연동

import express from "express";
import { selectSql, deleteSql } from "../database/sql"; // 삭제와 선택을 위해 deletesql, updatesql 모두 사용

const router = express.Router(); // router 사용

// 기존 입력 값 불러오기
router.get('/', async (req, res) => { // /delete 주소에서 동작
    const employee = await selectSql.getEmployee(); // department data 값 저장
    res.render('delete', {
        title: "삭제 기능",
        employee
    });
});

//삭제 버튼을 눌렀을 경우 delete query 를 실행하며 db 에 넘겨줌
router.post('/', async (req, res) => { // /delete 주소에서 동작
    console.log('delete router:', req.body.delBtn);

    const data = {
        Salary: req.body.delBtn,
    }; // data 객체에 Dnumber 저장

    await deleteSql.deleteEmployee(data); // Dnumber 값에 따른 data 값 delete

    res.redirect('/delete'); // localhost:3000/delete
});

module.exports = router;