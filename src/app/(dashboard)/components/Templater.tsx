import { FormElementInstance } from "@/dashboard/FormElements";
import { TemplaterButton } from "@/dashboard/TemplaterButton";
import { TextFieldFormElement } from "@/dashboard/fields";

export const Templater = () => {
  return (
    <aside className="flex flex-col flex-grow gap-2 w-[400px] max-w-[400px] border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      <TemplaterButton formElement={TextFieldFormElement} />
    </aside>
  );
};
