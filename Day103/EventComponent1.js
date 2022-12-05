import React from "react";
class EventComponont1 extends React.Component{
    //state.value = 0;
    // state객체와 setState함수 자동포함(무슨역할)/ 재정의 가능
    state = {value : 0, name : this.props.name};
    /*
    clickHandler(){ 
        this.setState({value : this.state.value +1, name : "이벤트 처리 중" });
        //여기서 this는 clickHandler가 아닌 호출하는 button을 의미한다. this의 모호함...
        //component안에서 함수 사용은 화살표 함수를 사용하는 것을 추천.
    }; //클래스 매서드 + 유명함수
    */
    /*
    */
    clickHandler = ()=>{
        this.setState({value : this.state.value +1, name : "이벤트 처리 중" });
    }; //클래스 매서드 + 화살표함수.

    render(){
        /* 이벤트 처리는 render안에 이벤트 함수로 사용하는 것을 추천.
        const clickHader = () =>{ //랜더함수의 지역함수 + 화살표 함수
            this.setState({value : this.state.value +1, name : "이벤트 처리 중" });//setState는 state의 변수를 변경하는 함수
            // state setter용도라고 생각하면 됨!
            //this.value = this.value + 1; 메모리의 값은 올랐지만 화면 표시는 되지 않음.
            //alert(++this.value); 

            //alert(this.state.value); //this.state.value  읽기만 하는 getter용도
        }
        */
        return(<div>
            <div>{this.state.value} - {this.state.name}</div>
            <button onClick={this.clickHandler}>클릭버튼</button>
            <div><h1>전달받은 name = {this.props.name}</h1></div>
            <div><h1>전달받은 name = {this.state.name}</h1></div>
        </div>); //return
    }//render
}// class

export default EventComponont1;