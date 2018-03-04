import React from 'react'
import {Link} from 'react-router-dom'
//===========================================================
const BodyStyle={
    color: '#f7f3ff'
};

//===========================================================
class JobPost extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              clickedJob: false,

          };
      }
      handleClick(e) {

          this.setState({
              clickedJob: !this.state.clickedJob
          });
      }
    render() {
        return (

            <div class="well" style={BodyStyle} >
                <div style={TextStyle}>
                <p style={pStyle}>{this.props.header}</p>

                    <div >
                        <Link to='\'  onClick={this.handleClick.bind(this)}>
                            <p style={pStyle}>{this.props.body}</p>
                        </Link>

                    </div>
                    {this.state.clickedJob ? <MoreDidtels type={this.props.JobDescription}/> : null}

                    <p style={pStyle}>{this.props.footer}</p>

                </div>

            </div>

        )
    }
}

export  {JobPost};
//====================================
function MoreDidtels (JobDescription){
    return(
        <div  style={{paddingLeft:'8px',backgroundColor:'#fffdf5',}} >
            {/*{this.props.type=='PermissionForeign' ? <ButtonFriend/> : null}*/}
            <p style={pStyle}> wsvwvwvewvewv
                eeefffffffffffffffffff
                eeeeeeeeeeeefveve
                veveveeeeeeeee1</p>
            <p style={pStyle}> wsvwvwvewvewv
                eeeffffffffffffxxksdj
                eeeeeeeeeeeefveve
                veveveeeeeeeee1</p>

            <p style={pStyle}>{JobDescription.type}</p>

        </div>
    );
}
//==================================color:'#000000',
const pStyle={
    color:'#000000',

};
//==================================
const TextStyle={
   //backgroundColor:'#fffdf5',
};

const arrow={

    position:' absolute',
left: '50%',
top: '-8px',
width: 0,
height: 0,
content: '',
borderLeft: '20px', solid :'transparent',
borderRight: '20px', solid :'transparent',
borderBottom: '20px' ,solid: '#000000'    //backgroundColor:'#fffdf5',
};
//========================
