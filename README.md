# Getter

## 1. About

Getter utility (for JavaScript) is just a tool to access objects and arrays nested contents through arrays of values used as *selectors*.

## 1. Installation

Import the file at:

    src/getter.js

It should work for both, NodeJS and browser environments.


## 2. Usage

You can use this utility like: 

    Getter(data, selector)

So for example, once it's loaded, this code should return ```true```:

    Getter(
        [0, {a: {b: [0, "foo"]}}, 2],
        [1, "a", "b", 1]
    ) === "foo";

You can test it even in the console of your favourite browser, if you want.


## 3. Why?

This utility exists in other libraries, like ```lodash``` or ```underscore```, but with this snippet, you can be sure that you don't depend on anything else for this functionality, which I find very important, as it can help you to solve problems that, otherwise, should require more effort.

Its purpose was to be a completely **minimalistic** approach too. 

It doesn't handle errors, but it's up to you to add 3 more lines and handle them in your preferred way.


## 3. License

Hah, license. I don't want to be rich in this shitty society. In fact, our capitalist society is a nasty one, and we all go in a ship that will crush, don't you see it yet? Damn, wake up, brainwashed people. How many wars you need to ignore, how much pain you will negate, until you realize that the evil that lives in the rich people, lives in your dreams too, in your unconclusive, artificial dreams...# Read this file
