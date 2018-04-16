import { ref, firebaseAuth, db } from '../config/constants'

export class habitModel{

  constructor(){
    this.error = ''
  }

  habitInsert (data){
    let user = firebaseAuth().currentUser
    let uid = null
    let userRef = null
    let habitKey = null
    let habitRef = null
    let sucess = true
    if (user !== null){
      uid = user.uid
      userRef = ref.child('users/'+uid)
      let userHabitRef = ref.child('users/'+uid+'/habit')


      userHabitRef = userHabitRef.push()
      habitKey = userHabitRef.key
      ref.child('users/'+uid+'/habit/'+habitKey).update({
        'habitKey' : habitKey
      })
      habitRef = ref.child('habit/')
      habitRef.update({ habitKey : ''})
      habitRef = ref.child('habit/'+habitKey)
      let res = habitRef.set({
        'habitName': data.habitName,
        'uid': uid,
        'habitStartDate': data.habitStartDate,
        'habitEndDate': data.habitEndDate,
        'categoryName': data.categoryName
      })
    }

  }

}
