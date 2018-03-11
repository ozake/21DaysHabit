import { ref, firebaseAuth } from '../config/constants'

export function habitInsert (form){
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
    let userHabitRef = ref.child('users/'+uid+'/habit')
    userHabitRef = userHabitRef.push()
    habitKey = userHabitRef.key
  }
  habitRef = ref.child('habit/')
  habitRef = habitRef.update({ habitKey:'' })
  habitRef.set({
    'habitName': form.habitName.value,
    'uid': uid,
    'habitStartDate': form.habitStartDate.value,
    'habitEndDate': form.habitEndDate.value,
    'categoryName': form.categoryName.value,
  },(error) => {
    if(! error ){
      sucess = true
    }else{
      sucess = false
    }
  })
  return sucess
}
