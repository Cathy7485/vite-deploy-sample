import{_ as a,c,d as r,t as n,a as d,o as p}from"./index.7054a9f7.js";const i={name:"Product",data(){return{product:{}}},mounted(){const{id:t}=this.$route.params,e=`https://vue3-course-api.hexschool.io/v2/api/kc777/product/${t}`;this.$http.get(e).then(()=>{this.product=res.data.product}).catch(s=>{alert(s.response.data.message)})}},u={class:"about"},h=d("h1",null,"This is \u55AE\u4E00\u7522\u54C1\u9801\u9762",-1);function _(t,e,s,l,o,m){return p(),c("div",u,[h,r(" "+n(o.product.title),1)])}const f=a(i,[["render",_]]);export{f as default};
