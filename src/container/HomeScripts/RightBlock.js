import React from 'react'


//===========================================
class RightBlock extends React.Component {
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

            <div id="container">

                <div id="header" style={headerstyle}>

                </div>

                <div id="Posts" >

                    <div class="well">
                        <p><a href="#">User Info</a></p>
                        <p>
                            <span className="label label-default">News</span>



                        </p>
                    </div>
                    <div className="well">
                        <p><a href="#">User Info</a></p>
                        <p>
                            <span class="label label-default">News</span>




                        </p>
                    </div>


                </div>
            </div>

        )
    }
}

export default RightBlock
//=======================================================
const headerstyle = {
    textAlign: 'center'
};
