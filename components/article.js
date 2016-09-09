import h from './h';
import s from '../styles/article.scss';

const getPrimary = key => metadata => metadata.find(datum => datum.primary === key);

const primaryLink = (primary) => primary ? h`<a href=${primary.url} target='_blank' class="${s.primaryTheme}">
	${primary.prefLabel}
</a>` : '';

export default ({title, bodyHTML, summaries, webUrl, metadata}) => h`<article class="${s.article}">
	${primaryLink(getPrimary('theme')(metadata))}

	<h1 class="${s.title}>${title}</h1>
	<h2 class="${s.subhead}>${summaries[0]}</h2>

	<div class="${s.body}"}>
		${bodyHTML}
	</div>
</article>`;
