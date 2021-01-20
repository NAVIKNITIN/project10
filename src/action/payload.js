import {database} from "../firebase";
import { fetch_note_data } from "./type";


export const createnote=(data)=>{
    return  ()=>{
        database.push(data);

    }
};

export const fetchnote=(data)=>{
    return (dispatch)=>{
        database.on("value", snapshot=>{
            let payloaddata=snapshot.val();
            dispatch({type:fetch_note_data,payload:payloaddata})
        })
    }
};


export const updatenote = (id,data) =>{
    return (dispatch)=>{
        database.child(id).update(data);
    }
}; 

export const deletenote = (id) =>{
    return (dispatch)=>{
        database.child(id).remove();
    }
};


