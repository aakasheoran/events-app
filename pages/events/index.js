import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../utils/api-data';

const AllEventsPage = ({ events: allEvents}) => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <EventsSearch onSearch={findEventsHandler} />
      </section>
      <section>
        <EventList items={allEvents} />
      </section>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  if (!events) {
    return { props: {}}
  }

  return {
    props: {
      events
    },
    revalidate: 60
  }
}

export default AllEventsPage;