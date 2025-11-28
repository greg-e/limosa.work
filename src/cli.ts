#!/usr/bin/env node
import { Command } from 'commander';
import {
  NOTE_TYPES_LIST,
  catalogRoot,
  createNote,
  ensureCatalogStructure,
  listNotes,
  readNoteById,
  summarizeNote,
} from './zettelkasten';
import { NoteType } from './types';

const program = new Command();

program
  .name('zk')
  .description('Zettelkasten CLI for managing markdown notes in this repo.')
  .version('0.1.0');

program
  .command('init')
  .description('Ensure the catalog folders exist')
  .option('--root <path>', 'Project root (defaults to current directory)', process.cwd())
  .action(async (options) => {
    await ensureCatalogStructure(options.root);
    console.log(`Catalog ready at ${catalogRoot(options.root)}`);
  });

program
  .command('new')
  .argument('<title>', 'Note title')
  .description('Create a new Zettelkasten note')
  .option('-t, --type <type>', `Note type (${NOTE_TYPES_LIST.join(', ')})`, 'permanent')
  .option('--tag <tag...>', 'One or more tags')
  .option('--link <id...>', 'Link to existing note IDs')
  .option('--source <source>', 'Optional source reference')
  .option('--root <path>', 'Project root (defaults to current directory)', process.cwd())
  .action(async (title: string, options) => {
    const type = options.type as NoteType;
    const tags = options.tag || [];
    const links = options.link || [];

    const note = await createNote({
      title,
      type,
      tags,
      links,
      source: options.source || '',
      root: options.root,
    });

    console.log('Created note:');
    console.log(summarizeNote(note));
  });

program
  .command('list')
  .description('List notes')
  .option('-t, --type <type>', `Filter by note type (${NOTE_TYPES_LIST.join(', ')})`)
  .option('--tag <tag>', 'Filter by tag')
  .option('--root <path>', 'Project root (defaults to current directory)', process.cwd())
  .action(async (options) => {
    const type = options.type as NoteType | undefined;
    const notes = await listNotes({ type, tag: options.tag, root: options.root });

    if (!notes.length) {
      console.log('No notes found.');
      return;
    }

    for (const note of notes) {
      console.log(summarizeNote(note));
      console.log('');
    }
  });

program
  .command('show')
  .argument('<id>', 'Note ID')
  .description('Show a note by ID')
  .option('--root <path>', 'Project root (defaults to current directory)', process.cwd())
  .action(async (id: string, options) => {
    const note = await readNoteById(id, options.root);
    if (!note) {
      console.error(`Note not found for id: ${id}`);
      process.exitCode = 1;
      return;
    }

    console.log(summarizeNote(note));
    if (note.content) {
      console.log('\n---\n');
      console.log(note.content);
    }
  });

program.parseAsync(process.argv);
