# what happend here?

I was wondering, how far i could take fibonacci with Javascript.
This led to the finding, that ```Javascript``` is very limited in the maximal size of an Integer,
so i tried to virtualize a huge number by subdeviding it to smaller portions.

First i parsed a numerical value to a ```string``` if necessary, after that i tried to tranfer this string to an array containing the number

now i serially parse the reversed arrays by adding them together and reversing it again

the finding at the end is, that this way of trying to calculate the next fibonacci number it blew up the vm heap after 35 findings

```ps1
> node index.js
Fibonacci: 2
Fibonacci: 3 
Fibonacci: 5 
Fibonacci: 8 
Fibonacci: 10
Fibonacci: 18
Fibonacci: 28
Fibonacci: 40
Fibonacci: 68
Fibonacci: 108
Fibonacci: 170
Fibonacci: 278
Fibonacci: 408
Fibonacci: 680
Fibonacci: 1088
Fibonacci: 1708
Fibonacci: 2790
Fibonacci: 4098
Fibonacci: 6808
Fibonacci: 10900
Fibonacci: 17008
Fibonacci: 27908
Fibonacci: 40910
Fibonacci: 68018
Fibonacci: 108928
Fibonacci: 170940
Fibonacci: 279068
Fibonacci: 400008
Fibonacci: 679070
Fibonacci: 1079078
Fibonacci: 1700108
Fibonacci: 2779180
Fibonacci: 4079288
Fibonacci: 6800408
Fibonacci: 10879690
```