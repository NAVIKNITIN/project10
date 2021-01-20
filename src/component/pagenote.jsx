import React,{Component} from "react";
import {connect} from "react-redux";
import {createnote} from "../action/payload";
import Databasefetch from "./fetchdatabase";

class Pagenote extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            description:''
        }
    };
    Submit=(e)=>{
        e.preventDefault();
        let output = {
            title:this.state.title,
            description:this.state.description
        };
        // console.log(output);
        this.props.createnote(output);
        alert("thanks for feedback");
        this.setState({title:"",description:""});


    };
    render(){
        return(
            <React.Fragment>
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
                        <div className="col-md-6">
                            <Databasefetch {...this.props}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default connect(null,{createnote})(Pagenote);
