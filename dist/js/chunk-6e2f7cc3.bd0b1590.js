(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e2f7cc3"],{1799:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pages.current_page-1)}}},[t._m(0)]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:e==t.pages.current_page},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pages.current_page+1)}}},[t._m(1)])],2)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])}],n={props:["pages"],methods:{getProducts:function(t){this.$emit("ChangePagenation",t)}}},i=n,l=a("2877"),c=Object(l["a"])(i,o,s,!1,null,"162ac10a",null);e["a"]=c.exports},"244d":function(t,e,a){"use strict";var o=a("b0b3"),s=a.n(o);s.a},"6ff1":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[t._v("\n        "+t._s(t.data.title)+"\n      ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.remove(t.data.id)}}},[t._v("確認刪除")])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("是否刪除")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n={props:["data"],methods:{remove:function(t){this.$emit("delete",t)}}},i=n,l=a("2877"),c=Object(l["a"])(i,o,s,!1,null,null,null);e["a"]=c.exports},b0b3:function(t,e,a){},d0a3:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"button"},on:{click:function(e){return t.openCouponModel(null,!1)}}},[t._v("新增優惠卷")])]),a("div",{staticClass:"table-wrap"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.coupons,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.code))]),a("td",[t._v(t._s(e.percent)+"%")]),a("td",[t._v(t._s(e.due_date))]),a("td",[1==e.is_enabled?a("span",[a("i",{staticClass:"fas fa-circle text-success"})]):a("span",[a("i",{staticClass:"fas fa-circle text-danger"})])]),a("td",[a("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(a){return t.openCouponModel(e,!0)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.openDelCouponModal(e)}}},[a("i",{staticClass:"fas fa-trash"})])])])})),0)])]),a("pagination",{attrs:{pages:t.pagination},on:{ChangePagenation:t.getCoupons}}),a("delModal",{attrs:{data:t.delCoupon},on:{delete:t.deleteCoupon}}),a("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"折扣標題"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"code"}},[t._v("代碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"折扣代碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"discount"}},[t._v("折數")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"discount",placeholder:"折扣數"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"due_date"}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date",placeholder:"到期日"},domProps:{value:t.tempCoupon.due_date},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"due_date",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{"true-value":1,"false-value":0,type:"checkbox",id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var a=t.tempCoupon.is_enabled,o=e.target,s=o.checked?1:0;if(Array.isArray(a)){var n=null,i=t._i(a,n);o.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",a.concat([n])):i>-1&&t.$set(t.tempCoupon,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updataCoupon}},[t._v("確認")])])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("折扣標題")]),a("th",{attrs:{scope:"col"}},[t._v("折扣代碼")]),a("th",{attrs:{scope:"col"}},[t._v("折數")]),a("th",{attrs:{scope:"col"}},[t._v("到期日")]),a("th",{attrs:{scope:"col"}},[t._v("啟用")]),a("th",{attrs:{scope:"col"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("訂單詳細內容")]),a("span",[t._v("編輯訂單")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=a("1157"),i=a.n(n),l=a("1799"),c=a("6ff1"),r={data:function(){return{coupons:[],pagination:{},modifyCoupon:!1,tempCoupon:[],delCoupon:[]}},methods:{getCoupons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("cheri","/admin/coupons?page=").concat(t),a=this;a.$store.dispatch("updateLoading",!0),a.$http.get(e).then((function(t){t.data.success&&(a.coupons=t.data.coupons,a.pagination=t.data.pagination,a.$store.dispatch("updateLoading",!1))}))},openCouponModel:function(t,e){var a=this;a.tempCoupon=e?JSON.parse(JSON.stringify(t)):{},a.modifyCoupon=e,i()("#couponModal").modal("show")},updataCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("cheri","/admin/coupon/").concat(t.tempCoupon.id),a="put",o="已更新優惠卷",s="success";t.modifyCoupon||(e=" ".concat("https://vue-course-api.hexschool.io","/api/").concat("cheri","/admin/coupon"),a="post",o="已新增優惠卷"),t.$http[a](e,{data:t.tempCoupon}).then((function(e){e.data.success||(o="系統忙碌，請稍後",s="danger"),t.getCoupons()})),i()("#couponModal").modal("hide"),t.$store.dispatch("updateMessage",{message:o,status:s})},openDelCouponModal:function(t){var e=this;e.delCoupon=Object.assign({},t),i()("#delModal").modal("show")},deleteCoupon:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("cheri","/admin/coupon/").concat(t),a=this;a.$http.delete(e).then((function(t){t.data.success&&(i()("#delModal").modal("hide"),a.getCoupons())}))}},components:{pagination:l["a"],delModal:c["a"]},created:function(){this.getCoupons()}},d=r,p=(a("244d"),a("2877")),u=Object(p["a"])(d,o,s,!1,null,"b967a15a",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6e2f7cc3.bd0b1590.js.map