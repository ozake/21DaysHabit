import React, { Component } from 'react'
import DateSelectBox from './DateSelectBox.js'

export default class HabitOption extends Component {
  constructor(props){
    super(props)
    this.selectUpdate = this.selectUpdate.bind(this)
    this.state = {
      category:"건강"
    }
  }

  selectUpdate(date, flag){
    this.props.onDate(date,flag)

  }

  changeCategory(){

  }

  render () {
    return (
      <div>
        <div className="input_wrap2">
          <DateSelectBox lebel={this.props.startLebel} onSelect={this.selectUpdate} />
          <DateSelectBox lebel={this.props.finshLebel} onSelect={this.selectUpdate} />
        </div>
        <div className="input_wrap3">
          <div className="title">Category</div>
          <div className="input_wrap2">
            <div className="input_box3">
              <input type="radio" name="categoryName" id="category1" value="건강" />
              <input type="radio" name="categoryName" id="category2" value="저축/재테크" />
              <label htmlFor="category1">건강</label>
              <label htmlFor="category2">저축/재테크</label>
            </div>
            <div className="input_box3">
              <input type="radio" name="categoryName" id="category3" value="다이어트" />
              <input type="radio" name="categoryName" id="category4" value="종교" />
              <label htmlFor="category3">다이어트</label>
              <label htmlFor="category4">종교</label>
            </div>
            <div className="input_box3">
              <input type="radio" name="categoryName" id="category5" value="자기계발" />
              <input type="radio" name="categoryName" id="category6" value="기타" />
              <label htmlFor="category5">자기계발</label>
              <label htmlFor="category6">기타</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

HabitOption.defaultProps = {
    startLebel: 'Start',
    finshLebel: 'Finish',
};
