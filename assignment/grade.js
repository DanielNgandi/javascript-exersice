function checkgrade( totalMarks, examType) {
    if ( examType === 'general'){

        if(totalMarks>=89 && totalMarks <100){
            return 'excellent you got an A+'
        }

        if(totalMarks>=80 && totalMarks <88){
            return 'good job you got an A'
        }

        if(totalMarks>=75 && totalMarks <79){
            return 'Well done you got B+'
        }

        if(totalMarks>=70 && totalMarks <74){
            return 'nive work you got B'
        }

        if(totalMarks>=60 && totalMarks <69){
            return 'You got c'
        }

        if(totalMarks <60){
            return 'you need to improve'
        }
    }
  if(examType === 'final'){
    if(totalMarks>=89 && totalMarks <100){
        return 'excellent you got an A+'
    }

    if(totalMarks>=80 && totalMarks <88){
        return 'good job you got an A'
    }

    if(totalMarks>=75 && totalMarks <79){
        return 'Well done you got B+'
    }

    if(totalMarks>=70 && totalMarks <74){
        return 'nive work you got B'
    }

    if(totalMarks>=60 && totalMarks <69){
        return 'You got c'
    }

    if(totalMarks <60){
        return 'you need to improve'
    }
    }
}
console.log(checkgrade(60, 'final'))