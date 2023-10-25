import { ElementsType, FormElements } from "@/dashboard/FormElements";
import { useDndMonitor, DragOverlay, Active } from "@dnd-kit/core";
import { TemplaterDragOverlay } from "@/dashboard/TemplaterButton";
import { useState } from "react";

export const DragOverlayWrapper = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart(event) {
      setDraggedItem(event.active);
    },
    onDragCancel(event) {
      setDraggedItem(null);
    },
    onDragEnd() {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No drag overlay</div>;

  const isTemplaterBtnElement = draggedItem.data.current?.isDesignerBtnElement;

  if (isTemplaterBtnElement) {
    const type = draggedItem.data.current?.type as ElementsType;
    node = <TemplaterDragOverlay formElement={FormElements[type]} />;
  }

  return <DragOverlay>{node}</DragOverlay>;
};
