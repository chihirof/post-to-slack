#!/bin/sh

# $1 ... actual
# $2 ... expected

if [ "$1" = "$2" ]
then
  exit 0
else
  exit 1
fi
