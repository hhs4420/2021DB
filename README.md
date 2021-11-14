# 2021DB
- 데이터베이스 설계

<br><br>

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:mskim1024/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/mskim1024/2021-02-database.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js 에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: 'tutorial', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnection: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

<br>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능학과|인공지능|12181111|

## 텍스트 강조

- **데이터베이스** 실습은 재미 있어요!

<br><br>
<br><br>

# 11주차 과제
- 3, 8, 10주차에 만든 DB 테이블 내용에 관해 설명하기

<br><br>

## 3주차 DB 테이블
Field|Type|Null|Key|Default|Extra|
---|---|---|---|---|---|
num|int|NO| |NULL| |
id|varchar(32)|NO| |NULL| |
name|varchar(32)|NO| |NULL| |
dep|varchar(32)|NO| |NULL| |
grade|varchar(32)|NO| |NULL| |
date|varchar(32)|NO| |NULL| |
email|varchar(32)|NO| |NULL| |

* STUDENT TABLE

1. 필드
    - NUM : 데이터가 저장된 행의 번호를 저장하는 field
    - ID : 학번을 저장하는 field
    - NAME : 이름을 저장하는 field
    - dep : 소속학과를 저장하는 field
    - grade : 학년을 저장하는 field
    - date : 입학 년,월,일을 저장하는 field
    - email : 학생의 email을 저장하는 field

2. Type
    - NUM TYPE : int, 행의 번호를 저장할 것이므로 정수형의 숫자만 필요하다.
    - ID : varchar(32), 학번은 보통 번호이지만 숫자가 길어질 수도 있어 varchar을 선택했다.
    - NAME : varchar(32), 이름은 문자이므로 가변길이 문자열을 저장할 수 있는 varchar을 선택하였다.
    - dep : varchar(32)
    - grade : varchar(32), INT로 했어도 괜찮았을 것 같다.
    - date : varchar(32), date 타입으로 했어도 괜찮았을 것 같다.
    - email : varchar(32)

<br><br>

## 8주차 DB 테이블

* Employee TABLE

Field|Type|Null|Key|Default|Extra|
---|---|---|---|---|---|
Fname|varchar(10)|NO| |NULL| |
Minit|char(1)|YES| |NULL| |
Lname|varchar(20)|NO| |NULL| |
Ssn|char(9)|NO|PRI|NULL| |
Bdate|date|YES| |NULL| |
Address|varchar(30)|YES| |NULL| |
Sex|char(1)|YES| |NULL| |
Salary|decimal(5,0)|YES| |NULL| |
Super_ssn|char(9)|YES| |NULL| |
Dno|int|NO|MUL|NULL| |

1. 필드
    - Fname : employee의 이름을 저장하는 field, 문자열이므로 varchar
    - Minit : 중간 이름의 약자를 저장하는 field, 1개의 문자만 사용하므로 char(1)
    - Lname : 성을 저장하는 field, 문자열이므로 varchar
    - Ssn : 사번을 저장하는 field, 사번은 숫자이지만 값이 클 수 있으므로 char로 선언
    - Bdate : 생일을 저장하는 field, 날짜를 저장할 수 있는 date 타입으로 선언
    - Address : 주소를 저장하는 field, 긴 문자열이므로 varchar(30)
    - Sex : 성별을 저장하는 field, M, F 로 구분 가능하므로 char(1)
    - Salary : 연봉을 저장하는 field, decimal(5) 는 -99999 ~ 99999 / (5,0) 은 소수점 자리 X
    - Super_ssn : 부서장의 사번을 저장하는 field, 사번이므로 char(9)
    - Dno : 소속된 부서 번호를 참조하는 field, 부서번호이므로 int

2. Key 및 참조
    - Ssn : Primary key, Department 테이블에서 참조되는 field
    - Dno : Department 테이블의 Dnumber 를 참조, foreign key

* Department TABLE

Field|Type|Null|Key|Default|Extra|
---|---|---|---|---|---|
Dname|varchar(15)|NO|UNI|NULL| |
Dnumber|int|NO|PRI|NULL| |
Mgr_ssn|char(9)|NO|MUL|NULL| |
Mgr_start_date|date|YES||NULL| |

1. 필드
    - Dname : Department의 이름을 저장하는 field, 문자열이므로 varchar
    - Dnumber : 부서 번호를 저장하는 field, 숫자이므로 int
    - Mgr_ssn : 부서 대표 employee 의 사번, char(9)
    - Mgr_start_date : 부서 시작 일자, 날짜를 저장할 수 있는 date 타입

2. Key 및 참조
    - Dname : 유니크 키
    - Dnumber : primary key, employee 테이블에서 참조한다.
    - Mgr_ssn : foreign key, employee 테이블의 pk 인 ssn 을 참조한다.

<br><br>

## 10주차 DB 테이블

* Employee TABLE

Field|Type|Null|Key|Default|Extra|
---|---|---|---|---|---|
Name|varchar(10)|NO| |NULL| |
Ssn|char(9)|NO|PRI|NULL| |
Bdate|date|NO| |NULL| |
Salary|decimal(5,0)|NO| |NULL| |


* Department TABLE

Field|Type|Null|Key|Default|Extra|
---|---|---|---|---|---|
Dname|varchar(15)|NO|UNI|NULL| |
Dnumber|int|NO|PRI|NULL| |

* user TABLE

Field|Type|Null|Key|Default|Extra|
---|---|---|---|---|---|
Id|varchar(20)|NO|PRI|NULL| |
Password|varchar(20)|NO||NULL| |
Role|varchar(5)|NO| |NULL| |

1. Employee Table
    - Name, Ssn, Bdate, Salary 필드를 만들어 주었습니다.
    - Salary 필드를 참고하여 삭제를 진행하므로 NULL 이 불가해야합니다.
2. Department Table
    - Dname, Dnumber 필드를 만들어 주었습니다.
    - Employee 테이블의 key를 참조하여 삭제할 수 있는 기능을 구현했다면 더 좋았을 것 같습니다.
3. user Table
    - 로그인 정보를 저장할 수 있는 Id, Password 필드와 역할을 저장하는 Role 필드를 추가해 주었습니다.
