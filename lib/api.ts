import axios from 'axios';

import { Note, NotesResponse, CreateNoteData } from '@/types/note';

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getNotes = async () => {
  const res = await axios.get<NotesResponse>('/notes');

  return res.data;
};

export const fetchNoteById = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);

  return res.data;
};

export const createNote = async (noteData: CreateNoteData) => {
  const res = await axios.post<Note>('/notes', noteData);

  return res.data;
};
