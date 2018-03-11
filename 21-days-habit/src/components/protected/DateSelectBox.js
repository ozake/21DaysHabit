import React, { Component } from 'react'

export default class DateSelectBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      startDate: '2018-03-06',
      endDate: '2018-03-27'
    }
    this.dateChange = this.dateChange.bind(this)
    if(this.props.lebel == 'Start'){
      this.props.onSelect(this.state.startDate, this.props.lebel)
    }else{
      this.props.onSelect(this.state.endDate, this.props.lebel)
    }


  }

  componentDidMount(){

  }

  dateChange(event){
    if(this.props.lebel == 'Start'){
        this.setState({startDate: event.target.value})

    }else{
      this.setState({endDate: event.target.value})
    }
    this.props.onSelect(event.target.value, this.props.lebel)

  }

  render () {
    return (
      <div className="input_box2">
        <label HtmlFor="">{this.props.lebel}</label>
        <input type="date" value={ (this.props.lebel == "Start") ? this.state.startDate : this.state.endDate } onChange={this.dateChange} min={this.state.startDate} />
      </div>
    )
  }
}
