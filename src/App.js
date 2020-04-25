import React,{useEffect , useState} from "react";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import JobSetting from "./components/JobSetting/JobSetting";
import HelpDesk from "./components/HelpDesk/HelpDesk";
import Tutorial from "./components/Tutorial/Tutorial";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import Candidates from "./components/Candidates/Candidates";
import AcceptJobSetting from "./components/AcceptJobSetting/AcceptJobSetting";
import RejectJobSetting from "./components/RejectJobSetting/RejectJobSetting";
import "./App.css";

import { connect } from 'react-redux';
import { handleAccept,handleReject} from './actions/accept_reject';

const App = () =>{

    return(
        <Router>
        <div className="App">
            <Navbar />
            <Switch>
            <Route path ="/" exact component={JobSetting}/>
            <Route path ="/acceptJob" exact component={AcceptJobSetting}/>
            <Route path ="/rejectJob" exact component={RejectJobSetting}/>
            <Route path ="/tutorial" exact component={Tutorial}/>
            <Route path ="/feedback" exact component={FeedbackForm}/>
            <Route path ="/helpDesk" exact component={HelpDesk}/>
            <Route path ="/candidates" exact component={Candidates}/>
            
            </Switch>
        </div>
        </Router>
    );
}

const mapStateToProps = state => ({
    rejectValues: state.acceptReject.parametersReject
  });
  export default connect(mapStateToProps, { handleAccept,handleReject })(App);
 

