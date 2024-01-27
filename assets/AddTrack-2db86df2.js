import{_ as T,a8 as $,a0 as E,u as w,a as V,r as S,o as U,bD as D,b as q,c as I,d,t as r,a2 as i,w as t,bE as Y,a3 as F,E as M,j as x,a4 as P}from"./index-c90bc775.js";import{a as z,E as C}from"./el-form-item-091f8ed7.js";import{E as R,a as B}from"./Editor-358c199e.js";/* empty css                 */import{E as H}from"./el-switch-be87da7f.js";import{m as A}from"./challenge-e8d85911.js";import"./castArray-2def1d6a.js";import"./_initCloneObject-d01ac546.js";import"./flatten-c41bc7f7.js";import"./index-066c6226.js";import"./isEqual-44e6bdeb.js";const N={class:"container"},Z={class:"container-main mb24"},j={class:"title"},L={class:"inline-title"},O={class:"inline-title"},G={class:"inline-title"},J={class:"flex-between",style:{width:"100%"}},K={class:"inline-title"},Q={class:"inline-title"},W={__name:"AddTrack",setup(X){const u=$(),{t:p}=E(),b=w(),e=V({id:void 0,name:"",description:"",leaderboard_public:!1,is_public:!0,is_submission_public:!0,start_date:"",end_date:"",test_annotation_file:"",codename:"",max_submissions_per_day:"",max_submissions_per_month:"",max_submissions:"",is_restricted_to_select_one_submission:!1,is_partial_submission_evaluation_enabled:!1,allowed_submission_file_types:""}),c=S(),_=(s,a,n)=>{!a||a=="<p><br></p>"?n(new Error(s.field+" is required")):n()},v=V({name:[{required:!0,message:"title is required",trigger:"blur"},{min:3,max:100,message:"Length should be 3 to 100",trigger:"blur"}],description:[{validator:_,trigger:"blur"}],evaluation_details:[{validator:_,trigger:"blur"}],terms_and_conditions:[{validator:_,trigger:"blur"}],submission_guidelines:[{validator:_,trigger:"blur"}],leaderboard_description:[{validator:_,trigger:"blur"}],max_submissions_per_day:[{pattern:/^-?\d+(\.\d+)?$/,message:"Enter numbers only",trigger:"blur"}],max_submissions_per_month:[{pattern:/^-?\d+(\.\d+)?$/,message:"Enter numbers only",trigger:"blur"}],max_submissions:[{pattern:/^-?\d+(\.\d+)?$/,message:"Enter numbers only",trigger:"blur"}]}),y=async s=>{s&&await s.validate((a,n)=>{a&&Y(u.params.challengeId,{id:e.id,name:e.name,description:e.description,leaderboard_public:e.leaderboard_public,is_public:e.is_public,is_submission_public:e.is_submission_public,start_date:e.start_date,end_date:e.end_date,test_annotation_file:e.test_annotation_file,codename:e.codename,max_submissions_per_day:e.max_submissions_per_day,max_submissions_per_month:e.max_submissions_per_month,max_submissions:e.max_submissions,is_restricted_to_select_one_submission:e.is_restricted_to_select_one_submission,is_partial_submission_evaluation_enabled:e.is_partial_submission_evaluation_enabled}).then(o=>{F.success(e.id!==void 0?p("addTrack.updateSuccess"):p("addTrack.createSuccess")),b.push("/host")})})},k=()=>{b.push("/host")};return U(()=>{u.params.challengeId!==void 0&&A(u.params.challengeId).then(s=>{e.title=s.title}),u.params.trackId!==void 0&&D(u.params.challengeId,u.params.trackId).then(s=>{e.name=s.name,e.description=s.description,e.leaderboard_public=s.leaderboard_public,e.is_public=s.is_public,e.is_submission_public=s.is_submission_public,e.start_date=s.start_date,e.end_date=s.end_date,e.test_annotation_file=s.test_annotation_file,e.codename=s.codename,e.max_submissions_per_day=s.max_submissions_per_day,e.max_submissions_per_month=s.max_submissions_per_month,e.max_submissions=s.max_submissions,e.is_restricted_to_select_one_submission=s.is_restricted_to_select_one_submission,e.is_partial_submission_evaluation_enabled=s.is_partial_submission_evaluation_enabled,e.allowed_submission_file_types=s.allowed_submission_file_types,e.id=s.id})}),(s,a)=>{const n=P,o=C,m=H,f=B,h=z,g=M;return q(),I("div",N,[d("div",Z,[d("div",j,r(e.title),1),i(h,{ref_key:"ruleFormRef",ref:c,model:e,rules:v,"label-width":"200px","label-position":"top",size:"default","status-icon":"","hide-required-asterisk":""},{default:t(()=>[i(o,{label:s.$t("addTrack.name"),prop:"name"},{default:t(()=>[i(n,{modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=l=>e.name=l),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"]),i(o,{label:s.$t("addChall.desc"),prop:"description"},{default:t(()=>[i(R,{modelValue:e.description,"onUpdate:modelValue":a[1]||(a[1]=l=>e.description=l)},null,8,["modelValue"])]),_:1},8,["label"]),i(o,{prop:"leaderboard_public"},{default:t(()=>[d("span",L,r(s.$t("addTrack.lbPublic")),1),i(m,{modelValue:e.leaderboard_public,"onUpdate:modelValue":a[2]||(a[2]=l=>e.leaderboard_public=l),size:"small"},null,8,["modelValue"])]),_:1}),i(o,{prop:"is_public"},{default:t(()=>[d("span",O,r(s.$t("addTrack.isPublic")),1),i(m,{modelValue:e.is_public,"onUpdate:modelValue":a[3]||(a[3]=l=>e.is_public=l),size:"small"},null,8,["modelValue"])]),_:1}),i(o,{prop:"is_submission_public"},{default:t(()=>[d("span",G,r(s.$t("addTrack.isSubmiPublic")),1),i(m,{modelValue:e.is_submission_public,"onUpdate:modelValue":a[4]||(a[4]=l=>e.is_submission_public=l),size:"small"},null,8,["modelValue"])]),_:1}),i(o,null,{default:t(()=>[d("div",J,[i(o,{label:s.$t("addTrack.startDate"),prop:"start_date",required:""},{default:t(()=>[i(f,{modelValue:e.start_date,"onUpdate:modelValue":a[5]||(a[5]=l=>e.start_date=l),type:"datetime",placeholder:"Select date and time","value-format":"YYYY-MM-DDTHH:mm:ssZ",style:{width:"500px"}},null,8,["modelValue"])]),_:1},8,["label"]),i(o,{label:s.$t("addTrack.endDate"),prop:"end_date",required:""},{default:t(()=>[i(f,{modelValue:e.end_date,"onUpdate:modelValue":a[6]||(a[6]=l=>e.end_date=l),type:"datetime",placeholder:"Select date and time","value-format":"YYYY-MM-DDTHH:mm:ssZ",style:{width:"500px"}},null,8,["modelValue"])]),_:1},8,["label"])])]),_:1}),i(o,{label:s.$t("addTrack.codename"),prop:"codename",required:""},{default:t(()=>[i(n,{modelValue:e.codename,"onUpdate:modelValue":a[7]||(a[7]=l=>e.codename=l),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"]),i(o,{label:s.$t("addTrack.maxSubmiPerDay"),prop:"max_submissions_per_day",required:""},{default:t(()=>[i(n,{modelValue:e.max_submissions_per_day,"onUpdate:modelValue":a[8]||(a[8]=l=>e.max_submissions_per_day=l),maxlength:"32"},null,8,["modelValue"])]),_:1},8,["label"]),i(o,{label:s.$t("addTrack.maxSubmiPerMonth"),prop:"max_submissions_per_month",required:""},{default:t(()=>[i(n,{modelValue:e.max_submissions_per_month,"onUpdate:modelValue":a[9]||(a[9]=l=>e.max_submissions_per_month=l),maxlength:"32"},null,8,["modelValue"])]),_:1},8,["label"]),i(o,{label:s.$t("addTrack.maxSubmissions"),prop:"max_submissions",required:""},{default:t(()=>[i(n,{modelValue:e.max_submissions,"onUpdate:modelValue":a[10]||(a[10]=l=>e.max_submissions=l),maxlength:"32"},null,8,["modelValue"])]),_:1},8,["label"]),i(o,{prop:"is_restricted_to_select_one_submission"},{default:t(()=>[d("span",K,r(s.$t("addTrack.isRestrictedToSelectOneSubmission")),1),i(m,{modelValue:e.is_restricted_to_select_one_submission,"onUpdate:modelValue":a[11]||(a[11]=l=>e.is_restricted_to_select_one_submission=l),size:"small"},null,8,["modelValue"])]),_:1}),i(o,{prop:"is_partial_submission_evaluation_enabled"},{default:t(()=>[d("span",Q,r(s.$t("addTrack.isPartialSubmissionEvaluationEnabled")),1),i(m,{modelValue:e.is_partial_submission_evaluation_enabled,"onUpdate:modelValue":a[12]||(a[12]=l=>e.is_partial_submission_evaluation_enabled=l),size:"small"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),i(g,{style:{width:"180px","border-radius":"2px"},type:"primary",onClick:a[13]||(a[13]=l=>y(c.value))},{default:t(()=>[x(r(e.id?s.$t("save"):s.$t("create")),1)]),_:1}),i(g,{style:{width:"180px","border-radius":"2px"},onClick:a[14]||(a[14]=l=>k())},{default:t(()=>[x(r(s.$t("cancel")),1)]),_:1})])}}},_e=T(W,[["__scopeId","data-v-4e801c24"]]);export{_e as default};
