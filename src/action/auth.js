import {googleprovider} from "../firebase";
import firebase from "firebase/app";
import "firebase/auth";
import {history} from "../history";


export const googleauth=()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleprovider)
        .then(()=>{
            history.push("/");
            window.location.reload();

        })

    }
};
