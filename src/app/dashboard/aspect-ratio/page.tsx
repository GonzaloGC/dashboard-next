import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Page() {
  return (
    // <div>
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9}>
          <Image src="public/img-nextjs.jpg" alt="Image" className="rounded-md object-cover" />
        </AspectRatio>
      </div>
    // </div>
  );
}
