(this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]=this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(9),r=n.n(a),s=n(4),i=n(7),o=n(8),l=n(2),j=n(0);var u=function(e){var t=e.date,n=e.description,c=e.category,a=e.amount;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t}),Object(j.jsx)("td",{children:n}),Object(j.jsx)("td",{children:c}),Object(j.jsx)("td",{children:a})]})};var b=function(e){var t=e.data;return Object(j.jsx)("table",{className:"table table-light",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsx)("h3",{className:"ui center aligned header",children:"Date"})}),Object(j.jsx)("th",{children:Object(j.jsx)("h3",{className:"ui center aligned header",children:"Description"})}),Object(j.jsx)("th",{children:Object(j.jsx)("h3",{className:"ui center aligned header",children:"Category"})}),Object(j.jsx)("th",{children:Object(j.jsx)("h3",{className:"ui center aligned header",children:"Amount"})})]}),t.map((function(e){return Object(j.jsx)(u,{date:e.date,description:e.description,category:e.category,amount:e.amount},e.id)}))]})})};var h=function(e){var t=e.searchFunction,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){t(r)}),[r]),Object(j.jsxs)("form",{className:"d-flex",children:[Object(j.jsx)("input",{className:"formcontrol",type:"text",placeholder:"Search transactions",onChange:function(e){e.preventDefault(),s(e.target.value)},id:"search"}),Object(j.jsx)("button",{className:"btn btn-outline-info ms-1",id:"searchBtn",children:"SEARCH"})]})};var d=function(e){var t=e.fetchFunction,n=Object(c.useState)(null),a=Object(l.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){t(r)}),[r]),Object(j.jsx)("div",{className:"ui segment",children:Object(j.jsxs)("form",{className:"formbox",onSubmit:function(e){e.preventDefault();var t=e.target.date.value,n=e.target.description.value,c=e.target.category.value,a=e.target.amount.value;s({date:t,description:n,category:c,amount:a}),e.target.reset()},children:[Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("input",{type:"date",name:"date"}),Object(j.jsx)("input",{type:"text",name:"description",placeholder:"Description"}),Object(j.jsx)("input",{type:"text",name:"category",placeholder:"Category"}),Object(j.jsx)("input",{type:"number",name:"amount",placeholder:"Amount"}),Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn btn-outline-info ms-1",type:"submit",children:"Add Transaction"})]})})};var O=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(Object(o.a)(n)),u=Object(l.a)(r,2),O=u[0],f=u[1],p=Object(c.useState)(Object(o.a)(n)),x=Object(l.a)(p,2);function m(){return(m=Object(i.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://localhost:8001/transactions").then((function(e){return e.json()})).then((function(e){var n=e.filter((function(e){return e.description.includes(t)}));a(n),console.log(n)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(i.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://localhost:8001/transactions",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){var t=[];t.push(e),f.apply(void 0,t),console.log(t)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return x[0],x[1],Object(c.useEffect)((function(){fetch("http://localhost:8001/transactions").then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){console.log(e)}))}),[O]),Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{searchFunction:function(e){return m.apply(this,arguments)}}),Object(j.jsx)(d,{fetchFunction:function(e){return v.apply(this,arguments)}}),Object(j.jsx)(b,{data:n})]})};var f=function(){return Object(j.jsxs)("div",{className:"ui container",children:[Object(j.jsx)("nav",{className:"navbar navbar-expand-lg bg-body-tertiary",children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("a",{className:"navbar-brand bg-blue",href:"The Bank Of Flatiron",children:" "})})}),Object(j.jsx)("h1",{className:"display",children:"The Bank Of Flatiron"}),Object(j.jsx)(O,{})]})};n(15),n(16);r.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d6a4a74f.chunk.js.map