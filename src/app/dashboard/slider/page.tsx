import { Slider } from "@/components/ui/slider"

export default function Page() {
  return (
    <div>
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  );
}
