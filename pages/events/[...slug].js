import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../nouns-NYC-data';
import EventList from '../../components/events/EventList';

const FilteredEvents = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <p>Invalid Filter. Please adjust merch values.</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Noun events found.</p>
  }


  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
