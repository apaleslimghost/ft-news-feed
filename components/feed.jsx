import React, {Component, PropTypes} from 'react';
import orderBy from 'lodash.orderby';
import s from '../styles/feed.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Feed extends Component {
	static contextTypes = {
		link: PropTypes.func,
	};

	constructor(props, context) {
		super(props, context);
		this.state = {articles: props.articles};
	}

	getArticles() {
		return orderBy(
			this.state.articles,
			({publishedDate}) => new Date(publishedDate),
			'desc'
		);
	}

	render() {
		const articles = this.getArticles();
		const {link} = this.context;

		return <ul className={s.feed}>
			{articles.map(article => <li key={article.id} className={s.item}>
				<a href={`/content/${article.id}`} onClick={link} className={s.link}>
					{article.title}
				</a>

				<p className={s.subhead}>{article.summaries[0]}</p>
			</li>)}
		</ul>;
	}
}

export default withStyles(s)(Feed);
