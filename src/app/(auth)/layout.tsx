import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <div className="h-screen w-full grid place-items-center">{children}</div>;
}
