import h from './h';
import s from '../styles/primary-link.scss';

const getPrimary = metadata => metadata.find(datum => datum.primary === 'theme');

const primaryLink = ({primary, size}) => primary ? h(s)`<a href="${primary.url}" target='_blank' class="${s.link} ${s[size]}">
	${primary.prefLabel}
</a>` : h(s)``;

export default ({metadata, size = 'm'}) => primaryLink({
	primary: getPrimary(metadata),
	size,
});
