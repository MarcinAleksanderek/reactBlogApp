import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './PostSummary.scss';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import maxLentgh from '../../common/maxLentgh/maxLentgh';


const PostSummary = ({ id, title, content, author }) => (
	<article className="post-summary">
		<SmallTitle>{title}</SmallTitle>
		<p>Author: {author}</p>
		<HtmlBox>{maxLentgh(content, 250)}</HtmlBox>
		<Button variant="primary"><Link to={`/posts/${id}`}>
			Read more
		</Link></Button>
	</article>
);

PostSummary.propTypes = {
	id: PropTypes.string,
	author: PropTypes.string.isRequired,
	title: PropTypes.string,
	content: PropTypes.string,
};

export default PostSummary;