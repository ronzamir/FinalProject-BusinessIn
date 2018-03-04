import React from 'react'
import {Link} from 'react-router-dom'
import Commnets from './Comments'
//==================================
const butStyle = {

    paddingLeft: '6%'
}
//==================================
const ClickLikeStyle = {

    paddingLeft: '6%',
    color: 'blue'
}
//=====================================================================
class PostFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedLike: butStyle, clickedShare: 'def',
            showComments: false,
        };
    }

    handleClick(e) {

        if (e.currentTarget.id == 'Like') {
            if (this.state.clickedLike == 'def')
                this.setState({
                    clickedLike: ClickLikeStyle
                });
            else
                this.setState({
                    clickedLike: 'def'
                });
        };
    }

    //==================================
    handleClickLike(e) {

        if (this.state.clickedLike == butStyle)
            this.setState({
                clickedLike: ClickLikeStyle
            });
        else
            this.setState({
                clickedLike: butStyle
            });
    }



    handleClickComment(e) {
        this.setState({
            showComments: true
        });

    }

    render() {
        return (


            <div style={FooterStyle}>

                <hr/>

                <button  class="btn btn-default btn-sm   glyphicon glyphicon-thumbs-up"
                        style={this.state.clickedLike}
                        onClick={this.handleClickLike.bind(this)}> Like </button>


                <button  class="btn btn-default btn-sm  glyphicon glyphicon-comment" style={butStyle}
                        onClick={this.handleClickComment.bind(this)} >Comment  </button>

                <div className="dropdown" style={dropdownStyle}>
                        <Link to='/' data-toggle="dropdown">
                <button  class="btn btn-default btn-sm  glyphicon glyphicon-share-alt" style={butStyle}
                        onClick={this.handleClick.bind(this)} >
                    Share </button>
                        </Link>

                        <ul className="dropdown-menu dropdown-menu">
                            <li className="divider"></li>
                            <li><a href="Copy link">To your feed</a></li>
                            <li className="divider"></li>
                            <li><a href="Hide post">To frined</a></li>
                            <li className="divider"></li>
                        </ul>
                </div>


                {this.state.showComments ? <Commnets/> : null}


            </div>

        )
    }
}

//=================================
const dropdownStyle = {
    display:'inline-block',

};
//=================================
const DropMenu = {
    color: 'black',

};
//==================================
const FooterStyle = {
    //  marginBottom: '1%',
    //  padding:'1%'
};
//=================================class="dropdown-menu dropdown-menu-right"
export default PostFooter


