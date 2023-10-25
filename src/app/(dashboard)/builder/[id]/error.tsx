"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

import Link from "next/link";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4">
      <h2 className="text-destructive text-2xl">Something went wrong!</h2>
      <Button asChild>
        <Link href={"/"}>Go back</Link>
      </Button>
    </div>
  );
}
