import React from 'react'
import HeaderProfile from './HeaderProfile'
import BodyProfile from './BodyProfile'
//===========================================
//==================================
class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            InputVal: '', ButPostStyle: true
        };
    }

    handleChange(e) {


        // this.setState({ReplyStyle: inputReplyStyle});

    }

    handleInputChange(e) {
        this.setState({InputVal: e.target.value});
        if (e.target.value.length > 0) {
            this.setState({ButPostStyle: false});
        }
        else
            this.setState({ButPostStyle: true});
    }


    render() {
        return (
            <div>


                <div class="col-md-offset-1 ">
                    <div class=" col-md-10" style={headerStyle}>
                        <HeaderProfile type='PermissionForeign'/>

                    </div>

                    <div style={BodyStyle} class='col-md-10'>
                        <BodyProfile type='PermissionForeign'/>
                    </div>
                </div>
            </div>
        )
    }

}

export default UserProfile
//=========================================
const BodyStyle = {
    padding: '10px',
    margin: '10px',
    marginLeft: '40px',

    backgroundColor: '#fffdf5',
    color: '#000000'
};
//=========================================
const headerStyle = {

    padding: '10px',
    margin: '10px',
    marginLeft: '40px',
    marginTop: '90px',
    backgroundColor: 'white'


};