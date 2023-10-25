"use client";

import { DragOverlayWrapper } from "@/dashboard/DragOverlayWrapper";
import { Preview } from "@/dashboard/PreviewBtn";
import { Publish } from "@/dashboard/PublishBtn";
import { SaveForm } from "@/dashboard/SaveBtn";
import { Console } from "@/dashboard/Console";
import { DndContext } from "@dnd-kit/core";
import { Form } from "@prisma/client";
import { useId } from "react";

export const FormBuilder = ({ form }: { form: Form }) => {
  const { name, published } = form;

  const id = useId();

  return (
    <DndContext id={id}>
      <main className="flex flex-col w-full">
        <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {name}
          </h2>
          <div className="flex items-center gap-2">
            <Preview />
            {!published && (
              <>
                <SaveForm />
                <Publish />
              </>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/pattern.svg)] dark:bg-[url(/pattern-dark.svg)]">
          <Console />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};
