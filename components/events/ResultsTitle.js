import Button from '../ui/Button';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="title my-8 mx-auto w-11/12 max-w-2xl text-center">
      <h1 className="text-2xl font-bold">Events in {humanReadableDate}</h1>
      <div className="center my-4">
        <Button link='/events'>Show all events</Button>
      </div>
    </section>
  );
}

export default ResultsTitle;
