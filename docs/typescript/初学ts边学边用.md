---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /typescript/
---

# js 转 ts 疑惑点记录

## 接口

定义了一个接口 X，有若干属性
接着定义了一个变量 tom，他的类型是 X
则 tom 的形状必须与 x 一致
多一个属性也不行，少一个属性也不行

```ts
interface Person {
	name: string
	age: number
}

let tom: Person = {
	name: "Tom",
	age: 25,
}
```

> 接口一般首字母大写。有的编程语言中会建议接口的名称加上 " I " 前缀。

#### 可选属性

可以允许不要完全匹配一个形状，那么可以用可选属性：

```ts
interface Person {
	name: string
	age?: number
}

let tom: Person = {
	name: "Tom",
	age: 25,
}
```

但仍然不可以添加未定义的属性

#### 任意属性

```ts
interface Person {
	name: string
	age?: number
	[propName: string]: any
}

let tom: Person = {
	name: "Tom",
	gender: "male",
}
```

<span class='fw600'>一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集</span>即对于以上例子来说,任意属性的类型为`string | number` 的超集

## 数组

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5]
let fibonacci: number[] = [1, "1", 2, 3, 5] //不行
let fibonacci: Array<number> = [1, 1, 2, 3, 5] //数组泛型
```

## 函数

需要约束输入输出

```tsc
function sum(x: number, y: number): number {
	return x + y
}
```

#### 函数重载

```ts
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string | void {
	if (typeof x === "number") {
		return Number(x.toString().split("").reverse().join(""))
	} else if (typeof x === "string") {
		return x.split("").reverse().join("")
	}
}
```

## 参考

[阮一峰的 ts 入门教程](http://ts.xcatliu.com/basics/type-of-object-interfaces.html)

<style>
.fw600{
  font-weight:600
}
</style>
