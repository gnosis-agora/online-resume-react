import React, { Component } from 'react';
import Comments from '../components/Comments';
import './styles.css';

/* This component holds a list of comments */

class CommentsContainer extends Component {

	render() {

		// These are the top level comments
		let rootComments = 
			this.props.comments
				.filter(com => com.parentId == this.props.rootId)
				.map(com => <Comments key={com.id} comments={this.props.comments} parentComment={com} addComment={this.props.addComment}/>);

		return (
			<div className="CommentShownArea">
				{rootComments}
			</div>
		)		
	}

}

export default CommentsContainer;
