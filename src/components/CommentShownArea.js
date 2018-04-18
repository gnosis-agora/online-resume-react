import React from 'react';
import CommentComp from './CommentComp';
import './styles.css';

/* This component holds a list of comments */

const CommentShownArea = ({comments}) => {

	return (
		<div className="CommentShownArea">
			{comments.map(comment => <CommentComp key={comment.id} name={comment.name} createdAt={comment.createdAt} message={comment.message}/>)}
		</div>
	)
}

export default CommentShownArea;