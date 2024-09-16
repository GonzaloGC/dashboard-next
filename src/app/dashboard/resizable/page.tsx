import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Page() {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
