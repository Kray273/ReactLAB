import React from "react"; //import는 항상 위에! 

function A() {
    const i = 10;
    //반복문  조건문 등 실행문 작성
    return (<div><h1>A함수구조로 정의된 컴포넌트입니다.</h1></div>);
}

const B = ()=>{
    return (<div><h1>B함수구조로 정의된 컴포넌트입니다.</h1></div>);
}

class C extends React.Component {
    //상속으로 인해 자동 포함되는 매소드를 재정의 하는 매소드
        // - constructor(props) : <C /> 생성시 호출, 초기변수 정의
        // - render() : 화면 랜더링시 호출, 요소 정의, 매개변수 없음.
        render(){
            return (<div><h1>C클래스로 정의된 컴포넌트입니다.</h1></div>);
        }
        
}

export default A;
export {B};
export {C};