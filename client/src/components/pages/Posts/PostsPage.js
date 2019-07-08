import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import Posts from '../../features/Posts/PostsContainer';
import PostsCounterContainer from '../../features/PostsCounter/PostsCounterContainer';

const PostsPage = () => (
	<div>
		<PageTitle>Posts list</PageTitle>
		<PostsCounterContainer />
		<Posts />
	</div>
);

export default PostsPage;