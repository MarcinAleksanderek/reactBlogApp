import { connect } from 'react-redux';
import { getPosts, getRequest, numberofPosts, loadPostsRequest } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
	posts: getPosts(state),
	postsNumber: numberofPosts(state)
})

const mapDispatchToProps = dispatch => ({
	loadPosts: () => dispatch(loadPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsCounter);