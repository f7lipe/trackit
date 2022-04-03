function countDone(habits){
    let done = 0 
     for(let habit of habits){
         if(habit.done){
             done++
         }
     }
     return done
 }

 export default countDone