"use client";

import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import {
  MdOutlineCheckBox,
  MdOutlineSettings,
  MdStickyNote2,
} from "react-icons/md";

import Container from "@/components/container";
import classNames from "classnames";
import dispatchEvent from "@/utils/dispatchEvent";

function Nav() {
  const [links] = useState([
    {
      Icon: FaPlusSquare,
      className: "scale-90 hover:scale-95",
      onClick: () => dispatchEvent("add-note-open-dialog"),
    },
    {
      link: "/",
      Icon: MdStickyNote2,
    },
    {
      link: "/",
      Icon: MdOutlineCheckBox,
    },
    {
      link: "/",
      Icon: MdOutlineSettings,
    },
  ]);

  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  return (
    <Container type="nav" className="flex md:flex-col gap-2 text-4xl">
      {links.map(({ link, Icon, className, ...props }) =>
        link ? (
          <Link
            data-te-ripple-init
            data-te-ripple-color="primary"
            key={Icon.name}
            href={link}
            className={classNames(
              "outline-none focus-visible:text-primary hover:scale-105 transition-colors rounded-xl",
              className
            )}
            {...props}
          >
            <Icon />
          </Link>
        ) : (
          <button
            data-te-ripple-init
            data-te-ripple-color="primary"
            key={Icon.name}
            className={classNames(
              "outline-none focus-visible:text-primary hover:scale-105 transition-colors rounded-xl",
              className
            )}
            {...props}
          >
            <Icon />
          </button>
        )
      )}
    </Container>
  );
}

export default memo(Nav);
