import React from 'react'
import axios from 'axios';
import PostHeader from '../PostHeader'
//==================================
//==================================
const butStyle = {

    paddingLeft: '6%'
}
//==================================
const ClickLikeStyle = {

    paddingLeft: '6%',
    color: 'blue'
}
//==================================
class NewPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            InputVal: '',ButPostStyle:true,
            clickedLike: butStyle,num:9
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
    PublishPost(e){



            // axios.get("/Home/NewPost/"+this.state.num)
            //     .then(res => res.json())
            //     .then( console.log(res))
    //             .then(this.setState({
    //                 comment:3333333335555555
    //             })
    //                 // res => res.json()
    // )
    //             .then(
    //                 (result) => {
    //                     this.setState({
    //
    //                         comment: 44444444444
    //
    //                     });
    //
    //                 },
    //                 // Note: it's important to handle errors here
    //                 // instead of a catch() block so that we don't swallow
    //                 // exceptions from actual bugs in components.
    //                 (error) => {
    //                     this.setState({
    //                         comment: 5555555555
    //                     });
    //                 }
    //             );
        }

        // if (this.state.clickedLike == butStyle)
        //     this.setState({
        //         clickedLike: ClickLikeStyle
        //     });
        // else
        //     this.setState({
        //         clickedLike: butStyle
        //     });


    render() {
        return( <div style={PostStyle}>
            <div >
                <PostHeader type="NewPost"/>
            </div>
            <div id='body' style={InputBoxStyle}>
                <input id='postCom'
                    type="text"
                    value={this.state.comment}
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Write here a post..."

                />

                <hr/>
                <p style={this.state.clickedLike}>ffffff</p>
                <button class="btn btn-primary btn-sm" disabled={this.state.ButPostStyle} onClick={this.PublishPost.bind(this)}> Post</button>

                <button style={ButStyleHeader} class="btn btn-default  btn-sm glyphicon glyphicon-picture" > Images</button>

            </div>
        </div>)
    }

}

export default NewPost;
//=======================================
const InputBoxStyle = {
    paddingLeft: '3%',
    margin: '1%',
};
//===================
const PostStyle={
   padding: '1%',
    margin: '1%',
    backgroundColor:'#F5F5F5'
};
//==========================
const ButStyleHeader = {
    marginLeft: '4%',
};
//=====================

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:9000/Home/ch")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}