import React from 'react';

class PostsCounter extends React.Component {
	componentDidMount() {
		const { loadPosts } = this.props;
		loadPosts();
	}

	render() {
		const { postsNumber } = this.props;
		return (
			<div>{postsNumber > 0 ? 'Number of posts: ' + postsNumber : 'No posts'}</div>
		);
	}

};

export default PostsCounter;