const NOUN_EVENTS = [
  {
    id: 'e1',
    title: 'Nouns for everyone',
    description:
      'Ugh brunch tilde, +1 kale chips pickled chartreuse swag mixtape iPhone venmo 90s pork belly humblebrag biodiesel. Tacos enamel pin dreamcatcher deep v meditation blue bottle. Jean shorts hella coloring book, tonx',
    location: 'Bleeker Street 25, 12345 Manhattan',
    date: '2021-05-12',
    image: 'images/1.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Nouns for introverts',
    description:
      'YOLO offal celiac ramps pok pok. Chillwave copper mug readymade enamel pin, beard microdosing before they sold out thundercats schlitz hella. Health goth listicle blue bottle heirloom freegan salvia fashion axe pinterest next level hoodie iPhone single-origin coffee DSA godard cloud bread. Enamel pin mixtape meditation, kinfolk tbh',
    location: 'Dehavilland Street 5, 98765 New York',
    date: '2021-05-30',
    image: 'images/2.png',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Nouns for extroverts',
    description:
      'Copper mug poutine flannel mumblecore, vape waistcoat austin activated charcoal lomo edison bulb. Pickled stumptown narwhal, sriracha selvage vinyl normcore kitsch.',
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
