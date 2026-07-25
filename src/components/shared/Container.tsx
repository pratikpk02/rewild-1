import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto max-w-7xl px-6 ${className}`}>{children}</div>
  );
}

export default Container;
