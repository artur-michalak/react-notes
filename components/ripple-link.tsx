"use client";

import { Tooltip, TooltipProps } from 'antd';
import Link from 'next/link';
import { memo, useEffect } from 'react';

function RippleLink({ title, ...props }: Parameters<typeof Link>[0] & TooltipProps) {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  return (
    <Tooltip title={title}>
      <Link data-te-ripple-init data-te-ripple-color="primary" {...props} />
    </Tooltip>
  );
}

export default memo(RippleLink);
