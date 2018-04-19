import React from 'react';
import Comment from './Comment';
import CommentWithChildren from './CommentWithChildren';

/* This component holds a list of comments */

const Comments = ({comments, parentComment, addComment}) => {

	// Remove all child comments of current comment
	let filterdComments = comments.filter(com =>
		com.parentId === parentComment.id
	);

	// Find all the child comments by checking their parentIds against parentComment's id
	let childrenComments = filterdComments.map(com => {
		return (<Comments key={com.id} comments={comments} parentComment={com} addComment={addComment}/>)
	});

	if (childrenComments.length === 0) {
		// if no child comments
		return (
			<div>
				<Comment key={parentComment.id} comment={parentComment} addComment={addComment} />
			</div>
		)
	}
	else {
		return (
			<div>
				<CommentWithChildren comment={parentComment} childrenComments={childrenComments} addComment={addComment} />
			</div>
		)
	}


}

export default Comments;