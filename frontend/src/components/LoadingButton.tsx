import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export default function LoadingButton() {
  return (
    <Button disabled>
          <Loader2 mr-2 h-4 w-4 animate-sin />
          Loading
    </Button>
  );
}
