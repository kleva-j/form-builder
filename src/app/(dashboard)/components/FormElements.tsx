import { TextFieldFormElement } from "@/dashboard/fields";

export type ElementsType = "TextField";
// | "TitleField"
// | "SubTitleField"
// | "ParagraphField"
// | "SeparatorField"
// | "SpacerField"
// | "NumberField"
// | "TextAreaField"
// | "DateField"
// | "SelectField"
// | "CheckboxField";

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  designerButtonElement: {
    icon: React.ElementType;
    label: string;
  };
  designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
