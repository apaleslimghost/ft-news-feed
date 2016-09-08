import React from 'react';
import s from '../styles/article.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const getPrimary = key => metadata => metadata.find(datum => datum.primary === key);

const PrimaryLink = ({primary}) => primary ? <a href={primary.url} target='_blank' className={s.primaryTheme}>
	{primary.prefLabel}
</a> : null;

const Article = ({title, bodyHTML, summaries, webUrl, metadata}) => <article className={s.article}>
	<PrimaryLink primary={getPrimary('theme')(metadata)} />

	<h1 className={s.title}>{title}</h1>
	<h2 className={s.subhead}>{summaries[0]}</h2>

	<div className={s.body} dangerouslySetInnerHTML={{__html: bodyHTML}} />
</article>;

export default withStyles(s)(Article);
