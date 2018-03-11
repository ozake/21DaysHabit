import React, { Component } from 'react'
import CheckList2 from './CheckList2'
import { ref } from '../../config/constants'

export default class ListViewBox extends Component {

  constructor(props){
      super(props);
      this.state = { habitData: null };
      //this.updateHabitName = this.updateHabitName.bind(this);
  }

  componentWillMount(props){

    const habit = async () => {
        let snapshot = await ref.child('habit/').once('value')
        let habitJson = snapshot.val()
        let habitName = habitJson.Hid_1.habitName
      return habitName
    }
    habit().then(result => this.updateHabitName(result))

    //console.log(name)

    /*
    ref.child('habit/').once('value').then(function(snapshot) {
      let habitJson = snapshot.val()
      //console.log(habitJson)
      //let habitObj =  JSON.parse(habitJson)
      habitName = habitJson.Hid_1.habitName
      console.log(habitName)
    })
    */

  }

  updateHabitName(name){
    this.setState({
      habitData: name
    })
  }

  render () {
    return (
      <section className="list_view_box">
        <div className="check_wrap">
          <div className="check_list_wrap">
            <div className="check_list">
              <input type="checkbox" name="" value="" id="self_dev1" />
              <label htmlFor="self_dev1">{ this.state.habitData }</label>
            </div>
            { //this.state.habitData.map((habit, i) => {
                        //return (<CheckList2 name={habit.title}
                        //                      key={i}/>);

                  }
            <div className="check_list2">
              <input type="checkbox" name="" value="" id="bookmark2" className="bookmark" />
              <label htmlFor="bookmark2" className="bookmark"></label>
            </div>
          </div>
          <div className="check_list_wrap">
            <div className="check_list">
              <input type="checkbox" name="" value="" id="self_dev2" />
              <label htmlFor="self_dev2">책 10장 읽기</label>
            </div>
            <div className="check_list2">
              <input type="checkbox" name="" value="" id="bookmark2" className="bookmark" />
              <label htmlFor="bookmark2" className="bookmark"></label>
            </div>
          </div>
          <div className="check_list_wrap">
            <div className="check_list">
              <input type="checkbox" name="" value="" id="health1" />
              <label htmlFor="health1">계단으로 출근하기</label>
            </div>
            <div className="check_list2">
              <input type="checkbox" name="" value="" id="bookmark3" className="bookmark" />
              <label htmlFor="bookmark3" className="bookmark"></label>
            </div>
          </div>
          <div className="check_list_wrap">
            <div className="check_list">
              <input type="checkbox" name="" value="" id="health2" />
              <label htmlFor="health2">하루 물 8잔 마시기</label>
            </div>
            <div className="check_list2">
              <input type="checkbox" name="" value="" id="bookmark4" className="bookmark" />
              <label htmlFor="bookmark4" className="bookmark"></label>
            </div>
          </div>
          <div className="check_list_wrap">
            <div className="check_list">
              <input type="checkbox" name="" value="" id="health3" />
              <label htmlFor="health3">취침 전 스트레칭</label>
            </div>
            <div className="check_list2">
              <input type="checkbox" name="" value="" id="bookmark5" className="bookmark" />
              <label htmlFor="bookmark5" className="bookmark"></label>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
