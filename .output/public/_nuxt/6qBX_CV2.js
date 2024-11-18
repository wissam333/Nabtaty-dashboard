import{_ as B}from"./C0w8fQJS.js";import{_ as F}from"./C7It6wLV.js";import{_ as G}from"./BNkK-RkI.js";import{_ as M,h as O,r as _,K as q,e as z,f as n,g as o,j as a,t,l as S,k as c,q as g,x as V,y as j,u,s as k,F as N,m as J,p as K,c as y,v as W,B as H,C as Q,D as X,E as Z,G as ee}from"./CEFpPj_H.js";import{u as h}from"./BzMfPq7a.js";import{_ as ae}from"./SdlkZ04P.js";const se=b=>(Q("data-v-25b65a8e"),b=b(),X(),b),te={class:"title-container"},le={class:"head-title"},ne={class:"header4"},oe={class:"options"},ie={class:"d-flex flex-column-reverse mx-2"},ce=["placeholder"],de={class:"table-responsive"},re={key:0,class:"loading"},ue=se(()=>a("img",{src:Z,alt:""},null,-1)),pe=[ue],_e={key:1,class:"product-tabel"},he={class:"d-flex align-items-center"},me={class:"product-img"},fe=["src"],ve={key:1,src:ae,alt:""},ge={class:"product-info d-flex flex-column align-items-start"},be={class:"fw-bold"},$e={class:"badge rounded-pill bg-primary me-1"},ke={key:0,class:"badge rounded-pill bg-success me-1"},ye={key:1,class:"badge rounded-pill bg-danger me-1"},we={key:0,class:"badge rounded-pill bg-success me-1"},Ce={key:1,class:"badge rounded-pill bg-danger me-1"},De=["onClick"],Pe={class:"edit"},Ae={__name:"ListProduct",async setup(b){let $,R;const{public:{api:p,apiBase:r}}=H(),{locale:w}=O(),{$awn:E}=ee();let C=_(!1),D=_();const P=async()=>{if(C.value=!0,w.value==="ar"){const{data:e,pending:l}=await h(`${p.GetAllPlants}`,{credentials:"include",baseURL:r,credentials:"include",headers:{"accept-language":"ar"}},"$TYaYxYRzsT");y(()=>{e.value&&(D.value=e.value)})}else{const{data:e,pending:l}=await h(`${p.GetAllPlants}`,{credentials:"include",baseURL:r,credentials:"include",headers:{"accept-language":"en"}},"$F5OzDqfcDy");y(()=>{e.value&&(D.value=e.value)})}C.value=!1};P();let A=_();(async()=>{if(w.value==="ar"){const{data:e,pending:l}=await h(`${p.findAllCategories}`,{credentials:"include",baseURL:r,headers:{"accept-language":"ar"}},"$N2rYevAIA5");y(()=>{e.value&&(A.value=e.value)})}else{const{data:e,pending:l}=await h(`${p.findAllCategories}`,{credentials:"include",baseURL:r,headers:{"accept-language":"en"}},"$xsMcjwWS7K");y(()=>{e.value&&(A.value=e.value)})}})(),[$,R]=q(()=>h(p.GetSubCat,{baseURL:r,credentials:"include",method:"GET"},"$Y5FfbwJrop")),$=await $,R();const T=e=>{var v,i;let l=(v=A.value)==null?void 0:v.filter(L=>L.id===e);if(l)return(i=l[0])==null?void 0:i.category_name};let m=_(),d=_(!1);const I=e=>{d.value=e};let f=_("");const Y=z(()=>{var e;return(e=D.value)==null?void 0:e.filter(l=>l.plant_name.toLowerCase().includes(f.value.toLowerCase()))}),x=async()=>{await h(`${p.DeletePlant}/${m.value.id}`,{credentials:"include",baseURL:r,method:"DELETE"},"$mnzJkBOw0U"),P(),d.value=!1,w.value==="en"?E.success("Plant Deleted Successfully",{durations:{global:5e3}}):E.success("تم حذف النبات بنجاح",{durations:{global:5e3}})};return(e,l)=>{const v=B,i=F,L=G;return n(),o(N,null,[a("div",{class:K(["contain",("useSidebar"in e?e.useSidebar:u(W))().value?"shrink":""])},[a("div",te,[a("div",le,[a("h4",ne,t(e.$i18n.locale==="ar"?"قائمة النباتات":"Plant List"),1),a("p",null,[S(t(e.$i18n.locale==="ar"?"إضافة نبات جديد من":"Add new Plant from")+" ",1),c(v,{to:"/AddProduct"},{default:g(()=>[S(t(e.$i18n.locale==="ar"?"هنا":"here"),1)]),_:1})])]),a("div",oe,[a("div",ie,[V(a("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>k(f)?f.value=s:f=s),id:"price",type:"text",required:"",placeholder:e.$i18n.locale==="ar"?"ابحث":"Search"},null,8,ce),[[j,u(f)]])]),a("div",{class:"reload btn btn-success",onClick:l[1]||(l[1]=s=>P())},[c(i,{icon:["fas","rotate-right"]}),S(" "+t(e.$i18n.locale==="ar"?"إعادة تحميل":"Reload"),1)])])]),a("div",de,[u(C)?(n(),o("div",re,pe)):(n(),o("div",_e,[a("table",null,[a("thead",null,[a("tr",null,[a("th",null,t(e.$i18n.locale==="ar"?"الاسم":"Name"),1),a("th",null,t(e.$i18n.locale==="ar"?"السعر":"Price"),1),a("th",null,t(e.$i18n.locale==="ar"?"الفئات":"Categories"),1),a("th",null,t(e.$i18n.locale==="ar"?"جديد":"New"),1),a("th",null,t(e.$i18n.locale==="ar"?"مقترح":"Recommended"),1),a("th",null,t(e.$i18n.locale==="ar"?"تعديل":"Edit"),1)])]),a("tbody",null,[(n(!0),o(N,null,J(u(Y),s=>{var U;return n(),o("tr",{class:"rows",key:s.id},[a("td",he,[a("div",me,[(U=s==null?void 0:s.photos)!=null&&U.photoPath?(n(),o("img",{key:0,src:u(r)+"/"+s.photos.photoPath,alt:""},null,8,fe)):(n(),o("img",ve))]),a("div",ge,[a("h5",null,t(s.plant_name),1)])]),a("td",be,"$"+t(s.price),1),a("td",null,[a("p",$e,t(T(s.category_id)),1)]),a("td",null,[s.newest?(n(),o("p",ke,[c(i,{class:"check",icon:["fas","check"]})])):(n(),o("p",ye,[c(i,{class:"check",icon:["fas","xmark"]})]))]),a("td",null,[s.recommended?(n(),o("p",we,[c(i,{class:"check",icon:["fas","check"]})])):(n(),o("p",Ce,[c(i,{class:"check",icon:["fas","xmark"]})]))]),a("td",null,[a("span",{class:"delete",onClick:Se=>{k(d)?d.value=!0:d=!0,k(m)?m.value=s:m=s}},[c(i,{icon:["fas","trash"]})],8,De),c(v,{to:`/EditProduct/${s.id}`,class:"edit-link"},{default:g(()=>[a("span",Pe,[c(i,{icon:["fas","pen-to-square"]})])]),_:2},1032,["to"])])])}),128))])])]))])],2),c(L,{isOpen:u(d),onUpdateIsOpen:I},{header:g(()=>[a("h4",null,t(e.$i18n.locale==="ar"?"تأكيد الحذف":"Confirm Delete"),1)]),content:g(()=>[a("p",null,t(e.$i18n.locale==="ar"?"هل أنت متأكد من أنك تريد حذف":"Are You Sure You Want To Delete")+' "'+t(u(m).plant_name)+'"'+t(e.$i18n.locale==="ar"?"؟":"?"),1)]),footer:g(()=>[a("button",{class:"btn btn-secondary",onClick:l[2]||(l[2]=s=>k(d)?d.value=!1:d=!1)},t(e.$t("Close")),1),a("button",{class:"btn btn-danger",onClick:l[3]||(l[3]=s=>x())},t(e.$t("Delete")),1)]),_:1},8,["isOpen"])],64)}}},Ye=M(Ae,[["__scopeId","data-v-25b65a8e"]]);export{Ye as default};
