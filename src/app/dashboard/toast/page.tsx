import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"


export default function Page() {
  const { toast } = useToast()
  return (
    <div>
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </Button>
    </div>
  );
}
