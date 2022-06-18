import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-utils';

const HomePage = (props) => {
  console.log(props)
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  console.log(featuredEvents);
  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePage;
