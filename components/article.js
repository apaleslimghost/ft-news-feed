import {define, html} from 'excise';
import s from '../styles/article.scss';
import './primary-link';

export default define('ft-article', ({article}) => html`<article class="${s.article}">
	<ft-primary-link metadata=${article.metadata} size="l" />

	<h1 class="${s.title}">${article.title}</h1>
	${article.summaries && article.summaries.length ? `<h2 class="${s.subhead}">${article.summaries[0]}</h2>` : ''}

	<div class="${s.body}"}>
		${article.offline && '<h2>Unavailable offline</h2>'}
		${article.bodyHTML}
	</div>
</article>`);
