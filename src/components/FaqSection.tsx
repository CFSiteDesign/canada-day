import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What's included in the ticket?",
    a: "Entry to the main event at your chosen Mad Monkey. Just a heads up: check the specific event details for your location before you buy. Every Mad Monkey does things a little differently — for example, a few spots might swap the boat party for something else equally wild depending on the local setup.",
  },
  {
    q: "What if I'm already staying at Mad Monkey?",
    a: "Love that for you — you've already got the shortest commute home. But your bed doesn't get you into the party. You'll still need a ticket to get your wristband for the free-flow, and other event highlights like the pub crawl and the boat party. Don't be that person sitting in a quiet dorm alone while the rest of the hostel is going mental downstairs.",
  },
  {
    q: "How long is the DJ playing?",
    a: "We're going hard from the jump! Our DJs will be dropping sets right up until the bar closes. We're packing all that 15th Birthday energy into one massive session, so make sure you're front and center early — once the bar shuts, the music stops, and we all head out (or pass out).",
  },
  {
    q: "Can I book multiple locations?",
    a: "We love the energy, but physics is a hater. These parties are all happening on the same night, so you can't exactly be in two places at once. Pick the Mad Monkey you want to be at on Saturday 27 June and commit!",
  },
  {
    q: "Refund policy?",
    a: "No refunds, but the tickets are fully transferable. If you can't make it, don't stress — just pass your ticket to a mate and let them have the night of their life instead.",
  },
];

const FaqSection = () => {
  return (
    <section className="relative py-12 md:py-24 px-4 md:px-16 border-b-4 border-divider" style={{ backgroundColor: '#FF6B1F' }}>
      <h2 className="text-4xl md:text-8xl font-black uppercase text-center mb-8 md:mb-16 text-foreground leading-none tracking-tighter">
        Need to Know
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
