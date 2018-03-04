import React from 'react'


//===========================================
class LeftBlock extends React.Component {
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



                <div id="Posts" >

                    <div className="thumbnail">
                        <p><a href="#">Advertisements</a></p>
                        <p>

                            <span className="label label-default">News</span>

                        </p>
                    </div>

                </div>

            </div>

        )
    }
}

export default LeftBlock
//=======================================================
const headerstyle = {
    textAlign: 'center'

};
//=======================================================
