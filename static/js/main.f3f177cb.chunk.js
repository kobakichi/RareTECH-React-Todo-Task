(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),d=n.n(a),o=n(6),r=n.n(o),c=(n(12),n(2)),i=n(0),s=function(e){var t=e.addInputValue,n=e.handleChangeAddInputTodo,a=e.handleAddTodo;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"ADD TASK"}),Object(i.jsx)("div",{className:"task-area",children:Object(i.jsx)("input",{type:"text",className:"inputArea",value:t,placeholder:"New Task",onChange:n,onKeyPress:a})})]})},l=function(e){var t=e.filteredList,n=e.handleRemoveTodo,a=e.handleOnEdit;return Object(i.jsx)("div",{className:"task-area",children:Object(i.jsx)("ul",{className:"todolist",children:t.map((function(e,t){return Object(i.jsxs)("li",{className:"todo",children:[Object(i.jsx)("input",{type:"text",className:"editForm",value:e.title,onChange:function(e){return a(t,e.target.value)}}),Object(i.jsx)("span",{onClick:function(){return n(e.id,e.title)},children:Object(i.jsx)("i",{className:"far fa-trash-alt"})})]},e.id)}))})})},u=function(e){var t=e.searchKeyword,n=e.handleChangeSearchKeyword;return Object(i.jsx)("div",{className:"task-area",children:Object(i.jsx)("input",{type:"text",className:"inputArea",placeholder:"Search Keyword",value:t,onChange:n})})},h=n(7),j=[{id:1,title:"Task1"},{id:2,title:"Task2"}],f=j.length,O=(n(14),function(){var e=function(){var e=Object(a.useState)(j),t=Object(c.a)(e,2),n=t[0],d=t[1],o=Object(a.useState)(""),r=Object(c.a)(o,2),i=r[0],s=r[1],l=Object(a.useState)(f),u=Object(c.a)(l,2),O=u[0],b=u[1],p=Object(a.useState)(""),v=Object(c.a)(p,2),g=v[0],x=v[1],m=n.filter((function(e){return(""===g||!!e.title.toString().toLowerCase().startsWith(g.toString().toLowerCase()))&&e}));return[{todos:n,addInputValue:i,searchKeyword:g},{handleChangeAddInputTodo:function(e){s(e.target.value)},handleAddTodo:function(e){if("Enter"===e.key&&""!==i){var t=O+1;d([].concat(Object(h.a)(n),[{id:t,title:i}])),b(t),s("")}},handleRemoveTodo:function(e,t){if(window.confirm(" \u300c".concat(t,"\u300d\u306etodo\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f"))){var a=n.filter((function(t){return t.id!==e}));d(a)}},handleOnEdit:function(e,t){var a=n.map((function(n,a){return a===e&&(n.title=t),n}));d(a)},handleChangeSearchKeyword:function(e){x(e.target.value)},filteredList:m}]}(),t=Object(c.a)(e,2),n=t[0],d=t[1];return Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("h1",{children:"Rare List"}),Object(i.jsx)(s,{addInputValue:n.addInputValue,handleChangeAddInputTodo:d.handleChangeAddInputTodo,handleAddTodo:d.handleAddTodo}),Object(i.jsx)(u,{todos:n.todos,value:n.searchKeyword,handleChangeSearchKeyword:d.handleChangeSearchKeyword}),Object(i.jsx)(l,{todos:n.todos,searchKeyword:n.searchKeyword,filteredList:d.filteredList,handleRemoveTodo:d.handleRemoveTodo,handleOnEdit:d.handleOnEdit})]})}),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,d=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),d(e),o(e),r(e)}))};r.a.render(Object(i.jsx)(d.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.f3f177cb.chunk.js.map