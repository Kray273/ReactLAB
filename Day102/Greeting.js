function Greeting() {
  let index = parseInt(Math.random() * 3);
  //정수 0<= ? 10.0보다 작고

  //let index = 0;
  // 0 오늘도 즐거운 하루되세요
  // 1 안녕하세요 리액트
  // 2 오늘 날씨 어때요?

  let insa;

  if (index == 0) {
    insa = "오늘도 즐거운 하루 되세요";
  } else if (index == 1) {
    insa = "안녕하세요 리액트";
  } else {
    insa = "오늘날씨 어때요";
  }
  //let result = <h1>{insa}</h1>;
  //return result;
  
  //조건 삼항 연산자
  let insa1 = "오늘도 즐거운 하루 되세요";
  let insa2 = "안녕하세요 리액트";
  let insa3 = "오늘날씨 어때요";
  //JSX 조건 삼항 연산자
  return (
      index == 0 ? <h1>{index}{insa1}</h1> : 
      index == 1 ? <h1>{index}{insa2}</h1> : <h1>{index}{insa3}</h1>
  );

}
export default Greeting;
