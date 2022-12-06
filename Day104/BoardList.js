import React from "react";
class BoardHeading extends React.Component{
    //게시불 테이블 제목행 구성
    //번호 제목 작성자 조회수
    render(){
        return(<thead>
            <tr><th>번호</th><th>제목</th><th>작성자</th><th>조회수</th><th colSpan='2'>추가기능</th></tr>
            </thead>);//return
    }//render
}// C.BoardHeading

class Board extends React.Component{
    //BoardList 내부 게시물 5개 배열 테이블 내부 출력
    constructor(props){
        super(props);
        this.state = {seq:"", title:'', writer : "", viewcount : 0};
    }//constructor
    
    deleteHendler = (ev) =>{
        //삭제버튼 클릭한 게시물이 몇번째인지 알아온다.
        this.props.deleteBoard(ev.target.id); //부모처리 함수에 전달.
    }//deleteHendler
    
    updateHendler = (ev) =>{
        this.props.updateBoard({seq : ev.target.id, title : '수정할 제목',
                                writer : '수정할 작성자', viewcount : -1});
    }//updateHendler

    // 단, 출력시 현재 viewcount 1 증가. 
    render(){
        const loop = this.props.body.map(
            (oneBoard, index) =>{
                return (
                    <tr key={oneBoard.seq}>
                        <td>{oneBoard.seq}</td>
                        <td>{oneBoard.title}</td>
                        <td>{oneBoard.writer}</td>
                        <td>{oneBoard.viewcount+1}</td>
                        <td><button id={index} onClick = {this.deleteHendler}>삭제</button></td>
                        <td><button id={oneBoard.seq} onClick = {this.updateHendler}>수정</button></td>
                    </tr>
                );//return
            });//loop
            return(<tbody>{loop}</tbody>)
        }//render
}// C.Board
    
class BoradInsertForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {seq: this.props.size, title:'', writer : '', viewcount : 0}
    }//constructor
        
    changeHandler = (ev) => {
        //if(ev.target.id == "title"){this.setState({title : ev.target.value})};
        //if(ev.target.id == "writer"){this.setState({writer : ev.target.value})};
        //this.setSate(title : ? , writer : ?)
        this.setState({[ev.target.id] : ev.target.value}) //비구조화할당 문법
    }//changeHandler
        
    // 제목값, 작성자 값 전달 받아서 글추가 버튼 클릭시 props.addBoard(전달)
    // 단, 번호는 게시물 리스트 갯수 + 1 , 조회수 0 인 게시물 1개 객체 생성
    insertHandler = () => {
        this.setState({seq : this.props.size + 1});
        this.props.addBoard(
            {seq : this.state.seq, title : this.state.title,
            writer : this.state.writer, viewcount : this.state.viewcount -1}
        );//addBoard
    }//insertHandler
            
    render(){    
        // 제목 : 입력창
        // 작성자 : 입력창
        // 글추가 버튼
        return(<div>
            <label for="title">제목 : </label>
            <input type="text" id="title" name="title" placeholder="제목입력" onChange={this.changeHandler}/><br/>
            <label for="writer">작성자 : </label>
            <input type="text" id="writer" name="writer"placeholder="작성자입력" onChange={this.changeHandler}/><br/>
            <button id="boardinsertbtn" onClick = {this.insertHandler} >글 추가</button>
            </div>);//return
        }//render
    }// c.BoradInsertForm
    
class BoardList extends React.Component{
    constructor(props){
        super(props);
        //현재 생성자 함수에서만 사용?, render도, 값 변경기 랜더링 필요 
        this.state ={ boardList :
            [{seq:1, title:'제목1', writer : "작성자1", viewcount : 1},
            {seq:2, title:'제목2', writer : "작성자2", viewcount : 10},
            {seq:3, title:'제목3', writer : "작성자3", viewcount : 5},
            {seq:4, title:'제목4', writer : "작성자4", viewcount : 123},
            {seq:5, title:'제목5', writer : "작성자5", viewcount : 0}]}//state
    }//constructor

    //addBoard구현
    addBoard = (newBoard) =>{//1. 입력된 게시물 1개 전달
        //2. 1번 전달 게시물 게시물 리스트에 추가
        this.state.boardList.push(newBoard);
        //3. state 게시물리스트값 변경
        this.setState({boardList : this.state.boardList});
    }//addBoard
    
    deleteBoard = (index) =>{//1. 삭제된 게시물의 index 1개 전달
        //2. props로 받은 게시물을 게시물 리스트에서 삭제 
        //this.state.boardList.splice(순서 0~, 삭제할 갯수);
        this.state.boardList.splice(index,1);
        //push(배열갯수 변화), map, filter, splice(배열갯수 변화)가 발생
        
        //3. state 게시물리스트값 변경
        this.setState({boardList : this.state.boardList})//화면 리렌더링
    } //deleteBoard
    
    updateBoard = (updateBoard) => {
        // state에게 알려준다.
        this.setState({boardList : this.state.boardList.map(
            (oneBoard) =>{
                //배열에서 반복하면서 수정클릭게시물 seq와 배열내 게시물들의 seq비교
                // 수정클릭게시물 seq와 일치하는 게시물 찾았다.
                // 찾은 게시물 수정입력(제목, 작성자)게시물 내용 변경한다.
                //updateBoard.seq == oneBoard.seq? 일치수행 : 불일치 수행 
                return updateBoard.seq == oneBoard.seq? updateBoard : oneBoard; 
            })//map
        });//setState

    
    } //updateBoard

    render(){ 
        return (<div>
            <table border='3'>
            <BoardHeading />
            <Board body={this.state.boardList} 
                deleteBoard = {this.deleteBoard}
                updateBoard = {this.updateBoard}/>
            </table>
            <br/><hr/><br/>
            <BoradInsertForm addBoard = {this.addBoard} size={this.state.boardList.length}/>
            </div>); //return
        }//render
}// C.BoardList

export default BoardList;