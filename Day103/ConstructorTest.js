import React from "react";
class ConstructorTest extends React.Component{ // 자식객체! 
    //클래스 구조 정의를 해야 매소드 자동 재정의.
    //상속으로 인해 자동 포함되는 매소드를 재정의 하는 매소드
    
    tiile = "제목's";// 이곳에 선언되면 전역변수
    
    // - constructor(props) : <C /> 생성시 호출, 초기변수 정의
    constructor(props){ 
        //props는 호출하고 있는 다른 외부파일에서 전달 저장 용도의 변수
        //props는 객체형식 props = {writer : "작성자's", , , , ,};
        super(props); //부모객체의 생성자 호출 :  super
        // constructor함수의 첫문장은 super(props);
        
        console.log("1. 생성자함수 호출");
        //tiile = "제목's";// 이곳에 선언되면 error_지역변수
        this.contents = "내용's"; //현재객체의 모든 함수에서 사용가능
        this.list = {a:100, b:"비"}; // {}는 리터럴 표현식
        this.list2 = [1,2,3,4] // 배열, 함수 모두 가능!
        
        console.log(props.writer)   //호출 다른 외부파일에서 전달 받자!;
    }
    
    // - render() : 화면 랜더링시 호출, 요소 정의, 매개변수 없음.
    render(){
        console.log("2. 랜더함수 호출");
        //props는 단방향 부모->자식(즉, 수정불가)
        //this.props.writer = "수정됨?" // 수정불가 단방향.
        //render에서는 return문이 있어야한다. 
        return(<div>
                <h1>{this.tiile} : {this.contents} : {this.props.writer}</h1>
            </div>);
        }
    
}
export default ConstructorTest; 