function Var(){
    let str1 = "리턴문테스트";
    let str2 = "이번에는 변수를 테스트해봅니다";
    let str3 = "logo512.png"
    return(
        <div>
            <h1>자바스크립트//여기는 JSX영역</h1>
            <h1>{str1}</h1>
            <p>{str2}</p>
            <img src={str3} alt="대체"/>
        </div>

    
    );
}


export default Var;
