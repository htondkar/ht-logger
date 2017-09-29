# ht-logger
A mini tool to log colorful text into browser console with font-size option

## Install
`npm install --save ht-logger`

## How to use
`import logger from 'ht-logger'`

logger accepts 3 arguments: 1. text to log 2.color code (or just css color names, default: aqua) 3. font size (defualt 18)

using default values:
`logger(text)`
passing your options:
`logger('text', '#ABCDEF', 18)`
