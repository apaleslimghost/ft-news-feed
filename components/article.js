import h from './h';
import s from '../styles/article.scss';
import primaryLink from './primary-link';

export default ({title, bodyHTML, summaries, webUrl, metadata}) => h`<article class="${s.article}">
	${primaryLink({metadata, size: 'l'})}

	<h1 class="${s.title}">${title}</h1>
	<h2 class="${s.subhead}">${summaries[0]}</h2>

	<div class="${s.body}"}>
		${bodyHTML}
	</div>
</article>`;
