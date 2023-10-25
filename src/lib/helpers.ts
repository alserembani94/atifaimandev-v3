import React from "react";

type ClassName = React.HTMLAttributes<HTMLElement>["className"];
export const twMerge = (...args: ClassName[]) => args.filter(Boolean).join(" ");