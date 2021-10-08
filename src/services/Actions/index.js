import { INCREAMENT, DECREAMENT, MULTIPLICATION, DIVISION} from './../constants'
export const Inc = (num) => {
    return {
        type : INCREAMENT,
        payload : num
    }
}

export const Dec = () => {
    return {
        type : DECREAMENT
    }
}

export const Mult = (num) => {
    return {
        type : MULTIPLICATION,
        data : num
    }
}

export const Div = () => {
    return {
        type : DIVISION
    }
}
