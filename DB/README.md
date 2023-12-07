# 1. 데이터베이스란

"A database is an organized collection of dta, generally stored and accessed electronically from a computer system."
컴퓨터 파일 시스템에서 관련있는 거 끼리 모아놓는 것을 말합니다.
Oracle, MySQL, DynamoDB, mongoDB, postgreSQL => 데이터베이스

하나의 파일을 데이터베이스로 사용하면 유연성이 떨어지고 불편하고 시간도 오래걸리고 성능도 좋지 않아
이를 개선하고자 나온것이 데이터베이스 관리 시스템입니다.

데이터베이스는 데이터를 저장하고 복잡한 데이터를 읽어오는데 최적화, 안전하게 동시다발적으로 가져올 수 있고
대체적으로 우리 데이터를 좀 더 안전하고 빠르고 성능좋게 관리해주게 DBMS입니다.

DBMS를 두개로 나눌 수 있는데요.
SQL => RDBMS(관계형 데이터베이스)

1. 스키마(행, 열에 데이터를 넣습니다), 각각의 행에는 어떤 데이터 타입이 올 수있는 명시할 수 있습니다.
2. 각각의 데이터들이 관계를 맞을 수 있습니다. 한 사용자가 여러개의 코멘트를 가지고 있는거처럼
   구조적으로 질의 응답을 할 수 있는 언어 => Sturctured Query Language(Designed for managing data in relational databases)

NoSQL

1. 빅데이터 부상, json이라는 문서같은 타입을 데이터베이스에 저장할 수 있을까
2. 관계형 데이터베이스로만 표현하기에 문제 발생

- Key-Value 데이터베이스(자바스크립트의 object와 비슷= 스키마가 정해져있지않다)
- document 타입(폴더마다 연관된 데이터를 저장하는것과 같이 컬렉션 안에 연관된 문서를 저장해놓는 시스템)
- Wide-Column 테이블 안에 또다른 테이블이 있는 2차원적인 데이터베이스
- Graph

서로 해결하고자 하는 문제가 다르다.
어떤 용도로 어떤 목적에 맞게 사용하느냐에 따라 적절한 데이터베이스를 선택하도록 한다.

# 2. SQL 그 모든것

SQL Database is an organized collection of one or more Tables of rows and columns.

1. 여러가지 속성을 정의(Null, 자동 증가..등등)
2. 데이터 타입 정의
   = 스키마
   Data integrity(데이터 무결성)
   Data integrity is the maintenance of, and the assurance of, data accuracy and consistency over its entire life-cycle

# 3. NoSQL 그 모든것

MongoDB

- Document 데이터베이스
- 하나의 데이터는 json object처럼 object형태로 document로 관리할 수 있고
- 관련있는 document를 모아주는 collection이 있습니다.
- product이라는 하나의 collection이 있다면
- 제품이라는 하나의 폴더가 있는 것과 비슷합니다.
- 제품이라는 폴더 안에 제품마다 별도의 파일로 관리되고 있습니다.
- 제품 컬렉션, 유저 컬렉션으로 관리
- 제품과 유저는 서로 관련이 없으므로 서로 다른 클라우드에 관리할 수 있다.
- noSQL은 서로 관계가 없으므로 제품에 사용자 정보가 필요하다면 제품에 사용자 정보를 포함해서 관리하는 것을
  더 선호합니다.
- NoSQL은 스키마가 없습니다.
- 정보의 일관성을 가지기 위해 개발자가 코드상에서 해주어야하는 번거로움이 있습니다.
- Wide-Column(cassandra, cloud bigtable), grape(neo4j), document(mongoDB), key-value(redis, dynamoDB)

# 4. ORM과 ODM

- Object Relation Mapping
- 코드에 여러가지 Object가 있다면 이것을 데이터베이스에 저장하기 위해서 어떻게 오브젝트를 테이블로 변환할건지
  어떻게 스키마를 만들고 분할한건지 어떻게 데이터베이스에서 데이터를 읽어와서 object로 변환할건지 직접 고민하고 처리해야하지만 이런 번거로움을 해결하는 것이 ORM
- 코드상에서 작성한 Object를 자동으로 데이터베이스의 스키마를 만들고
- 자동으로 데이터를 읽어와서 코드로 변환해주기도 합니다.

데이터베이스, sql쿼리를 전혀 몰라도 코드상으로 해줄 수있도록 도와줍니다.
데이터베이스를 한단계감싸 추상화해서 편리하게 개발할 수 있도록 합니다.

비즈니스 로직에 초점을 둘 수 있다
반복되는 쿼리를 줄여준다.
데이터베이스 추상화 레벨이 들어가 각각 다른 운영체제에 상관없이 공통적으로 파일을 읽어올 수 있습니다.
스키마가 변경된다면 자동으로 처리해주는 마이그레이션도 처리해줍니다.

단점

- api만으로는 상세한 쿼리를 할 수 없습니다.
- 서로 다른 orm마다 api가 다르다.
- 모든 행의 데이터를 읽어와서 코드에서 필터링하므로 데이터베이스만을 사용했을 때의 빠른 성능 메모리의 최적화을 기대하기 어렵다.
- typeorm sequelize, prisma

ODM

- mongoose
  Object Document Mapper
- object를 document로 매핑해줍니다.
  이들의 공통점은 실제 데이터베이스를 읽고쓰는법을 몰라도 한단계 추상화된 편리한 api를 제공하여
  그 api를 통해 데이터베이스에 접근하여 데이터를 읽고 쓰고 할 수 있습니다.

# 5. SQL vs NOSQL 언제 어떤것을?
