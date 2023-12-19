"use client";

import { ButtonHTMLAttributes, memo, useEffect } from "react";

export function RippleButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  return (
    <button data-te-ripple-init data-te-ripple-color="primary" {...props} />
  );
}

export default memo(RippleButton)
