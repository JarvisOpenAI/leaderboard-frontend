import{_ as N,u as I,r as _,a as S,o as x,b as n,c,d as e,t as o,F as h,e as $,f as B,w as E,g as m,h as L,E as M,i as p,j as w,n as z,p as P,k as T}from"./index-c90bc775.js";import{g as V}from"./challenge-e8d85911.js";import{f as v}from"./tool-bfaf8bdc.js";import{r as D}from"./banner-365c983e.js";import{E as F}from"./el-loading-4ef5b790.js";/* empty css                 *//* empty css                   */const f=l=>(P("data-v-acca3976"),l=l(),T(),l),H={class:"title mb24"},j=["onClick"],A={class:"left-con"},R={class:"second-title mb24"},q={class:"describe mb24"},G=["innerHTML"],J={class:"flex-center"},K={class:"custom-tag"},O={class:"custom-tag"},Q={key:0,class:"participant-tag"},U={class:"icon mr8","aria-hidden":"true",style:{"font-size":"24px"}},W=f(()=>e("use",{"xlink:href":"#icon-Participant"},null,-1)),X=[W],Y=f(()=>e("svg",{class:"icon mr8","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-load"})],-1)),Z={__name:"Challenge",setup(l){const k=I();_([{id:100},{id:93}]);const C=t=>{k.push(`/challenge/detail/${t.id}`)},d=_([]),s=S({total:0,pageNum:1,pageSize:10}),u=()=>{const t=F.service();L("present","approved","public",{page:s.pageNum}).then(i=>{s.total=i.count;let r=i.results||[];d.value=s.pageNum===1?r:d.value.concat(r)}).finally(i=>{t.close()})},g=_([]),y=()=>{V().then(t=>{g.value=t||[]})};x(()=>{u(),y()});const b=()=>{s.pageNum+=1,u()};return(t,i)=>{const r=M;return n(),c(h,null,[e("div",H,o(t.$t("challenge.challenge")),1),(n(!0),c(h,null,$(d.value,a=>(n(),c("div",{class:"card mb24",key:a,onClick:ee=>C(a)},[e("div",A,[e("div",R,o(a.title),1),e("div",q,[e("div",{innerHTML:a.short_description,class:"editor-content-view"},null,8,G)]),e("div",J,[e("div",K,o(t.$t("challenge.ongoing")),1),e("div",O,o(p(v)(a.start_date))+" -- "+o(p(v)(a.end_date)),1),g.value.includes(a.id)?(n(),c("div",Q,[(n(),c("svg",U,X)),w(" "+o(t.$t("challenge.participated")),1)])):m("",!0)])]),e("div",{class:"right-con",style:z({backgroundImage:a.image?"url("+a.image+")":"url("+p(D)+")"})},null,4)],8,j))),128)),s.total>s.pageNum*s.pageSize?(n(),B(r,{key:0,link:"",onClick:b},{default:E(()=>[Y,e("span",null,o(t.$t("loadMore"))+"...",1)]),_:1})):m("",!0)],64)}}},ie=N(Z,[["__scopeId","data-v-acca3976"]]);export{ie as default};
