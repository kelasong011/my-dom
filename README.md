# my-dom
利用原生js封装一些常见的dom操作

1.dom.create(string)  : 创建元素节点

2.dom.after(node,node1) : 在node之前创建一个节点

3.dom.before(node,node1) : 在node之后创建一个节点

4.dom.append(parent,node) : 在parent中添加一个元素

5.dom.remove(node) : 删除子节点

6.dom.attr(node,name,value) : 给一个元素节点设置属性

7.dom.text（node,string）: 给一个文本节点设置innerText属性

8.dom.html(node, string) ： 给一个html节点设置innerHTML属性

9.dom.style(node, name, value) : 设置样式

10.dom.class.add(node,classname) : 添加一个类名

11.dom.class.remove(node,classname) : 删除一个类名

12.dom.class.has(node,classname) : 判断节点是否有这个类名，有返回true，无返回false

13.dom.on(node,eventName,fn) : 给节点绑定事件

14.dom.off(node,eventName,fn) : 给节点移除事件

15.dom.find(slecter,scope) : 获取所有元素

16.dom.parent(node): 获取节点的父节点

17.dom.children(node) : 获取节点的子节点

18.dom.siblings(node) : 获取节点的兄弟节点

19.dom.each(nodeList,fn) : 遍历节点


