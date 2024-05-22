# rolinker deobfuscation

Partial deobfuscation of the malicious script found at rolinker.io

https://deobfuscate.relative.im/ was used in the process, so some credit goes to there

Disclaimer: This is a low effort analysis, so don't expect anything especially exciting about the review of this script

## Analysis

The script will attempt to do the following actions at one point or another:
* Friend you to https://www.roblox.com/users/5762605139/profile (@slimeBallBack8), presumably as tracking of who got scammed (See line 220)
* Attempt to re-verify your account to one of 3 emails (`slimeinboxs1@ezztt.com`, `slimeinboxs2@ezztt.com`, `slimeinboxs3@ezztt.com`)
* Attempt to buy and then immediately delete some items published by https://www.roblox.com/users/5739852458/profile (@pluginBoyBack, an already terminated user) to drain robux (See line 183 / 1016)
* Drain group payouts of groups you own into your account, likely to be used for other parts of the script (See line 931)
* Remove the account pin and lock the account behind restrictive settings by setting its birthday to 2022 if you give it your pin (See line 695 / 585)
* Log you out locally after doing all the above and enabling 2fa via email if the account did not already have an email (See line 292)

It appears a significant amount of the script won't run unless your account has at least 4000 value in limiteds (recent average price) (See line 1073)

## Analysis 2 (18th April)

The url used for hosting the scam webpage was just taken down, and now a new version is up

Here's whats changed between the old and new script:
* The script now has a set of around 12200 user IDs. If the user is any of them, the malicious code will run regardless of the user's RAP
* New emails for account hijacking (`eudora1767@wfv6.cse445.com`, `kelson3940@ed0w.cse445.com`, `bollay33901@tcsmi.cse445.com`, `purcell34784@vqbgl.cse445.com`, `eggett27115@z5v7.cse445.com`)

## Analysis 3

New version up again, new changes
* New emails (`zandfillpeice1@ezztt.com`, `zandfillpeice2@ezztt.com`, `zandfillpeice3@ezztt.com`) (and this time encrypted in base64... for some reason)
* TBD: Anything else change? dont think so

*Since the domains are now getting taken down at a frequent rate, analysis is not going to be announced unless something significant changed*