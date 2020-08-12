# Introduction

  Format the floating-point number to the specified number of digits, and truncate the extra 0 at the end of the floating-point number.

# Install

```
  npm install --save floor-format
```

# Import

```
  import floorFormat from 'floor-format'
  // or
  let floorFormat = require('floor-format')

  let { floorTrim, formatFloor } = floorFormat

  floorTrim(1.20) // 1.2
  floorTrim(1.0, 'MB', ' ') // 1 MB

  formatFloor(2.0810, 2) // 2.09
  
  // normal is abandoned,recommended to use floor
  formatFloor(2.0810, 2, 'normal') // 2.08

  formatFloor(2.0810, 2, 'floor') // 2.08
  
  // normal is abandoned,recommended to use floor
  formatFloor(2.0810, 1, 'normal') // 2

  formatFloor(2.0810, 1) // 2.1
  formatFloor(2.2810, 2, 'round) // 2.28
  formatFloor(2.2850, 2, 'round) // 2.29
  formatFloor(2.2950, 2, 'round) // 2.3

  formatFloor(0.1050, 2, 'ceil', {
    unit: '￥'
  }) // 0.11￥
```

# Updated
```
  Remove the format candidate value normal of the formatFloor function.But it will not affect the original normal formatting. The best solution is to use floor instead of the original normal.

  Example:

  formatFloor(2.0810, 2, 'normal')
  // the same as
  formatFloor(2.0810, 2, 'floor')
  
  Now, the formatFloor function increases the use of round, its purpose is to round the value.

  Example:

  formatFloor(2.0850, 2, 'round') // 2.09
```
