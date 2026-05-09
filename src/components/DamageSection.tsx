import { useEffect, useRef, useState } from "react";
import cardDrag from "@/assets/card-dragshow.jpg";
import cardQuiz from "@/assets/card-queerquiz.jpg";
import cardDrinks from "@/assets/card-drinkdeals.jpg";

const CARDS = [
  {
    image: cardDrag,
    title: "Drag Show",
    description: "Lashes long, heels higher. Local queens lip-syncing for their lives — and yours.",
    badge: "Headline Act",
    rotation: "rotate-2",
  },
  {
    image: cardQuiz,
    title: "Queer Quiz",
    description: "Pop culture, icons, and unhinged Pride trivia. Rally your team and lift the rainbow trophy.",
    badge: "Big Prizes",
    rotation: "-rotate-2",
  },
  {
    image: cardDrinks,
    title: "Drink Deals",
    description: "Rainbow shots, glittery cocktails, and 2-for-1 specials. Hydrate (loosely).",
    badge: "All Night",
    rotation: "-rotate-1",
  },
];

const DamageCard = ({ card }: { card: typeof CARDS[number] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-card border-2 border-border p-4 md:p-6 group transition-transform hover:-translate-y-2 relative overflow-visible"
    >
      <div className="aspect-video bg-muted border-2 border-border mb-4 md:mb-6 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 md:grayscale md:group-hover:grayscale-0 ${
            isVisible ? "grayscale-0 scale-105" : "grayscale"
          } md:scale-100`}
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-black uppercase mb-2 md:mb-3">{card.title}</h3>
      <p className="text-base md:text-lg font-bold leading-snug">{card.description}</p>
      <div className={`mt-4 md:mt-6 inline-block bg-primary text-primary-foreground px-3 py-1 text-sm font-black uppercase ${card.rotation}`}>
        {card.badge}
      </div>
    </div>
  );
};

const DamageSection = () => {
  return (
    <section className="relative py-12 md:py-24 px-4 md:px-16 border-b-4 border-divider overflow-visible" style={{ backgroundColor: '#00B4D8' }}>
      <h2 className="text-4xl md:text-8xl font-black uppercase text-center mb-8 md:mb-16 text-primary-foreground leading-none tracking-tighter">
        Cheers Queers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto">
        {CARDS.map((card) => (
          <DamageCard key={card.title} card={card} />
        ))}
      </div>
      <p className="mt-8 md:mt-12 text-center text-base md:text-xl font-black uppercase text-primary-foreground max-w-3xl mx-auto leading-snug">
        Every location does Pride differently — check your hostel's lineup before booking.
      </p>
    </section>
  );
};

export default DamageSection;
