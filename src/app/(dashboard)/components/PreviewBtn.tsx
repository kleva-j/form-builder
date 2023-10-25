import { Button } from "@/components/ui/button";
import { MdPreview } from "react-icons/md";

export const Preview = () => {
  return (
    <Button variant="outline" className="gap-2">
      <MdPreview className="h-4 w-4" />
      Preview
    </Button>
  );
};
