// 데이터베이스의 데이터 수정 기능
// updateemployee.hbs, updatedepartment.hbs 와 연동

import express from "express";
import { selectSql, updateSql } from "../database/sql"; // 조회와 선택을 위해 selectsql, updatesql 모두 사용

const router = express.Router(); // router 사용

// 기존 입력 값 불러오기
router.get('/employee', async (req, res) => {
    const emp_res = await selectSql.getEmployee(); // employee data 값 emp_res 에 저장
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });
});

// 기존 입력 값 불러오기
router.get('/department', async (req, res) => {
    const dept_res = await selectSql.getDepartment(); // department data 값 dept_res 에 저장
    res.render('updateDepartment', {
        title2: "부서 테이블 갱신",
        dept_res
    });
});

//수정 버튼을 눌렀을 경우 update query 를 실행하며 조회 페이지로 이동
router.post('/employee', async (req, res) => {
    const vars = req.body;

    const data = {
        Salary: vars.salary
    }
    await updateSql.updateEmployee(data);

    res.redirect('/select');
});

//수정 버튼을 눌렀을 경우 update query 를 실행하며 조회 페이지로 이동
router.post('/department', async (req, res) => {
    const vars = req.body; // vars에 입력한 값 저장
    console.log(vars.dname);

    const data = {
        Dname: vars.dname
    } // data 객체에 변경한 dname 저장
    await updateSql.updateDepartment(data); // 변경된 data 값 update

    res.redirect('/select'); // localhost:3000/select
});

module.exports = router;