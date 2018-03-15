import React, { Component } from 'react'
import Header from '../Header'
import HabitOption from './HabitOption'
import { habitModel } from '../../model/HabitModel.js'
import { Redirect } from 'react-router-dom'

export default class AddList extends Component {

  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      habitStartDate:'',
      habitEndDate:'',
      categoryName:'',

    }
    this.habitDateChange = this.habitDateChange.bind(this)
    this.habitCategoryChange = this.habitCategoryChange.bind(this)
  }

  handleSubmit = (event) => {
    if(this.refs.habitName.value === '' ){
      alert("습관명을 입력해주세요.")
    }else if(this.state.categoryName === ''){
      alert("카테고리를 선택해주세요.")
    }else{
      event.preventDefault()
      let refs = this.refs
      // alert(refs.habitName.value)
      // alert(this.state.habitStartDate)
      // alert(this.state.habitEndDate)
      let submitData = {
        habitName : refs.habitName.value,
        habitStartDate : this.state.habitStartDate,
        habitEndDate : this.state.habitEndDate,
        categoryName : this.state.categoryName
      }
      //console.log(submitData)
      const model = new habitModel()
      let flag = model.habitInsert(submitData)
      if(flag){
        return ( <Redirect to='/main' /> )
      }else{
        console.log(model.error)
        alert("OMG!! 문제가 발생했어요! 다시시도해주세요~")
      }
    }



    // habitInsert(this.habit)
    //   .catch((error) => {
    //       this.setState(setErrorMsg('Invalid username/password.'))
    //     })
  }

  habitDateChange(date,flag) {
    if(flag === 'Start'){
      this.setState({ habitStartDate: date })
    }else{
      this.setState({ habitEndDate: date })
    }
  }
  habitCategoryChange(event){
    //alert()
    if(event.target.name === "categoryName"){
      this.setState({categoryName: event.target.value})
    }
  }




  render () {
    return (
        <div>
          <Header title='' />
          <form onSubmit={this.handleSubmit} onChange={this.habitCategoryChange}>
            <textarea ref="habitName" rows="8" cols="80" placeholder="새로운 습관을 입력해보세요"></textarea>
            <HabitOption onCategory={this.habitCategoryChange} onDate={this.habitDateChange} />
            <button type="submit" className="bt_blue bt_bottom">시작해볼까요!</button>
          </form>
        </div>
    )
  }
}
