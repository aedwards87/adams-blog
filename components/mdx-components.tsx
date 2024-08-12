import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import { cn } from "@/lib/utils";

const useMDXComponents = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  h1: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponents(code);
  return <Component components={components} />;
}
