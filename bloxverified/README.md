# bloxverified deobfuscation

Partial deobfuscation of the malicious script found at bloxverified.com

https://deobfuscate.relative.im/ was used in the process, so some credit goes to there

Disclaimer: This is a low effort analysis, so don't expect anything especially exciting about the review of this script

## Analysis

This script is just a reboot of the rolinker.io scam (which I've already reported on in this repository), so there's not much to comment on here. Basic notes include every email being from `gazeta.pl` and a different scam-tracking account (`slimeBallBack11`, `7436036020`). They also seem to check your inbox messages to make sure you're running it on an account that actually originally received the scam message, which is new. Weirdly enough, it doesn't seem to auto-extract assets this time. If an account has >5000 RAP, it'll get its birthday and email and pin screwed with, and thats about it.