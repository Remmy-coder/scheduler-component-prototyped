import React from 'react';
import { Scheduler, AgendaView, TimelineView, DayView, WeekView, MonthView } from '@progress/kendo-react-scheduler';
// import { sampleData, displayDate } from "./events-utc";
import { data, displayDate } from "./data";
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <div className="App">
       <Scheduler data={data} defaultDate={displayDate}>
        <DayView />
        <WeekView />
        <MonthView />
      </Scheduler>
    </div>
  );
}

export default App;
