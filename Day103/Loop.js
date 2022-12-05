import React from "react";  
class Loop extends React.Component{
    state = {};
    constructor(props){
        super(props);
        /*
        this.userList = 
        [{id:'sba1', pw:'sba1', name:'김동길', age: 20},
        {id:'sba2', pw:'sba2', name:'동길김', age: 25},
        {id:'sba3', pw:'sba3', name:'길동길', age: 30},
        {id:'sba4', pw:'sba4', name:'김길동', age: 35},
        {id:'sba5', pw:'sba5', name:'동김길', age: 40}];
        */

    } //constructor

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
        /* 
        const loop = this.userList.map(
            (oneUser, index) =>{
                return (<li key={index}>{oneUser.id} : {oneUser.name} : {oneUser.age}</li>);
            }//funtion
            
        );//loop
        
        */
        return (<ol></ol>);
    };//render
}//class

class UserInform extends React.Component{
    state={}
    constructor(props){
        super(props);
        this.state = {rid : "입력 전", rpw : "입력 전", 
                    rname : '입력 전', rage : '입력 전'};
    }//constructor

    changeHandler = (e) =>{
        if(e.target.id == 'id'){this.setState({id : e.target.value});} 
        else if(e.target.id == 'pw'){this.setState({pw : e.target.value});}
        else if(e.target.id == 'name'){this.setState({name : e.target.value});}
        else if(e.target.id == 'age'){this.setState({age : e.target.value});}
    }// changeHandler

    loginHandler = (e) =>{
        this.setState({rid : this.state.id, rpw : this.state.pw, rname : this.state.name, rage : this.state.age})
    } // loginHandler


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
            
            <button id="userinsertbtn" onClick={this.loginHandler}>회원가입 버튼</button><br/>
            <h6>입력 결과 - {this.state.rid} : {this.state.rpw} : {this.state.rname} : {this.state.rage}</h6>
        </div>);//return
    }//render
} //class

class TotalUserInform extends React.Component{
    userList = 
    [{id:'sba1', pw:'sba1', name:'김동길', age: 20},
    {id:'sba2', pw:'sba2', name:'동길김', age: 25},
    {id:'sba3', pw:'sba3', name:'길동길', age: 30},
    {id:'sba4', pw:'sba4', name:'김길동', age: 35},
    {id:'sba5', pw:'sba5', name:'동김길', age: 40}];
    
    state = {};
    constructor(props){
        super(props);
        this.state = {id : "", pw : "", name : '', age : ''};
        
    }
    
    setHendler = (e) =>{
        alert(1);
        /*
        if(e.target.id == 'id'){this.setState({id : e.target.value});} 
        else if(e.target.id == 'pw'){this.setState({pw : e.target.value});}
        else if(e.target.id == 'name'){this.setState({name : e.target.value});}
        else if(e.target.id == 'age'){this.setState({age : e.target.value});}
        */
    }
    

    
    render(){
        return(<div>
            <UserInform />
            <Loop />
        </div>);//return
    }//render
}//class

export default Loop;
export {TotalUserInform};