(this["webpackJsonpbbs-tutorial"]=this["webpackJsonpbbs-tutorial"]||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(24),s=n.n(r),i=n(2),o=n.n(i),l=n(5),u=n(9),b=n(6),j=n(8),d=n(20),p=n(18),h=n(19),m=n(29),O=n(27),f=n(23),x=n.n(f);x.a.defaults.baseURL="/",x.a.defaults.withCredentials=!0,x.a.defaults.headers.post["Content-Type"]="multipart/form-data";var v=function(){function e(){Object(p.a)(this,e)}return Object(h.a)(e,[{key:"requestBase",value:function(e,t,n){return x()({method:e,url:t,data:n}).then((function(e){return e.data})).catch((function(e){return Promise.reject(e)}))}},{key:"requestGet",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,c,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},a=new URLSearchParams(n).toString(),c="".concat(t,"?").concat(a),e.next=5,this.requestBase("get",c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"requestPost",value:function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestBase("post",t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"requestPut",value:function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestBase("put",t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"requestDelete",value:function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestBase("delete",t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),g=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){return Object(p.a)(this,n),t.call(this)}return Object(h.a)(n,[{key:"signup",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestPost("/member/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestPost("/member/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestPost("/member/logout",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(v),N=new g,w=Object(d.b)("login",function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.login(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(d.b)("logout",function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.logout(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k={basicInfo:{},isLoading:!1,isError:!1};!function(){if(sessionStorage.getItem("basicInfo")){var e=JSON.parse(sessionStorage.getItem("basicInfo"));k.basicInfo=e}}();var C=Object(d.c)({name:"member",initialState:k,reducers:{sessionLogin:function(e,t){e.basicInfo=t.payload}},extraReducers:function(e){e.addCase(w.pending,(function(e,t){e.isLoading=!0,e.isError=!1})).addCase(w.fulfilled,(function(e,t){e.basicInfo=t.payload,e.isLoading=!1,e.isError=!1,sessionStorage.setItem("basicInfo",JSON.stringify(e.basicInfo))})).addCase(w.rejected,(function(e,t){e.isLoading=!1,e.isError=!0})).addCase(y.pending,(function(e,t){e.isLoading=!0,e.isError=!1})).addCase(y.fulfilled,(function(e,t){e.basicInfo={},e.isLoading=!1,e.isError=!1,sessionStorage.removeItem("basicInfo")})).addCase(y.rejected,(function(e,t){e.isLoading=!1,e.isError=!0}))}}),F=(C.actions.sessionLogin,C),S=n(0);function I(){var e=Object(u.c)((function(e){return e.member})).basicInfo,t=Object(u.b)(),n=Object(b.g)(),a=Object(b.h)(),c=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(y());case 2:alert("\ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),n.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=Object.keys(e).length>0,s=function(e){return a.pathname===e?"active":""};return Object(S.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary",children:Object(S.jsxs)("div",{className:"container-fluid",children:[Object(S.jsx)("h1",{className:"d-flex",children:Object(S.jsx)(j.b,{className:"navbar-brand",to:"/",children:"BBS"})}),Object(S.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav",children:Object(S.jsx)("span",{className:"navbar-toggler-icon"})}),Object(S.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(S.jsxs)("ul",{className:"navbar-nav",children:[Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(j.b,{className:"nav-link ".concat(s("/")),to:"/",children:"\ud648"})}),Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(j.b,{className:"nav-link ".concat(s("/board-list")),to:"/board-list",children:"\uac8c\uc2dc\ud310"})}),r?Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)("button",{className:"nav-link",onClick:c,children:"\ub85c\uadf8\uc544\uc6c3"})}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(j.b,{className:"nav-link ".concat(s("/signup")),to:"/signup",children:"\ud68c\uc6d0\uac00\uc785"})}),Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(j.b,{className:"nav-link ".concat(s("/login")),to:"/login",children:"\ub85c\uadf8\uc778"})})]})]})})]})})}function P(){var e=Object(u.c)((function(e){return e.member})).basicInfo;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{className:"p-5 bg-light rounded-3",children:Object(S.jsx)("div",{className:"container-fluid py-5",children:Object.keys(e).length>0?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h2",{className:"display-5 fw-bold",children:"".concat(e.name,"\ub2d8, \uc548\ub155\ud558\uc138\uc694!")}),Object(S.jsx)("p",{className:"col-md-8 fs-4",children:"\uac8c\uc2dc\ud310\uc744 \uc774\uc6a9\ud574\ubcf4\uc138\uc694 :)"}),Object(S.jsx)(j.b,{className:"btn btn-success btn-lg",to:"/board-list",children:"\uae00\uc4f0\ub7ec\uac00\uae30"})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h2",{className:"display-5 fw-bold",children:"\ud658\uc601\ud569\ub2c8\ub2e4!"}),Object(S.jsx)("p",{className:"col-md-8 fs-4",children:"\ub85c\uadf8\uc778\ud558\uace0 \uac8c\uc2dc\ud310\uc744 \uc774\uc6a9\ud574\ubcf4\uc138\uc694 :)"}),Object(S.jsx)(j.b,{className:"btn btn-success btn-lg",to:"/login",children:"\ub85c\uadf8\uc778\ud558\ub7ec\uac00\uae30"})]})})})})}var E=n(16),L=n(7),q=n(28),_=n(4);function B(e){var t=e.msg;return Object(S.jsxs)("div",{className:"alert alert-danger d-flex",children:[Object(S.jsx)("img",{src:"/images/error-warning-line.png",alt:"\uc720\ud6a8\ud558\uc9c0\uc54a\uc74c"}),Object(S.jsx)("span",{className:"ms-2",children:t})]})}function M(e){var t=e.type;return Object(S.jsx)("section",{className:"spinner-bg ".concat("full"===t?"spinner-bg-dark":""),children:Object(S.jsx)("div",{className:"spinner",children:Object(S.jsx)("div",{className:"spinner-border text-primary",role:"status"})})})}var R=function(){var e=Object(b.g)(),t=Object(u.c)((function(e){return e.member})),n=t.basicInfo,c=t.isLoading,r=t.isError,s=Object(u.b)(),i=Object(a.useState)({id:"",pw:""}),o=Object(_.a)(i,2),l=o[0],j=o[1],d=Object(a.useState)(!0),p=Object(_.a)(d,2),h=p[0],m=p[1],O=Object(a.useState)(""),f=Object(_.a)(O,2),x=f[0],v=f[1],g=function(){l.id?l.pw?(v(""),function(){var e=l.id,t=l.pw,n=new FormData;n.append("id",e),n.append("pw",t),Object(q.a)(n.entries()).forEach((function(e){var t=Object(_.a)(e,2),n=t[0],a=t[1];return console.log("".concat(n," => ").concat(a))})),s(w(n)).then()}()):v("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."):v("\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.")},N=function(e){var t=e.target,n=t.name,a=t.value;j(Object(L.a)(Object(L.a)({},l),{},Object(E.a)({},n,a)))};return Object(a.useEffect)((function(){c||(r?alert("\uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."):Object.keys(n).length>0&&e.push("/"))}),[n,c,r,e]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("div",{className:"card-header",children:Object(S.jsx)("h2",{children:"\ub85c\uadf8\uc778"})}),Object(S.jsxs)("div",{className:"card-body",children:[x.length>0&&Object(S.jsx)(B,{msg:x}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"id",className:"form-label",children:"\uc544\uc774\ub514"}),Object(S.jsx)("input",{type:"text",className:"form-control",id:"id",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694.",name:"id",value:l.id,onChange:N})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"pw",className:"form-label",children:"\ube44\ubc00\ubc88\ud638"}),Object(S.jsxs)("div",{className:"position-relative",children:[Object(S.jsx)("input",{type:h?"password":"text",className:"form-control",id:"pw",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",name:"pw",value:l.pw,onChange:N,onKeyPress:function(e){"Enter"===e.key&&g()}}),Object(S.jsx)("img",{className:"password_secret",src:h?"/images/eye-on.png":"/images/eye-off.png",onClick:function(){return m(!h)},alt:"\ube44\ubc00\ubc88\ud638 \ubcf4\uae30"})]})]}),Object(S.jsx)("button",{className:"btn btn-primary d-block mx-auto",onClick:g,children:"\ub85c\uadf8\uc778"})]})]}),c&&Object(S.jsx)(M,{type:"full"})]})},D=new g;function J(){var e=Object(b.g)(),t=Object(u.c)((function(e){return e.member})).basicInfo,n=Object(a.useState)(!1),c=Object(_.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)({id:"",pw:"",pwRe:"",name:"",tel:""}),o=Object(_.a)(i,2),l=o[0],j=o[1],d=Object(a.useState)(""),p=Object(_.a)(d,2),h=p[0],m=p[1],O=function(){var t=l.id,n=l.pw,a=l.pwRe,c=l.name,r=l.tel;t?!n||n.length<4?m("\ube44\ubc00\ubc88\ud638\ub97c 4\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694."):a?n!==a?m("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."):c?r?/^\d{9,11}$/.test(r)?(m(""),function(){var t=l.id,n=l.pw,a=l.name,c=l.tel,r=new FormData;r.append("id",t),r.append("pw",n),r.append("name",a),r.append("tel",c),Object(q.a)(r.entries()).forEach((function(e){var t=Object(_.a)(e,2),n=t[0],a=t[1];return console.log("".concat(n," => ").concat(a))})),s(!0),D.signup(r).then((function(t){alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4.\n\ub85c\uadf8\uc778\ud558\uace0 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud574\ubcf4\uc138\uc694."),s(!1),e.push("/login")})).catch((function(e){e.response&&409===e.response.status?alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4."):alert("\uc11c\ubc84\uc0c1 \uc5d0\ub7ec\uc785\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."),s(!1)}))}()):m("\uc720\ud6a8\ud55c \uc5f0\ub77d\ucc98 \ud615\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4."):m("\uc5f0\ub77d\ucc98\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."):m("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):m("\ube44\ubc00\ubc88\ud638 \uc7ac\ud655\uc778\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):m("\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.")},f=function(e){var t=e.target,n=t.name,a=t.value,c=a;["id","pw","pwRe"].includes(n)?c=a.replace(/[^a-zA-Z0-9]/g,""):"tel"===n&&(c=a.replace(/[^\d]/g,"")),j(Object(L.a)(Object(L.a)({},l),{},Object(E.a)({},n,c)))};return Object(a.useEffect)((function(){Object.keys(t).length>0&&e.go(-1)}),[t,e]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("div",{className:"card-header",children:Object(S.jsx)("h2",{children:"\ud68c\uc6d0\uac00\uc785"})}),Object(S.jsxs)("div",{className:"card-body",children:[h.length>0&&Object(S.jsx)(B,{msg:h}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"id",className:"form-label",children:"\uc544\uc774\ub514"}),Object(S.jsx)("input",{type:"text",className:"form-control",id:"id",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694.",name:"id",value:l.id,onChange:f})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"pw",className:"form-label",children:"\ube44\ubc00\ubc88\ud638"}),Object(S.jsx)("input",{type:"password",className:"form-control",id:"pw",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",name:"pw",value:l.pw,onChange:f})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"pwRe",className:"form-label",children:"\ube44\ubc00\ubc88\ud638 \uc7ac\ud655\uc778"}),Object(S.jsx)("input",{type:"password",className:"form-control",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"pwRe",value:l.pwRe,onChange:f})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"name",className:"form-label",children:"\uc774\ub984"}),Object(S.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.",name:"name",value:l.name,onChange:f})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"tel",className:"form-label",children:"\uc5f0\ub77d\ucc98"}),Object(S.jsx)("input",{type:"text",className:"form-control",id:"tel",placeholder:"-\ub97c \uc81c\uc678\ud558\uace0 \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"tel",value:l.tel,onChange:f,onKeyPress:function(e){"Enter"===e.key&&O()}})]}),Object(S.jsx)("button",{className:"btn btn-primary d-block mx-auto",onClick:O,children:"\ud68c\uc6d0\uac00\uc785"})]})]}),r&&Object(S.jsx)(M,{type:"full"})]})}var G=n(30);function K(e){var t=e.pageNo,n=e.postsPerPage,c=e.totalCnt,r=e.fetchBoardList,s=Object(a.useState)(null),i=Object(_.a)(s,2),o=i[0],l=i[1],u=function(e){if("prev"===e){var a=Math.floor((t-1)/n)*n;if(0===a)return void alert("\ucc98\uc74c \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.");r(a)}else if("next"===e){var s=Math.ceil(t/n)*n+1;if(s>Math.ceil(c/n))return void alert("\ub9c8\uc9c0\ub9c9 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4");r(s)}};return Object(a.useEffect)((function(){for(var e=Math.floor((t-1)/n)*n+1,a=Math.ceil(t/n)*n,r=Math.ceil(c/n),s=Math.min(a,r),i=[],o=e;o<s+1;o++)i.push(o);l([].concat(i)),console.log(e,s,i)}),[t,n,c]),Object(S.jsx)("nav",{children:Object(S.jsxs)("ul",{className:"pagination mb-0",children:[Object(S.jsx)("li",{className:"page-item",onClick:function(){return u("prev")},children:Object(S.jsx)("span",{className:"page-link",children:"<"})}),(null===o||void 0===o?void 0:o.length)>0&&o.map((function(e){return Object(S.jsx)("li",{className:"page-item ".concat(t===e?"active":""," "),onClick:function(){return function(e){r(e)}(e)},children:Object(S.jsx)("span",{className:"page-link",children:e})},e)})),Object(S.jsx)("li",{className:"page-item",onClick:function(){return u("next")},children:Object(S.jsx)("span",{className:"page-link",children:">"})})]})})}function U(){var e=new Date,t=e.getFullYear(),n="0".concat(e.getMonth()+1).slice(-2),a="0".concat(e.getDate()).slice(-2);return"".concat(t,"-").concat(n,"-").concat(a)}function z(){return Object(a.useContext)(V)}var A=["postList"],T=function(){var e=Object(b.g)(),t=z(),n=Object(a.useState)(!0),c=Object(_.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)([]),o=Object(_.a)(i,2),l=o[0],u=o[1],d=Object(a.useState)({}),p=Object(_.a)(d,2),h=p[0],m=p[1],O=function(t){var n=t.target.dataset.index;e.push("/board-view/".concat(n))},f=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n={pageNo:e};s(!0),t.getList(n).then((function(e){console.log(e);var t=e.postList,n=Object(G.a)(e,A);u(t),m(n),s(!1)})).catch((function(e){console.log(e),s(!1)}))}),[t]);return Object(a.useEffect)((function(){f()}),[t,f]),r?Object(S.jsx)(M,{}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("table",{className:"table",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"col",children:"No."}),Object(S.jsx)("th",{scope:"col",children:"\uc81c\ubaa9"}),Object(S.jsx)("th",{scope:"col",children:"\uc791\uc131\uc790"}),Object(S.jsx)("th",{scope:"col",children:"\ub0a0\uc9dc"})]})}),Object(S.jsx)("tbody",{children:l.length>0&&l.map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"row",children:e._id}),Object(S.jsx)("td",{className:"board-list-title","data-index":e._id,onClick:O,children:e.title}),Object(S.jsx)("td",{children:e.author_name}),Object(S.jsx)("td",{children:e.date})]},e._id)}))})]}),Object(S.jsxs)("div",{className:"d-flex justify-content-center position-relative",children:[l.length>0&&Object(S.jsx)(K,Object(L.a)(Object(L.a)({},h),{},{fetchBoardList:f})),Object(S.jsx)(j.b,{className:"btn btn-primary btn-write",to:{pathname:"/board-write",state:{status:"write"}},children:"\uae00\uc4f0\uae30"})]})]})},Y=function(){var e=Object(b.g)(),t=Object(b.h)(),n=z(),c=Object(u.c)((function(e){return e.member})).basicInfo,r=Object(a.useState)({title:"",content:""}),s=Object(_.a)(r,2),i=s[0],j=s[1],d=Object(a.useState)(""),p=Object(_.a)(d,2),h=p[0],m=p[1],O=Object(a.useState)(!1),f=Object(_.a)(O,2),x=f[0],v=f[1],g=Object(a.useMemo)((function(){return i.content.length}),[i.content]),N=function(e){var t=e.target,n=t.name,a=t.value;j(Object(L.a)(Object(L.a)({},i),{},Object(E.a)({},n,a)))},w=function(){var a=Object(l.a)(o.a.mark((function a(){var r,s,l,u,b,j,d,p,h,m;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=i.title,s=i.content,l=c._id,u=c.id,b=c.name,j=t.state,d=j.status,p=j.post,(h=new FormData).append("title",r),h.append("content",s),h.append("author_id",u),h.append("author_name",b),v(!0),a.prev=9,"edit"!==d){a.next=16;break}return h.append("_id",p._id),a.next=14,n.updatePost(h);case 14:a.next=20;break;case 16:return h.append("author_idx",l),h.append("date",U()),a.next=20,n.addPost(h);case 20:m="\uac8c\uc2dc\ubb3c\uc774 ".concat("edit"===d?"\uc218\uc815":"\ub4f1\ub85d","\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),alert(m),v(!1),"edit"===d?e.push("/board-view/".concat(p._id)):e.push("/board-list"),a.next=31;break;case 26:a.prev=26,a.t0=a.catch(9),console.log(a.t0),v(!1),alert("\uc11c\ubc84\uc0c1 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 31:case"end":return a.stop()}}),a,null,[[9,26]])})));return function(){return a.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=t.state,n=e.status,a=e.post;"edit"===n&&j(Object(L.a)({},a))}),[t]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("div",{className:"card-header",children:Object(S.jsx)("h2",{children:"\uae00\uc4f0\uae30"})}),Object(S.jsxs)("div",{className:"card-body",children:[h.length>0&&Object(S.jsx)(B,{msg:h}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"title",className:"form-label",children:"\uc81c\ubaa9"}),Object(S.jsx)("input",{type:"text",className:"form-control",id:"title",placeholder:"\uc81c\ubaa9",name:"title",value:i.title,onChange:N})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{htmlFor:"content",className:"form-label",children:"\ub0b4\uc6a9"}),Object(S.jsx)("textarea",{className:"form-control board-write-textarea ".concat(g>=500?"input-error":""),id:"content",placeholder:"\ub0b4\uc6a9\uc740 \ucd5c\ub300 500\uc790\uae4c\uc9c0 \uc785\ub825\uac00\ub2a5\ud569\ub2c8\ub2e4.",maxLength:"500",name:"content",value:i.content,onChange:N}),Object(S.jsx)("p",{className:"text-end mb-0 mt-2 ".concat(g>=500?"input-error-msg":""),children:"".concat(g,"/500")})]})]})]}),Object(S.jsxs)("div",{className:"d-flex justify-content-end mt-4",children:[Object(S.jsx)("button",{className:"btn btn-secondary",onClick:function(){window.confirm("\uc791\uc131\ud558\uace0 \uacc4\uc2dc\ub358 \uae00 \ub0b4\uc6a9\uc740 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\ubaa9\ub85d\uc73c\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&e.push("/board-list")},children:"\ubaa9\ub85d"}),Object(S.jsx)("button",{className:"btn btn-primary ms-2",onClick:function(){console.log("submit");var e=i.title,t=i.content;e?t?(m(""),w()):m("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):m("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")},children:"\ub4f1\ub85d"})]}),x&&Object(S.jsx)(M,{type:"full"})]})},Z=function(){var e=Object(b.i)(),t=z(),n=Object(b.g)(),c=Object(u.c)((function(e){return e.member})).basicInfo,r=Object(a.useState)(!0),s=Object(_.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)({}),d=Object(_.a)(l,2),p=d[0],h=d[1];return Object(a.useEffect)((function(){o(!0),t.getPost(Object(L.a)({},e)).then((function(e){h(e),o(!1)})).catch((function(e){console.log(e),o(!1)}))}),[e,t]),i?Object(S.jsx)(M,{}):Object(S.jsx)(S.Fragment,{children:Object.keys(p).length>0&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"card",children:Object(S.jsxs)("article",{className:"card-body",children:[Object(S.jsx)("h2",{className:"card-title",children:p.title}),Object(S.jsxs)("p",{className:"d-flex justify-content-between mt-1 align-items-center text-secondary",children:[Object(S.jsx)("span",{children:p.author_name}),Object(S.jsx)("span",{children:p.date})]}),Object(S.jsx)("pre",{className:"card-text post-content pt-3",children:p.content})]})}),Object(S.jsxs)("div",{className:"d-flex justify-content-end mt-2",children:[c.id===p.author_id&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(j.b,{className:"btn btn-success",to:{pathname:"/board-write",state:{status:"edit",post:Object(L.a)({},p)}},children:"\uc218\uc815"}),Object(S.jsx)("button",{className:"btn btn-danger ms-1",onClick:function(){if(window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){var e=new FormData;e.append("_id",p._id),t.deletePost(e).then((function(e){alert("\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),n.push("/board-list")})).catch((function(e){console.log(e),alert("\uc11c\ubc84\uc0c1 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}))}},children:"\uc0ad\uc81c"})]}),Object(S.jsx)(j.b,{className:"btn btn-secondary ms-1",to:"/board-list",children:"\ubaa9\ub85d"})]})]})})},$=["component","auth"];function H(e){var t=e.component,n=e.auth,a=Object(G.a)(e,$);return n||alert("\ub85c\uadf8\uc778\ud55c \ud68c\uc6d0\ub9cc \uc774\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\ub85c\uadf8\uc778\ud558\uc2dc\uace0 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud574\ubcf4\uc138\uc694!"),Object(S.jsx)(b.b,Object(L.a)(Object(L.a)({},a),{},{render:function(e){return n?Object(S.jsx)(t,Object(L.a)({},e)):Object(S.jsx)(b.a,Object(L.a)({to:"/login"},e))}}))}var Q=new(function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){return Object(p.a)(this,n),t.call(this)}return Object(h.a)(n,[{key:"getList",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestGet("/post/list",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPost",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestGet("/post",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addPost",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestPost("/post",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updatePost",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestPut("/post",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deletePost",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestDelete("/post",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(v)),V=c.a.createContext(null);function W(){var e=Object(u.c)((function(e){return e.member})).basicInfo,t=Object.keys(e).length>0;return Object(S.jsx)(V.Provider,{value:Q,children:Object(S.jsxs)(j.a,{children:[Object(S.jsx)(I,{}),Object(S.jsx)("main",{className:"container pt-4",children:Object(S.jsxs)(b.d,{children:[Object(S.jsx)(b.b,{exact:!0,path:"/",component:P}),Object(S.jsx)(b.b,{path:"/login",component:R}),Object(S.jsx)(b.b,{path:"/signup",component:J}),Object(S.jsx)(b.b,{path:"/board-list",component:T}),Object(S.jsx)(H,{path:"/board-write",component:Y,auth:t}),Object(S.jsx)(H,{path:"/board-view/:postNo",component:Z,auth:t})]})})]})})}n(73),n(74);var X=n(15),ee=n(44),te=n.n(ee),ne=Object(X.b)({member:F.reducer}),ae=Object(d.a)({reducer:ne,middleware:function(e){return e().concat(te.a)}});s.a.render(Object(S.jsx)(u.a,{store:ae,children:Object(S.jsx)(W,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.2e5b308c.chunk.js.map