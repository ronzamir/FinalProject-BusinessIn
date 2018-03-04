import React from 'react'
import { render } from 'react-dom';
import  ReactDOM  from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

// The Header creates links that can be used to navigate
// between routes.

const headerStyle = {

    backgroundColor: '#5F9EA0',

};
const Forget = {
    color: '#000000',
    padding: '1px',

};
//====================================
const inputstyle = {
    margin: '5px',
    padding: '5px'
};
//====================================
const HeaderTitleStyle = {
    color:'#e2dada'
};

//====================================
var HeaderSP = () => (
        <header >

            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                    </div>
                    <form class="form-inline  ">
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <div class="col-md-2"style={{marginTop:'4px'}} >
                            <a class="navbar-brand" href="#" style={HeaderTitleStyle}>Business-in</a>
                            </div>
                            <div class="form-group" class="col-md-2">
                                <div class="input-group" style={{marginTop:'10px'}}>
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input id="email" type="text" class="form-control" name="email"
                                           placeholder="Email"/>
                                </div>
                            </div>


                            <div class="form-group" class="col-md-2">
                                <div class="input-group" style={{marginTop:'10px'}}>
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <input id="password" type="password" class="form-control" name="password"
                                           placeholder="Password"/>
                                </div>
                            </div>


                            <div class="form-group"  class="col-md-2" style={{marginTop:'10px'}}>
                                <button type="button" class="btn btn-default" id="LogIn" onClick={handleLogIn}>Log in</button>
                            </div>

                            <div class="form-group"  class="col-md-2">
                                <a href="#" data-toggle="tooltip" data-placement="right"><h4>Forget
                                    Password?</h4></a>
                            </div>

                        </div>
                    </form>
                </div>
            </nav>
        </header>
)

export default HeaderSP

function handleLogIn(e){
    e.preventDefault();
    console.log('The link was clicked.');
    ReactDOM.render(
        element,
        document.getElementById('root')
    );

    render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ), document.getElementById('root'));

}


const element = (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);

/*
<header >
<form class="form-inline" action="/action_page.php"  >
    <div class="form-group" class="col-md-3">
    <h3> Business-in</h3>
</div>
<div class="form-group" class="col-md-2" >
    <div class="input-group" style={inputstyle}>
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="email" type="text" class="form-control" name="email" placeholder="Email"/>
        </div>
    </div>
    <div class="form-group" class="col-md-2"  >
        <div class="input-group" style={inputstyle}>
            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <input id="password" type="password" class="form-control" name="password"
                   placeholder="Password"/>
        </div>
        </div>
        <div class="form-group" class="col-md-1" style={inputstyle}>
            <button type="button"  class="btn btn-default" id="LogIn">Log in</button>
        </div>
        <div class="form-group" class="col-md-2">
        <a href="#"  data-toggle="tooltip" data-placement="right" style={Forget}><h4>Forget Password?</h4></a>
</div>
</form>
<br/>
<br/>
<br/>
</header>*/
