import React from 'react'
import {Link} from 'react-router-dom'

class HeaderProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PermissionUser: false, PermissionFrined: false, PermissionForeign: true

        };
    }

    handleClick(e) {
        if (this.props.type == 'PermissionUser')
            this.setState({PermissionUser: true});
        else if (this.props.type == 'PermissionFrined')
            this.setState({PermissionFrined: true});
        else if (this.props.type == 'PermissionForeign')
            this.setState({PermissionForeign: true});


    }

    render() {
        return (






                <div className="col-md-12" >
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-8">
                        <div style={ImgStyle}>
                        <img class="img-circle" src="./userDefImg.png"  alt="UserImg" width="15%" height="15%"/>

                        </div>
                        <h2>The User Name </h2>
                        <p className="glyphicon glyphicon-briefcase"> Where the user works</p>
                        <br/>
                        <p className="glyphicon glyphicon-map-marker"> Where does the user from </p>
                        {/*this.state.PermissionForeign ? <ButtonFriend/> : null*/}
                        {this.props.type=='PermissionForeign' ? <ButtonFriend/> : null}
                    </div>

                </div>




        )
    }
}

//=================================

//==================================
const ImgStyle = {
    paddingLeft: '10px',
};

//============================
function ButtonFriend() {
    return (<div style={ImgStyle}>
        <br/>
        <br/>
        <button type="button" class="btn btn-primary">Add Friend</button>
    </div>)
}

export default HeaderProfile
