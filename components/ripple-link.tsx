"use client";

import Link from "next/link";
import { memo, useEffect } from "react";

function RippleLink(props: Parameters<typeof Link>[0]) {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  return <Link data-te-ripple-init data-te-ripple-color="primary" {...props} />;
}

export default memo(RippleLink)
