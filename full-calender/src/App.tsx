import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'



const App = () => {

  return (
    <>
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin ]}
      initialView="timeGridWeek"
      headerToolbar= {{
        left: 'prev,today,next',
        center: 'title',
        right: 'timeGridWeek,timeGridDay,dayGridMonth' // user can switch between the two
      }}
      height="400px"
      events={[
        { title: 'event 1',
          date: new Date("2023-03-08T09:00:00.000Z"),
        },
        { title: 'event 2', date: '2023-03-10' }
      ]}
      selectable={true}
      eventClick={(eventData)=>{alert(eventData.event.title)}}
    />
    </>
  )
}




export default App;
