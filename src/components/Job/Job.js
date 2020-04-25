import React,{Component} from 'react';
import "./Job.css";
import { connect } from 'react-redux';
import { handleAccept,handleReject } from '../../actions/accept_reject';

class Job extends Component {
    
    //Constructor
    constructor(props, context) {
      super(props, context);
      this.state = {
        status: "",
        count:[0,0,0,0,0,0],
        sum:0
      };
      console.log(this.props.count);
    }
    
    //Add Candidates
      addCandidate = () =>{
         // console.log(this.props.count[this.props.number-1]+1)
        //   console.log(this.props.count)
        //  var candidate={
        //      count:+this.props.count,
        //      number:+this.props.number
        //  }
        //  console.log(candidate.count[candidate.number-1]);
        // this.props.handleUp(candidate);
        
         alert("Candidate Added");
        this.setState({ sum: this.state.count[this.props.number-1]+1});
       this.setState({ count: this.state.count.splice(this.props.number-1,1,this.state.count[this.props.number-1]+1)});
        console.log(this.state.count);
      }
      //Rejecting Job
     onSubmitReject = () => {
      
        const parameterReject = {
         number:this.props.number,
         title:this.props.title,
         company:this.props.company,
         department:this.props.department,
         location:this.props.location,
         phone:this.props.phone,
         hours:this.props.hours,
         count:this.props.count,
         time:this.props.time,
         money:this.props.money
        }
        console.log(parameterReject);
        this.props.handleReject(parameterReject);

        this.setState({ status: "rejected" })

        alert("Job Rejected");
        
      }
  
      //Accepting Job
      onSubmitAccept = () => {
      
        const parameterAccept = {
         number:this.props.number,
         title:this.props.title,
         company:this.props.company,
         department:this.props.department,
         location:this.props.location,
         count:this.props.count,
         phone:this.props.phone,
         hours:this.props.hours,
         time:this.props.time,
         money:this.props.money
        }
        console.log(parameterAccept);
        this.props.handleAccept(parameterAccept);

        this.setState({ status: "accepted" })

        alert("Job Accepted");
        
      }
  

    render() {
      return (
        
        <React.Fragment>
             <div className="container">
        <div className="box">
        <div className="items">
        <button className="btn btn-default" type="button" onClick={this.onSubmitAccept}>Accept</button>
               </div>
            <div className="content">
                <h2>{this.props.number}</h2>
               <h3>{this.props.title}</h3>
                <h4>{this.props.company} , {this.props.department}<br />
                {this.props.location}</h4>
                 <hr />
                 <div className="timing">
                     <div className="item">
                   <i className="fa fa-address-card" aria-hidden="true"></i><span>{this.props.phone}</span>
                     </div>
                     <div className="item">
                    <i className="fa fa-suitcase" aria-hidden="true"></i><span>{this.props.hours}</span>
                     </div>
                 </div>
                 <div className="item">
                   <i className="fa fa-calendar-o" aria-hidden="true"></i><span>{this.props.time}</span>
                     </div>
                     <hr />
                     <div className="timing">
                     <div className="item">
                     <i className="fa fa-user" aria-hidden="true"></i><span>{this.state.sum} Candidates</span>
                     </div>
                     <div className="item">
                     <i className="fa fa-money" aria-hidden="true"></i><span>{this.props.money}</span>
                     </div>
                 </div>   

                 {/* Job Status */}
                 <div className="timing">
                 <div className="item">
                   <p> Status: {this.state.status} </p> 
                     </div>

                     {/* Reject Button */}
                     <div className="item">
                     <button onClick={this.onSubmitReject} >Reject</button>
                     </div>
                 </div>

                 {/* For Candidate component */}
                 <div className="val">
                  {this.props.value?<button className="btn btn-default" type="button" onClick={this.addCandidate}>{this.props.value}</button>
                  
                  :null}
                  </div>
               
            </div>
        </div>
    </div>
      
        </React.Fragment> 
      );
    }
  }
  
const mapStateToProps = state => ({
    rejectValues: state.acceptReject.parametersReject,
    acceptValues: state.acceptReject.parametersAccept,
    
     candid: state.acceptReject.candid
  });

  export default connect(mapStateToProps, { handleAccept,handleReject })(Job);
