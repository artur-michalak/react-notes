import { Note } from "@/server-actions/get-notes";
import { Item } from "@/content";

export default function prepareItems(notes: Note[], lang: string) {
  return notes.map(({ text, createdAt, id }) => {
    return {
      id,
      children: <Item title={text} createdAt={createdAt} lang={lang} />,
    };
  });
}
