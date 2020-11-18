#!/usr/bin/env node
const fs = require('fs');
const yaml = require('js-yaml');
const readFile = require('fs').readFile;
const writeFile = require('fs').writeFile;
const csvjson = require('csvjson');

function convertYamlToJson() {
	const inputYML = `${whereIsTheYamlFile}`;
	const outputJSON = 'output.json';

	const obj = yaml.load(fs.readFileSync(inputYML, { encoding: 'utf-8' }));
	fs.writeFileSync(outputJSON, JSON.stringify(obj, null, 2));
}

function convertJSONtoCSV() {
	readFile('./output.json', 'utf-8', (err, fileContent) => {
		if (err) {
			console.log(err);
			throw new Error(err);
		}

		const csvData = csvjson.toCSV(fileContent, {
			headers: 'key'
		});

		console.log(csvData[1]);

		writeFile(`${whereShouldTheCSVGo}/data.csv`, csvData, (err) => {
			if (err) {
				console.log(err);
				throw new Error(err);
			}
			console.log('Success!');
		});

		fs.unlink('output.json', function (err) {
			if (err) throw err;
		});
	});
}

const args = process.argv;
const whereIsTheYamlFile = args[2];
const whereShouldTheCSVGo = args[3];

convertYamlToJson();
convertJSONtoCSV();
