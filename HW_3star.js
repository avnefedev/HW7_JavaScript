function checkAge(age){
    // var age_1
    let age_2 = 18 
    let age_3 = 60 
    let age_1 = Number(age)
    if (typeof(age_1) == "number"){
        if (age_1 < age_2){
            console.log("You don’t have access cause your age is " + age_1 + " It’s less then")
        } else if (age_1 >= age_2 && age_1 < age_3){
            console.log("Welcome!!!")
        } else if (age_1 > age_3){
            console.log("Keep calm and look Culture channel")
        } else{
            console.log("Technical work")
        }
    }else {
        console.log("Fail!!!!!!")
    }
    // console.log(typeof(age_1))
} 
checkAge('2')
checkAge(18)
checkAge(61)