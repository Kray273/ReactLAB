import React from "react";

class GreetingClass extends React.Component {
  render(){
    let index = parseInt(Math.random() * 3);
    let insa;

    if (index == 0) {
      insa = "오늘도 즐거운 하루 되세요";
    } else if (index == 1) {
      insa = "안녕하세요 리액트";
    } else {
      insa = "오늘날씨 어때요";
    }

    const welcome = (ev)=>{
      alert(ev.target.value);
      ev.target.value = 'Nope!';
    }

    return (<input type="button" value='Hello' onClick={welcome}/>)
  }
}
export default GreetingClass;
