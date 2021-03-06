import Head from 'next/head';
import { Fragment } from 'react';

import { getFeaturedEvents } from '../utils/api-data';
import EventList from '../components/events/EventList';

const Home = ({ events }) => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="text-5xl center mt-5">Featured Events</h1>
        <EventList items={events} />
      </section>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default Home;
