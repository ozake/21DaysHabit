import { ref, firebaseAuth, db } from '../config/constants'

export class habitModel{

  constructor(){
    this.error = ''
  }

  async habitInsert (data){
    let user = firebaseAuth().currentUser
    let uid = null
    let userRef = null
    let habitKey = null
    let habitRef = null
    let sucess = null
    if (user !== null){
      uid = user.uid
      userRef = ref.child('users/'+uid)
      userRef.update({ 'habit':'' })
      let userHabitRef = ref.child('users/'+uid+'/habit/')


      habitKey = userHabitRef.push().key
      console.log(habitKey)

      await userHabitRef.update({ habitKey : '' }).then((status)=>{console.log(status)})
    }
    /*
    habitRef = ref.child('habit/')
    habitRef.update({ habitKey : ''})
    habitRef = ref.child('habit/'+habitKey)
    habitRef.set({
      'habitName': data.habitName,
      'uid': uid,
      'habitStartDate': data.habitStartDate,
      'habitEndDate': data.habitEndDate,
      'categoryName': data.categoryName
    },(error) => {
      if(! error ){
        sucess = true
      }else{
        this.error = error
        sucess = false
      }
    })
    */
    return sucess
  }

}
