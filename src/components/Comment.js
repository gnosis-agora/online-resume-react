import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
import moment from "moment";
import CommentArea from './CommentArea';
import './styles.css';

/* This Component creates the comment Component in the comment list */

class CommentComp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showCommentBox: false,
		}
	}

	toggleComments = () => {
		this.setState({showCommentBox: !this.state.showCommentBox})
	}

	render() {
		let {comment, addComment} = this.props;

		return (
			<div className="Comment">
				<Comment >
					<Comment.Content>
						<Comment.Author>
							{comment.name}
							<Comment.Metadata>
								{new moment(comment.createdAt).fromNow()}
							</Comment.Metadata>
						</Comment.Author>
						<Comment.Text>
							{comment.message}
						</Comment.Text>
					</Comment.Content>
	        <Comment.Actions>
	          <Comment.Action onClick={this.toggleComments}>
	          	Reply
	        	</Comment.Action>
	        </Comment.Actions>
	        {this.state.showCommentBox ? 
	        	<CommentArea parentId={comment.id} addComment={addComment} toggleCommentBox={this.toggleComments}/> : 
	        	<div></div>
	        }
				</Comment>
			</div>
		)
	}

}

export default CommentComp