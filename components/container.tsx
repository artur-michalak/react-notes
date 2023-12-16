import classNames from "classnames";
import { PropsWithChildren, ReactHTML, createElement } from "react";

function Container({
  children,
  type,
  size = "normal",
}: PropsWithChildren<{
  type?: keyof ReactHTML;
  size?: "big" | "normal";
}>) {
  return createElement(
    type || "div",
    {
      className: classNames(
        "bg-white rounded-xl",
        size === "big" ? "p-6" : "p-2"
      ),
    },
    children
  );
}

export default Container;
