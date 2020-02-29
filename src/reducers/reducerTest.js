import * as actions from '../action/action01';


const initialSatae = {
    number : 1      //  store(state)의 초기값 
}                   //  즉, page에서 맨 처음 나타나는 값이다.

export const change = (state = initialSatae, action) => {
    switch(action.type){
        case actions.BUTTON:
            return{
            // ...state,     //  case가 둘이상일 경우 그 이전 변경된 상태를 가져오기 위해 사용한다.  
            number : action.number,   
        };
        default:
            return state;
    }
};

export default change;


