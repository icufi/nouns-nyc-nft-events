import Link from 'next/link'

import classes from './EventItem.module.css'

const EventItem = (props) => {
    const { title, image, date, location, id } = props;

    console.log(props)

    const readableDate = new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'});

    const addressFormatted = location.replace(', ', '\n')

    const directoryLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
              <time>{readableDate}</time>
          </div>
          <div><address>{addressFormatted}</address></div>
        </div>
        <div>
            <Link href={directoryLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
