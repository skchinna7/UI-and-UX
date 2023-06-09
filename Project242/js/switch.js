!function(e,t){
	"object"==typeof exports&&"object"==typeof module?module.exports=t():
	"function"==typeof define&&define.amd?define([],t):
	"object"==typeof exports?exports.VueMaterial=t():
	e.VueMaterial=t()}
(this,function(){
	return function(e){
		function t(c){
			if(d[c])
				return d[c].exports;
			var i=d[c]={exports:{},id:c,loaded:!1};
			return e[c].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports
		}
		var d={};
		return t.m=e,t.c=d,t.p="/",t(0)
	}
	({0:function(e,t,d){e.exports=d(22)},22:
		function(e,t,d){
			"use strict";
			function c(e){
				return e&&e.__esModule?e:{default:e}}
				function i(e){
					e.component("md-switch",e.extend(m.default)),e.material.styles.push(r.default)}
					Object.defineProperty(t,"__esModule",{value:!0}),
					t.default=i;
					var s=d(146),m=c(s),n=d(108),r=c(n);
					e.exports=t.default},57:function(e,t){
						"use strict";
						Object.defineProperty(t,"__esModule",{value:!0});
						var d=75,c="-1px";
						t.default={props:{name:String,value:Boolean,id:String,disabled:Boolean,type:{type:String,default:"button"}}
						,data:function(){
							return{leftPos:c,checked:this.value}},computed:{classes:function(){return{"md-checked":Boolean(this.value),"md-disabled":this.disabled}},styles:function(){return{transform:"translate3D("+this.leftPos+", -50%, 0)"}}},watch:{checked:function(){this.leftPos=this.value?d+"%":c}},methods:{toggleSwitch:function(){this.disabled||(this.checked=!this.checked,this.$emit("change",this.checked),this.$emit("input",this.checked))}},mounted:function(){this.leftPos=this.value?d+"%":c}},e.exports=t.default},86:function(e,t){},108:function(e,t){e.exports=".THEME_NAME .md-switch.md-checked .md-switch-container,.THEME_NAME.md-switch.md-checked .md-switch-container{background-color:ACCENT-COLOR-500-0.5}.THEME_NAME .md-switch.md-checked .md-switch-thumb,.THEME_NAME.md-switch.md-checked .md-switch-thumb{background-color:ACCENT-COLOR}.THEME_NAME .md-switch.md-checked .md-ink-ripple,.THEME_NAME.md-switch.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME .md-switch.md-checked .md-ripple,.THEME_NAME.md-switch.md-checked .md-ripple{opacity:.38}.THEME_NAME .md-switch.md-checked.md-primary .md-switch-container,.THEME_NAME.md-switch.md-checked.md-primary .md-switch-container{background-color:PRIMARY-COLOR-500-0.5}.THEME_NAME .md-switch.md-checked.md-primary .md-switch-thumb,.THEME_NAME.md-switch.md-checked.md-primary .md-switch-thumb{background-color:PRIMARY-COLOR}.THEME_NAME .md-switch.md-checked.md-primary .md-ink-ripple,.THEME_NAME.md-switch.md-checked.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME .md-switch.md-checked.md-warn .md-switch-container,.THEME_NAME.md-switch.md-checked.md-warn .md-switch-container{background-color:WARN-COLOR-500-0.5}.THEME_NAME .md-switch.md-checked.md-warn .md-switch-thumb,.THEME_NAME.md-switch.md-checked.md-warn .md-switch-thumb{background-color:WARN-COLOR}.THEME_NAME .md-switch.md-checked.md-warn .md-ink-ripple,.THEME_NAME.md-switch.md-checked.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME .md-switch.md-disabled .md-switch-container,.THEME_NAME .md-switch.md-disabled.md-checked .md-switch-container,.THEME_NAME.md-switch.md-disabled .md-switch-container,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-container{background-color:rgba(0,0,0,0.12)}.THEME_NAME .md-switch.md-disabled .md-switch-thumb,.THEME_NAME .md-switch.md-disabled.md-checked .md-switch-thumb,.THEME_NAME.md-switch.md-disabled .md-switch-thumb,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-thumb{background-color:#bdbdbd}\n"},146:function(e,t,d){var c,i;d(86),c=d(57);var s=d(191);i=c=c||{},"object"!=typeof c.default&&"function"!=typeof c.default||(i=c=c.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=c},191:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"md-switch",class:e.classes},[e._h("div",{staticClass:"md-switch-container",on:{click:e.toggleSwitch}},[e._h("div",{directives:[{name:"md-ink-ripple",rawName:"v-md-ink-ripple",value:e.disabled,expression:"disabled"}],staticClass:"md-switch-thumb",style:e.styles},[e._h("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled},domProps:{value:e.value}})," ",e._h("button",{staticClass:"md-switch-holder",attrs:{type:e.type}})])])," ",e.$slots.default?e._h("label",{staticClass:"md-switch-label",attrs:{for:e.id||e.name}},[e._t("default")]):e._e()])},staticRenderFns:[]}}})});