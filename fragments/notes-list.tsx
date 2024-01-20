"use client";

import { Container } from "@/components";
import { getNotes } from "@/server-actions";
import { prepareItems } from "@/utils";
import { useQuery } from "@tanstack/react-query";

import type { Note } from "@/server-actions";
import { Skeleton } from "antd";

interface ListProps {
  lang: string;
}

function NotesList(props: ListProps) {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      getNotes().then((notes: Note[]) => prepareItems(notes, props.lang)),
  });

  // TODO: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout
  return (
    <ul className="w-full xl:columns-3 md:columns-2 gap-8">
      {isLoading ||
        (isFetching && (
          <Container
            size="big"
            type="li"
            className="inline-block w-full mb-4 bg-white"
          >
            <Skeleton />
          </Container>
        ))}
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

export default NotesList;
