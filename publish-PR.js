/* eslint-disable @typescript-eslint/no-var-requires */
const ghpages = require('gh-pages');
const { version } = require('./package.json');

console.info('Starting publish..');

if (process.argv.length <= 2) {
    console.error('Must specify PR number as argument!')
    return;
}

const PR = process.argv[2];

ghpages.publish('build', {
    add: true,
    src: ['./**/*', '../package.json'],
    branch: 'master',
    dest: `docs/PR/${PR}`,
    message: `[v${version}] Push PR ${PR} to GitHub pages`,
}, (err) => {
    if (err) {
        console.error('Something went wrong publishing...\n', err);
    } else {
        console.info('Successfully published PR to GitHub pages!');
    }
});
