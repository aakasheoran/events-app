import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import LogisticsItem from './LogisticsItem';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className="shadow rounded-md bg-[#2b2b2b] p-8 max-w-4xl w-10/12 -mt-12 -mb-12 ml-auto mr-auto text-[#d5eeeb] flex justify-between gap-4 flex-col items-center md:p-8 md:-mt-20 md:-mb-20 md:gap-12 md:flex-row md:items-stretch">
      <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-solid border-white md:h-80 md:w-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/${image}`} alt={imageAlt} className="h-40 w-40 object-cover md:h-80 md:w-80" />
      </div>
      <ul className="flex grow-[3] gap-8 justify-center items-center flex-col md:items-start">
        <LogisticsItem icon={CalendarIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={LocationMarkerIcon}>
          <address className="whitespace-pre">{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
