import React from 'react'
import {Link} from 'react-router-dom'

const Messages = () => (
    <div style={HeaderStyle}>
        <div class="well" style={BodyStyle}>
            <div style={TextStyle}>


                <div className="dropdown" style={{float: 'right'}}>

                    <Link to='/' data-toggle="dropdown">
                        <span className="glyphicon glyphicon-option-horizontal"></span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-right">

                        <li><a href="delete link">delete this Notification</a></li>

                    </ul>

                </div>

                <p style={pStyle}>user info</p>
                <hr/>
            </div>

            <div style={TextStyle}>

                <p style={pStyle}>Message</p>
                <hr/>
            </div>

            <div style={TextStyle}>

                <p style={pStyle}>Reply</p>

            </div>


        </div>
    </div>
);

export default Messages
//=================================c
const BodyStyle = {
    color: '#f7f3ff',
    margin: '20px',
    padding: '30px'
};

const HeaderStyle = {

    marginTop: '140px'
};
//==================================color:'#000000',
const pStyle = {
    color: '#000000',

};
//==================================
const TextStyle = {
    //backgroundColor:'#fffdf5',
};