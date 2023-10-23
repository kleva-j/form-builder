import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <main className="flex w-full flex-grow">{children}</main>;
}
