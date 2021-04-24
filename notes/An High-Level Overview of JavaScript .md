# An High-Level Overview of JavaScript

# Definition of JavaScript

## High-level

高级语言抽象了很多底层的部分来自动帮我们管理内存。从而开发者不需要手动地管理内存。

高级语言的缺点是可能无法像底层语言一样优化程序，所以程序会相对比较慢。

## Garbage-collected

JS的一个特性，可以自动清空不用的内存

## Interpreted or just-in-time compiled

JS的引擎会实时将程序员所写的代码转换成机器码。

## Multi-pradigm(多重编程范式)

多范式编程语言指支持超过一种编程范型的编程语言。

例子：C++可以同时使用多种风格来写程序，比如面向对象和泛型编程（Generic programm in java）。

三种常见的编程范型：

1.procedural programming（过程式编程）

2.OOP（面向对象编程）

3.FP（函数式编程）

## Prototype-based object-oriented

JS中除了原始数据类型，其他都是object类型

由于prototypal inheritance，我们可以创建一个从prototype中创建一个array

这个prototype包含着所有array的method

所有我们创建的array都会继承prototype的method

## First class functions

functions可以作为变量。并且可以作为函数的参数和返回值。

```java
overlay.addEventListener("click", closeModal);
这边的closeModal就作为参数传进了函数里。
```

## Dynamic-typed

不用定义数据类型，程序在运行时会自动判断类型。变量的类型也可以被自动改变。