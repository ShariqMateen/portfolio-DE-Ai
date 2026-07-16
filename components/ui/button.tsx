import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b18] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-[0_12px_35px_rgba(124,58,237,0.35)] hover:-translate-y-0.5 hover:from-violet-500 hover:to-purple-500 hover:shadow-[0_16px_45px_rgba(124,58,237,0.45)]",
        secondary:
          "border border-violet-400/20 bg-violet-400/8 text-slate-100 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-400/15",
        ghost:
          "text-slate-200 hover:bg-violet-400/10 hover:text-violet-200",
      },
      size: {
        default: "h-11",
        lg: "h-12 px-6 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
