import { FormElementInstance, FormElements } from "@/dashboard/FormElements";

type Props = { element: FormElementInstance };

export const ConsoleElementWrapper = ({ element }: Props) => {
  const { type } = element;

  const DesignerElement = FormElements[type].designerComponent;

  return <DesignerElement elementInstance={element} />;
};
