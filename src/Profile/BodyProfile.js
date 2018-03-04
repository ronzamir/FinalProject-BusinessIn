import React from 'react'
import {Link} from 'react-router-dom'

class BodyProfile extends React.Component {
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

            <div style={BodyStyle}>
                <h1>Experience</h1>
                {this.props.type=='PermissionForeign' ? <ButtonOption/> : null}

                <hr/>
                <h1>Skills</h1>
                {this.props.type=='PermissionForeign' ? <ButtonOption/> : null}
                <hr/>
                <h1>From</h1>
                {this.props.type=='PermissionForeign' ? <ButtonOption/> : null}
                <hr/>
                <h1>Independent  / Employee</h1>
                {this.props.type=='PermissionForeign' ? <ButtonOption/> : null}
            </div>

        )
    }
}

//============================
function ButtonOption() {
    return (
        <div >
            <button class="btn btn-primary">Add</button>
            <button class="btn btn-primary">Edit</button>
    </div>)
}
////////////////////////=================
const BodyStyle = {
    // padding: '3px',
    // margin: '50px',
    // border:'solid',
    // backgroundColor: '72ff32',
    // color:'#72ff32'
};
//============================


export default BodyProfile
