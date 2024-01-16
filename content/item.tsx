import { memo } from "react";

interface ItemProps {
  title: string;
  createdAt: Date;
  lang: string;
}

function Item({ createdAt, lang, title }: ItemProps) {
  const date = new Date(createdAt);
  const dateString = `${date.toLocaleDateString(lang, {
    weekday: "long",
  })}, ${date.toLocaleDateString(lang)}`;

  return (
    <>
      <h2 className="text-2xl text-ellipsis">{title}</h2>
      <time dateTime={date.toISOString().substring(0, 10)}>{dateString}</time>
    </>
  );
}

export default memo(Item);
