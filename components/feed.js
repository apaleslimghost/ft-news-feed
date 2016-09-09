import h from './h';
import s from '../styles/feed.scss';

const item = article => h`<li key={article.id} class="${s.item}">
	<a href=${`/content/${article.id}`} class="${s.link}">
		${article.title}
	</a>

	<p class="${s.subhead}">${article.summaries[0]}</p>
</li>`;

export default ({articles}) => h`<ul class="${s.feed}">
	${articles.map(item)}
</ul>`;
