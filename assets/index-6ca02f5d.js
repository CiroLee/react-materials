import{f as n,j as e,b as i,u as f,R as d,a as c}from"./index-0f05c6b6.js";const p=s=>{const o=n.useRef(null),[t,a]=n.useState(!1),[l,u]=n.useState(!1),[m,r]=n.useState(!0),h=()=>{s.maskClosable&&(a(!1),s.cancel&&s.cancel(),console.log(123))};return n.useEffect(()=>{a(s.show),s.show&&(u(!0),r(!1))},[s.show]),n.useEffect(()=>(o.current&&o.current.addEventListener("transitionend",function(){!s.show&&l&&(r(!0),console.log(123))}),()=>{o.current&&o.current.removeEventListener("transitionend",function(){console.log("unmounted")})})),e.jsx(e.Fragment,{children:s.show||!m?e.jsxs("div",{className:"popup",children:[e.jsx("div",{ref:o,className:i("popup__mask",{show:t}),onClick:h}),e.jsx("div",{className:i("popup__content",{show:t},s.placement||"bottom"),children:s.children})]}):null})},j=()=>{const s=f(),[o,t]=n.useState(!1),[a,l]=n.useState("bottom");return e.jsxs("div",{children:[e.jsx(d,{name:"ri-arrow-left-line",size:24,color:"#333",onClick:()=>s(-1)}),e.jsx("h2",{className:"text-lg my-4",children:"popup"}),e.jsx(c,{type:"primary",className:"mr-2",onClick:()=>{t(!0),l("bottom")},children:"open at: bottom"}),e.jsx(c,{type:"primary",className:"mr-2",onClick:()=>{t(!0),l("top")},children:"open at: top"}),e.jsx(c,{type:"primary",className:"mr-2",onClick:()=>{t(!0),l("left")},children:"open at: left"}),e.jsx(c,{type:"primary",onClick:()=>{t(!0),l("right")},children:"open at: right"}),e.jsx(p,{maskClosable:!0,show:o,cancel:()=>t(!1),placement:a,children:e.jsxs("div",{className:"p-4 bg-white w-full h-full",children:[e.jsx("div",{className:"border-b border-solid border-gray-300",children:e.jsx(d,{name:"ri-close-line",size:"20px",onClick:()=>t(!1)})}),e.jsxs("div",{children:[e.jsx("p",{children:"some contents...."}),e.jsx("p",{children:"some contents...."}),e.jsx("p",{children:"some contents...."})]})]})})]})};export{j as default};
