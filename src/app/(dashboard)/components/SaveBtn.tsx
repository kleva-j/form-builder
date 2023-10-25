import { Button } from "@/components/ui/button";
import { HiSaveAs } from "react-icons/hi";

export const SaveForm = () => {
  return (
    <Button variant="outline" className="gap-2">
      <HiSaveAs className="h-4 w-4" />
      Save
    </Button>
  );
};
