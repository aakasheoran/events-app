import EventItem from './EventItem';

const EventList = ({ items }) => {
  
  return (
    <ul className="w-11/12 max-w-2xl mt-8 mb-8 ml-auto mr-auto" >
      {items.map((event) => {
        return <EventItem
          key = {event.id}
          id = {event.id}
          title = {event.title}
          image = {event.image} 
          location = {event.location}
          date = {event.date}
        />
      })}
    </ul>
  )
}

export default EventList;
