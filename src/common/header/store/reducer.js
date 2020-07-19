import { constants } from './index'

const defaultState = {
    focus:false
}

export default (state = defaultState,action) => {
    if(action.type === constants.HANDEL_FOCUS){
        return {
            focus:true
        }
    }
    if(action.type === constants.HANDEL_BLUR){
        return{
            focus:false
        }
    }
    return state;
}