import h from './h';
import s from '../styles/feed.scss';

const item = article => h()`<li class="${s.item}">
	<a href="${`/content/${article.id}`}" class="${s.link}" data-link>
		${article.title}
	</a>

	<p class="${s.subhead}">${article.summaries[0]}</p>
</li>`;

export default ({articles}) => h(s)`<ul class="${s.feed}">
	${articles.map(item)}
</ul>`;
