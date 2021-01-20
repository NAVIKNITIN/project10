import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchnote,updatenote,deletenote} from "../action/payload";
import _ from "lodash";

class Databasefetch extends Component{

    componentDidMount(){
        this.props.fetchnote();
    }
    gotoeditnotepage = (id) => {
        this.props.history.push(`/${id}/edit`);
    };
    render(){
        if(!this.props.items ) {return <h4>Loading........</h4>}
        return(
            <React.Fragment>
                <div className="container" >
                {
                    _.map(this.props.items,(value,index)=>{
                        // console.log(value);
                        // console.log(index);

                        return(
                             
                            <div className="row" key={index}>
                                <div className="col-md-12">
                                    <div className="card text-left">
                                        <div className="card-body">
                                            <h3 className="card-title">name of the user: {value.title}</h3>
                                            <p className="card-text">{value.description}</p>
                                        </div>
                                        <div style={{display:"flex", justifyContent:"flex-end" , position:"relative",bottom:"30px"}}>
                                    <button type="button" className="btn btn-primary"
                                    style={{marginRight:"10px"}}
                                    onClick={()=>this.gotoeditnotepage(index)}
                                    >Update</button>


                                    <button type="button" className="btn btn-danger"
                                    style={{marginRight:"10px"}}
                                    onClick={()=>this.props.deletenote(index)}
                                    >delete</button>
                                   
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        
                        )
                    })
                }
                </div>
                
               
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state)=>{
    // console.log(state);
    return {items: state.notes}

};
export default connect(mapStateToProps,{fetchnote,updatenote,deletenote})(Databasefetch);