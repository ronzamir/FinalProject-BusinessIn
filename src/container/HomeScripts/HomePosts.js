import React from 'react'
import Post from './Post'


//===========================================
class HomePost extends React.Component {
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
            <div >


                <div id="Posts">

                    <Post PostText="   On 26 December, the Honorary Consul for Ethiopia in Scotland, Professor John Struthers,
                    shared
                    an image on Twitter of himself and his wife Justina attending the Queen's garden party in
                    Edinburgh in July."/>


                    <Post PostText="שלום "/>


                    <Post PostText="   On 26 December, the Honorary Consul for Ethiopia in Scotland, Professor John Struthers,
                    shared
                    an image on Twitter of himself and his wife Justina attending the Queen's garden party in
                    Edinburgh in July."/>
                    <Post PostText="   On 26 December, the Honorary Consul for Ethiopia in Scotland, Professor John Struthers,
                    shared
                    an image on Twitter of himself and his wife Justina attending the Queen's garden party in
                    Edinburgh in July."/>
                    <Post PostText="   On 26 December, the Honorary Consul for Ethiopia in Scotland, Professor John Struthers,
                    shared
                    an image on Twitter of himself and his wife Justina attending the Queen's garden party in
                    Edinburgh in July."/>
                    <Post PostText="   On 26 December, the Honorary Consul for Ethiopia in Scotland, Professor John Struthers,
                    shared
                    an image on Twitter of himself and his wife Justina attending the Queen's garden party in
                    Edinburgh in July."/>

                </div>

            </div>

        )
    }
}

export default HomePost
//=======================================================
const Pstyle={
   // borderRadius: '15px',
padding:'1px',
    margin:'1px',

    border:'solid',
    backgroundColor:'#ffffff'
}