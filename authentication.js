// TODO: add password recovery mechanisms


function checkAuthentication() {
  var userName = document.getElementById('enterName')

  //TODO:
  // Add a regex to check the userName characters for validity

  var password = document.getElementById('enterPass')
  var reEntered = document.getElementById('reEnteredPass')

  if (password === reEntered) {
    // TODO: check if this can be done this way, because this returns a promise
    createAuthentication(userName, password)
  } else {
    // If the entered passwords do not match, refresh them
    password.textContent("")
    reEntered.textContent("")

    errorLog = document.getElementById("errorLog")
    errorLog = 'The passwords do not match, please re-enter'
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