(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ffbf618"],{"8a3d":function(t,e,a){"use strict";var l=a("f41e"),n=a.n(l);n.a},dea9:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"patient-wrapper"},[a("div",{staticClass:"select-con"},[a("div",{staticClass:"label"},[t._v("病人姓名")]),t._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入病人姓名关键字搜索",size:"small"},model:{value:t.patientName,callback:function(e){t.patientName=e},expression:"patientName"}}),t._v(" "),a("div",{staticClass:"label"},[t._v("病人性别")]),t._v(" "),a("el-select",{staticClass:"reset-select",attrs:{size:"small"},on:{change:t.getTableData},model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}},t._l(t.sexDict,(function(t,e){return a("el-option",{key:e,attrs:{value:t.value,label:t.label}})})),1),t._v(" "),a("div",{staticClass:"label"},[t._v("申请车辆")]),t._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入申请车辆关键字搜索",size:"small"},model:{value:t.applyName,callback:function(e){t.applyName=e},expression:"applyName"}}),t._v(" "),a("div",{staticClass:"label"},[t._v("状态")]),t._v(" "),a("el-select",{staticClass:"reset-select",attrs:{size:"small"},on:{change:t.getTableData},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},t._l(t.statusDict,(function(t,e){return a("el-option",{key:e,attrs:{value:t.value,label:t.label}})})),1),t._v(" "),a("div",{staticClass:"block"}),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:t.getTableData}},[t._v("查询")])],1),t._v(" "),a("div",{staticClass:"content"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticClass:"patient-table",attrs:{height:t.appModel.wih-180,data:t.tableData}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"会诊标题","min-width":"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"patientName",label:"病人姓名","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别","min-width":"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applyTime",label:"申请时间","min-width":"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applyName",label:"申请车辆","min-width":"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"doctorName",label:"申请医生","min-width":"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"状态","min-width":"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t.statusMap[e.row.status])+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"操作",label:"操作",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.goDetails(e.row)}}},[t._v("进入")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.currentChange}})],1)])},n=[],s=a("2934"),i=a("de52"),o=a.n(i),c={props:{},data:function(){return{tableLoading:!1,size:10,current:1,total:0,tableData:[],patientName:"",sex:"",applyName:"",date:[o()().subtract(1,"M"),o()()],type:"",sexDict:[{label:"全部",value:""},{label:"男",value:"男"},{label:"女",value:"女"}],status:"",statusMap:{0:"审核中",1:"待开始",2:"进行中",3:"已结束","-1":"拒绝申请","-2":"取消申请"},statusDict:[{label:"全部",value:""},{label:"审核中",value:"0"},{label:"待开始",value:"1"},{label:"进行中",value:"2"},{label:"已结束",value:"3"},{label:"拒绝申请",value:"-1"},{label:"取消申请",value:"-2"}],dangerLevel:"",dangerLevelDict:[{label:"全部",value:""},{label:"普通",value:"普通"},{label:"危重",value:"危重"},{label:"重大事件",value:"重大事件"}]}},methods:{getTableData:function(){var t=this,e={current:this.current,size:this.size,status:this.status,patientName:this.patientName,sex:this.sex,applyName:this.applyName};this.tableLoading=!0,Object(s["h"])(e).then((function(e){t.tableLoading=!1,t.total=e.data.total,t.tableData=e.data.records}))},currentChange:function(t){this.current=t,this.getTableData()},goDetails:function(t){this.$router.push("/consultation/detail?roomId=".concat(t.roomId,"&groupId=").concat(window.encodeURIComponent(t.groupId)))}},created:function(){this.getTableData()},computed:{},components:{}},r=c,u=(a("8a3d"),a("4023")),p=Object(u["a"])(r,l,n,!1,null,"6427304e",null);e["default"]=p.exports},f41e:function(t,e,a){}}]);