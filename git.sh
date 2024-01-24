#!/bin/bash

datetime=$(date "+%Y-%m-%dT%H:%M%Z")
echo $datetime

# Prompt for a custom commit message
read -p "Commit meessage: " user_commit_msg

# Combine the date/time and user's commit message
full_commit_msg="$datetime - $user_commit_msg"

git add .
git commit -m \"$datetime\"
git push -u origin main
