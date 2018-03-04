import React from 'react'
import {Link} from 'react-router-dom'
import PostHeader from './PostHeader'
//==================================
const butStyle = {

    paddingLeft: '6%'
}

//==================================
class Commnet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            InputVal: '', ShowSend: false, ReplyStyle: inputStartStyle
        };
    }

    handleChange(e) {


        this.setState({ReplyStyle: inputReplyStyle});

    }

    handleInputChange(e) {
        this.setState({InputVal: e.target.value});
        if (e.target.value.length > 0) {
            this.setState({ShowSend: true});
        }
        else
            this.setState({ShowSend: false});
    }


    render() {
        return <div class="well">
            <div ref="header">
                <PostHeader type="ComPost"/>
            </div>
            <div ref="body">
                <p>hiiii</p>

            </div>
            <div id="footer">
                <Link to='/Home'>Like </Link>
                <Link to='/Home' onClick={this.handleChange.bind(this)}>
                    Reply
                </Link>
                <div style={ReplyStyle}>
                <input style={this.state.ReplyStyle}
                       type="text"
                       value={this.state.InputVal}
                       onChange={this.handleInputChange.bind(this)}
                       placeholder="Write a comment..."

                />
                {this.state.ShowSend ? <AddNewComment/> : null}
            </div>
            </div>
        </div>
    }

}

//=======================================

//======================================
function AddNewComment() {

    return (<button class="btn btn-info btn-sm">Send</button>);
}

//====================================
class Commnets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            InputVal: '', ShowSendBut: false
        };
    }

    handleChange(e) {
        this.setState({InputVal: e.target.value});
        if (e.target.value.length > 0) {
            this.setState({ShowSendBut: true});
        }
        else
            this.setState({ShowSendBut: false});
    }

    render() {
        return <div class="well">
            <div>
                <Commnet/>

            </div>
            <input
                type="text"
                value={this.state.comment}
                onChange={this.handleChange.bind(this)}
                placeholder="Write a comment..."

            />
            {this.state.ShowSendBut ? <AddNewComment/> : null}

        </div>
    }

}
//=================================
const ReplyStyle = {
   paddingTop:'10px'
}
//=================================
const inputReplyStyle = {
  // paddingBottom: '2%',

}
//=================================
const inputStartStyle = {
    visibility: 'hidden'
}
//=================================class="dropdown-menu dropdown-menu-right"
export default Commnets
