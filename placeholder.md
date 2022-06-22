## web

```js
url: (protocol: string, host: string) => string;
protocol: () => any;
domain: (tld: string) => string;
tld: () => any;
email: (domain: string) => string;
ip: () => string;
```

## text

```js
paragraph: (min: any, max: any) => string;
cparagraph: (min: any, max: any) => string;
sentence: (min: any, max: any) => string;
csentence: (min: any, max: any) => string;
word: (min: any, max: any) => string;
cword: (pool: any, min: any, max: any, ...args: any[]) => string;
title: (min: any, max: any) => string;
ctitle: (min: any, max: any) => string;
```

## name

```js
first: () => any;
last: () => any;
name: (middle: any) => string;
cfirst: () => any;
clast: () => any;
cname: () => any;
```

## misc

```js
// dice
d4: () => any;
d6: () => any;
d8: () => any;
d12: () => any;
d20: () => any;
d100: () => any;
guid: () => string;
uuid: () => string;
id: () => any;
increment: (step: any) => number;
inc: (step: any) => number;
```

## image

```js
image: (
  size: any,
  background: any,
  foreground: any,
  format: any,
  text: any,
  ...args: any[]
) => string;
img: (...args: any[]) => any;
dataImage: (size: any, text: any) => any;
```

## date

```js
date: (format:string):string
time: (format:string):string
datetime:(format:string):string
now: (unit:'year'|'month'|'week'|'day'|'hour'|'minute'|'second', format:string):string
```

## color

```js
color: (
  name:
    | "navy"
    | "blue"
    | "aqua"
    | "teal"
    | "olive"
    | "green"
    | "lime"
    | "yellow"
    | "orange"
    | "red"
    | "maroon"
    | "fuchsia"
    | "purple"
    | "silver"
    | "gray"
    | "black"
    | "white"
) => any;
hex: () => string;
rgb: () => string;
rgba: () => string;
hsl: () => string;
```

## basic

```js
boolean: (min: any, max: any, cur: any) => any;
bool: (min: any, max: any, cur: any) => any;
natural: (min: any, max: any) => any;
integer: (min: any, max: any) => any;
int: (min: any, max: any) => any;
float: (min, max, dmin, dmax)=>number;
character: (pool:'lower'|'upper'|'number'|'symbol')=>string
char: (pool:'lower'|'upper'|'number'|'symbol')=>string
string: (pool:'lower'|'upper'|'number'|'symbol', min, max) =>string
str: (pool:'lower'|'upper'|'number'|'symbol', min, max) =>string
range: (start: any, stop: any, step: any, ...args: any[])
```

## address

```js
region: () => any;
province: () => any;
city: (prefix: any) => any;
county: (prefix: any) => any;
zip: (len: any) => string;
```

## extend

```js
unix: (millesimal: boolean) => number;
httpCode: ()=>number
```
