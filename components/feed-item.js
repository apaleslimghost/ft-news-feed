import {define, html} from 'excise';
import s from '../styles/feed-item.scss';
import './primary-link';

export default define('ft-feed-item', ({article}) => html`<li class="${s.item}">
	<ft-primary-link metadata=${article.metadata} size="s" />

	<a href="${`/content/${article.id}`}" class="${s.link}" data-link>
		${article.title}
	</a>

	<p class="${s.subhead}">${article.summaries[0]}</p>
</li>`);
