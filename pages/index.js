import Head from 'next/head';

import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-utils';

const HomePage = (props) => {

  return (
    <div>
      <Head>
        <title>Noun Events</title>
        <meta name="description" content="Find your favorite Nounders events around NYC." />
      </Head>
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();


  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}

export default HomePage;
