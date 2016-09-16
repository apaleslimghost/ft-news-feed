import h from './h';
import s from '../styles/feed.scss';
import feedItem from './feed-item';

export default ({articles}) => h`<ul class="${s.feed}">
	${articles.map(feedItem)}
</ul>`;
