export type NoteType = 'permanent' | 'literature' | 'fleeting' | 'index';

export interface NoteMetadata {
  id: string;
  title: string;
  type: NoteType;
  tags: string[];
  links: string[];
  created: string;
  source?: string;
  content: string;
  path: string;
}

export interface CreateNoteOptions {
  title: string;
  type: NoteType;
  tags?: string[];
  links?: string[];
  source?: string;
  root?: string;
  created?: Date;
}

export interface ListOptions {
  type?: NoteType;
  tag?: string;
  root?: string;
}
