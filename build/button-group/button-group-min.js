YUI.add("button-group",function(b){var a=function(d){this.addAttrs({buttons:{value:[]},selection:{value:[]},type:{value:"push"},buttonType:{valueFn:function(){if(d.type==="checkbox"||d.type==="radio"){return"toggle";}else{return"push";}}},srcNodes:{setter:function(e){if(b.Lang.isString(e)){return b.all(d.srcNodes);}else{return e;}}},},d);var c=this.get("srcNodes");c.each(function(f){var e=new b.Button({type:this.get("buttonType"),srcNode:f});this.addButton(e);e.before("selectedChange",this._beforeButtonSelectedChange,this);e.after("selectedChange",this._afterButtonSelectedChange,this);},this);};a.prototype.addButton=function(c){var d=this.get("buttons");d.push(c);this.set("buttons",d);};a.prototype._beforeButtonSelectedChange=function(d){var c=d.target;if(this.get("type")==="radio"){this._removeButtonFromSelectionExcept(c);}};a.prototype._afterButtonSelectedChange=function(c){this._syncSelection();};a.prototype._syncSelection=function(){var d=this.get("buttons");var c=b.Array.partition(d,function(e){return e.get("selected");});this.set("selection",c["matches"]);};a.prototype._removeButtonFromSelectionExcept=function(d){var c=this.get("selection");b.Array.each(c,function(e){if(e.get("srcNode")._yuid!==d.get("srcNode")._yuid){e.set("selected",false);}},this);};b.augment(a,b.Attribute);b.ButtonGroup=a;},"@VERSION@",{requires:["button-base"]});