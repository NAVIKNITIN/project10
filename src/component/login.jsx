import React from "react";
import {connect} from "react-redux";
import {googleauth} from "../action/auth";


const Login =(props)=>{
    return(
        <React.Fragment>
            <div className="jumbotron container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Login Page</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-outline-danger"
                            onClick={()=>props.googleauth()}
                            >
                                GOOGLE  AUTHENTICATION

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default connect(null,{googleauth})(Login);
