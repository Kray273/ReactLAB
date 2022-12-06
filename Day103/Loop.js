import React from "react";  
class Loop extends React.Component{
    state = {};
    /* 배열을 받기 위해서 userList는 TotalUserInform에 선언
    constructor(props){
        super(props);
        this.userList = 
        [{id:'sba1', pw:'sba1', name:'김동길', age: 20},
        {id:'sba2', pw:'sba2', name:'동길김', age: 25},
        {id:'sba3', pw:'sba3', name:'길동길', age: 30},
        {id:'sba4', pw:'sba4', name:'김길동', age: 35},
        {id:'sba5', pw:'sba5', name:'동김길', age: 40}];
        
    } //constructor
    */

    /*  loop사용_<li>를 문자로 인식하는 문제가 있다.
    render(){
        const loop = ()=>{
            let result = '';
            for(var i = 0; i < this.userList.length; i++){
                result +=  "<li>" + this.userList[i].id +","+ this.userList[i].name
                + this.userList[i].age + "</li>";
            };//for
            return result;
        };//loop
        
        const outerresult = loop();
        return(<div>
            <ol>{outerresult}</ol>
            </div>);//return
        }//rander
    */
   
    //map 사용
    render(){
        const loop = this.props.userList.map(
            (oneUser, index) =>{
                return (<li key={index}>{oneUser.id} : {oneUser.name} : {oneUser.age}</li>);
            }//funtion
            
        );//loop
        
        return (<ul>{loop}</ul>);
    };//render
}//class

class UserInform extends React.Component{
    state={}
    constructor(props){
        super(props);
        this.state = {id : "입력 전", pw : "입력 전", 
                    name : '입력 전', age : '입력 전'};
    }//constructor

    changeHandler = (e) =>{ //event의 매개변수를 지정.
        if(e.target.id == 'id'){this.setState({id : e.target.value});}
        else if(e.target.id == 'pw'){this.setState({pw : e.target.value});}
        else if(e.target.id == 'name'){this.setState({name : e.target.value});}
        else if(e.target.id == 'age'){this.setState({age : e.target.value});}

    }// changeHandler

    addUserHandler = () =>{
        // 클라이언트 화면의 값을 한번에 변경하기 위한 매서드.
        // this.setState({resultId : this.state.id, resultPw : this.state.pw, resultName : this.state.name, resultAge : this.state.age});
        
        // addUserHandler로 값이 전달 되었다면 props로 addUser함수 전달. 
        this.props.addUser({id : this.state.id, pw : this.state.pw, name : this.state.name, age : this.state.age})
    } // addUserHandler


    render(){
        return(<div>
            아이디 입력 : <input type="text" id="id" name="id"
            placeholder="아이디 입력" onChange={this.changeHandler}/> <br/>
            암호 입력 : <input type="password" id="pw" name="pw"
            placeholder="암호 입력" onChange={this.changeHandler}/> <br/>
            이름 입력 : <input type="text" id="name" name="name"
            placeholder="아이디 입력" onChange={this.changeHandler}/> <br/>
            나이 입력 : <input type="text" id="age" name="age"
            placeholder="아이디 입력" onChange={this.changeHandler}/> <br/>
            
            <button id="userinsertbtn" onClick={this.addUserHandler}>회원가입 버튼</button><br/>
            {/* <h6>입력 결과 - {this.state.resultId} : {this.state.resultPw} : {this.state.resultName} : {this.state.resultAge}</h6> */}
            <h6>입력 결과 - {this.state.id} : {this.state.pw} : {this.state.name} : {this.state.age}</h6>
        </div>);//return
    }//render
} //class

class TotalUserInform extends React.Component{

    constructor(props){
        super(props);
         //회원정보배열! Loop에서 여기로 이동
            //this.userList = //userList는 render매서드 사용가능, 변수값 변경가는, 화면 랜더링 안됨. 
        this.state = {userList :  // 랜더링을 위해 userList를 state변수로 설정
             [{id:'sba1', pw:'sba1', name:'김동길', age: 20},
            {id:'sba2', pw:'sba2', name:'동길김', age: 25},
            {id:'sba3', pw:'sba3', name:'길동길', age: 30},
            {id:'sba4', pw:'sba4', name:'김길동', age: 35},
            {id:'sba5', pw:'sba5', name:'동김길', age: 40}]
        }; //state
    }
    //userList 변경가능, 변경시 화면 랜더링
    //userList 수정가능, this.setState(userList 수정....);
    addUser = (oneUser) =>{ //render 내부 선언시 const키워드 작성 + render함수 내부 호출위치의 this.제거
        this.state.userList.push(oneUser); //갯수 변경 즉, 정보변경
        this.setState({userList : this.state.userList}); // 바뀐 정보를 업데이트(값을 변경.)
    } //addUser

    render(){
        return(<div>
            <UserInform addUser={this.addUser}/>
            <Loop userList={this.state.userList}/>
            {/* Loop 내부 this.props.userList로 전달 받음.
                다시 변경을 원할 시 state변수로 선언하면됨.*/}
        </div>);//return
    }//render
}//class

export default Loop;
export {TotalUserInform};