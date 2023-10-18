(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),a=(c(36),c(37),c(8)),s=c(3),r=c(10),l=c.n(r),i=c(1),o=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},j=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{to:"/",className:o,children:"Home"}),Object(i.jsx)(a.c,{to:"/people",className:o,children:"People"})]})})})},d=(c(39),function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(j,{}),Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(s.b,{})})})]})}),u=c(0),b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},h=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},O=c(9),x=c(5),m=c(24),p=c(27);function f(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(x.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}var v=["children","params"],N=function(e){var t=e.children,c=e.params,n=Object(p.a)(e,v),s=Object(a.d)(),r=Object(x.a)(s,1)[0];return Object(i.jsx)(a.b,Object(m.a)(Object(m.a)({to:{search:f(r,c)}},n),{},{children:t}))},g=function(e){return e.All="All",e.Male="Male",e.Female="Female",e}(g||{}),y=function(){var e=Object(a.d)(),t=Object(x.a)(e,2),c=t[0],n=t[1],s=c.get("sex")||"",r=c.getAll("centuries")||[],o=c.get("query")||"",j=function(e){return r.includes(e)?r.filter((function(t){return t!==e})):[].concat(Object(O.a)(r),[e])};return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)(N,{className:l()({"is-active":!s}),params:{sex:null},children:g.All}),Object(i.jsx)(N,{className:l()({"is-active":"m"===s}),params:{sex:"m"},children:g.Male}),Object(i.jsx)(N,{className:l()({"is-active":"f"===s}),params:{sex:"f"},children:g.Female})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:o,onChange:function(e){n(f(c,{query:e.target.value||null}))}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(i.jsx)(N,{"data-cy":"century",className:l()("button mr-1",{"is-info":r.includes(e)}),params:{centuries:j(e)},children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(N,{"data-cy":"centuryALL",className:"button is-success is-outlined",params:{centuries:[]},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)(N,{className:"button is-link is-outlined is-fullwidth",onClick:function(){n({})},params:{centuries:[],sex:null,query:null},children:"Reset all filters"})})]})},w=(c(40),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),k=function(e){var t=e.person,c=t.slug,n=t.sex,s=t.name;return Object(i.jsx)(a.b,{to:"../".concat(c),className:l()({"has-text-danger":"f"===n}),children:s})},L=function(e){var t=e.people,c=Object(a.d)(),n=Object(x.a)(c,1)[0],r=n.get("sort")||"",o=n.get("order")||"",j=Object(s.r)().slugId,d=t.find((function(e){return e.slug===j})),u=function(e){return t.find((function(t){return t.name===e}))};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[["Name","Sex","Born","Died"].map((function(e){return Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(i.jsx)(N,{params:(t=e.toLowerCase(),t!==r?{sort:t,order:null}:t!==r||o?{sort:null,order:null}:{sort:t,order:"desc"}),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas",{"fa-sort":r!==e,"fa-sort-up":r===e&&!o,"fa-sort-down":r===e&&o})})})})]})},e);var t})),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t=e.sex,c=e.born,n=e.died,a=e.fatherName,s=e.motherName,r=u(s),o=u(a);return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":d===e}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(k,{person:e})}),Object(i.jsx)("td",{children:t}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:(r?Object(i.jsx)(k,{person:r}):s)||"-"}),Object(i.jsx)("td",{children:(o?Object(i.jsx)(k,{person:o}):a)||"-"})]})}))})]})},S=c(4),A=c(7),C="https://mate-academy.github.io/react_people-table/api/people.json";function F(e){return new Promise((function(t){return setTimeout(t,e)}))}function P(){return(P=Object(A.a)(Object(S.a)().mark((function e(){return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",F(500).then((function(){return fetch(C)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e){return e.name="name",e.sex="sex",e.born="born",e.died="died",e}(M||{}),E=function(){var e,t=Object(u.useState)([]),c=Object(x.a)(t,2),n=c[0],s=c[1],r=Object(u.useState)(!1),l=Object(x.a)(r,2),o=l[0],j=l[1],d=Object(u.useState)(!1),b=Object(x.a)(d,2),h=b[0],m=b[1],p=Object(a.d)(),f=Object(x.a)(p,1)[0],v=f.getAll("centuries")||[],N=f.get("sex")||"",g=(null===(e=f.get("query"))||void 0===e?void 0:e.toLowerCase())||"",k=f.get("sort"),S=f.get("order");Object(u.useEffect)((function(){m(!0),function(){return P.apply(this,arguments)}().then(s).catch((function(){j(!0)})).finally((function(){m(!1)}))}),[]);var A=function(){var e=Object(O.a)(n);if(e=v.length>0?e.filter((function(e){return v.includes(Math.ceil(+e.born/100).toString())})):e,e=N?e.filter((function(e){return e.sex===N})):e,e=g?e.filter((function(e){var t,c;return e.name.toLowerCase().includes(g)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(g))||(null===(c=e.fatherName)||void 0===c?void 0:c.toLowerCase().includes(g))})):e,k)switch(k){case M.name:case M.sex:e.sort((function(e,t){return e[k].localeCompare(t[k])}));break;case M.born:case M.died:e.sort((function(e,t){return e[k]-t[k]}));break;default:return e}return S&&e.reverse(),e};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!h&&!o&&n.length>0&&Object(i.jsx)(y,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[h&&Object(i.jsx)(w,{}),o&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!n.length&&!o&&!h&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),n.length>0&&!h&&Object(i.jsx)(L,{people:A()}),!A().length&&!h&&!o&&Object(i.jsx)("p",{children:"There are no people matching the current search criteria"})]})})]})})]})},_=function(){return Object(i.jsx)(a.a,{children:Object(i.jsxs)(s.e,{children:[Object(i.jsx)(s.c,{path:"/home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(d,{}),children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(b,{})}),Object(i.jsx)(s.c,{path:"people",children:Object(i.jsx)(s.c,{path:":slugId?",element:Object(i.jsx)(E,{})})}),Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)(h,{})})]})]})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(_,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ec1396ee.chunk.js.map