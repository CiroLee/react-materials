import{c as g,u as N,f as r,j as d,a as e,R as v}from"./index-31567a8d.js";import{R as c}from"./index-ab58a9e8.js";const b="index-module_todolist_M-KjH",C="index-module_todolist__input_Tyep2",L="index-module_todolist__ul_3GN2T",j="index-module_finished_i8HB6",y={todolist:b,"todolist__title--center":"index-module_todolist__title--center_QIjZF","todolist__input--box":"index-module_todolist__input--box_DR-87",todolist__input:C,todolist__ul:L,finished:j},i=g.bind(y),k=()=>{const u=N(),[l,_]=r.useState(""),[s,a]=r.useState([]),h=t=>{_(t.target.value)},p=()=>{const t=s.map(n=>n.id);return t.length?Math.max(...t)+1:0},x=()=>{const t=p();a([...s,{id:t,content:l,finished:!1}]),_("")},m=t=>{const n=s.map(o=>o.id===t?{...o,finished:!0}:o);a(n)},f=t=>{const n=s.filter(o=>o.id!==t);a(n)};return d("div",{children:[e(v,{name:"ri-arrow-left-line",size:24,color:"#333",onClick:()=>u(-1)}),d("div",{className:i("todolist"),children:[e("h2",{className:i("todolist__title--center"),children:"TodoList"}),d("div",{className:i("todolist__input"),children:[e("div",{className:i("todolist__input--box"),"data-count":`${l.length}/10`,children:e("input",{type:"text",value:l,onChange:h,maxLength:10})}),e(c,{disabled:!l.length,onClick:x,children:"Add"})]}),e("ul",{className:i("todolist__ul"),children:s.map(t=>d("li",{className:i({finished:t.finished}),children:[e("span",{children:t.content}),d("div",{children:[e(c,{size:"small",type:"success",disabled:t.finished,onClick:()=>m(t.id),children:"finish"}),e(c,{size:"small",type:"danger",onClick:()=>f(t.id),children:"delete"})]})]},t.id))})]})]})};export{k as default};