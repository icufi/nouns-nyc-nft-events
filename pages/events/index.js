import {getAllEvents} from '../../nouns-NYC-data';
import EventList from '../../components/events/EventList';

const AllEvents = () => {

  const events = getAllEvents();


  return <div>
<EventList items={events}/>
  </div>;
};

export default AllEvents;
