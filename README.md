# simple-getter

## 1. About

The simple-getter utility (for JavaScript) is just a tool to access objects and arrays nested contents through arrays of values used as *selectors*.

## 1. Installation

Import the file at:

    src/simple-getter.js

It should work for both, NodeJS and browser environments.

## 2. Usage

You can use this utility like: 

    SimpleGetter(data, selector)

So for example, once it's loaded, this code should return ```true```:

    SimpleGetter(
        [0, {a: {b: [0, "foo"]}}, 2],
        [1, "a", "b", 1]
    ) === "foo";

You can test it even in the console of your favourite browser, if you want.


## 3. Why?

This utility exists in other libraries, like ```lodash``` or ```underscore```, but with this snippet, you can be sure that you don't depend on anything else for this functionality, which I find very important, as it can help you to solve problems that, otherwise, should require more effort.

Its purpose was to be a completely **minimalistic** approach too. 

It doesn't handle errors, but it's up to you to add 3 more lines and handle them in your preferred way.


## 3. License

It is ok.