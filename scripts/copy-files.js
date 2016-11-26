
import utils from 'nms-core-utils';

const rootDir = `${__dirname}/../`;
const publishDir = `${rootDir}/publish`;
const packagePath = `${rootDir}/package.json`;
const files = [
	'README.md',
	'LICENSE',
];

/**
 * @param {string} srcPath - the source path to file
 * @param {string} destPath - the destination path to file
 * @returns {void}
 */
function copyFile(srcPath, destPath) {
	utils.writeFile(destPath, utils.readFile(srcPath));
}

/**
 * @returns {void}
 */
function createPackageFile() {
	const packageData = JSON.parse(utils.readFile(packagePath));
	delete packageData.scripts;
	delete packageData.devDependencies;
	delete packageData.dependencies['material-ui'];
	delete packageData.dependencies.react;
	delete packageData.dependencies['react-dom'];
	delete packageData.dependencies['react-tap-event-plugin'];
	delete packageData.dependencies['react-router'];
	utils.writeFile(`${publishDir}/package.json`, JSON.stringify(packageData, null, 2));
}


if (!utils.isDir(publishDir)) {
	utils.writeDir(publishDir);
}

files.forEach((file) => {
	copyFile(`${rootDir}/${file}`, `${publishDir}/${file}`);
});
createPackageFile();
