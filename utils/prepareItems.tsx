import { Note } from "@/server-actions/get-notes";
import { Item } from "@/content";

export default function prepareItems(notes: Note[], lang: string) {
  return notes.map(({ text, createdAt, id }, key) => {
    const date = new Date(createdAt);
    const dateString = `${date.toLocaleDateString(lang, {
      weekday: "long",
    })}, ${date.toLocaleDateString(lang)}`;
    return {
      id,
      children: (
        <Item
          title={text.length < 30 ? text : `${text.slice(0, 27)}...`}
          date={dateString}
        />
      ),
    };
  });
}
