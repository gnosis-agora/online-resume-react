import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

/* This component creates the input portion of the comment section */ 

class CommentArea extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			comment: '',
		};
	}

	handleChange = (e, { name, value }) => {
		this.setState({ [name]: value })
	}

	handleSubmit = () => {
		this.props.addComment(this.state.name, this.state.comment, this.props.parentId);
		this.setState({name: '', comment: ''})
		if (this.props.toggleCommentBox) {
			this.props.toggleCommentBox();
		}
		
	}

	render() {
		const {name, comment} = this.state;

		return (
    	<Form reply onSubmit={this.handleSubmit}>
	    	<Form.Input fluid label='Name' name='name' placeholder='Name' value={name} onChange={this.handleChange} required/>
	      <Form.TextArea label="Comment" name='comment' placeholder="Insert your comments here" value={comment} onChange={this.handleChange} required/>
	      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
	    </Form>
		)
	}
}

export default CommentArea;