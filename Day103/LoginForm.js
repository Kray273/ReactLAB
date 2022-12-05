import React from "react";
class LoginFrom extends React.Component{
    state={}
    constructor(props){
        super(props);
        this.state = {id : "아직 입력 전", pw : "아직 설정 전", 
                    idresult : '', pwresult : ''};
    }//constructor

    changeHandler = (e) =>{
        //아이디 입력 중 발생 e.target.value
        if(e.target.id == 'id'){this.setState({id : e.target.value});} 
        //암호 입력 중 발생 e.target.value 
        else if(e.target.id == 'pw'){this.setState({pw : e.target.value});}
    }// changeHandler

    loginHandler = (e) =>{
        //alert(e.target.innerHTML) 결과 확인용.
        this.setState({idresult : this.state.id, pwresult : this.state.pw})
    } // loginHandler
    
    render(){
        return(<div>
            아이디 입력 : <input type="text" id="id" name="id"
            placeholder="아이디 입력" onChange={this.changeHandler}/> <br/>
            암호 입력 : <input type="password" id="pw" name="pw"
            placeholder="암호 입력" onChange={this.changeHandler}/> <br/>
            <button id="loginbtn" onClick={this.loginHandler}>로그인 버튼</button><br/>
            <h6>로그인 아이디와 암호 입력 결과 - {this.state.idresult} , {this.state.pwresult}</h6>
        </div>);//return
    }//render
}//class

export default LoginFrom;