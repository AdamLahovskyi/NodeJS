const yargs = require('yargs');
const user = require('./user');

yargs.command({
    command: 'add',
    describe: 'Add a language to the user',
    builder: {
        title: {
            describe: 'Language title',
            demandOption: true,
            type: 'string'
        },
        level: {
            describe: 'Language level',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.addLanguage(argv.title, argv.level);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a language from the user',
    builder: {
        title: {
            describe: 'Language title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.removeLanguage(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List all languages of the user',
    handler() {
        user.listLanguages();
    }
});

yargs.command({
    command: 'read',
    describe: 'Read details of a language of the user',
    builder: {
        title: {
            describe: 'Language title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.readLanguage(argv.title);
    }
});

yargs.parse();
