<문제 1>
콜스택 내에서 실행 컨택스트를 쌓아 올리는 것을 스택이라고 하며 가장 나중에 쌓인 실행 컨텍스트부터 실행되며 제거되는 것을 큐라고 한다.

<문제 2>
1. 전역 컨텍스트 
2. 함수 foo 에 대한 실행 컨텍스트
 - 레코드: num
3. 함수 foo2에 대한 실행 컨텍스트
 - 레코드: num, 함수 foo3, 함수 foo4 
4. 함수 foo4에 대한 실행 컨텍스트
 - 레코드: x
5. foo4의 실행 컨텍스트 제거
6. foo2의 실행 컨텍스트 제거
7. foo의 실행 컨텍스트 제거
8. 전역 컨텍스트 제거

-실행 결과: 함수블록 foo2에서 num이 선언만 되고 정의되지 않아 참조 오류 발생(TDZ)

< 문제 3 >
1. 전역 컨텍스트
2. 함수 boo에 대한 실행 컨텍스트
 - 레코드: 함수 boo2, num, 함수 boo3
3. 함수 boo2에 대한 실행 컨텍스트
 - 레코드: num
4. boo3에 대한 실행 컨텍스트
 - 레코드: x
5. boo3의 실행 컨텍스트 제거
6. boo2의 실행 컨텍스트 제거
7. boo의 실행 컨텍스트 제거
8. 전역 컨텍스트 제거

- 실행결과: 함수블록 boo2에서 num이 선언만 되고 정의되지 않아 참조 오류 발생(TDZ)

< 문제 4 >
1. 전역 컨텍스트 
2. 함수 bar에 대한 실행 컨텍스트 
 - 레코드: num, 함수 bar2 
3. 함수 bar2 에 대한 실행 컨텍스트
 - 레코드: num, 함수 bar3, 함수 bar4
4. 함수 bar4에 대한 실행 컨텍스트
 - 레코드: x
5. bar4의 실행 컨텍스트 제거
6. bar2의 실행 컨텍스트 제거
7. bar의 실행 컨텍스트 제거
8. 전역 컨텍스트 제거

- 실행 결과: bar2의 함수 블록 내에서 num이 선언만 되고 정의되지 않아 참조 오류 발생(TDZ)

< 문제 5 >
1. 전역 컨텍스트
2. 함수 bar에 대한 실행 컨텍스트
 - 레코드: bar2
3. 함수 bar2 에 대한 실행 컨텍스트
 - 레코드: if 블록, 함수 bar3, 함수 bar4
4. 함수 bar4에 대한 실행 컨텍스트
 - 레코드: x
5. bar4의 실행 컨텍스트 제거
6. bar2의 실행 컨텍스트 제거
7. bar의 실행 컨텍스트 제거
8. 전역 컨텍스트 제거

- 실행결과: 1, if 블록 내부의 num이 선언만 되고 정의되지 않아 참조 오류 발생(TDZ)