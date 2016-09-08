import {withFourOhFour} from 'boulevard';

export default withFourOhFour((req, res, next) => {
	return Promise.reject();
});
