import { CalendarIcon, ArrowRightIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import Button from "../ui/Button";

const EventItem = (props) => {
  const { title, image, location, date, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className="item shadow rounded-lg overflow-hidden bg-white m-4 flex flex-col gap-4 md:flex-row hover:shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={'/' + image} alt={title} className="h-40 w-full object-cover md:w-5/12 md:h-56" />
      <div className="content w-full p-2 text-center md:w-7/12 md:text-left">
        <div className="space-y-1">
          <h2 className="my-2 mx-0 md:my-1 md:mx-0 md:text-2xl md:font-bold">{title}</h2>
          <div className="flex gap-2 items-center">
            <CalendarIcon className="w-5 h-5" />
            <time className="text-[#666666] font-bold">{humanReadableDate}</time>
          </div>
          <div className="flex gap-2 items-center">
            <LocationMarkerIcon className="w-5 h-5" />
            <address className="my-2 mx-0 text-[#666666] whitespace-pre">{formattedAddress}</address>
          </div>
        </div>
        <div className="flex flex-col p-4 md:flex-row md:justify-center md:mb-0">
          <Button link={exploreLink}>
            <span className="align-middle">Explore Event</span>
            <span className="inline-flex items-center justify-center align-middle ml-2">
              <ArrowRightIcon className="w-5 h-5 hover:animate-ping" />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
