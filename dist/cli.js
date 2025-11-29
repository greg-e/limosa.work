#!/usr/bin/env node
"use strict";
const { argv, cwd } = require('process');
const zk = require('./zettelkasten');

const printHelp = () => {
  console.log(`Usage: zk <command> [options]\n\nCommands:\n  init                 Ensure catalog folders exist\n  new <title>          Create a new note\n  list                 List notes\n  show <id>            Show a note by ID\n\nOptions:\n  --root <path>        Set project root (default: current directory)\n  --type <type>        Note type (permanent|literature|fleeting|index)\n  --tag <tag>          Tag filter or repeated tag for new\n  --link <id>          Link to another note (repeatable)\n  --source <source>    Optional source for new note\n  --help               Show help\n`);
};

const args = argv.slice(2);
const command = args[0];

const collectValues = (flag) => {
  const collected = [];
  let index = args.indexOf(flag);
  while (index !== -1) {
    const value = args[index + 1];
    if (value && !value.startsWith('--')) collected.push(value);
    args.splice(index, value && !value.startsWith('--') ? 2 : 1);
    index = args.indexOf(flag);
  }
  return collected;
};

const getOption = (flag, fallback) => {
  const index = args.indexOf(flag);
  if (index !== -1 && index < args.length - 1) {
    const value = args[index + 1];
    args.splice(index, 2);
    return value;
  }
  return fallback;
};

const getRoot = () => getOption('--root', cwd());

const run = async () => {
  switch (command) {
    case 'init': {
      const root = getRoot();
      await zk.ensureCatalogStructure(root);
      console.log(`Catalog ready at ${zk.catalogRoot(root)}`);
      break;
    }
    case 'new': {
      const title = args[1];
      if (!title) {
        console.error('Title is required for new notes.');
        return;
      }
      const root = getRoot();
      const type = getOption('--type', 'permanent');
      const tags = collectValues('--tag');
      const links = collectValues('--link');
      const source = getOption('--source', '');
      const note = await zk.createNote({ title, type, tags, links, source, root });
      console.log('Created note:');
      console.log(zk.summarizeNote(note));
      break;
    }
    case 'list': {
      const root = getRoot();
      const type = getOption('--type');
      const tag = getOption('--tag');
      const notes = await zk.listNotes({ type, tag, root });
      if (!notes.length) {
        console.log('No notes found.');
        break;
      }
      for (const note of notes) {
        console.log(zk.summarizeNote(note));
        console.log('');
      }
      break;
    }
    case 'show': {
      const id = args[1];
      if (!id) {
        console.error('Note id is required for show.');
        return;
      }
      const root = getRoot();
      const note = await zk.readNoteById(id, root);
      if (!note) {
        console.error(`Note not found for id: ${id}`);
        return;
      }
      console.log(zk.summarizeNote(note));
      if (note.content) {
        console.log('\n---\n');
        console.log(note.content);
      }
      break;
    }
    default:
      printHelp();
  }
};

run();
