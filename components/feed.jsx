import React, {PropTypes} from 'react';
import s from '../styles/feed.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Feed = ({articles, page}, {link}) => <ul className={s.feed}>
	{articles.map(article => <li key={article.id} className={s.item}>
		<a href={`/content/${article.id}`} onClick={link} className={s.link}>
			{article.title}
		</a>

		<h2 className={s.subhead}>{article.summaries[0]}</h2>
	</li>)}

	{page > 1 && <a href={`/page/${page - 1}`} onClick={link}>←</a>}
	Page {page}
	<a href={`/page/${page + 1}`} onClick={link}>→</a>
</ul>;

Feed.contextTypes = {
	link: PropTypes.func,
};

export default withStyles(s)(Feed);
