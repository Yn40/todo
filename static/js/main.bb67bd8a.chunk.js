(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(19),a=n.n(i),s=(n(30),n(31),n(6)),o=n(10),d=n(20),j=n.n(d),u=n(0),b=[{id:1,text:"todo \ub9cc\ub4e4\uaebc\uc5d0\uc694~\u2606\u2605",done:!0},{id:2,text:"\ud560\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!!!",done:!0},{id:3,text:"\uc608\uc2dc\ub85c \uc785\ub825\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4",done:!1},{id:4,text:"\uc0ac\uc6a9\ub9ce\uc774 \ud574\uc8fc\uc138\uc694!!! \uad11\uace0 \ub2ec\ub798\uc694^^",done:!1}];function l(e,t){switch(t.type){case"CREATE":return e.concat(t.todo);case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{done:!e.done}):e}));case"UPDATE":return console.log(t),e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{text:t.text}):e}));case"SORT":var n=e.filter((function(e){return e.id===t.dragItem.id}))[0];return j()(e,{$splice:[[t.dragItem.idx,1],[t.hoverItem.idx,0,n]]});case"REMOVE":return e.filter((function(e){return e.id!==t.id}));default:throw new Error("unhandled action type : ${action.type}")}}var O=Object(c.createContext)(),x=Object(c.createContext)(),f=Object(c.createContext)();function m(e){var t=e.children,n=Object(c.useReducer)(l,b),r=Object(s.a)(n,2),i=r[0],a=r[1],o=0;i.map((function(e){o<e.id&&(o=e.id)}));var d=o+1;return Object(u.jsx)(O.Provider,{value:i,children:Object(u.jsx)(x.Provider,{value:a,children:Object(u.jsx)(f.Provider,{value:d,children:t})})})}function h(){var e=Object(c.useContext)(O);if(!e)throw new Error("can't find todoProvider");return e}function v(){var e=Object(c.useContext)(x);if(!e)throw new Error("can't find todoProvider");return e}var p=n.p+"static/media/firecracker.eb6d05db.png",g=function(){var e=new Date,t={date:e.getFullYear()+"."+(e.getMonth()+1)+"."+e.getDate(),day:["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"][e.getDay()]},n=h(),c=0;return n.map((function(e){return e.done?c:c++})),Object(u.jsxs)("header",{children:[Object(u.jsxs)("h1",{children:[t.date," ",Object(u.jsx)("span",{className:"day",children:t.day})]}),Object(u.jsxs)("p",{className:"cnt",children:["\ucd1d ",Object(u.jsx)("b",{children:n.length}),"\uac1c - ",Object(u.jsx)("b",{children:c}),"\uac1c \ub0a8\uc74c"]}),Object(u.jsx)("img",{src:p,alt:"\ud3ed\uc8fd",className:"img_fire "+(0===c&&0!==n.length?"ac":"")}),Object(u.jsx)("img",{src:p,alt:"\ud3ed\uc8fd",className:"img_fire "+(0===(0===c&&0!==n.length)?"ac1":"")})]})},N=n(5),y=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(s.a)(i,2),o=a[0],d=a[1],j=Object(c.useRef)(),b=v(),l=function(){var e=Object(c.useContext)(f);if(!e)throw new Error("can't find todoProvider");return e}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"create "+(n?"":"hide"),children:Object(u.jsx)("div",{className:"bx_ipt",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=o.trim();if(""===t||null===t)return alert("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!!"),void j.current.focus();b({type:"CREATE",todo:{id:l,text:o,done:!1}}),d(""),r(!n)},children:[Object(u.jsx)("input",{type:"text",className:"ipt",ref:j,value:o,onChange:function(e){d(e.target.value)},placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!!"}),Object(u.jsx)("button",{type:"submit",className:"btn_com",children:Object(u.jsx)(N.c,{})})]})})}),Object(u.jsx)("button",{className:n?"btn_cls":"btn_add",onClick:function(){n||setTimeout((function(){j.current.focus()}),.1),r(!n)},children:"+"})]})},C=n(41),E=n(42),_=function(e){var t=e.done,n=e.text,r=e.id,i=e.idx,a=(e.moveItem,v()),o=Object(c.useState)(!1),d=Object(s.a)(o,2),j=d[0],b=d[1],l=Object(c.useState)(n),O=Object(s.a)(l,2),x=O[0],f=O[1],m=Object(c.useRef)(),h=Object(C.a)({type:"unit",item:{id:r,idx:i},collect:function(e){return{isDragging:e.isDragging()}}}),p=Object(s.a)(h,3),g=p[0].isDragging,y=p[1],_=p[2],w=Object(E.a)({accept:"unit",collect:function(e){return{isOver:e.isOver()}},hover:function(e,t){var n={idx:e.idx,id:e.id},c={idx:i,id:r};n.id!==c.id&&(a({type:"SORT",dragItem:n,hoverItem:c}),e.idx=c.idx)}}),P=Object(s.a)(w,2),T=(P[0].isOver,P[1]),k=function(e){e.stopPropagation(),b(!j),j?f(n):setTimeout((function(){m.current.focus()}),.1)};return Object(u.jsxs)("div",{className:"unit "+(g?"mv":""),ref:function(e){return T(_(e))},children:[j?Object(u.jsx)("div",{className:"modi bx_ipt",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=x.trim();if(""===t||null===t)return alert("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!!"),void m.current.focus();a({type:"UPDATE",id:r,text:t}),f(t),b(!j)},children:[Object(u.jsx)("input",{className:"ipt",type:"text",ref:m,value:x,onChange:function(e){f(e.target.value)}}),Object(u.jsx)("button",{type:"button",className:"btn_cls",onClick:k,children:Object(u.jsx)(N.a,{})}),Object(u.jsx)("button",{type:"submit",className:"btn_com",children:Object(u.jsx)(N.c,{})})]})}):Object(u.jsxs)("div",{className:"item "+(t?"done":""),onClick:function(e){a({type:"TOGGLE",id:r})},children:[Object(u.jsx)("span",{className:"bx_chk",children:Object(u.jsx)(N.c,{className:"chk"})}),Object(u.jsx)("p",{className:"text",children:n}),Object(u.jsxs)("button",{type:"button",className:"btn_modi",onClick:k,children:[Object(u.jsx)(N.e,{})," "]}),Object(u.jsxs)("button",{type:"button",className:"btn_delete",onClick:function(e){e.stopPropagation(),a({type:"REMOVE",id:r})},children:[Object(u.jsx)(N.b,{})," "]})]}),Object(u.jsx)("span",{className:"btn_move",ref:y,children:Object(u.jsx)(N.d,{})})]})},w=function(){var e=h();return Object(u.jsxs)("div",{className:"cont",children:[0==e.length?Object(u.jsx)("p",{className:"nodate",children:"\ub4f1\ub85d\ub41c \ud560\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"}):"",e.map((function(e,t){return Object(u.jsx)(_,{id:e.id,idx:t,text:e.text,done:e.done},e.id)}))]})},P=n(40),T=n(23),k=function(){return Object(u.jsx)(m,{children:Object(u.jsxs)("div",{className:"todo",children:[Object(u.jsx)(g,{}),Object(u.jsx)(P.a,{backend:T.a,children:Object(u.jsx)(w,{})}),Object(u.jsx)(y,{})]})})};var D=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(k,{})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root")),S()}},[[35,1,2]]]);
//# sourceMappingURL=main.bb67bd8a.chunk.js.map