import React from 'react';
import { Comment } from 'semantic-ui-react';
import moment from "moment";

/* This Component creates the comment Component in the comment list */

const CommentComp = ({name, createdAt, message}) => {
	return (
		<Comment>
			<Comment.Content>
				<Comment.Author>{name}</Comment.Author>
				<Comment.Metadata>{new moment(createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</Comment.Metadata>
				<Comment.Text>
					{message}
				</Comment.Text>
			</Comment.Content>
		</Comment>
	)
}

export default CommentComp