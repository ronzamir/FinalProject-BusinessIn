import React from 'react'
import HomePost from './HomeScripts/HomePosts'
import LeftBlock from './HomeScripts/LeftBlock'
import RightBlock from './HomeScripts/RightBlock'
import NewPost from './HomeScripts/PublishPost/NewPost'

//===========================================
class Home extends React.Component {
    /*  constructor(props) {
          super(props);
          this.state = {
              clickedHome: 'active', clickedJob: 'non',
              clickedMessages: 'non', clickedNotification: 'non'
          };
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
          };
      }*/
    render() {

        return (
            <div>
                <div style={Body}>
                    <h1  style={Body}>Get started on Business-in </h1>

                </div>
                <div id="container" class="col-md-11">
                    <div class="col-md-3 col-xs-12 " style={StickyStyle}>
                        <LeftBlock/>
                    </div>

                    <div class="col-md-6 col-xs-12">

                        <div id="header" style={headerstyle}>

                        </div>
                        <div>

                            <NewPost/>
                        </div>
                        <HomePost/>

                    </div>
                    <div class="col-xs-12 col-md-3" style={StickyStyle}>
                        <RightBlock/>
                    </div>
                </div>
            </div>
        )
    }
}

//===========================================================
export default Home
//=======================================================
const Body = {
    padding: '15px',
    paddingTop: '30px',
    color:'#fffdf5'
};
//===========================================================
const StickyStyle = {
    position: '-webkit-sticky',
    top: '60px',
    position: 'sticky'
};
//=======================================================
const PosStyle = {
    // position:' -webkit-sticky',
    position: 'sticky',
    // top: '10'
};
//============================
const headerstyle = {
    textAlign: 'center'

};