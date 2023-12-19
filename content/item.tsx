import { memo } from "react";

interface ItemProps {
  title: string;
  date: string;
}

function Item(props: ItemProps) {
  return (
    <>
      <h2 className="text-2xl">{props.title}</h2>
      <p>{props.date}</p>
    </>
  );
}

export default memo(Item);
