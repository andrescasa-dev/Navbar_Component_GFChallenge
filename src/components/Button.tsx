import { PropsWithChildren } from "react";

function Button({ children }: PropsWithChildren) {
  return (
    <button className="flex justify-center items-center gap-1.5 grow w-44 bg-indigo-700 px-4 py-2.5 rounded font-medium text-base text-white">
      {children}
    </button>
  );
}

export default Button;
