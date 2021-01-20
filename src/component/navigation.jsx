import React,{Component} from "react";
import {Link} from "react-router-dom";
class Navbar extends Component{
    render(){
        return(
            <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-dark  navbar-dark justify-content-between">
                <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="/pagenote">Home</Link>
                </li>
                </ul>
                <ul className="navbar-nav form-inline">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">signup</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">signout</Link>
                </li>
                </ul>
                
                
                
            </nav>
            </React.Fragment>
        )
    }
};
export default Navbar;
