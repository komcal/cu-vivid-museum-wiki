import XLSX from 'node-xlsx';
import path from 'path';

import Reference from '../../models/Reference';

const refSheet = XLSX.parse(path.join(__dirname, '../../../seed/Garden.xls'));


function createItem(references, done) {
	Reference.model.create(references.map((item) => {
		return {
			name: item,
		};
	}), (err) => {
		if (err) {
			console.log(err);
		}
		done();
	});
}

exports = module.exports = (done) => {
	const references = refSheet[2]
		.data
		.filter((item, i) => i > 0)
		.map((columns) => {
			const subString = columns[0].split('.').filter((str, i) => i > 0);
			return subString;
		});
	createItem(references, done);
};
