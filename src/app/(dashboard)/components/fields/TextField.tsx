"use client";

import { MdTextFields } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FormElementInstance,
  ElementsType,
  FormElement,
} from "@/dashboard/FormElements";

const type: ElementsType = "TextField";

const extraAttributes = {
  label: "Text field",
  helperText: "Helper text",
  required: false,
  placeholder: "Value here...",
};

type Attributes = typeof extraAttributes;

type CustomInstance = FormElementInstance & {
  extraAttributes: Attributes;
};

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerButtonElement: {
    icon: MdTextFields,
    label: "Field",
  },
  propertiesComponent: () => <div></div>,
  designerComponent: DesignerComponent,
  formComponent: () => <div></div>,
};

type Props = { elementInstance: FormElementInstance };

function DesignerComponent({ elementInstance }: Props) {
  const { extraAttributes } = elementInstance as CustomInstance;
  const { label, required, placeholder, helperText } = extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && "*"}
      </Label>
      <Input readOnly disabled placeholder={placeholder} />
      {helperText && <p className="text-muted-foreground text-[0.8rem]"></p>}
    </div>
  );
}
