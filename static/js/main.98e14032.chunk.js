(this.webpackJsonpexpense=this.webpackJsonpexpense||[]).push([[0],{117:function(e,t,n){},123:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(10),r=n.n(o),i=(n(117),n(277)),s=n(75),l=n.n(s),u=n(15),j=n(96),d=n(34),b=n(221),m=n(282),p=n(278),O=n(266),x=n(281),f=n(28),h=n(267),y=n(103),g=function(e,t){switch(t.type){case"DELETE_TRANSACTION":var n=e.filter((function(e){return e.id!==t.payload}));return localStorage.setItem("transaction",JSON.stringify(n)),n;case"ADD_TRANSACTION":var a=[t.payload].concat(Object(y.a)(e));return localStorage.setItem("transaction",JSON.stringify(a)),a;default:return e}},v=n(4),C=JSON.parse(localStorage.getItem("transaction"))||[],T=Object(a.createContext)(C),I=function(e){var t=e.children,n=Object(a.useReducer)(g,C),c=Object(d.a)(n,2),o=c[0],r=c[1];return Object(v.jsx)(T.Provider,{value:{deleteTransaction:function(e){return r({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){return r({type:"ADD_TRANSACTION",payload:e})},transaction:o},children:t})},N=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],E=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f","#81080c","#690508","#580305","#350304"],D=[{type:"Salary",amount:0,color:N[0]},{type:"Investments",amount:0,color:N[1]},{type:"Extra income",amount:0,color:N[2]},{type:"Deposits",amount:0,color:N[3]},{type:"Lottery",amount:0,color:N[4]},{type:"Gifts",amount:0,color:N[5]},{type:"Other",amount:0,color:N[6]},{type:"Savings",amount:0,color:N[7]},{type:"Rental income",amount:0,color:N[8]}],S=[{type:"Rent",amount:0,color:E[0]},{type:"PPF",amount:0,color:E[1]},{type:"Stocks",amount:0,color:E[2]},{type:"Family",amount:0,color:E[3]},{type:"Education Loan",amount:0,color:E[4]},{type:"Housing Loan",amount:0,color:E[5]},{type:"Grocery",amount:0,color:E[6]},{type:"Vegetables",amount:0,color:E[7]},{type:"Fruit",amount:0,color:E[8]},{type:"Bill",amount:0,color:E[9]},{type:"Household",amount:0,color:E[10]},{type:"Shopping",amount:0,color:E[11]},{type:"Food",amount:0,color:E[12]},{type:"Travel",amount:0,color:E[13]},{type:"Other",amount:0,color:E[14]}],k=function(e){var t=new Date(e),n=t.getDate(),a=t.getMonth()+1,c=t.getFullYear();return n<10&&(n="0".concat(n)),a<10&&(a="0".concat(a)),[c,a,n].join("-")},w=n(280),A=n(279),F=n(257),B=Object(F.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));var L=function(e){var t=e.open,n=e.setOpen,a=e.isDelete,c=B(),o=function(e,t){"clickaway"!==t&&n(!1)};return Object(v.jsx)("div",{className:c.root,children:a?Object(v.jsx)(w.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:6e3,onClose:o,children:Object(v.jsx)(A.a,{onClose:o,severity:"error",elevation:6,variant:"filled",children:"Transaction deleted."})}):Object(v.jsx)(w.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:6e3,onClose:o,children:Object(v.jsx)(A.a,{onClose:o,severity:"success",elevation:6,variant:"filled",children:"Transaction successfully created."})})})};n(123);var R=function(){var e=Object(a.useContext)(T).addTransaction,t=Object(a.useState)({type:"Expense",amount:"",category:"Other",date:k(new Date),notes:""}),n=Object(d.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(!1),i=Object(d.a)(r,2),s=i[0],y=i[1],g="Income"===c.type?D:S,C=function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e(Object(u.a)(Object(u.a)({},c),{},{id:Math.random()})),y(!0),I();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=function(){o({type:"Expense",amount:"",category:"Other",date:k(new Date),notes:""})};return Object(v.jsxs)("div",{children:[Object(v.jsx)(L,{open:s,setOpen:y}),Object(v.jsx)(b.a,{style:{position:"relative"},children:Object(v.jsxs)("form",{onSubmit:C,className:"form-container",children:[Object(v.jsx)(m.a,{children:"Type"}),Object(v.jsx)(p.a,{value:c.type,onChange:function(e){return o(Object(u.a)(Object(u.a)({},c),{},{type:e.target.value}))},children:["Income","Expense"].map((function(e){return Object(v.jsx)(O.a,{value:e,children:e},e)}))}),Object(v.jsx)("br",{}),Object(v.jsx)(m.a,{children:"Category"}),Object(v.jsx)(p.a,{value:c.category,onChange:function(e){return o(Object(u.a)(Object(u.a)({},c),{},{category:e.target.value}))},children:g.map((function(e){return Object(v.jsx)(O.a,{value:e.type,children:e.type},e)}))}),Object(v.jsx)(x.a,{label:"Amount ",name:"amount",value:c.amount,fullWidth:!0,onChange:function(e){return o(Object(u.a)(Object(u.a)({},c),{},{amount:e.target.value}))}}),Object(v.jsx)(x.a,{label:"Notes ",name:"notes",value:c.notes,fullWidth:!0,onChange:function(e){return o(Object(u.a)(Object(u.a)({},c),{},{notes:e.target.value}))}}),Object(v.jsx)("br",{}),Object(v.jsx)(f.a,{children:" Date"}),Object(v.jsx)(x.a,{type:"date",name:"date",value:c.date,fullWidth:!0,onChange:function(e){return o(Object(u.a)(Object(u.a)({},c),{},{date:e.target.value.split(",")}))}}),Object(v.jsx)("div",{style:{marginTop:"15px",width:"100 %"}}),Object(v.jsx)("div",{style:{textAlign:"center"},children:Object(v.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})})]})})]})},H=n(265),J=n(268),P=n(222),W=n(269),_=n(284),M=n(271),z=n(272),G=n(262),V=n(270),Y=n(273),q=n(63),K=n(62),Q=Object(F.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:q.a[500]},avatarExpense:{color:e.palette.getContrastText(K.a[500]),backgroundColor:K.a[500]},list:{maxHeight:"150px",overflow:"auto"}}}));var U=function(){var e=Q(),t=Object(a.useContext)(T),n=t.transaction,o=t.deleteTransaction,r=Object(a.useState)(!1),i=Object(d.a)(r,2),s=i[0],l=i[1];return Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsx)(L,{open:s,setOpen:l,isDelete:!0}),Object(v.jsx)(H.a,{dense:!1,className:e.list,children:n.map((function(t){return Object(v.jsx)(J.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(v.jsxs)(P.a,{children:[Object(v.jsx)(W.a,{children:Object(v.jsx)(_.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense,children:Object(v.jsx)(V.a,{})})}),t.notes?Object(v.jsx)(M.a,{primary:"".concat(t.category," (").concat(t.notes,")"),secondary:"".concat(t.amount," - ").concat(t.date)}):Object(v.jsx)(M.a,{primary:t.category,secondary:"".concat(t.amount," - ").concat(t.date)}),Object(v.jsx)(z.a,{children:Object(v.jsx)(G.a,{edge:"end","aria-label":"delete",onClick:function(){return e=t.id,o(e),void l(!0);var e},children:Object(v.jsx)(Y.a,{})})})]})},t.id)}))})]})},X=function(e){var t=Object(a.useContext)(T).transaction;if(t){D.forEach((function(e){return e.amount=0})),S.forEach((function(e){return e.amount=0}));var n=t.filter((function(t){return t.type===e})),c=n.reduce((function(e,t){return e+parseInt(t.amount)}),0),o="Income"===e?D:S;n.forEach((function(e){var t=o.find((function(t){return t.type===e.category}));t&&(t.amount=t.amount+parseInt(e.amount))}));var r=o.filter((function(e){return e.amount>0}));return{total:c,chartData:{datasets:[{data:r.map((function(e){return e.amount})),backgroundColor:r.map((function(e){return e.color}))}],labels:r.map((function(e){return e.type}))}}}},Z=Object(F.a)((function(){return{header1:{fontFamily:"system-ui",paddingTop:"12px",color:"navy"}}}));var $=function(){var e=Z(),t=X("Income").total-X("Expense").total,n={color:"green",fontFamily:"system-ui",fontWeight:"700"};return t<0&&(n.color="red"),Object(v.jsx)(c.a.Fragment,{children:Object(v.jsxs)(b.a,{children:[Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)("h1",{className:e.header1,children:"Expense Tracker"}),Object(v.jsxs)("p",{style:n,children:["Total Balance :  ",Object(v.jsx)("span",{children:"\u20b9"}),t," "]})]}),Object(v.jsx)(R,{}),Object(v.jsx)(U,{})]})})},ee=n(274),te=n(275),ne=n(276),ae=n(102),ce=Object(F.a)((function(){return{income:{borderBottom:"10px solid rgba(0, 255, 0, 0.5)"},expense:{borderBottom:"10px solid rgba(255, 0, 0, 0.5)"}}}));var oe=function(e){var t=e.title,n=X(t),a=n.total,c=n.chartData,o=ce();return Object(v.jsxs)(ee.a,{className:"Income"===t?o.income:o.expense,children:[Object(v.jsx)(te.a,{title:t}),Object(v.jsxs)(ne.a,{children:[Object(v.jsxs)(f.a,{variant:"h5",children:[" ",Object(v.jsx)("span",{children:"\u20b9"}),a]}),Object(v.jsx)(ae.Doughnut,{data:c})]})]})},re=n(35),ie=Object(F.a)((function(e){return{desktop:Object(re.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(re.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(re.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(re.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),se=function(){var e=ie();return Object(v.jsx)("div",{children:Object(v.jsxs)(i.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"},children:[Object(v.jsx)(i.a,{item:!0,xs:12,sm:4,className:e.mobile,children:Object(v.jsx)(oe,{title:"Income"})}),Object(v.jsx)(i.a,{item:!0,xs:12,sm:3,className:e.main,children:Object(v.jsx)($,{})}),Object(v.jsx)(i.a,{item:!0,xs:12,sm:4,className:e.desktop,children:Object(v.jsx)(oe,{title:"Income"})}),Object(v.jsx)(i.a,{item:!0,xs:12,sm:4,className:e.last,children:Object(v.jsx)(oe,{title:"Expense"})})]})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,285)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(I,{children:Object(v.jsx)(se,{})})}),document.getElementById("root")),le()}},[[220,1,2]]]);
//# sourceMappingURL=main.98e14032.chunk.js.map