import React from "react";
class Employee  extends React.Component{ //React.Component 상속 표현
    render(){ // 리액트컴포넌트를 상속받아 렌더메소드를 오버라이드하다
        const clickHandler = () => {
            // 변수let 내용의 변경이 없으면 const
            //모든 JSX 태그의 속성이나 css속성명 2단어 결합 = 카멜법!
          alert("리액트클래스방식으로 정의되었습니다");
        }
        return(<div onClick={clickHandler} ><h1>테스트해보세요</h1></div>);
    }
}
export default Employee;