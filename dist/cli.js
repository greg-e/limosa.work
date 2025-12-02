#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const zettelkasten_1 = require("./zettelkasten");
const program = new commander_1.Command();
program
    .name('zk')
    .description('Zettelkasten CLI for managing markdown notes in this repo.')
    .version('0.1.0');
program
    .command('init')
    .description('Ensure the catalog folders exist')
    .option('--root <path>', 'Project root (defaults to current directory)', process.cwd())
    .action(async (options) => {
    await (0, zettelkasten_1.ensureCatalogStructure)(options.root);
    console.log(`Catalog ready at ${(0, zettelkasten_1.catalogRoot)(options.root)}`);
});
program
    .command('new')
    .argument('<title>', 'Note title')
    .description('Create a new Zettelkasten note')
    .option('-t, --type <type>', `Note type (${zettelkasten_1.NOTE_TYPES_LIST.join(', ')})`, 'permanent')
    .option('--tag <tag...>', 'One or more tags')
    .option('--link <id...>', 'Link to existing note IDs')
    .option('--source <source>', 'Optional source reference')
    .option('--root <path>', 'Project root (defaults to current directory)', process.cwd())
    .action(async (title, options) => {
    const type = options.type;
    const tags = options.tag || [];
    const links = options.link || [];
    const note = await (0, zettelkasten_1.createNote)({
        title,
        type,
        tags,
        links,
        source: options.source || '',
        root: options.root,
    });
    console.log('Created note:');
    console.log((0, zettelkasten_1.summarizeNote)(note));
});
program
    .command('list')
    .description('List notes')
    .option('-t, --type <type>', `Filter by note type (${zettelkasten_1.NOTE_TYPES_LIST.join(', ')})`)
    .option('--tag <tag>', 'Filter by tag')
    .option('--root <path>', 'Project root (defaults to current directory)', process.cwd())
    .action(async (options) => {
    const type = options.type;
    const notes = await (0, zettelkasten_1.listNotes)({ type, tag: options.tag, root: options.root });
    if (!notes.length) {
        console.log('No notes found.');
        return;
    }
    for (const note of notes) {
        console.log((0, zettelkasten_1.summarizeNote)(note));
        console.log('');
    }
});
program
    .command('show')
    .argument('<id>', 'Note ID')
    .description('Show a note by ID')
    .option('--root <path>', 'Project root (defaults to current directory)', process.cwd())
    .action(async (id, options) => {
    const note = await (0, zettelkasten_1.readNoteById)(id, options.root);
    if (!note) {
        console.error(`Note not found for id: ${id}`);
        process.exitCode = 1;
        return;
    }
    console.log((0, zettelkasten_1.summarizeNote)(note));
    if (note.content) {
        console.log('\n---\n');
        console.log(note.content);
    }
});
program.parseAsync(process.argv);
