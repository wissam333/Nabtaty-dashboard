import{_ as K}from"./C7It6wLV.js";import{_ as H}from"./BNkK-RkI.js";import{_ as J,h as X,r as n,f as D,g as L,j as e,t,k as m,l as F,u as i,F as N,m as Q,p as Z,q as S,s as d,c as O,v as x,x as $,y as C,B as ee,C as le,D as oe,E as te,G as ae}from"./CEFpPj_H.js";import{u as A}from"./BzMfPq7a.js";import{s as se}from"./BVs5u3tg.js";import"./Ces09fVS.js";const ne=R=>(le("data-v-e2e59646"),R=R(),oe(),R),ie={class:"title-container"},de={class:"head-title"},ue={class:"header4"},re={class:"options"},ce={class:"table-responsive"},pe={key:0,class:"loading"},ve=ne(()=>e("img",{src:te,alt:""},null,-1)),fe=[ve],me={key:1,class:"cat-tabel"},be=["onClick"],he={class:"edit-link"},_e=["onClick"],$e=["dir"],Ce={class:"content"},ye={class:"d-flex flex-column-reverse mb-3"},ge=["placeholder"],we={for:"phone"},ke={class:"d-flex flex-column-reverse mb-3"},Ee=["placeholder"],Ie={for:"email"},Ue={class:"d-flex flex-column-reverse mb-3"},De=["placeholder"],Le={for:"website"},Se={class:"mt-5 d-flex w-100 justify-content-end"},Ae=["onClick"],Re=["dir"],Ve={class:"content"},qe={class:"d-flex flex-column-reverse mb-3"},Pe=["placeholder"],Te={for:"editPhone"},Be={class:"d-flex flex-column-reverse mb-3"},Fe=["placeholder"],Ne={for:"editEmail"},Oe={class:"d-flex flex-column-reverse mb-3"},Ge=["placeholder"],Me={for:"editWebsite"},We={class:"mt-5 d-flex w-100 justify-content-end"},Ye=["onClick"],je={__name:"ContactInfo",setup(R){const{public:{api:y,apiBase:g}}=ee(),{locale:w}=X(),{$awn:r}=ae(),k=n(!1),E=n(!1);let c=n(),p=n(),v=n(),b=n(),h=n(),_=n(),V=n(),u=n(!1);const G=l=>{u.value=l};let P=n(!1),T=n();const I=async()=>{if(P.value=!0,w.value==="ar"){const{data:l,pending:o}=await A(`${y.GetContactInfo}`,{credentials:"include",baseURL:g,headers:{"accept-language":"ar"}},"$7FcI44Gamu");O(()=>{l.value&&(T.value=l.value)})}else{const{data:l,pending:o}=await A(`${y.GetContactInfo}`,{credentials:"include",baseURL:g,headers:{"accept-language":"en"}},"$bzK6K1hYhy");O(()=>{l.value&&(T.value=l.value)})}P.value=!1};I();const M=async()=>{await A(`${y.DeleteContactInfo}/${V.value.id}`,{credentials:"include",baseURL:g,method:"DELETE"},"$kXy0S4FE7A"),I(),u.value=!1,w.value==="en"?r.success("Information Deleted Successfully",{durations:{global:5e3}}):r.success("تم حذف المعلومات بنجاح",{durations:{global:5e3}})},W=async()=>{var o,f,U;const{data:l}=await A(y.AddContactInfo,{baseURL:g,method:"POST",credentials:"include",body:{phone:b.value,email:h.value,website:_.value}},"$y0PduCHUYJ");(o=l.value)!=null&&o.success?w.value==="en"?r.success("Information Added Successfully",{durations:{global:5e3}}):r.success("تم إضافة المعلومات بنجاح",{durations:{global:5e3}}):w.value==="en"?r.alert("error occurd: "+((f=l.value)==null?void 0:f.error),{durations:{global:5e3}}):r.alert(": حدث خطأ"+((U=l.value)==null?void 0:U.error),{durations:{global:5e3}}),I(),k.value=!1,b.value="",h.value="",_.value=""},Y=async l=>{c.value=l.phone,p.value=l.email,v.value=l.website};let q=n();const j=async()=>{await A(`${y.EditContactInfo}/${q.value.id}`,{credentials:"include",body:{phone:c.value,email:p.value,website:v.value},baseURL:g,method:"PUT"},"$4UwrTOL2gh"),I(),E.value=!1,c.value="",p.value="",v.value="",w.value==="en"?r.success("Category Edited Successfully",{durations:{global:5e3}}):r.success("تم تعديل الفئة بنجاح",{durations:{global:5e3}})};return(l,o)=>{var B;const f=K,U=se,z=H;return D(),L(N,null,[e("div",{class:Z(["contain",("useSidebar"in l?l.useSidebar:i(x))().value?"shrink":""])},[e("div",ie,[e("div",de,[e("h4",ue,t(l.$i18n.locale==="ar"?"معلومات التواصل":"Contact Information"),1)]),e("div",re,[e("div",{class:"reload btn btn-success mx-2",onClick:o[0]||(o[0]=a=>k.value=!0)},[m(f,{icon:["fas","plus"]}),F(" "+t(l.$i18n.locale==="ar"?"إضافة":"Add"),1)]),e("div",{class:"reload btn btn-success",onClick:o[1]||(o[1]=a=>I())},[m(f,{icon:["fas","rotate-right"]}),F(" "+t(l.$i18n.locale==="ar"?"إعادة تحميل":"Reload"),1)])])]),e("div",ce,[i(P)?(D(),L("div",pe,fe)):(D(),L("div",me,[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,t(l.$i18n.locale==="ar"?"الهاتف":"Phone"),1),e("th",null,t(l.$i18n.locale==="ar"?"البريد الإلكتروني":"Email"),1),e("th",null,t(l.$i18n.locale==="ar"?"الموقع":"Location"),1),e("th",null,t(l.$i18n.locale==="ar"?"تعديل":"Edit"),1)])]),e("tbody",null,[(D(!0),L(N,null,Q((B=i(T))==null?void 0:B.data,a=>(D(),L("tr",{class:"rows",key:a.id},[e("td",null,[e("div",null,[e("span",null,t(a.phone),1)])]),e("td",null,[e("div",null,[e("span",null,t(a.email),1)])]),e("td",null,[e("div",null,[e("span",null,t(a.website),1)])]),e("td",null,[e("span",{class:"delete",onClick:s=>{d(u)?u.value=!0:u=!0,d(V)?V.value=a:V=a}},[m(f,{icon:["fas","trash"]})],8,be),e("span",he,[e("span",{class:"edit",onClick:s=>{E.value=!0,d(q)?q.value=a:q=a,Y(a)}},[m(f,{icon:["fas","pen-to-square"]})],8,_e)])])]))),128))])])]))])],2),m(U,{visible:i(k),"onUpdate:visible":o[6]||(o[6]=a=>d(k)?k.value=a:null),modal:"",style:{width:"25rem"}},{container:S(({closeCallback:a})=>[e("div",{class:"dialog",dir:l.$i18n.locale==="ar"?"rtl":"ltr"},[e("span",null,t(l.$i18n.locale==="ar"?"إضافة فئة جديدة":"Add New Category"),1),e("div",Ce,[e("div",null,[e("div",ye,[$(e("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>d(b)?b.value=s:b=s),id:"phone",type:"text",autocomplete:"off",placeholder:l.$i18n.locale==="ar"?"الهاتف":"phone",required:""},null,8,ge),[[C,i(b)]]),e("label",we,t(l.$i18n.locale==="ar"?"الهاتف":"phone"),1)]),e("div",ke,[$(e("input",{"onUpdate:modelValue":o[3]||(o[3]=s=>d(h)?h.value=s:h=s),id:"email",type:"text",autocomplete:"off",placeholder:l.$i18n.locale==="ar"?"البريد الإلكتروني":"Email",required:""},null,8,Ee),[[C,i(h)]]),e("label",Ie,t(l.$i18n.locale==="ar"?"البريد الإلكتروني":"Email"),1)]),e("div",Ue,[$(e("input",{"onUpdate:modelValue":o[4]||(o[4]=s=>d(_)?_.value=s:_=s),id:"website",type:"text",autocomplete:"off",placeholder:l.$i18n.locale==="ar"?"الموقع":"Location",required:""},null,8,De),[[C,i(_)]]),e("label",Le,t(l.$i18n.locale==="ar"?"الموقع":"Location"),1)])])]),e("div",Se,[e("button",{class:"btn btn-secondary",onClick:a},t(l.$t("Close")),9,Ae),e("button",{class:"btn btn-success mx-2",onClick:o[5]||(o[5]=s=>W()),autofocus:""},t(l.$t("Add")),1)])],8,$e)]),_:1},8,["visible"]),m(U,{visible:i(E),"onUpdate:visible":o[11]||(o[11]=a=>d(E)?E.value=a:null),modal:"",style:{width:"25rem"}},{container:S(({closeCallback:a})=>[e("div",{class:"dialog",dir:l.$i18n.locale==="ar"?"rtl":"ltr"},[e("span",null,t(l.$i18n.locale==="ar"?"تعديل المعلومات ":"Edit Information"),1),e("div",Ve,[e("div",null,[e("div",qe,[$(e("input",{"onUpdate:modelValue":o[7]||(o[7]=s=>d(c)?c.value=s:c=s),id:"editPhone",type:"text",autocomplete:"off",placeholder:l.$i18n.locale==="ar"?"الهاتف":"phone",required:""},null,8,Pe),[[C,i(c)]]),e("label",Te,t(l.$i18n.locale==="ar"?"الهاتف":"phone"),1)]),e("div",Be,[$(e("input",{"onUpdate:modelValue":o[8]||(o[8]=s=>d(p)?p.value=s:p=s),id:"editEmail",type:"text",autocomplete:"off",placeholder:l.$i18n.locale==="ar"?"البريد الإلكتروني":"Email",required:""},null,8,Fe),[[C,i(p)]]),e("label",Ne,t(l.$i18n.locale==="ar"?"البريد الإلكتروني":"Email"),1)]),e("div",Oe,[$(e("input",{"onUpdate:modelValue":o[9]||(o[9]=s=>d(v)?v.value=s:v=s),id:"editWebsite",type:"text",autocomplete:"off",placeholder:l.$i18n.locale==="ar"?"الموقع":"Location",required:"",title:"Enter only letters and spaces"},null,8,Ge),[[C,i(v)]]),e("label",Me,t(l.$i18n.locale==="ar"?"الموقع":"Location"),1)])])]),e("div",We,[e("button",{class:"btn btn-secondary",onClick:a},t(l.$t("Close")),9,Ye),e("button",{class:"btn btn-success mx-2",onClick:o[10]||(o[10]=s=>j()),autofocus:""},t(l.$t("Edit")),1)])],8,Re)]),_:1},8,["visible"]),m(z,{isOpen:i(u),onUpdateIsOpen:G},{header:S(()=>[e("h4",null,t(l.$i18n.locale==="ar"?"تأكيد الحذف":"Confirm Delete"),1)]),content:S(()=>[e("p",null,t(l.$i18n.locale==="ar"?"هل أنت متأكد من أنك تريد حذف":"Are You Sure You Want To Delete")+" "+t(l.$i18n.locale==="ar"?"؟":"?"),1)]),footer:S(()=>[e("button",{class:"btn btn-secondary",onClick:o[12]||(o[12]=a=>d(u)?u.value=!1:u=!1)},t(l.$t("Close")),1),e("button",{class:"btn btn-danger",onClick:o[13]||(o[13]=a=>M())},t(l.$t("Delete")),1)]),_:1},8,["isOpen"])],64)}}},Ze=J(je,[["__scopeId","data-v-e2e59646"]]);export{Ze as default};
