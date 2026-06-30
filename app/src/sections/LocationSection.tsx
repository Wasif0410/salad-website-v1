export default function LocationSection() {
  const lowerImages = [
    {
      src: '/images/location-1.jpg',
      alt: 'Tuscan estate at sunrise',
      className: 'md:col-span-1',
    },
    {
      src: '/images/location-2.jpg',
      alt: 'Tuscan vineyards around the estate',
      className: 'md:col-span-1',
    },
  ];

  return (
    <section
      id="location"
      className="bg-sage rounded-t-[34px] -mt-8 relative z-10 pt-[134px] pb-[154px]"
    >
      <div className="w-full px-6">
        {/* Section Header */}
        <div className="text-center mb-[70px]">
          <h2 className="font-display italic text-text-primary text-[54px] leading-none">
            Set in the Heart of Tuscany
          </h2>
          <p className="mt-4 text-text-muted text-[18px] leading-[25.2px]">
            Where tradition, land, and craft intersect.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,925px)_450px] justify-center gap-6">
          {/* Large Image */}
          <div
            className="w-full rounded-[6px] overflow-hidden"
          >
            <img
              src="/images/location-main.jpg"
              alt="Tuscan estate aerial view"
              className="w-full h-[360px] object-cover"
            />
          </div>

          {/* Text Card */}
          <div
            className="w-full bg-sage-dark/70 rounded-[6px] p-8 flex flex-col justify-center"
          >
            <h3 className="font-display text-text-primary text-[30px] leading-[38px]">
              The masterclass takes place in a private Tuscan estate.
            </h3>
            <p className="mt-4 text-text-secondary text-[18px] leading-[25.2px]">
              This location is surrounded by olive groves and vineyards, far
              from tourist routes and distractions. The climate, ingredients,
              and pace of life here are essential to understanding the craft.
              Exact location details are shared after your application is
              approved.
            </p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto mt-6 grid grid-cols-1 md:grid-cols-[452px_minmax(0,924px)] gap-6">
          {lowerImages.map((image) => (
            <div
              key={image.src}
              className={`h-[315px] rounded-[6px] overflow-hidden ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
