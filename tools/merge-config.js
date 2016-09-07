import mergeWith from 'lodash.mergewith';

export default (base, extra) => mergeWith({}, base, extra, (baseVal, extraVal) => {
	if(Array.isArray(baseVal)) {
		return baseVal.concat(extraVal);
	}
});
