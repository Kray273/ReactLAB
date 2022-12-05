//1. Calc 함수 정의
function Calc(param){ // <Calc su1="10" su2="20" /> 리엑트 component
    //param 객체 = {su1 : "10", su2 : "20"};
    //2. 변수 설정
    let su1 = parseInt(param.su1);
    let su2 = parseInt(param.su2);
    let op_list = ["+",'-','*','/'];
    
    //3. 전체 중앙 정렬 후 출력
    let centerStyle = {textAlign : "center"};
        // 10 + 20 = 30(배경색 오랜지)
        let color1 = {color : 'orange'}; 
        // 10 - 20 = -10(배경색 ?)
        let color2 = {color : 'gray'}; 
        // 10 * 20 = 200(배경색 ?)
        let color3 = {color : 'blue'}; 
        // 10 / 20 = 0.5(배경색 ?)
        let color4 = {color : 'yellow'};

    return (<div style={centerStyle}>
        <h3 style={color1}>{su1} + {su2} = {su1 + su2}</h3>
        <h3 style={color2}>{su1} - {su2} = {su1 - su2}</h3>
        <h3 style={color3}>{su1} / {su2} = {su1 / su2}</h3>
        <h3 style={color4}>{su1} * {su2} = {su1 * su2}</h3>
    </div>);

}

//4. 외부 파일에는 Calcuator저장
export default Calc;

