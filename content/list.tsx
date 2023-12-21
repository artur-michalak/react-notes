"use client";

import Container from "@/components/container";
import { useQuery } from "@tanstack/react-query";
import { getNotes } from "@/server-actions";
import prepareItems from "@/utils/prepareItems";
import { Note } from "@/server-actions/get-notes";

interface ListProps {
  lang: string;
}

function List(props: ListProps) {
  const { data } = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      getNotes().then((notes: Note[]) => prepareItems(notes, props.lang)),
  });

  // TODO: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout
  return (
    <ul className="w-full xl:columns-3 md:columns-2 gap-8">
      {data &&
        data.map(({ children }, key) => (
          <Container
            size="big"
            type="li"
            key={key}
            className="inline-block w-full mb-4 bg-white"
          >
            {children}
          </Container>
        ))}
    </ul>
  );
}

export default List;
