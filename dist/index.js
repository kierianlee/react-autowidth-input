'use strict';

var react = require('react');
var reactMergeRefs = require('react-merge-refs');
var jsxRuntime = require('react/jsx-runtime');

var v={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},q=react.forwardRef(({extraWidth:o=16,wrapperClassName:w,wrapperStyle:T,onAutosize:r,placeholderIsMinWidth:c,minWidth:l=0,...t},b)=>{var S;let f=react.useRef(null),n=react.useRef(null),p=react.useRef(null),[I,L]=react.useState(""),[C,u]=react.useState(0),a=`${t.value??I}`,H=e=>{L(e.target.value),t.onChange&&t.onChange(e);};react.useLayoutEffect(()=>{if(f.current&&n.current){let e=window.getComputedStyle(f.current);n.current.style.fontSize=e.fontSize,n.current.style.fontFamily=e.fontFamily,n.current.style.fontWeight=e.fontWeight,n.current.style.fontStyle=e.fontStyle,n.current.style.letterSpacing=e.letterSpacing,n.current.style.textTransform=e.textTransform;}},[]),react.useEffect(()=>{var h,m;let e=(h=n.current)==null?void 0:h.scrollWidth,i=(m=p.current)==null?void 0:m.scrollWidth;if(e&&a.length){let s=e;c&&i&&e<i&&p.current&&(s=i),s<+l&&(s=+l),s&&(u(s+ +o),r&&r(s));}else t.placeholder&&i&&c?(u(Math.max(+l,i)+ +o),r&&r(i)):n.current&&(u(+l+ +o),r&&r(+l));},[a,t.placeholder,o,c,r,u,l]);let M={...T,position:"relative",display:((S=t.style)==null?void 0:S.display)??"inline-block"},E={boxSizing:"content-box",width:C,...t.style};return jsxRuntime.jsxs("div",{className:w,style:M,"data-testid":"wrapper",children:[jsxRuntime.jsx("div",{style:v,ref:n,"data-testid":"sizer",children:a}),jsxRuntime.jsx("input",{...t,ref:reactMergeRefs.mergeRefs([f,b]),value:a,style:E,onChange:H,"data-testid":"input"}),t.placeholder?jsxRuntime.jsx("div",{ref:p,style:v,"data-testid":"placeholder-sizer",children:t.placeholder}):null]})});

exports.AutowidthInput = q;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map