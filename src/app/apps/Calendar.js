import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export class Calendar extends Component {
  calendarComponentRef = React.createRef();
  constructor() {
    super();
    this.state = {
      calendarWeekends: true,
      calendarEvents: [
        { title: 'Event Now', start: new Date() }
      ]
    }
  }
  render() {
    return (
      <div>
        <div className="page-header">
        <h3 className="page-title">
          Calendar
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={evt =>evt.preventDefault()}>Apps</a></li>
            <li className="breadcrumb-item active" aria-current="page">Calendar</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="fc-external-events">
            <div className='fc-event'>
              <p>Deciphering Marketing Lingo For Small Business Owners</p>
              <p className="small-text"></p>
              <p className="text-muted mb-0">Georgia</p>
            </div>
            <div className='fc-event'>
              <p>Influencing The Influencer</p>
              <p className="small-text"></p>
              <p className="text-muted mb-0">Netherlands</p>
            </div>
            <div className='fc-event'>
              <p>Profiles Of The Powerful Advertising Exec Steve Grasse</p>
              <p className="small-text"></p>
              <p className="text-muted mb-0">Canada</p>
            </div>
          </div>
          <div className="mt-4">
            <p>Filter board</p>
            <div className="form-check form-check-primary">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultChecked />
                <i className="input-helper"></i>
                Project Board
              </label>
            </div>
            <div className="form-check form-check-danger">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultChecked />
                <i className="input-helper"></i>
                Kanban Board
              </label>
            </div>
            <div className="form-check form-check-info">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultChecked />
                <i className="input-helper"></i>
                Summary Board
              </label>
            </div>
            <div className="form-check form-check-success">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultChecked />
                <i className="input-helper"></i>
                Planner Board
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Fullcalendar</h4>
              {/* <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} /> */}
              <FullCalendar
                defaultView="dayGridMonth"
                header={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                ref={ this.calendarComponentRef }
                weekends={ this.state.calendarWeekends }
                events={ this.state.calendarEvents }
                dateClick={ this.handleDateClick }
              />         
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }

  handleDateClick = (arg) => {
    if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.setState({  // add new event data
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      })
    }
  }
}

export default Calendar
