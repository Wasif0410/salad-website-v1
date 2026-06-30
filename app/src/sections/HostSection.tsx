export default function HostSection() {
  return (
    <section
      id="host"
      className="bg-sage pt-[86px] pb-[120px]"
    >
      <div className="section-container max-w-[1120px] mx-auto text-center">
        <p
          className="text-[22px] leading-[30.8px] font-display text-text-primary"
        >
          Meet the Maestro
        </p>

        <h2
          className="font-display italic text-text-primary text-[54px] leading-none mt-4"
        >
          Giovanni Rossi
        </h2>

        <div
          className="mt-[38px] rounded-[6px] overflow-hidden mx-auto max-w-[1080px]"
        >
          <img
            src="/images/host-portrait.jpg"
            alt="Giovanni Rossi - The Maestro"
            className="w-full h-[600px] object-cover"
          />
        </div>

        <div className="mt-[52px] max-w-[700px] mx-auto space-y-[18px]">
          <p className="text-text-secondary text-[18px] leading-[25.2px]">
            For over 20 years, Giovanni has studied dough the way others study
            wine. His training was shaped by the old masters of Neapolitan
            pizza, then refined in the countryside of Tuscany, where slower
            rhythms allowed technique to evolve into instinct.
          </p>
          <p className="text-text-secondary text-[18px] leading-[25.2px]">
            His work has fed Michelin-star kitchens, private estates, and chefs
            who came for mastery. Those who learn from him don't leave with
            recipes. They leave with judgment, confidence, and a deeper
            relationship to their work.
          </p>
        </div>
      </div>
    </section>
  );
}
