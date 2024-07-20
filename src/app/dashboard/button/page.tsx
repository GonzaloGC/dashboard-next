import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-5">
      <Button>Button</Button>
      <Button variant='outline'>Button</Button>
      <Button variant='ilumination'>Button</Button>
    </div>
  );
}
