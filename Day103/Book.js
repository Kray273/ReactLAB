import React from "react";
class BookHeading extends React.Component{
    //생성자 함수의 목적은 변수를 초기화, 추가, 수정 하기위한 용도 임으로 없어도 무방
    //constructor(props){super(props);}

    render(){

        return(<h1>제목은 = {this.props.title}</h1>);
    }
}

class BookBody extends React.Component{
    constructor(props){
        super(props);
        this.body = "내용 = " + this.props.body; //변수 수정
        this.price = "가격 = " + this.props.price + "원";
    }
    
    render(){
        return(<div>
            <hr/>
            <h1>{this.body}</h1>
            <h1>{this.price}</h1>
            <hr/>
            </div>
        );
    }
}

class Book extends React.Component{
    /*
    constructor(props){
        super(props);
        this.title = " 제목  = " + props.title;
    }
    render(){ 
        //const body = " 내용  = " + this.props.body
        //const price = " 내용  = " + this.props.price + "원"
        return(<div>
            <h1> 오늘 구입한 책목록</h1>
            <h3>{this.title}</h3>
            <h3>{body}</h3>
            <h3>{price}</h3>
            </div>);
            // const [title, body, price] = this.props //비구조화 문법 사용불가! 자식은 readonly
        }   
    */

    // props그대로 사용
    // this.props.title, this.props.body, this.props.price
    /* 
    render(){
        return(<div>
            <BookHeading title={this.props.title}/>
            <BookBody price={this.props.price*2} body = {this.props.body}/>
        </div>);
    }
    */
    //2. 비구조화 할당. 
    render(){
        const {title, body, price} = this.props;
        return(<div>
            <BookHeading title={title}/>
            <BookBody price={price} body = {body}/>
        </div>);
    }
}

export default Book;
/*
    오늘 구입한 책목록
    제목 = 리엑트
    내용 = 리엑트 이야기를 ...
    가격 =30000
*/