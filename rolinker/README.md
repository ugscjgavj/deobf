# rolinker deobfuscation

Partial deobfuscation of the malicious script found at rolinker.io

https://deobfuscate.relative.im/ was used in the process, so some credit goes to there

Disclaimer: This is a low effort analysis, so don't expect anything especially exciting about the review of this script

## Analysis

The script will attempt to do the following actions at one point or another:
* Friend you to https://www.roblox.com/users/5762605139/profile, presumably as tracking of who got scammed (See line 220)
* Attempt to re-verify your account to one of 3 emails (`slimeinboxs1@ezztt.com`, `slimeinboxs2@ezztt.com`, `slimeinboxs3@ezztt.com`)
* Attempt to buy and then immediately delete certain items from the same user listed above to drain robux (See line 1016)
* Drain group payouts of groups you own into your account, likely to be used for other parts of the script (See line 931)
* Lock the account behind restrictive settings by setting its birthday to 2022 if you give it your pin (See line 585)
* Log you out locally after doing all the above and enabling 2fa via email (See line 292)

It appears a significant amount of the script won't run unless your account has at least 4000 value in limiteds (recent average price) (See line 1073)