import { INCREAMENT, DECREAMENT} from './../constants'

const initialValue = 0;

const startCounting = (state = initialValue, action) => {
     switch (action.type){
         case INCREAMENT : 
            return state + action.payload;
         case DECREAMENT :
             return state-1;
        default :
            return state;
     }
}

export default startCounting;