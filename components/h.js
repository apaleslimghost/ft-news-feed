const isElement = Symbol('isElement');

const renderVal = val =>
		!val                    ? {content: () => ''}
	: val[isElement]          ? val
	: Array.isArray(val)      ? val.reduce(
		(agg, child) => ({
			content: () => agg.content() + child.content(),
			styles: agg.styles.concat(child.styles),
		}),
		{content: () => '', styles: []}
	)
	: typeof val === 'string' ? {content: () => val}
	: {content: () => ''};

export default style => (strings, ...values) => {
	const parentStyles = [].concat(style || []);
	return {
		content: () => strings.reduce((b, string, i) => {
			const {content, styles = []} = renderVal(values[i]);
			parentStyles.push.apply(parentStyles, styles);
			return b + string + content();
		}, ''),

		[isElement]: true,
		styles: parentStyles,
	};
};
