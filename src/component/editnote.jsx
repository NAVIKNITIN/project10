
import React, { Component } from "react";
import { updatenote } from "../action/payload";
import {connect} from "react-redux";

import Databasefetch from "./fetchdatabase";
class NoteEdit extends Component{
    constructor(props){
        super(props);
        this.state={
            title:this.props.note.title,
            description:this.props.note.description
        }
    };
    Submit=(e)=>{
        e.preventDefault();
        let output = {
            title:this.state.title,
            description:this.state.description
        };
        // console.log(output);
        this.props.updatenote(this.props.match.params.id,output);
        alert("thanks for updating");
        this.setState({title:"",description:""});
        this.props.history.push("/");


    };

    render(){
        return(
            <React.Fragment>
                <h1>Update Note</h1>
                <hr/>
                <div className="container">
                <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={this.Submit}>
                                <div className="form-group">
                                    <input  
                                    type="text" placeholder="enter username" name="title" 
                                    className="form-control" value={this.state.title}
                                    onChange={(e)=>this.setState({title:e.target.value})}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <textarea type="text"
                                    name="description" value={this.state.description}
                                    className="form-control" placeholder="enter description"
                                    onChange={(e) =>this.setState({description:e.target.value})}>
                                    </textarea>
                                </div>
                                <button type="Submit" className="btn btn-primary" >Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
};
const mapStateToProps=(state,ownprops)=>{
    // console.log(state);
    console.log(ownprops);

    return {note:state.notes[ownprops.match.params.id]}

};


export default connect(mapStateToProps,{updatenote})(NoteEdit);
