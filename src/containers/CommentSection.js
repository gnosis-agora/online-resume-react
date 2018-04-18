import React, { Component } from 'react';
import { Comment, Header, Loader } from 'semantic-ui-react';
import firebase from 'firebase';


import CommentEnterArea from '../components/CommentArea';
import CommentShownArea from '../components/CommentShownArea';

const config = {
  apiKey: "AIzaSyA2j_GTqhtVKbXRVxU4b-o-ZDsVGwaR1CM",
  authDomain: "online-resume-4f9ce.firebaseapp.com",
  databaseURL: "https://online-resume-4f9ce.firebaseio.com",
  projectId: "online-resume-4f9ce",
  storageBucket: "online-resume-4f9ce.appspot.com",
  messagingSenderId: "570421257083"
};
firebase.initializeApp(config);
var db = firebase.database();

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
      	let comments = data.val();
				let commentList = [];
				for (let comment in comments) {
					commentList.push(comments[comment]);
				}
        this.setState({DATA_FETCH_STATUS: "FETCHED", comments: commentList});
      }
      else {
      	this.setState({DATA_FETCH_STATUS: "FAILED"})
      	console.log(this.state.DATA_FETCH_STATUS)
      }
    })
  }

  // Takes in a name and message and adds a new record to firebase
  addComment = (name, message) => {
    let key = db.ref("/Comments").push().key;
    let data = {id: key, name: name, message: message, createdAt: firebase.database.ServerValue.TIMESTAMP};
    db.ref("/Comments").push(data);
    let commentHolder = this.state.comments;
    commentHolder.push(data);
    this.setState({comments: commentHolder});
  }

  render() {
  	if (this.state.DATA_FETCH_STATUS === "FETCHING") {
	    return (
	        <Comment.Group>
	        	<Header as='h3' dividing>Comments</Header>
	        	<Loader active inline='centered'/>
	          <CommentEnterArea addComment={this.addComment}/>
	        </Comment.Group>
	    );  		
  	} 
  	else if (this.state.DATA_FETCH_STATUS === "FETCHED") {
	    return (
	        <Comment.Group>
	        	<Header as='h3' dividing>Comments</Header>
	        	<CommentShownArea comments={this.state.comments}/>
	          <CommentEnterArea addComment={this.addComment}/>
	        </Comment.Group>
	    );  		
  	}
  	else {
	    return (
	        <Comment.Group>
	        	<Header as='h3' dividing>Comments</Header>
	        	<CommentShownArea comments = {[]} />
	          <CommentEnterArea addComment={this.addComment}/>
	        </Comment.Group>
	    );    		
  	}


  }	
}


export default CommentSection