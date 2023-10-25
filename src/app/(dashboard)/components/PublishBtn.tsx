import { MdOutlinePublish } from "react-icons/md";
import { Button } from "@/components/ui/button";

export const Publish = () => {
  return (
    <Button className="gap-2 text-white bg-gradient-to-r from-indigo-400 to-purple-400">
      <MdOutlinePublish className="h-4 w-4" />
      Preview
    </Button>
  );
};
