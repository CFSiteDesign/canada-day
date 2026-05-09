import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What's included in the ticket?",
    a: "Entry to the main Canada Day blowout at your chosen Mad Monkey. Heads up: check the specific event details for your location before you buy. Every Mad Monkey does things a little differently — a few spots might swap the boat party for something else equally wild depending on the local setup.",
  },
  {
    q: "What if I'm already staying at Mad Monkey?",
    a: "Love that for you — shortest commute home in town. But your bed doesn't get you into the party. You'll still need a ticket for your wristband, the free-flow, the maple shots, and event highlights like the pub crawl. Don't be that person sitting in a quiet dorm while the rest of the hostel is going full Canadian downstairs.",
  },
  {
    q: "How long is the DJ playing?",
    a: "We're going hard from the jump, eh. Our DJs will be dropping sets right up until the bar closes. We're packing all that Canada Day energy into one massive session, so make sure you're front and centre early — once the bar shuts, the music stops, and we all head out (or pass out).",
  },
  {
    q: "Can I book multiple locations?",
    a: "We love the energy, but physics is a hater. Every party kicks off on the same night, so you can't be in two places at once. Pick the Mad Monkey you want to be at on Wednesday 1st July and commit!",
  },
  {
    q: "Do I have to be Canadian?",
    a: "Absolutely not. Bring a maple leaf, learn one Tragically Hip lyric, master the word 'eh', and you're basically honorary. The whole point is everyone parties like a Canuck for a night.",
  },
  {
    q: "Refund policy?",
    a: "No refunds, but the tickets are fully transferable. If you can't make it, don't stress — just pass your ticket to a mate and let them have the night of their life instead. Sorry about that.",
  },
];

const FaqSection = () => {
  return (
    <section className="relative py-12 md:py-24 px-4 md:px-16 border-b-4 border-divider" style={{ backgroundColor: '#FFFFFF' }}>
      <h2 className="text-4xl md:text-8xl font-black uppercase text-center mb-8 md:mb-16 text-foreground leading-none tracking-tighter">
        Need to Know, Eh?
      </h2>
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border-2 border-border px-4 md:px-6"
            >
              <AccordionTrigger className="text-left font-black uppercase text-base md:text-2xl hover:no-underline py-4 md:py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg font-bold leading-snug pb-4 md:pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
