"use client";

import { Tooltip, TooltipProps } from "antd";
import { ButtonHTMLAttributes, memo, useEffect } from "react";

export function RippleButton({title, ...props}: ButtonHTMLAttributes<HTMLButtonElement> & TooltipProps ) {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  return (
    <Tooltip title={title}>
      <button data-te-ripple-init data-te-ripple-color="primary" {...props} />
    </Tooltip>
  );
}

export default memo(RippleButton);
