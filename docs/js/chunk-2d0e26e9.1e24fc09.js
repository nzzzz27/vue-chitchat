(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e26e9"],{"7f59":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("main",{staticClass:"l-container__inner -narrow"},[a("section",{staticClass:"form__mainarea"},[a("h1",{staticClass:"title__level1"},[t._v("Resister")]),a("div",[a("p",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form",attrs:{type:"text",name:"email",placeholder:"メールアドレス"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("p",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form",attrs:{type:"text",name:"password",placeholder:"パスワード（6文字以上）"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn__send",on:{click:function(e){return t.sendAuthData()}}},[t._v("登録")])]),a("div",{staticClass:"mt32"},[a("span",[t._v("アカウントをお持ちですか？")]),a("router-link",{attrs:{to:"/login"}},[t._v("ログイン")])],1)]),a("div",{staticClass:"form__subarea"},[a("p",[a("router-link",{attrs:{to:"/"}},[t._v("< HOME")])],1)])])])},i=[],n={name:"Resister",data:function(){return{email:"",password:""}},methods:{linkToLogin:function(){this.$router.push("/login")},sendAuthData:function(){this.$store.dispatch("resister",{email:this.email,password:this.password})}}},o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,"27eadac4",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e26e9.1e24fc09.js.map