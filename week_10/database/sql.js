import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
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
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`);
        return rows
    }, // getUsers 함수는 user 의 테이블 조회 기능
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        return rows
    }, // getdepartment 함수는 department 의 테이블 조회 기능
}

// delete query
export const deleteSql = { // data delete
    // data 라는 객체 타입의 파라미터에 입력할 정보를 받아서 query 문 생성
    deleteEmployee : async (data) => { // department table delete, delete.js 에서 data를 받는다.
        console.log('deleteSql.deleteEmployee:', data.Salary); // 버튼을 눌렀을 때 Dnumber 값 확인
        const sql = `delete from employee where Salary=${data.Salary}`; // Dnumber 값을 확인하고 해당하는 행 삭제
        await promisePool.query(sql); // database 에 접근하여 query 문을 넘겨줌
    },
}