# eslint-config-wx

## 编码规范

1. 基本遵循 [AirBnb base编码规范](https://github.com/airbnb/javascript)；
2. 要求禁止使用拖尾逗号；
3. 关闭了airbnb要求禁止匿名函数
4. 最长代码限制改为200；
5. 关闭禁止使用一元操作符；
6. 关闭禁止对函数参数再赋值 ；
7. 关闭要求每个作用域有多个变量声明；
8. 关闭要求或禁止在变量声明周围换行；
9. 支持es7的语法
10. 支持浏览器browser的全局变量

## 开始

### 1. 安装 eslint
配置教程直通车[使用教程](http://www.yuhuajian.com/2017/05/15/eslint1/)

### 2. 安装 npm 依赖

在项目根目录下执行：

```bash
npm install eslint-config-alan --save-dev
```
### 3 创建 `.eslintrc` 文件

指定使用 alan 编码规范。在项目根目录下创建 `.eslintrc` 文件。

```js
{
  // 使用 RNX 编码规范
  extends: 'eslint-config-alan',
}
```