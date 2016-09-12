const isElement = Symbol('isElement');

const renderVal = (val, styles) =>
		!val                    ? ''
	: val[isElement]          ? ([].push.apply(styles, val.styles), val.toString())
	: Array.isArray(val)      ? val.map(c => renderVal(c, styles)).join('')
	: typeof val === 'string' ? val
	: '';

export default style => (strings, ...values) => {
	const styles = [].concat(style || []);
	return {
		toString: () => strings.reduce((b, string, i) =>
			b + string + renderVal(values[i], styles),
			''
		),

		[isElement]: true,
		styles,
	};
};
