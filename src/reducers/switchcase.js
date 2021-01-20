import { fetch_note_data } from "../action/type";

const notereducer = (state=null, action) =>{
    switch(action.type){
        case fetch_note_data:
            return action.payload;
            default:
                return state;

    }
};
export default notereducer;
