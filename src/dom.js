window.dom = {
  // 创建元素
  create(string) {
    const container = document.createElement("template"); //template标签可以容纳任何html标签
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },

  // 在node之后插入node2元素
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },

  // 在node的之前插入node2元素
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },

  // 在某个容器插入元素
  append(parent, node) {
    parent.appendChild(node);
  },
  wrap(node, parent) {
    dom.before(node, parent);
    dom.append(parent, node);
  },

  //删除元素
  remove(node) {
    node.parentNode.removeChild(node);
    return node; //返回删除对象
  },
  //删除node的所有子节点
  empty(node) {
    const { children } = node; // 结构赋值
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(x));
      x = node.firstChild;
    }

    return array;
  },

  //设置属性 重载
  attr(node, name, value) {
    //长度为3就设置属性
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      //长度为2就获取属性
      return node.getAttribute(name);
    }
  },

  //设置文本 适配
  text(node, string) {
    if (arguments.length === 2) {
      if (node.innerText) {
        node.innerText = string;
      } else {
        node.textContent = string;
      }
    } else if (arguments.length === 1) {
      if (node.innerText) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  //设置html
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  
  //设置样式
  style(node, name, value) {
    if (arguments.length === 3) {
      // node.style = 'color:red'
      node.style[name] = value;
    } else if (typeof name === "string") {
      return node["style"][name];
    } else if (name instanceof Object) {
      const obj = name;
      for (let key in obj) {
        node["style"][key] = obj[key];
      }
    }
  },

  //设置类
  class: {
    add(node, className) {
      // 添加一个类名
      node.classList.add(className);
    },
    remove(node, className) {
      // 删除一个类名
      node.classList.remove(className);
    },
    has(node, className) {
      // 判断是否含有这个类名
      return node.classList.contains(className);
    }
  },

  //绑定事件
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },
  //移除事件
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },

  //获取元素
  find(seleter, scope) {
    return (scope || document).querySelectorAll(seleter);
  },

  //找元素的父亲
  parent(node) {
    return node.parentNode;
  },

  //找元素的儿子
  children(node) {
    return node.children;
  },

  //找元素的兄弟
  siblings(node) {
    return Array.from(node.parentNode.children).filter(function(item) {
      return node !== item ? item : "";
    });
  },

  //找这个元素的弟弟
  next(node) {
    let x = node.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },

  //找这个元素的哥哥
  previous(node) {
    let x = node.previousSibling;
    while (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },

  //遍历所有节点
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  }
};
