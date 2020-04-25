import React from 'react'
import "./FeedbackForm.css";
import "../../App.css";

//Feedback Form
export default function FeedbackForm() {
   const handleChange = input => e =>{
        this.setState({ [input]: e.target.value });
    }
    return (
       <React.Fragment>
           <div className="wrappers">
        <div className="containers">
          <div className="titles">Feedback Form</div>
          
          <div className="input-form">
            <div className="section-1">
              <div className="items">
                <label className="label text-left" onChange={handleChange}>What was the reason for your request?</label>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="section-2">
              <div className="items">
                <label className="label" onChange={handleChange}>Did you achieve your goal?</label>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="section-3">
              <div className="items">
                <label className="label" onChange={handleChange}>Do you have any suggestion to make our website better?</label>
                <textarea className="input" rows='4'></textarea>
              </div>
            </div>
          </div>
          
          <div className="btn">Submit</div>
          
        </div>
      </div>   
      <div className="sidebar">

</div>   
       </React.Fragment>
    )
}
