#!/bin/bash

# This script calculuates all the numbers in a given file ($3) 
# times a transform factor in percent ($1) ($2) times.

count=1
factor=$1
while [ $count -lt $2 ]; do
    factor=$((factor * $1 / 100))
    count=$((count + 1))
done

for number in $(cat $3); do
    # echo $number
    echo $((number * factor / 100))
done