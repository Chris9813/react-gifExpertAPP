(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))},children:[Object(u.jsx)("h2",{children:"Add Category"}),Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o((function(e){return t.target.value}))}})]})},j=n(10),d=n(6),b=n.n(d),l=n(8),f=function(){var t=Object(l.a)(b.a.mark((function t(e){var n,r,c,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=04RR9f1GwY1Et7mg9LCvbRTfa00BRgT1"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.id,n=t.title,r=t.url;return console.log(e,n,r),Object(u.jsxs)("div",{className:"card animate__heartBeat",children:[Object(u.jsx)("img",{src:r,alt:n}),Object(u.jsx)("p",{children:n})]})},h=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){f(t).then((function(t){return a({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&Object(u.jsx)("p",{children:"Loading"}),Object(u.jsx)("div",{className:"card-grid animate__heartBeat",children:c.map((function(t){return Object(u.jsx)(p,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(r.useState)(["breaking bad"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})},g=(n(17),document.querySelector("#root"));a.a.render(Object(u.jsx)(O,{}),g)}},[[18,1,2]]]);
//# sourceMappingURL=main.4b4943cf.chunk.js.map