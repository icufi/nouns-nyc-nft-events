import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/events-search';

const AllEvents = (props) => {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: { events: events },
    revalidate: 60
  };
}

export default AllEvents;
