import { useState, useMemo } from "react";
import { PROPERTIES, COUNTRIES, type CountryFilter } from "@/data/properties";
import ScatteredStars from "@/components/ScatteredStars";

const PropertySelector = () => {
  const [filter, setFilter] = useState<CountryFilter>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      const matchesCountry = filter === "All" || p.country === filter;
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.country.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCountry && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <section id="selector" className="relative py-12 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)' }}>
      <ScatteredStars />
      <div className="px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-8xl font-black uppercase mb-6 md:mb-8 text-white text-center md:text-left leading-none">
          Pick your<br className="md:hidden" /> Pride<br />party
        </h2>

        <div className="sticky top-0 z-20 bg-background py-3 md:py-4">
          <div className="flex flex-col gap-4 md:gap-6">
            <input
              type="text"
              placeholder="SEARCH LOCATION..."
              className="w-full p-4 md:p-6 text-lg md:text-2xl font-black border-2 border-border uppercase outline-none focus:bg-card bg-card"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex overflow-x-auto pb-3 md:pb-4 gap-2 md:gap-4 no-scrollbar">
              {COUNTRIES.map((country) => (
                <button
                  key={country}
                  onClick={() => setFilter(country)}
                  className={`whitespace-nowrap px-4 md:px-8 py-2 md:py-3 font-black uppercase text-sm md:text-lg border-2 border-border transition-all ${
                    filter === country
                      ? "bg-primary text-primary-foreground translate-x-1 translate-y-1 shadow-none"
                      : "bg-card text-foreground hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-card border-2 border-border flex flex-col p-5 md:p-8 brutalist-card-hover group"
              >
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <span className="bg-primary text-primary-foreground px-2 md:px-3 py-1 text-xs font-black uppercase">
                    {prop.country}
                  </span>
                   <span className="text-secondary font-black uppercase text-xs animate-pulse">
                    🏳️‍🌈 PRIDE ACCESS
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 md:mb-12 flex-grow whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-primary transition-colors">
                  {prop.name}
                </h3>
                {prop.url ? (
                  <a
                    href={prop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-primary text-primary-foreground font-black uppercase py-3 md:py-4 border-2 border-border text-sm md:text-base hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                  >
                    GET ACCESS 🏳️‍🌈
                  </a>
                ) : (
                  <span className="block w-full text-center bg-muted text-muted-foreground font-black uppercase py-3 md:py-4 border-2 border-border text-sm md:text-base cursor-not-allowed">
                    COMING SOON
                  </span>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 md:py-20 text-center">
              <p className="text-2xl md:text-4xl font-black uppercase">Nothing found. Keep drinking.</p>
            </div>
          )}
        </div>

        <div className="mt-8 md:mt-12 text-center text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Showing {filteredProperties.length} of {PROPERTIES.length} destinations
        </div>
      </div>
    </section>
  );
};

export default PropertySelector;
