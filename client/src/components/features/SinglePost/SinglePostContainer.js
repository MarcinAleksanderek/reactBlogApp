import { connect } from 'react-redux';
import { getPosts, getPost, getRequest, loadPostRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = (state) => ({
	posts: getPosts(state),
	request: getRequest(state),
	post: getPost(state),
});

const mapDispatchToProps = (dispatch, {id}) => ({
	loadPost: () => dispatch(loadPostRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);