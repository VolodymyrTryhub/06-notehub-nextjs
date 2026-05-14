'use client';

import { useQuery } from '@tanstack/react-query';

import { getNotes } from '@/lib/api';

import NoteList from '@/components/NoteList/NoteList';

const NotesClient = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes'],
    queryFn: getNotes,
  });

  if (isLoading) {
    return <p>Loading, please wait...</p>;
  }

  if (isError || !data) {
    return <p>Something went wrong.</p>;
  }

  return (
    <section>
      <h1>Notes</h1>

      <NoteList notes={data.notes} />
    </section>
  );
};

export default NotesClient;
