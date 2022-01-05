function EventSummary (props) {
  const { title } = props;

  return (
    <section className="w-full h-[30vh] bg-gradient-to-bl from-[#008b79] to-[#1180a1]">
      <h1 className="m-0 pt-12 text-4xl text-center text-shadow-one text-white md:text-7xl">{title}</h1>
    </section>
  );
}

export default EventSummary;