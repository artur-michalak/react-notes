import classNames from 'classnames';
import { createElement, HTMLAttributes, PropsWithChildren, ReactHTML } from 'react';

function Container({
  className,
  children,
  type,
  size = "normal",
  ...props
}: PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    type?: keyof ReactHTML;
    size?: "big" | "normal";
  }
>) {
  return createElement(
    type || "div",
    {
      className: classNames(className, size === "big" ? "p-6" : "p-2"),
      ...props,
    },
    children
  );
}

export default Container;
