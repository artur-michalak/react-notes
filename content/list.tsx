"use client";

import classNames from 'classnames';
import { LiHTMLAttributes, useCallback, useDeferredValue, useState } from 'react';

import Container from '@/components/container';
import useEventObserver from '@/hooks/useEventObserver';
import { getNotes } from '@/server-actions';
import prepareItems from '@/utils/prepareItems';
import { revalidate } from '@/utils/revalidate';

interface ListProps {
  items: (LiHTMLAttributes<HTMLLIElement> & { isTask?: boolean })[];
  lang: string;
}

function List(props: ListProps) {
  const [filteredItems, setItems] = useState(props.items);

  const updateNotes = useCallback(async () => {
    revalidate("notes");
    const notes = await getNotes();
    setItems(prepareItems(notes, props.lang));
  }, []);

  useEventObserver("update-notes", updateNotes);
  const items = useDeferredValue(filteredItems);

  // TODO: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout
  return (
    <ul className="w-full xl:columns-3 md:columns-2 gap-8">
      {items.map(({ children, className }, key) => (
        <Container
          size="big"
          type="li"
          key={key}
          className={classNames("inline-block w-full mb-4", className)}
        >
          {children}
        </Container>
      ))}
    </ul>
  );
}

export default List;
