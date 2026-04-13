export default function Stats({ data }) {
  return (
    <section className="py-4 px-2 lg:px-4 bg-[var(--primary-dark)]">
      
      <div className="container-wrapper grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {data.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 transition duration-300 hover:-translate-y-2"
          >

            <h2 className="theme-h2 text-[var(--text-light)]">
              {item.number}
            </h2>

            {item.icon && (
              <item.icon className="text-[var(--secondary-gold)] text-2xl md:text-3xl opacity-90" />
            )}

            <p className="script-subtitle text-lg text-[var(--text-light)]">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}