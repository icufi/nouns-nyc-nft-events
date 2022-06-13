import { getAllEvents } from '../../nouns-NYC-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';

const AllEvents = () => {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEvents;
