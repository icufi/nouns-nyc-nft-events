import Link from 'next/link'
import DateIcon from '../icons/icons/date-icon'

import Button from '../ui/button';

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
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
              <time>{readableDate}</time>
          </div>
          <div className={classes.address}><address>{addressFormatted}</address></div>
        </div>
        <div className={classes.actions}>
            <Button link={directoryLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
