"use client";

import { ConsoleElementWrapper } from "@/dashboard/ConsoleElementWrapper";
import { ElementsType, FormElements } from "@/dashboard/FormElements";
import { UseConsole } from "@/dashboard/context/ConsoleContext";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { cn, generateRandomId } from "@/lib/utils";
import { Templater } from "@/dashboard/Templater";

export const Console = () => {
  const droppable = useDroppable({
    id: "console-drop-area",
    data: { isDesignerDropArea: true },
  });

  const { elements, addElements } = UseConsole();

  useDndMonitor({
    onDragEnd({ active, over }) {
      if (!active || !over) return;
      const isDesignerBtnElement = active.data.current?.isDesignerBtnElement;
      if (isDesignerBtnElement) {
        const type = active.data.current?.type;
        const id = generateRandomId();
        const newElement = FormElements[type as ElementsType].construct(id);
        addElements(0, newElement);
      }
    },
  });

  return (
    <div className="flex w-full h-full">
      <div className="p-4 w-full">
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto",
            droppable.isOver && "ring-2 ring-primary/20"
          )}
        >
          {!droppable.isOver && elements.length === 0 && (
            <p className="text-xl text-muted-foreground flex flex-grow items-center font-bold">
              Drop here
            </p>
          )}
          {droppable.isOver && elements.length === 0 && (
            <div className="p-4 w-full">
              <div className="h-[120px] rounded-md bg-primary/20"></div>
            </div>
          )}
          {elements.length > 0 ? (
            <div className="flex flex-col w-full gap-2 p-4">
              {elements.map((element) => (
                <ConsoleElementWrapper key={element.id} element={element} />
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Templater />
    </div>
  );
};
