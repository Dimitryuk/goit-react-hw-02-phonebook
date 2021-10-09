(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=(n(16),n(11)),s=n(2),l=n(3),u=n(5),b=n(4),d=(n(17),n(9)),j=n(0),m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.onChangeHandler=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(d.a)({},a,r))},e.onSubmitHandler=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:this.onSubmitHandler,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{onChange:this.onChangeHandler,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{onChange:this.onChangeHandler,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),h=function(e){var t=e.contacts,n=e.deleteContact;return Object(j.jsx)("div",{children:Object(j.jsx)("ol",{children:t.map((function(e,t){var a=e.name,r=e.number,c=e.id;return Object(j.jsxs)("li",{className:"ContactList_item",children:[a," ",r,Object(j.jsx)("button",{type:"button",onClick:function(){return n(c)},children:"Delete"})]},t)}))})})},f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleFilter=function(t){e.props.onFilter(t.currentTarget.value)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.filter;return Object(j.jsxs)("div",{className:"FilterWrapper",children:["Find contact by name",Object(j.jsx)("label",{htmlFor:"",children:Object(j.jsx)("input",{type:"text",name:"filter",value:e,onChange:this.handleFilter})})]})}}]),n}(a.Component),p=n(10),O=n.n(p),v=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.createNewContact=function(t){var n=e.state.contacts,a=t.name,r=t.number,c={id:O.a.generate(),name:a,number:r};if(n.some((function(e){return e.name===c.name})))return console.log(t),void alert("Sorry, ".concat(a," is already in contacts list"));e.setState((function(e){var t=e.contacts;return{contacts:[c].concat(Object(o.a)(t))}}))},e.deleteContact=function(t){var n=e.state.contacts.filter((function(e){return e.id!==t}));e.setState({contacts:n})},e.onFilter=function(t){console.log("filter",t),e.setState({filter:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{onSubmit:this.createNewContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(f,{filter:n,onFilter:this.onFilter}),Object(j.jsx)(h,{contacts:a,deleteContact:this.deleteContact})]})}}]),n}(a.Component),x=v;i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0e265e66.chunk.js.map