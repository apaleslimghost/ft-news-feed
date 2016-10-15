import {define, html} from 'excise';
import s from '../styles/primary-link.scss';

const getPrimary = metadata => metadata.find(datum => datum.primary === 'theme');

const primaryLink = ({primary, size}) => primary ? html`<a href="${primary.url}" target='_blank' class="${s.link} ${s[size]}">
	${primary.prefLabel}
</a>` : [];

export default define('ft-primary-link', ({metadata = [], size = 'm'}) => primaryLink({
	primary: getPrimary(metadata),
	size,
}));
