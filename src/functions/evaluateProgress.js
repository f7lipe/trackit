function evaluateProgess(doneHabits, habits){
    const progress = (doneHabits/habits)*100
    return progress.toFixed(0)
}

export default evaluateProgess