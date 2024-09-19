import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends PropsWithChildren, ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "icon" | "link";
  className?: string;
}

const baseStyle =
  "flex justify-center items-center min-w-44 px-4 py-2.5 rounded font-medium text-base focus:outline-none focus:ring-4 focus:ring-indigo-100";

const variants = {
  primary:
    "hover:bg-indigo-800 bg-indigo-700 text-white disabled:bg-neutral-100 disabled:text-neutral-400",
  secondary:
    "hover:bg-neutral-50 bg-white border-[0.5px] border-solid border-neutral-200 text-neutral-900 shadow-button disabled:shadow-none disabled:border-none disabled:bg-neutral-100 disabled:text-neutral-400",
  icon: "p-0.5 min-w-0 disabled:text-neutral-400",
  link: "px-0.5 py-0 min-w-0 text-neutral-600 hover:text-neutral-900 disabled:text-neutral-400",
};

function Button({
  children,
  variant = "primary",
  className,
  ...delegate
}: ButtonProps) {
  return (
    <button
      {...delegate}
      className={twMerge(baseStyle, variants[variant], className)}
    >
      {children}
    </button>
  );
}

export default Button;
