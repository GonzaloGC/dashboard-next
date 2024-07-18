import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const item = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
  },
  {
    id: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. It&apos;s animated by default, but you can disable it if you prefer.",
  },
];

export default function Page() {
  return (
    <div>
      {item.map((res) => (
        <Accordion type="single" collapsible className="w-full" key={res.id}>
          <AccordionItem value={res.id} >
            <AccordionTrigger>{res.question}</AccordionTrigger>
            <AccordionContent>
              {res.answer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
