import { Item } from '@/fragments';
import { Note } from '@/server-actions/get-notes';

export default function prepareItems(notes: Note[], lang: string) {
  return notes.map(({ note, createdAt, isTask, id }) => {
    return {
      id,
      children: <Item title={note} createdAt={createdAt} isTask={isTask} id={id} lang={lang} />,
    };
  });
}
