import kinesis from 'kinesis';
import {Transform} from 'stream';

class KinesisToBuffer extends Transform {
	constructor(options) {
		super(Object.assign({objectMode: true}, options));
	}

	_transform(record, encoding, cb) {
	  cb(null, record.Data);
	}
}

export default (req, res, next) => {
	const toBuffer = new KinesisToBuffer();
	const stream = kinesis.stream({name: 'nextContentChangelog', region: 'eu-west-1'}).pipe(toBuffer);

	stream.on('data', data => {
		res.write(data + '\n');
	});

	stream.on('error', next);
};
