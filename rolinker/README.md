# rolinker deobfuscation

Partial deobfuscation of the malicious script found at rolinker.io

https://deobfuscate.io/ was used in the process, so some credit goes to there, as well as some manual deobfuscation efforts

## Analysis

The script will attempt to do the following actions at one point or another:
* Friend you to https://www.roblox.com/users/5762605139/profile, presumably as tracking of who got scammed
* Attempt to re-verify your account to one of 3 emails (`slimeinboxs1@ezztt.com`, `slimeinboxs2@ezztt.com`, `slimeinboxs3@ezztt.com`)
* Attempt to delete (and maybe buy?) certain items from/to your inventory. I'll be honest, can't really tell, since the variables are a mess (See line 505 / 892 / 2166)
* Drain group payouts of groups you own into your account, likely to be used for other parts of the script (See line 2051 for one occurance)
* Log you out locally after doing all the above after enabling 2fa via email (See line 911)

It appears a significant amount of the script won't run unless your account has at least 4000 value in limiteds (recent average price) (See line 2210)