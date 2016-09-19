import kinesis from 'kinesis';

export default (req, res) => {
	const stream = kinesis.stream({name: 'nextContentChangelog'});
	stream.on('data', data => {
		res.write(JSON.stringify(data) + '\n');
	});
};
