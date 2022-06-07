const NOUN_EVENTS = [
  {
    id: 'e1',
    title: 'Nouns for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in well.',
    location: 'Bleeker Street 25, 12345 Manhattan',
    date: '2021-05-12',
    image: 'images/1.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Nouns for introverts',
    description:
      'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    location: 'Dehavilland Street 5, 98765 New York',
    date: '2021-05-30',
    image: 'images/2.png',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Nouns for extroverts',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
    location: 'Mott Street 12, 10115 Brooklyn City',
    date: '2022-04-10',
    image: 'images/3.png',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return NOUN_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return NOUN_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = NOUN_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return NOUN_EVENTS.find((event) => event.id === id);
}
