"use strict";(self.webpackChunkbudgeting_app=self.webpackChunkbudgeting_app||[]).push([[257],{1257:(k,l,i)=>{i.r(l),i.d(l,{StatisticsModule:()=>D});var p=i(6814),u=i(5918),s=i(8961),e=i(4946),r=i(7441),g=i(7065),c=i(9609);const d=function(){return{sm:4,md:8,lg:8}},m=function(){return{sm:4,md:8,lg:16}},h=[{path:"",component:(()=>{class t{constructor(){this.loading=!0,this.pieData=[{group:"Bills",value:1e4},{group:"Housing",value:300},{group:"Food",value:1500},{group:"Miscellaneous",value:800}],this.pieOptions={title:"Income/Savings",resizable:!0,height:"400px",pie:{alignment:"center"},legend:{alignment:"center"},theme:"g90"},this.lineData=[{group:"Dataset 1",key:"Qty",value:34200},{group:"Dataset 1",key:"More",value:23500},{group:"Dataset 1",key:"Sold",value:53100},{group:"Dataset 1",key:"Restocking",value:42300},{group:"Dataset 1",key:"Misc",value:12300},{group:"Dataset 2",key:"Qty",value:34200},{group:"Dataset 2",key:"More",value:53200},{group:"Dataset 2",key:"Sold",value:42300},{group:"Dataset 2",key:"Restocking",value:21400},{group:"Dataset 2",key:"Misc",value:0},{group:"Dataset 3",key:"Qty",value:41200},{group:"Dataset 3",key:"More",value:18400},{group:"Dataset 3",key:"Sold",value:34210},{group:"Dataset 3",key:"Restocking",value:1400},{group:"Dataset 3",key:"Misc",value:42100},{group:"Dataset 4",key:"Qty",value:22e3},{group:"Dataset 4",key:"More",value:1200},{group:"Dataset 4",key:"Sold",value:9e3},{group:"Dataset 4",key:"Restocking",value:24e3,audienceSize:10},{group:"Dataset 4",key:"Misc",value:3e3,audienceSize:10}],this.lineOptions={title:"Income/Savings",axes:{bottom:{title:"2019 Annual Sales Figures",mapsTo:"key",scaleType:"labels"},left:{mapsTo:"value",title:"Conversion rate",scaleType:"linear"}},height:"400px",theme:"g90"},this.tableModel=new s.G0,this.tableDataTemp=[{name:"Rent",expected:1e3,actual:800,due:"n/a",variance:200},{name:"Rent",expected:1e3,actual:800,due:"n/a",variance:200},{name:"Rent",expected:1e3,actual:800,due:"n/a",variance:200}]}ngOnInit(){this.initTable()}initTable(){this.tableModel.header=[new s.jr({data:"Name"}),new s.jr({data:"Expected"}),new s.jr({data:"Actual"}),new s.jr({data:"Due"}),new s.jr({data:"Variance"})];let o=this.tableDataTemp.map(a=>{let n=[];return n.push(new s.r8({data:a.name})),n.push(new s.r8({data:a.expected})),n.push(new s.r8({data:a.actual})),n.push(new s.r8({data:a.due})),n.push(new s.r8({data:a.variance})),n});this.tableModel.data=o,this.loading=!1}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-statistics"]],decls:10,vars:21,consts:[["cdsGrid","",1,"px-point-5",3,"useCssGrid","condensed","narrow","fullWidth"],["cdsCol","",1,"mb-1","mx-point-5",3,"columnNumbers"],[3,"data","options"],[3,"model","stickyHeader","size","skeleton","showSelectionColumn","striped","sortable"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"cds-tile"),e._UZ(3,"ibm-pie-chart",2),e.qZA()(),e.TgZ(4,"div",1)(5,"cds-tile"),e._UZ(6,"ibm-line-chart",2),e.qZA()(),e.TgZ(7,"div",1)(8,"cds-table-container"),e._UZ(9,"cds-table",3),e.qZA()()()),2&a&&(e.Q6J("useCssGrid",!0)("condensed",!0)("narrow",!0)("fullWidth",!0),e.xp6(1),e.Q6J("columnNumbers",e.DdM(18,d)),e.xp6(2),e.Q6J("data",n.pieData)("options",n.pieOptions),e.xp6(1),e.Q6J("columnNumbers",e.DdM(19,d)),e.xp6(2),e.Q6J("data",n.lineData)("options",n.lineOptions),e.xp6(1),e.Q6J("columnNumbers",e.DdM(20,m)),e.xp6(2),e.Q6J("model",n.tableModel)("stickyHeader",!1)("size","md")("skeleton",n.loading)("showSelectionColumn",!1)("striped",!0)("sortable",!0))},dependencies:[r.iK,r.lj,g.n9,c.Dw,c.JU,s.xJ,s.iA]})}return t})()}];let v=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#a=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(h),u.Bz]})}return t})();var y=i(6208);let D=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#a=this.\u0275inj=e.cJS({imports:[p.ez,v,y.m]})}return t})()}}]);