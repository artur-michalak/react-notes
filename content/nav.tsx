"use client";

import classNames from "classnames";
import { memo, useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { IoMdRefreshCircle } from "react-icons/io";
import { MdOutlineCheckBox, MdStickyNote2 } from "react-icons/md";

import { Container, RippleButton, RippleLink } from "@/components";
import dispatchEvent from "@/utils/dispatchEvent";
import { useQuery } from "@tanstack/react-query";
import { getNotes } from "@/server-actions";
import prepareItems from "@/utils/prepareItems";
import { Note } from "@/server-actions/get-notes";
import { revalidate } from "@/utils/revalidate";

interface NavProps {
  labels: string[];
  lang: string
}

function Nav(props: NavProps) {
  const { refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      getNotes().then((notes: Note[]) => prepareItems(notes, props.lang)),
  });
  const [links] = useState(
    [
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
        Icon: IoMdRefreshCircle,
        onClick: () => {
          revalidate('notes')
          refetch();
        },
      },
    ].map((p, i) => ({ ...p, title: props.labels[i] }))
  );

  return (
    <Container type="nav" className="flex md:flex-col gap-2 text-4xl">
      {links.map(({ link, Icon, className, ...props }) =>
        link ? (
          <RippleLink
            key={Icon.name}
            href={link}
            className={classNames(
              "outline-none focus-visible:text-primary hover:scale-105 transition-colors rounded-xl",
              className
            )}
            {...props}
          >
            <Icon />
          </RippleLink>
        ) : (
          <RippleButton
            key={Icon.name}
            className={classNames(
              "outline-none focus-visible:text-primary hover:scale-105 transition-colors rounded-xl",
              className
            )}
            {...props}
          >
            <Icon />
          </RippleButton>
        )
      )}
    </Container>
  );
}

export default memo(Nav);
