// TODO: add password recovery mechanisms


function checkAuthentication() {
  var userName = document.getElementById('enterName').value

  //TODO:
  // Add a regex to check the userName characters for validity

  var password = document.getElementById("enterPass")
  var reEntered = document.getElementById("reEnterPass")

  // console.log(`name - ${userName}, password - ${password}, reEntered - ${reEntered}`)

  if (password.value === reEntered.value) {
    // TODO: check if this can be done this way, because this returns a promise
     createAuthentication(userName, password)
  } else {
    // If the entered passwords do not match, refresh them
    password.value = ''
    reEntered.value = ''

    console.log('passwords do not match')

    errorLog = document.getElementById("errorLog")
    // errorLog = 'The passwords do not match, please re-enter'
  }
}

// TODO:
function createAuthentication(userName, password) {

  return new Promise((resolve, reject) => {
    // TODO: connect to database asynchronously
    
  })
}

// TODO:
function openAuthentication() {

}