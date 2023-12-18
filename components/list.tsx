"use client";

import classNames from "classnames";
import { LiHTMLAttributes, useDeferredValue } from "react";

interface ListProps {
  items: LiHTMLAttributes<HTMLLIElement>[];
}

function List(props: ListProps) {
  const items = useDeferredValue(props.items);

  // TODO: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout
  return (
    <ul className="w-full xl:columns-3 md:columns-2 gap-8">
      {items.map(({ children, className }, key) => (
        <li
          key={key}
          className={classNames("inline-block w-full mb-8", className)}
        >
          {children}
        </li>
      ))}
    </ul>
  );
}

export default List;
