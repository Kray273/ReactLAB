import { useState } from "react";

function EventComponont2(p){
    //상속 받지 않은 state과 setState는 없다.
    // 대신 useState 라이브러리 호출
    const [value, setValue] = useState(0);
    //const [name, setName ] = useState(this.props.name); // 안됨 props는 class의 기능
    const [name, setName ] = useState(p.name); // 함수는 매개변수 사용

    const clickHandler = () =>{
        setValue(value + 1);
        setName("이벤트 처리중");
    } //clickHandler

    return(<div>
        <div>{value} - {name}</div>
        <button onClick={clickHandler}>클릭버튼</button>
        <div><h1>전달받은 name = {name}</h1></div>
        <div><h1>전달받은 name = {p.name}</h1></div>
    </div>); //return
}//function

export default EventComponont2;