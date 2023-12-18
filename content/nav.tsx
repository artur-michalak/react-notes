"use client";

import Link from "next/link";
import { memo, useEffect, useState } from "react";
import {
  MdOutlineCheckBox,
  MdOutlineSettings,
  MdStickyNote2,
} from "react-icons/md";

import Container from "@/components/container";

function Nav() {
  const [links] = useState([
    {
      link: "",
      Icon: MdStickyNote2,
    },
    {
      link: "",
      Icon: MdOutlineCheckBox,
    },
    {
      link: "",
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
    <Container type="nav" className="flex md:flex-col gap-2 text-4xl bg-white">
      {links.map(({ link, Icon }) => (
        <Link
          data-te-ripple-init
          data-te-ripple-color="primary"
          key={Icon.name}
          href={link}
          className="outline-none focus-visible:text-primary hover:scale-105 transition-colors rounded-xl"
        >
          <Icon />
        </Link>
      ))}
    </Container>
  );
}

export default memo(Nav);
