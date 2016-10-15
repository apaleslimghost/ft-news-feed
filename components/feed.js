import {define, html} from 'excise';
import './feed-item';
import s from '../styles/feed.scss';

export default define('ft-feed', ({articles}) => html`<ul class="${s.feed}">
	${articles.map(article => html`<ft-feed-item article=${article} />`)}
</ul>`);
