import{c as t,r as o,a as s,u as c,j as d}from"./index-31567a8d.js";import{R as _}from"./index-ab58a9e8.js";const h={"business-page":"index-module_business-page_F33k-","simple-exhibition":"index-module_simple-exhibition_3GkiG","simple-exhibition__title":"index-module_simple-exhibition__title_PifZk","simple-exhibition__desc":"index-module_simple-exhibition__desc_BWTOi"},n=t.bind(h),x=e=>{const i=c();return d("div",{className:n("simple-exhibition"),children:[s("h2",{className:n("simple-exhibition__title"),children:e.title}),s("div",{className:n("simple-exhibition__desc"),children:e.desc}),s(_,{size:"small",onClick:()=>i(e.path),children:"View"})]})},r=()=>{const e=o.filter(i=>i.parent==="business");return s("div",{className:n("business-page"),children:e.map(i=>{var a,l;return s(x,{title:(a=i==null?void 0:i.meta)==null?void 0:a.cname,path:i.path,desc:(l=i==null?void 0:i.meta)==null?void 0:l.desc},i.name)})})};export{r as default};