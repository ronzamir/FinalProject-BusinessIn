import React from 'react'
import {Link} from 'react-router-dom'

class PostHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RegPost: false, ComPost: false, NewPost: false

        };
    }

    handleClick(e) {
        if (this.props.type == 'RegPost')
            this.setState({RegPost: true});
        else if (this.props.type == 'ComPost')
            this.setState({ComPost: true});


    }

    render() {
        return (

            <div>
                <div id="headerPost" style={HeaderStyle} className="col-md-12">
                    <div  className="col-md-10">the post soruce</div>
                    {this.props.type=='RegPost' ? <RegulerPostHeader/>   : null}
                     <TypePost type={this.props.type} />
                    {this.props.type=='ComPost' ? <CommentPostHeader/> : null}
                </div>

            </div>

        )
    }
}

//=================================
function TypePost(props) {//cehck the type of the post

    if(props.type=='RegPost')
    return (<hr />);
    return (null);
}

//=================================
const DropMenu = {
    color: 'black'
};
//==================================
const HeaderStyle = {
    padding: '1%',

};

function RegulerPostHeader() {

    return (
        <div className="dropdown" class="col-md-2">
            <div id="PostOption">
                <Link to='/' data-toggle="dropdown" style={DropMenu} >
                    <span className="glyphicon glyphicon-option-horizontal"></span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-right">
                    <li className="divider"></li>
                    <li><a href="Copy link">Copy link to the post</a></li>
                    <li className="divider"></li>
                    <li><a href="Hide post">Hide this post</a></li>
                    <li className="divider"></li>
                </ul>
            </div>
        </div>
    )

}

function CommentPostHeader() {

    return (
        <div className="dropdown" class="col-md-2">
            <div id="PostOption">
                <Link to='/' data-toggle="dropdown" style={DropMenu} >
                    <span className="glyphicon glyphicon-option-horizontal"></span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-right">
                    <li className="divider"></li>
                    <li><a href="Copy link">Copy link to the Comment</a></li>
                    <li className="divider"></li>
                    <li><a href="Hide post">Report</a></li>
                    <li className="divider"></li>
                </ul>
            </div>
        </div>
    )

}

//========================================


//=================================class="dropdown-menu dropdown-menu-right"
export default PostHeader

//==================================
