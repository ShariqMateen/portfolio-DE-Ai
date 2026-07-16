import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-xs font-medium tracking-[0.16em] text-violet-200 uppercase",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
