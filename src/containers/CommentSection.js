import React, { Component } from 'react';
import { Comment, Header, Loader } from 'semantic-ui-react';
import moment from 'moment';
import { db } from '../constants/firebaseConfig';


import CommentEnterArea from '../components/CommentArea';
import CommentsContainer from './CommentsContainer';

class CommentSection extends Component {

  constructor() {
    super();
    this.state = {
      DATA_FETCH_STATUS: "IDLE",
      comments: [],
    }
  }

  // Used to get all the comments from firebase
  componentDidMount() {
    this.setState({DATA_FETCH_STATUS: "FETCHING"});
    db.ref("/Comments").once("value").then(data => {
      if (data.val()) {
        
        let commentList = [];
        for (let key in data.val()) {
          commentList.push(data.val()[key])
        }
        this.setState({DATA_FETCH_STATUS: "FETCHED", comments: commentList});
      }
      else {
      	this.setState({DATA_FETCH_STATUS: "FAILED"})
      }
    })
  }

  // Takes in a name and message and adds a new record to firebase
  addComment = (name, message, parentId=null) => {
    let key = db.ref("/Comments").push().key;


    let data = {id: key, name: name, message: message, createdAt: moment.now(), parentId: parentId};
    db.ref("/Comments/"+key).update(data);
    let commentHolder = this.state.comments;
    commentHolder.push(data);
    this.setState({comments: commentHolder});
  }

  render() {
  	if (this.state.DATA_FETCH_STATUS === "FETCHING" || this.state.DATA_FETCH_STATUS === "IDLE") {
	    return (
	        <Comment.Group>
	        	<Header as='h3' dividing>Comments</Header>
	        	<Loader active inline='centered'/>
	          <CommentEnterArea addComment={this.addComment}/>
	        </Comment.Group>
	    );  		
  	} 
  	else {
	    return (
	        <Comment.Group>
	        	<Header as='h3' dividing>Comments</Header>
            {
              this.state.DATA_FETCH_STATUS === "FETCHED" ? 
                <CommentsContainer comments = {this.state.comments} rootId={null} addComment={this.addComment}/> :
                <CommentsContainer comments={[]} rootId={null} addComment={this.addComment}/>
            }	        	
	          <CommentEnterArea addComment={this.addComment}/>
	        </Comment.Group>
	    );    		
  	}


  }	
}


export default CommentSection