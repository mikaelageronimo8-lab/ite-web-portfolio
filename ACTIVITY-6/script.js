const message = document.getElementById("message")
const Button = document.getElementById("loadBtn")
const Button2 = document.getElementById("loadBtn2")

const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedules = document.getElementById("schedules")



function showMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking Account...")
        }, 2000)
    })
}

Button.addEventListener("click", function(){
    message.innerHTML = "Loading..."
    message.style.color = "green"

    showMessage()

    .then(function(result){
        message.innerHTML = result

        return new Promise(function(result){
            setTimeout(function(){
                result("Loading Profile...")
            },3000)
        })
    })
    
    .then(function(result){
        message.innerHTML = result

        return new Promise(function(result){
            setTimeout(function(){
                result("Welcome!")
            },3000)
        })
    })
    .then(function(result){
        message.innerHTML = result
    },3000)
})

Button.addEventListener("click", function(){
    message.innerHTML = "Loading Dashboard.."

    profile.innerHTML = "Loading Dashboard..."
    grades.innerHTML = "Loading Dashboard..."
    schedules.innerHTML = "Loading Dashboard..."

    const profilePromise = new Promise(function(resolve){
      
        setTimeout(function(){

            profile.style.color = "blue"
            profile.innerHTML = "Profile: Loaded";

            resolve();

        }, 1000);
    })
    
    const gradesPromise = new Promise(function(resolve){
      
        setTimeout(function(){

            grades.style.color = "violet"
            grades.innerHTML = "Grades: Loaded";

            resolve();

        }, 2000);
    })

    
    const schedulesPromise = new Promise(function(resolve){
      
        setTimeout(function(){

            schedules.style.color = "red"
            schedules.innerHTML = "Schedule: Loaded";

            resolve();

        }, 3000);
    })

    Promise.all([profilePromise, gradesPromise, schedulesPromise])

    .then(function(){
        message.innerHTML = "Dashboard Ready!"
    })
})


Button2.addEventListener ("click", function(){
    Button.style.backgroundColor = "blue"
    Button2.style.backgroundColor = "violet"

    message.innerHTML = "Loading Dashboard.."

    profile.innerHTML = "Loading Dashboard..."
    grades.innerHTML = "Loading Dashboard..."
    schedules.innerHTML = "Loading Dashboard..."

    const profilePromise = new Promise(function(resolve){
      
        setTimeout(function(){

            profile.style.color = "pink"
            profile.innerHTML = "Profile: Loaded";

            resolve();

        }, 1000);
    })
    
    const gradesPromise = new Promise(function(resolve){
      
        setTimeout(function(){

            grades.style.color = "orange"
            grades.innerHTML = "Grades: Loaded";

            resolve();

        }, 2000);
    })

    
    const schedulesPromise = new Promise(function(resolve){
      
        setTimeout(function(){

            schedules.style.color = "yellow"
            schedules.innerHTML = "Schedule: Loaded";

            resolve();

        }, 3000);
    })

    Promise.all([profilePromise, gradesPromise, schedulesPromise])

    .then(function(){
        message.innerHTML = "Dashboard Ready!"
    })
})


