import{f as n,j as e,b as m,R as h}from"./index-0f05c6b6.js";import{S as x}from"./index-0699a125.js";const H=w=>{const{type:o="text",value:c="",disabled:g,placeholder:v,className:j,maxLength:a,clearable:_,showCount:r,autoComplete:C=!0,onChange:s,onBlur:i}=w,R=n.useRef(null),[l,u]=n.useState(""),[b,f]=n.useState(!1),[y,S]=n.useState(""),[p,I]=n.useState(!1),N=t=>{a&&t.target.value.length>a&&(t.target.value=t.target.value.slice(0,a)),u(t.target.value),s==null||s(t.target.value),r&&d()},E=t=>{f(!1),i==null||i(t.target.value)},$=()=>{u(""),s==null||s(""),r&&d("0")},d=t=>{S(a?`${t||String(l).length}/${a}`:`${t||String(l).length}`)};return n.useEffect(()=>{if(u(String(c)),r){const t=String(c).length;d(t.toString())}},[c]),e.jsxs("div",{className:m("r-input",j,{focus:b,disabled:g}),children:[e.jsx("input",{ref:R,type:o==="password"?p?"text":"password":o,value:l,placeholder:v,disabled:g,autoComplete:C?"on":"new-password",onFocus:()=>f(!0),onBlur:E,onChange:N}),e.jsxs("div",{className:m("r-input__trail",{"r-input__count":r}),"data-count":y,children:[e.jsx(x,{if:!!_&&!!String(l).length,children:e.jsx(h,{name:"ri-close-circle-fill",className:"r-input__btn",onClick:$})}),e.jsx(x,{if:o==="password",children:e.jsx(h,{name:p?"ri-eye-line":"ri-eye-close-line",className:"r-input__btn",style:{marginRight:0},onClick:()=>I(!p)})})]})]})};export{H as I};