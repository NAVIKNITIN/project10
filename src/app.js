import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './component/login';
import Navbar from './component/navigation';
import Pagenote from './component/pagenote';
import NoteEdit from "./component/editnote";

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Pagenote}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/pagenote" exact component={Pagenote}/>
                    <Route path="/:id/edit" exact component={NoteEdit}/>
                </Switch>
            </React.Fragment>
            
        )
    }
};
export default App;
