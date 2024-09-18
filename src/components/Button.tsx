import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren, ComponentProps<"button"> {
  intent?: "primary" | "secondary";
}

function Button({ children, intent = "primary", ...delegate }: ButtonProps) {
  return (
    <button
      {...delegate}
      className={[
        "flex justify-center items-center min-w-44 px-4 py-2.5 rounded font-medium text-base focus:outline-none focus:ring-4 focus:ring-indigo-100  disabled:bg-neutral-100 disabled:text-neutral-400",
        intent === "primary" && "hover:bg-indigo-800 bg-indigo-700 text-white",
        intent === "secondary" &&
          "hover:bg-neutral-50 bg-white border-[0.5px] border-solid border-neutral-200 text-neutral-900 shadow-button disabled:shadow-none disabled:border-none",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}

export default Button;
