function calculateAge() {
    var dob = document.getElementById('dob').value;
    var dobDate = new Date(dob);
    var currentDate = new Date();
  
    var ageInMilliseconds = currentDate - dobDate;
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInYears = ageInDays / 365.25;
  
    var age = Math.floor(ageInYears);
  
    document.getElementById('result').innerHTML = 'Your age is: ' + age + ' years';
  }
  