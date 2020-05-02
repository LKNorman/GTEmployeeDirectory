(this["webpackJsonpgt-employee-directory"]=this["webpackJsonpgt-employee-directory"]||[]).push([[0],{11:function(e,a,t){},35:function(e,a,t){e.exports=t(62)},62:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),o=t(30),s=t(6),m=t(9),i=t.n(m),p=(t(11),function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{className:"App-logo",src:i.a,alt:"logo"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/home"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/directory"},"Directory")))))}),u=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("img",{src:i.a,alt:"logo"}))),l.a.createElement("div",{className:"row App"},l.a.createElement("div",{className:"col"},l.a.createElement("span",null,l.a.createElement("h1",null,"Welcome to Employee Tracker!")))))},E=t(14),h=t(26),d=t(27),y=t(28),v=t(34),b=t(33),f=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("th",{scope:"row"},l.a.createElement("img",{src:e.picture.thumbnail,alt:e.name.first})),l.a.createElement("td",{className:"col"},e.name.first),l.a.createElement("td",{className:"col"},e.email),l.a.createElement("td",{className:"col"},e.phone),l.a.createElement("td",{className:"col"},e.location.country),l.a.createElement("td",{className:"col"},e.gender))},g=function(e){return l.a.createElement("tbody",null,e.employees.map((function(e){return l.a.createElement("tr",null,l.a.createElement(f,Object.assign({},e,{key:e.id})))})))},N=t(29),S=t.n(N),T=function(e){Object(v.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={employees:[],employeesToDisplay:[],searchTerm:""},e.clearFilter=function(){e.setState({employeesToDisplay:e.state.employees,searchTerm:""})},e.getEmployees=function(){S.a.get("https://randomuser.me/api/?results=20").then((function(a){e.setState({employees:a.data.results,employeesToDisplay:a.data.results})})).catch((function(e){console.log(e)}))},e.handleChange=function(a){var t=a.target,n=t.name,l=t.value;e.setState(Object(h.a)({},n,l))},e.handleSubmit=function(a){a.preventDefault(),console.log("HandleSubmit"),console.log(e.state.searchTerm);var t=Object(E.a)(e.state.employees).filter((function(a){var t=new RegExp(e.state.searchTerm,"gi");return a.name.first.match(t)}));e.setState({employeesToDisplay:t})},e.handleSort=function(a){a.preventDefault(),console.log("HandleSort");var t=Object(E.a)(e.state.employees).sort((function(e,a){return e.name.first<a.name.first?-1:e.name.first>a.name.first?1:0}));e.setState({employeesToDisplay:t})},e}return Object(y.a)(t,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("form",{className:"form-inline my-2 my-lg-0 float-right",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",className:"form-control mr-sm-2",placeholder:"Search","aria-label":"Search",name:"searchTerm",value:this.state.searchTerm,onChange:this.handleChange}),l.a.createElement("button",{className:"btn btn-outline-primary my-2 mr-sm-2",type:"submit"},"Search"),l.a.createElement("button",{className:"btn btn-outline-secondary my-2 mr-sm-2",onClick:this.clearFilter},"Clear")))),l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"col-sm-12 table table-sm table-striped table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Photo"),l.a.createElement("th",{scope:"col"},l.a.createElement("a",{href:"/",onClick:this.handleSort},"Name")),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"Phone"),l.a.createElement("th",{scope:"col"},"Location"),l.a.createElement("th",{scope:"col"},"Gender"))),l.a.createElement(g,{employees:this.state.employeesToDisplay}))))}}]),t}(n.Component);var k=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(s.a,{exact:!0,path:"/",component:u}),l.a.createElement(s.a,{exact:!0,path:"/home",component:u}),l.a.createElement(s.a,{path:"/directory",component:T})))};c.a.render(l.a.createElement(k,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[35,1,2]]]);
//# sourceMappingURL=main.f463d95b.chunk.js.map