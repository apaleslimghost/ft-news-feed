const renderVal = val =>
	  Array.isArray(val)      ? val.map(renderVal).join('')
	: typeof val === 'string' ? val
	: '';

export default (strings, ...values) =>
	strings.reduce((b, string, i) =>
		b + string + renderVal(values[i]),
		''
	);
