import React from 'react'
import {render} from 'react-dom';
import {JobPost} from './JobPost';
//===========================================
class JobBody extends React.Component {
    /*  constructor(props) {
          super(props);
          this.state = {
              clickedHome: 'active', clickedJob: 'non',
              clickedMessages: 'non', clickedNotification: 'non'
          };
      }
      handleClick(e) {
          this.setState({
              clickedHome: 'non', clickedJob: 'non', clickedMessages: 'non'
              , clickedNotification: 'non'
          });

          if (e.currentTarget.id == 'Home') {
              this.setState({
                  clickedHome: 'active'
              });
          };
      }*/


    render() {


        return (
            <div class="thumbnail col-md-12" style={BodyStyle}>
                <h2 style={HeaderStyle}>  Jobs you may be interested in</h2>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published '/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
                <div class="col-md-4">
                    <JobPost header='Job title' body='Job Description' footer='Date published' JobDescription='JobDescription'/>
                </div>
            </div>
        )
    }
}
//===========================================================
const BodyStyle={
    color: '#f7f3ff',
    margin:'20px',
    padding:'30px'
};
const HeaderStyle={
    color: '#000000',
    padding:'12px'
};
//===========================================================
export default JobBody