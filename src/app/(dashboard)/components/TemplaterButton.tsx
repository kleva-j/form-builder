import { FormElement } from "@/dashboard/FormElements";
import { Button } from "@/components/ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

type Props = { formElement: FormElement };

export const TemplaterButton = ({ formElement }: Props) => {
  const { icon: Icon, label } = formElement.designerButtonElement;

  const draggable = useDraggable({
    id: `templater-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });

  return (
    <Button
      variant="outline"
      ref={draggable.setNodeRef}
      className={cn(
        "flex flex-col gap-2 h-[120px] w-[120px] cursor-grab",
        draggable.isDragging && "ring-2 ring-primary"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};

export const TemplaterDragOverlay = ({ formElement }: Props) => {
  const { icon: Icon, label } = formElement.designerButtonElement;
  return (
    <Button
      variant="outline"
      className="flex flex-col gap-2 h-[120px] w-[120px] cursor-grab"
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};
