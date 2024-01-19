import { memo } from "react";
import NoteActions from "./note-actions";

interface ItemProps {
  title: string;
  isTask: boolean;
  createdAt: Date;
  lang: string;
}

function Item({ createdAt, lang, title, ...props }: ItemProps) {
  const date = new Date(createdAt);
  const dateString = `${date.toLocaleDateString(lang, {
    weekday: "long",
  })}, ${date.toLocaleDateString(lang)}`;

  return (
    <>
      {JSON.stringify(props)}
      <div className="text-2xl text-ellipsis">{title}</div>
      <div className="flex justify-between gap-4">
        <time dateTime={date.toISOString().substring(0, 10)}>{dateString}</time>
        <NoteActions />
      </div>
    </>
  );
}

export default memo(Item);
