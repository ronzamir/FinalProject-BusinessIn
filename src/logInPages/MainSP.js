import React from 'react'

const PageBody = {
    margin: '10px',
};
const registerStyle = {
    margin: '20px',


};
const TextColor = {

    color: '#000000',

};

var MainSP = () => (
    <div style={PageBody}>
        <div id="register" class="col-md-6" style={registerStyle}>
            <div id="RegisterTitle">
                <h3>Register for a better life</h3>
            </div>

            <form id="registerForm" style={TextColor}>

                <div class="form-group" class="col-md-5">
                    <label for="text">First name:</label>
                    <input type="text" class="form-control" id="FirstName" placeholder="First name"
                           name="first name"/>
                </div>
                <div class="form-group" class="col-md-5">
                    <label for="text">Last name:</label>
                    <input type="text" class="form-control" id="LasttName" placeholder="Last name"
                           name="Last name"/>
                </div>

                <div class="form-group" class="col-md-10">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                </div>
                <div class="form-group" class="col-md-10">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                </div>
                <div class="radio" class="col-md-3">
                    <label><input type="radio" name="Male"/>Male</label>
                </div>
                <div class="radio" class="col-md-9">
                    <label><input type="radio" name="Female"/>Female</label>
                </div>
                <div class="col-md-4">
                    <button type="button" class="btn btn-primary" id="New-user" onClick={handleLogNewUser}>create user
                    </button>
                </div>

            </form>
        </div>
        <div >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <img  src="..\handshake.png" alt="handshake image"/>
        </div>
    </div>
)

export default MainSP

//=============================================
function handleLogNewUser(e) {

}

//=============================================