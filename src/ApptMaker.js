import React, { Component}  from 'react';
import { postAppt, get } from './apiCalls';

class ApptMaker extends Component {
  constructor() {
    super()
    this.state = {
      pet: '',
      date: '',
      time: '',
      error: ''
    }
  }

  submitAppt = (event) => {
    event.preventDefault()
    const newAppt = {
      id: Date.now(),
      ...this.state
    }
    postAppt(newAppt)
    .then(data => this.props.addAppt(data))
    .catch(error => this.setState({error: error.message}))
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({pet: '', date: '', time: ''})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <form>
           <label>Pet</label>
           <input
          id='pet'
          type='text'
          name='pet'
          value={this.state.pet}
          placeholder='Which pet?'
          onChange={(event) => this.handleChange(event)}
          />
          <label>Date</label>
           <input
          id='date'
          type='text'
          name='date'
          value={this.state.date}
          placeholder='When?'
          onChange={(event) => this.handleChange(event)}
          />
          <label>Time</label>
           <input
          id='time'
          type='text'
          name='time'
          value={this.state.time}
          placeholder='What time?'
          onChange={(event) => this.handleChange(event)}
           />
           <button onClick={(event) => this.submitAppt(event)}>Make an Appt</button>
      </form>
    )
  }
}

// id: 2, pet: 'Patrice', date: 'June 4', time: '11:45'

export default ApptMaker;