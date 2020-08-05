const calcy = () =>{
  const physics = document.getElementById('physics').value;
  const maths = document.getElementById('maths').value;
  const chemistry = document.getElementById('chemistry').value;
  const biology = document.getElementById('biology').value;
  let grades = "";

if (physics == 0 || maths == 0 || chemistry == 0 || biology == 0) {
    alert('please Enter Your marks Then click Submit button')
} else {
const showBox = document.getElementById('showBox');
        showBox.style.display ='block';
  let totalGrades = parseFloat(physics) + parseFloat(maths) + parseFloat(chemistry) + parseFloat(biology);  // total marks
//   alert(totalGrades);

  let percentage = (totalGrades/400) * 100;     // get percentage
//   alert(percentage);
//grade colletion
  if(percentage >= 90  && percentage >= 100){
    grades = 'A+';
  }else if(percentage >= 80  && percentage <= 89){
     grades = 'A';
  }else if(percentage >= 70  && percentage <= 79){
     grades = 'A-';
  }else if(percentage >= 60  && percentage <= 69){
    grades = 'B';
 }else if(percentage >= 50  && percentage <= 59){
    grades = 'C';
 }else if(percentage >= 40  && percentage <= 49){
    grades = 'D';
 }else if(percentage >= 33  && percentage <= 39){
    grades = 'E';
 }else{
     grades = 'F';
  }
let getTotal =document.getElementById('getTotal').innerText;
let getPercentage =document.getElementById('getPercentage').innerText;
let getGrade =document.getElementById('getGrade').innerText;

  if(percentage >= 33){
    // document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Pass. `
    document.getElementById('showData').innerHTML =  'You are Pass.';
    getResult()
    // document.getElementById('getTotal').innerText = 'Out of 400 your total is ' + totalGrades;
    // document.getElementById('getPercentage').innerText = 'percentage is' + percentage + '%';
    // document.getElementById('getGrade').innerText = 'Your grade is' + grades;
  }
  else{
    // document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Fail. `
    document.getElementById('showData').innerHTML =  'You are Fail.';
    getResult()
    // document.getElementById('getTotal').innerText = 'Out of 400 your total is ' + totalGrades;
    // document.getElementById('getPercentage').innerText = 'percentage is' + percentage + '%';
    // document.getElementById('getGrade').innerText = 'Your grade is' + grades;

  }
  function getResult(){
    document.getElementById('getTotal').innerText = 'Out of 400 your total is ' + totalGrades;
    document.getElementById('getPercentage').innerText = 'percentage is' + ' ' + percentage + ' %';
    document.getElementById('getGrade').innerText = 'Your grade is' + ' ' + grades;
    }
}



//   let totalGrades = parseFloat(physics) + parseFloat(maths) + parseFloat(chemistry) + parseFloat(biology);
//   alert(totalGrades);

//   let percentage = (totalGrades/400) * 100;
//   alert(percentage);

//   if(percentage >= 90  && percentage >= 100){
//     grades = 'A+';
//   }else if(percentage >= 80  && percentage <= 89){
//      grades = 'A';
//   }else if(percentage >= 70  && percentage <= 79){
//      grades = 'A-';
//   }else if(percentage >= 60  && percentage <= 69){
//     grades = 'B';
//  }else if(percentage >= 50  && percentage <= 59){
//     grades = 'C';
//  }else if(percentage >= 40  && percentage <= 49){
//     grades = 'D';
//  }else if(percentage >= 33  && percentage <= 39){
//     grades = 'E';
//  }else{
//      grades = 'F';
//   }

//   if(percentage >= 33){
//     document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Pass. `

//   }
//   else{
//     document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Fail. `
//   }

  
}