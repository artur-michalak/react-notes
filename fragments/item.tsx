import { memo } from "react";
import NoteActions from "./note-actions";

interface ItemProps {
  title: string;
  isTask: boolean;
  createdAt: Date;
  lang: string;
  id: string
}

function Item({ createdAt, lang, title, isTask, id }: ItemProps) {
  const date = new Date(createdAt);
  const dateString = `${date.toLocaleDateString(lang, {
    weekday: "long",
  })}, ${date.toLocaleDateString(lang)}`;

  return (
    <>
      <div className="text-2xl text-ellipsis">{title}</div>
      <div className="flex justify-between gap-4">
        <time dateTime={date.toISOString().substring(0, 10)}>{dateString}</time>
        <NoteActions isTask={isTask} note={title} id={id} />
      </div>
    </>
  );
}

export default memo(Item);
