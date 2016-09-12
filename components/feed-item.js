import h from './h';
import s from '../styles/feed-item.scss';

export default article => h()`<li class="${s.item}">
	<a href="${`/content/${article.id}`}" class="${s.link}" data-link>
		${article.title}
	</a>

	<p class="${s.subhead}">${article.summaries[0]}</p>
</li>`;
