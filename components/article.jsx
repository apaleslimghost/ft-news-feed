import React from 'react';
import s from '../styles/article.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const getPrimary = key => metadata => metadata.find(datum => datum.primary === key);

const Article = ({title, bodyHTML, summaries, webUrl, metadata}) => <article>
	<a href={getPrimary('theme')(metadata).url} target='_blank' className={s.primaryTheme}>
		{getPrimary('theme')(metadata).prefLabel}
	</a>

	<h1 className={s.title}>{title}</h1>
	<h2 className={s.subhead}>{summaries[0]}</h2>

	<div className={s.body} dangerouslySetInnerHTML={{__html: bodyHTML}} />
</article>;

export default withStyles(s)(Article);
