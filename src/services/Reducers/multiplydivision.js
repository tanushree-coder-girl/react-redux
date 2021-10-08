import { MULTIPLICATION, DIVISION} from './../constants'

const initialValue = 1;

const multiplyAndDivide = (state = initialValue, action) => {
     switch (action.type){
         case MULTIPLICATION : 
            return state * action.data;
         case DIVISION :
             return state / 5;
        default :
            return state;
     }
}

export default multiplyAndDivide;