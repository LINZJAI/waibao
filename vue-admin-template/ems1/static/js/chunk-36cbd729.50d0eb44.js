(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36cbd729"],{b02a:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"patient-wrapper"},[a("div",{staticClass:"select-con"},[a("div",{staticClass:"label"},[e._v("时间")]),e._v(" "),a("el-date-picker",{staticStyle:{width:"250px"},attrs:{type:"daterange",size:"small"},on:{change:e.getTableData},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),a("div",{staticClass:"label"},[e._v("求救类型")]),e._v(" "),a("el-select",{staticClass:"reset-select",attrs:{size:"small"},on:{change:e.getTableData},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.typeDict,(function(e,t){return a("el-option",{key:t,attrs:{value:e.value,label:e.label}})})),1),e._v(" "),a("div",{staticClass:"label"},[e._v("危重等级")]),e._v(" "),a("el-select",{staticClass:"reset-select",attrs:{size:"small"},on:{change:e.getTableData},model:{value:e.dangerLevel,callback:function(t){e.dangerLevel=t},expression:"dangerLevel"}},e._l(e.dangerLevelDict,(function(e,t){return a("el-option",{key:t,attrs:{value:e.value,label:e.label}})})),1),e._v(" "),a("div",{staticClass:"label"},[e._v("状态")]),e._v(" "),a("el-select",{staticClass:"reset-select",attrs:{size:"small"},on:{change:e.getTableData},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},e._l(e.statusDict,(function(e,t){return a("el-option",{key:t,attrs:{value:e.value,label:e.label}})})),1),e._v(" "),a("div",{staticClass:"block"}),e._v(" "),a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入病人姓名/急救编号关键字搜索",size:"small"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.getTableData}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"content"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"patient-table",attrs:{height:e.appModel.wih-180,data:e.tableData}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"eventTime",label:"发单时间","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"taskNo",label:"急救编号","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"eventType",label:"求救类型","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"dangerLevel",label:"事件等级","min-width":"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:{danger:"危重"==t.row.dangerLevel||"重大事件"==t.row.dangerLevel}},[e._v(e._s(t.row.dangerLevel)+"\n          ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"patientSize",label:"病人数量","min-width":"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"patientNames",label:"病人","min-width":"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"急救状态","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.statusMap[t.row.status])+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"操作",label:"操作",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.patientSize>=1?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.goDetails(t.row)}}},[e._v("查看")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.currentChange}})],1)])},n=[],s=a("2934"),i=a("de52"),r=a.n(i),o={props:{},data:function(){return{tableLoading:!1,size:10,current:1,total:0,tableData:[],keyword:"",statusMap:{0:"未受理",1:"受理中",2:"已完成","-1":"不受理","-2":"已取消"},date:[r()().subtract(1,"M"),r()()],type:"",typeDict:[{label:"全部求救类型",value:""},{label:"个人求救",value:"个人求救"},{label:"群体事件",value:"群体事件"}],status:"",statusDict:[{label:"全部受理状态",value:""},{label:"未受理",value:"0"},{label:"受理中",value:"1"},{label:"已完成",value:"2"},{label:"不受理",value:"-1"},{label:"已取消",value:"-2"}],dangerLevel:"",dangerLevelDict:[{label:"全部",value:""},{label:"普通",value:"普通"},{label:"危重",value:"危重"},{label:"重大事件",value:"重大事件"}]}},methods:{getTableData:function(){var e=this,t={current:this.current,size:this.size,beginDate:r()(this.date[0]).format("YYYY-MM-DD"),endDate:r()(this.date[1]).format("YYYY-MM-DD"),eventType:this.type,status:this.status,dangerLevel:this.dangerLevel,keyword:this.keyword};this.tableLoading=!0,Object(s["o"])(t).then((function(t){e.tableLoading=!1,e.total=t.data.total,e.tableData=t.data.records}))},currentChange:function(e){this.current=e,this.getTableData()},goDetails:function(e){this.$router.push("/patient/record?taskNo=".concat(e.taskNo))}},created:function(){this.getTableData()},computed:{},components:{}},c=o,u=(a("ca9a"),a("4023")),d=Object(u["a"])(c,l,n,!1,null,"da4f8c42",null);t["default"]=d.exports},b75c:function(e,t,a){},ca9a:function(e,t,a){"use strict";var l=a("b75c"),n=a.n(l);n.a}}]);