# TOC
   - [Test the function of floorTrim in floor-format.](#test-the-function-of-floortrim-in-floor-format)
   - [Test the function of formatFloor in floor-format.](#test-the-function-of-formatfloor-in-floor-format)
<a name=""></a>
 
<a name="test-the-function-of-floortrim-in-floor-format"></a>
# Test the function of floorTrim in floor-format.
1.00移除冗余0为1.

```js
expect(floorTrim(1.00)).to.be.equal('1');
```

1.0500移除冗余0为1.05.

```js
expect(floorTrim(1.0500)).to.be.equal('1.05');
```

4.070自定义单位Kb输出为4.07Kb.

```js
expect(floorTrim(4.07, 'Kb')).to.be.equal('4.07Kb');
```

6.610自定义单位“Kb”和连接字符串“-”输出为“6.61-Kb”.

```js
expect(floorTrim(6.610, 'Kb', '-')).to.be.equal('6.61-Kb');
```

<a name="test-the-function-of-formatfloor-in-floor-format"></a>
# Test the function of formatFloor in floor-format.
0.0001默认格式化为0.01.

```js
expect(formatFloor(0.0001)).to.be.equal('0.01');
```

0.0001格式化为1位小数值为0.1.

```js
expect(formatFloor(0.0001, 1)).to.be.equal('0.1');
```

0.1050采用floor格式化值为0.1.

```js
expect(formatFloor(0.1050, 2, 'floor')).to.be.equal('0.1');
```

0.1050采用round格式化值为0.11.

```js
expect(formatFloor(0.1050, 2, 'round')).to.be.equal('0.11');
```

0.1050默认格式化，并传入单位“￥”值为“0.11￥”.

```js
expect(formatFloor(0.1050, 2, 'ceil', {
  unit: '￥'
})).to.be.equal('0.11￥');
```

