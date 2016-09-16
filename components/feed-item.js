import h from './h';
import s from '../styles/feed-item.scss';
import primaryLink from './primary-link';

export default ({id, title, summaries, metadata}) => h`<li class="${s.item}">
	${primaryLink({metadata, size: 's'})}

	<a href="${`/content/${id}`}" class="${s.link}" data-link>
		${title}
	</a>

	<p class="${s.subhead}">${summaries[0]}</p>
</li>`;
