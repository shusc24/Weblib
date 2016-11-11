define(['listheader','commfn','jquery'],function(listheader,commfn,$){
	 	function ListheaderExtend(EleId,LeftSpanObject,CenterSpanObject,RightSpanObject){
			ListheaderExtend.superClass.constructor.call(this,EleId,LeftSpanObject,CenterSpanObject,RightSpanObject);
		} 
		
		commfn.extend(ListheaderExtend,listheader);
		
		ListheaderExtend.prototype.initElements = function(){
			//初始化 各个元素
			this.ListheaderWapper = $("<div class='C_Listheader' />");
			this.Listheaderboxleft = $("<div class='C_Listheader_Box C_Listheader_fl' />");
			this.ListheaderboxRight = $("<div class='C_Listheader_Box C_Listheader_fl' />");
			this.ListheaderCenterbox = $("<div class='C_Listheader_centerBox C_Listheader_fl' />");
			this.ListheaderboxWarpperleft = $("<div class='C_Listheader_box_Warpper'/>");
			this.ListheaderboxWarpperRight = $("<div class='C_Listheader_box_Warpper' />");
			this.ListheaderboxWarpperCenter = $("<div class='C_Listheader_box_Warpper' style='width:100%;height:100%'/>");
			
			this.Listheaderboxleftfn = this.LeftSpanObject.html;
			this.ListheaderboxCenterfn = this.CenterSpanObject.title;
			this.ListheaderboxRightfn = this.RightSpanObject.html;
			 
			//组装最底层
			this.ListheaderboxWarpperleft.append(this.Listheaderboxleftfn);
			this.ListheaderboxWarpperCenter.append(this.ListheaderboxCenterfn);
			this.ListheaderboxWarpperRight.append(this.ListheaderboxRightfn);
			
			//组装第二层
			this.ListheaderCenterbox.append(this.ListheaderboxWarpperCenter);
			this.Listheaderboxleft.append(this.ListheaderboxWarpperleft);
			this.ListheaderboxRight.append(this.ListheaderboxWarpperRight);
			
			//组装第一层
			this.ListheaderWapper.append(this.Listheaderboxleft).append(this.ListheaderCenterbox).append(this.ListheaderboxRight);
			
			
			//为对象目标追加
			this.EleId.append(this.ListheaderWapper);
		}
		
		return ListheaderExtend
	
})