import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <div className="flex flex-grow w-full">{children}</div>;
}
