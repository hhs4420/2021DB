import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: '0000',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql = {
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    }, // getEmployee 함수는 employee 의 테이블 조회 기능
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);
        console.log(rows)
        return rows
    }, // getdepartment 함수는 department 의 테이블 조회 기능
}

// insert query
export const insertSql = {
    // data 라는 객체 타입의 파라미터에 입력할 정보를 받아서 query 문 생성
    setEmployee : async (data) => { // employee table insert, home.js 에서 data를 받는다.
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`; // insert를 하기 위한 data를 받는다.

            await promisePool.query(sql); // database 에 접근하여 query 문을 넘겨줌
    },

    setDepartment : async (data) => { // department table insert, home.js 에서 data를 받는다.
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`; // insert를 하기 위한 data를 받는다.

            await promisePool.query(sql);
    },
}

// update query
export const updateSql = { // data update
    updateEmployee : async (data) => {
        // where 조건을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set salary = "${data.Salary}" where Dno = "1"`; // Dno가 1인 사람의 salary를 변경
        await promisePool.query(sql);
    },
    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 0`; // Dnumber 가 0일 때 Dname 을 변경
        await promisePool.query(sql);
    },
}