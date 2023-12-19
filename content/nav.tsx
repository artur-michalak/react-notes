"use client";

import classNames from 'classnames';
import { memo, useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { MdOutlineCheckBox, MdOutlineSettings, MdStickyNote2 } from 'react-icons/md';

import Container from '@/components/container';
import RippleButton from '@/components/ripple-button';
import RippleLink from '@/components/ripple-link';
import dispatchEvent from '@/utils/dispatchEvent';

interface NavProps {
  labels: string[];
}

function Nav(props: NavProps) {
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
        link: "/",
        Icon: MdOutlineSettings,
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
