import{c as f,u as j,e as r,j as t,R as N}from"./index-aecebabb.js";import{R as c}from"./index-caa023d7.js";import{I as g}from"./index-008cbe75.js";import"./index-74cef55e.js";const v="index-module_todolist_M-KjH",C="index-module_todolist__input_Tyep2",I="index-module_todolist__ul_3GN2T",b="index-module_finished_i8HB6",L={todolist:v,"todolist__title--center":"index-module_todolist__title--center_QIjZF",todolist__input:C,"todolist__input--box":"index-module_todolist__input--box_DR-87",todolist__ul:I,finished:b},e=f.bind(L),T=()=>{const _=j(),[d,a]=r.useState(""),[i,l]=r.useState([]),u=s=>{a(s)},h=()=>{const s=i.map(n=>n.id);return s.length?Math.max(...s)+1:0},x=()=>{const s=h();l([...i,{id:s,content:d,finished:!1}]),a("")},p=s=>{const n=i.map(o=>o.id===s?{...o,finished:!0}:o);l(n)},m=s=>{const n=i.filter(o=>o.id!==s);l(n)};return t.jsxs("div",{children:[t.jsx(N,{name:"ri-arrow-left-line",size:24,color:"#333",onClick:()=>_(-1)}),t.jsxs("div",{className:e("todolist"),children:[t.jsx("h2",{className:e("todolist__title--center"),children:"TodoList"}),t.jsxs("div",{className:e("todolist__input"),children:[t.jsx("div",{className:e("todolist__input--box"),children:t.jsx(g,{value:d,onChange:u,maxLength:10,showCount:!0,className:"flex-1"})}),t.jsx(c,{disabled:!d.length,onClick:x,children:"Add"})]}),t.jsx("ul",{className:e("todolist__ul"),children:i.map(s=>t.jsxs("li",{className:e({finished:s.finished}),children:[t.jsx("span",{children:s.content}),t.jsxs("div",{children:[t.jsx(c,{size:"small",type:"success",disabled:s.finished,onClick:()=>p(s.id),children:"finish"}),t.jsx(c,{size:"small",type:"danger",onClick:()=>m(s.id),children:"delete"})]})]},s.id))})]})]})};export{T as default};