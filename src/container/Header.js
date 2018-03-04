import React from 'react'
import {render} from 'react-dom';
import {Link} from 'react-router-dom'

//===========================================
class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            clickedHome: SetNavHome(), clickedJob: SetNavJob(),
            clickedMessages: SetNavMessages(), clickedNotification: SetNavNotification()
        };

        // if((window.location.href-'http://localhost:3000')=='Job'){
        //     this.setState = { clickedJob: 'active'};}
        //     else
        //     this.setState = { clickedJob: 'non'};}

       // if((window.location.href-'http://localhost:3000')=='Job'){
         //   this.state = { clickedJob: 'active'};}

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
        }
        else if (e.currentTarget.id == 'Job') {

            this.setState({
                clickedJob: 'active'
            });

        }
        else if (e.currentTarget.id == 'Messages') {
            this.setState({
                clickedMessages: 'active'
            });
        }
        else {
            this.setState({
                clickedNotification: 'active'
            });
        }
        ;

    }

    render() {
        return (

            <nav class="navbar navbar-default navbar-fixed-top ">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 container-fluid" style={NavbarColor}>


                    <div class="navbar-header" class="col-xs-10 col-sm-10 col-md-4 col-lg-3 ">
                        <span class="navbar-brand" id="toolbarTitle" style={toolBarTitle}>Business-in</span>

                        <div id="UserImg">
                            <Link to='/' data-toggle="dropdown" style={DropMenu}>
                                <span style={UserImgStyle} class="glyphicon glyphicon-user"></span>
                                <span style={TextUserImg}>My User</span>
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><Link to='/UserProfile' href="View Profile">View Profile</Link></li>
                                <li><a href="Setting">Setting</a></li>
                                <li class="divider"></li>
                                <li><a href="Log out">Log out</a></li>
                            </ul>
                        </div>

                    </div>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="col-sm-12 col-md-12 col-lg-9 ">
                        <div class="collapse navbar-collapse col-xs-12 col-sm-12  " id="myNavbar">

                            <Link to='/'>
                                <form class="navbar-form" role="search" class="col-xs-12 col-sm-12 col-md-4 col-lg-3 "
                                      style={ulstyle}>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search" name="q"/>
                                        <div class="input-group-btn">
                                            <button class="btn btn-default" type="submit"><i
                                                class="glyphicon glyphicon-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </Link>

                            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6" style={{ paddingLeft: '20px'}}>
                                <ul class="nav navbar-nav">

                                    <li  id="Home" class={this.state.clickedHome}
                                        onClick={this.handleClick.bind(this)}>
                                        <Link to='/Home' style={NavOptions}><span>Home </span>
                                            <div class="glyphicon glyphicon-home"></div>
                                        </Link>

                                    </li>
                                    <li id="Job" class={this.state.clickedJob} onClick={this.handleClick.bind(this)}>
                                        <Link to='/Job' style={NavOptions}> <span>Jobs </span>
                                            <div class="glyphicon glyphicon-briefcase"></div>
                                        </Link>
                                    </li>
                                    <li id='Messages' class={this.state.clickedMessages}
                                        onClick={this.handleClick.bind(this)}>
                                        <Link to='/Messages' style={NavOptions}><span>Messages </span>
                                            <div class="glyphicon glyphicon-envelope"></div>
                                        </Link>

                                    </li>
                                    <li id='Notification' class={this.state.clickedNotification}
                                        onClick={this.handleClick.bind(this)}>
                                        <Link to='/Notification' style={NavOptions}><span>Notification </span>
                                            <div class="glyphicon glyphicon-bell"></div>
                                        </Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        )

    }
}
//====================================
function SetNavJob() {
    if(window.location.href=='http://localhost:3000/Job')
            return'active';
             return 'non';
}
//====================================
function SetNavHome() {
    if(window.location.href=='http://localhost:3000/Home'||
        window.location.href=='http://localhost:3000')
        return'active';
    return 'non';
}
//====================================
function SetNavNotification() {
    if(window.location.href=='http://localhost:3000/Notification')
        return'active';
    return 'non';
}
//====================================
function SetNavMessages() {
    if(window.location.href=='http://localhost:3000/Messages')
        return'active';
    return 'non';
}
//======================================
const DropMenu = {
    color: 'white'
};
//======================================
const ulstyle = {
    padding: '6px',

};
//=======================================================
const toolBarTitle = {

    color: '#fffdf5'
};
//=======================================================
const NavOptions = {

    color: '#3f66ff'
};
//=======================================================
const NavbarColor = {

    backgroundColor: '#221f65',

};
//=======================================================
const UserImgStyle = {
    padding: '16px',


};
//=======================================================
const TextUserImg = {
    margin: '5x',

    padding: '5px'
};
//=======================================================
export default NavBar