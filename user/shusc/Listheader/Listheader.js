define(['jquery'],function($){
	
	function Listheader(EleId, LeftSpanObject, CenterSpanObject, RightSpanObject) {
			var LeftSpanDefaults = {
				url: 'JavaScript:;',
				imgPath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAuCAYAAAA2oQl1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTkwNzk1NjVGREE2MTFFMzhGQzI5NDg4Q0VGNDM5RjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTkwNzk1NjZGREE2MTFFMzhGQzI5NDg4Q0VGNDM5RjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OTA3OTU2M0ZEQTYxMUUzOEZDMjk0ODhDRUY0MzlGNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5OTA3OTU2NEZEQTYxMUUzOEZDMjk0ODhDRUY0MzlGNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiesnKMAAAJkSURBVHjavJcNSxRRFIZXd7KkDykUtbBaNRMhCAQJhMSFIAoDKQqyovxlu6uVRhEJ/oD+QRC6JIrrxvZlpNnHRrlr74FzYRnumZ2Ze9aBh2Xm3pln7s6955zrJRpzdIDr4CxYAYteAyQnwX3QyucDoEVb1AOmwCH/dU3RaXCP3t7SVmjeB8l3sKAxohS4Cw5Y2rZAhmSuon5wR5B8BTmwQyfN+yGhI+6IzoPbIGlp2wRZ8LP2YhzRELgpSD6BGfDL3+ApS2gkZduNUUQXwKTwXT/wSMrSzWFFF8ENQfIePAZ/gh7gKUhoJH/rPaSeaBhMCG1FMBtGUk80Aq4JbevgCfgX9gNLokvgqtC2BuaiSCTRKLgi9F8F81ElNtFlkBb6vgPPQCVOKKkVjYFxod8yeBFXUitK82gaIjGikQDJW/ASVF2TlhcgeUOZUUNi8lGT0JbUrFpI9DogiN7SEtJDSvz3pIRCsAvkwZ6riI4NsAt6LX3aNWRJX5CkFd8nyE6xrOoqMmH/Nzhn6XuCK9HlODLbhy5xzh+wtB2PK5NmFKXmH1zt2GS0S1iKEi2Cpu5HsM0j86+1NpbleRI5iUxls80js8nOhJWFWYyfwTcwKMh6+Zvtuoro+MIV6KClSDnK5XE+KCFGqb3prZ8LE4AW9ANwWEOU4LeWsmwneAiOaIhMSn8q/E0dLDumITJFilQJtdtkLvujtYDajsLVI56VziJTSEolMUWQaf5NaGyWiyyzFfltZmRa6XqHc9qQpVY8CLq1tv8mxeSEPVKPpshE/axla1nQFplAnOElUOF19+q/AAMAA/uIfedbV5UAAAAASUVORK5CYII=",
				css: {},
				click: "",
				html:'',
			};
		
			var CenterSpanDefaults = {
				title: "商城中心",
				css: {}
			};
		
			var RightSpanDefaults = {
				url: 'JavaScript:;',
				imgPath: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTczQjVEQjYzMDIyMTFFNDlCOEZCMjc3QkRCMEQwQUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTczQjVEQjczMDIyMTFFNDlCOEZCMjc3QkRCMEQwQUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NzNCNURCNDMwMjIxMUU0OUI4RkIyNzdCREIwRDBBRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NzNCNURCNTMwMjIxMUU0OUI4RkIyNzdCREIwRDBBRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkxDnxIAAAGsSURBVHja7Nq7SsRAFAbg5KidICyCLyBaiYWtlb2tYudLCZar3e4z2Chsv8UW3iobhRULEbTReAITGIYkJjuTM8fd/4cf9lJkPzK5zGzSLMuSRQolCxaAAQYYYIABBjheluu+TNP038Kq7iCxhwWyxt3nbnAfuSPut9TG07rJQwdDep17yl21PrvjDkOjNQzpMmyebe4Rd2meztIu9p57xn2XRlMk7IA75fal0RQJWxyvb9xLSTRFxBZ5lURTZKw4mhRg69DHodGkBFuF3gqNJkVYETQpw3aOJoVYF/0REk1KsTa676BPfNCkGFuF3vRBk3JscDQFwCYdY230lfV+JjQFwCaCE3h3O63R5IH9UbJq0wpNM2LzVYrbyNDrkmN6JQS4V4IdCg7jNieyP6/TTcAHCrE2+sJB7/iCn83xOlaGLTI16Bfup1lUqEyTZdqRqebk6HMNSzzqAjDAAAMMMMAAx4vPH+L29PBQ6Pf2fOfgPuAH7q55vSe8o764T9JDesK9MTfs0vfNA2uG1CrSjzyIBU/xNDmG5/FpeVyHAQYYYIABBhhgsfwKMACB05Zwpqf1zAAAAABJRU5ErkJggg==",
				css: {},
				click: "",
				html:'',
			};
		
			LeftSpanObject = $.extend({}, LeftSpanDefaults, LeftSpanObject || {});
			CenterSpanObject = $.extend({}, CenterSpanDefaults, CenterSpanObject || {});
			RightSpanObject = $.extend({}, RightSpanDefaults, RightSpanObject || {});
		
			this.id = EleId;
			this.EleId = $("#" + EleId);
			this.LeftSpanObject = LeftSpanObject;
			this.CenterSpanObject = CenterSpanObject;
			this.RightSpanObject = RightSpanObject;
		
			this.initElements();
			this.initCss();
		}

	Listheader.prototype = {
			constructor: Listheader,
	
			initElements: function() {
				//初始化 各个元素
				this.ListheaderWapper = $("<div class='C_Listheader' />");
				this.Listheaderboxleft = $("<div class='C_Listheader_Box C_Listheader_fl' />");
				this.ListheaderboxRight = $("<div class='C_Listheader_Box C_Listheader_fl' />");
				this.ListheaderCenterbox = $("<div class='C_Listheader_centerBox C_Listheader_fl' />");
				this.ListheaderboxWarpperleft = $("<div class='C_Listheader_box_Warpper'/>");
				this.ListheaderboxWarpperRight = $("<div class='C_Listheader_box_Warpper'/>");
				this.ListheaderboxWarpperCenter = $("<div class='C_Listheader_box_Warpper'/>");
	
				this.Listheaderboxleftfn = $("<a href='" + this.LeftSpanObject.url + "' onclick='" + this.LeftSpanObject.click + "'><img src='" + this.LeftSpanObject.imgPath + "' class='C_Listheader_box_icoLeft'/></a>");
				this.ListheaderboxCenterfn = $("<span class='C_Listheader_box_centerText'>" + this.CenterSpanObject.title + "</span>");
				this.ListheaderboxRightfn = $("<a href='" + this.RightSpanObject.url + "' onclick='" + this.RightSpanObject.click + "'><img src='" + this.RightSpanObject.imgPath + "' class='C_Listheader_box_icoRight'/></a>");
	
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
			},
	
			initCss: function() {
				$("#" + this.id + " .C_Listheader_box_icoLeft").css(this.LeftSpanObject.css);
				$("#" + this.id + " .C_Listheader_box_icoRight").css(this.RightSpanObject.css);
				$("#" + this.id + " .C_Listheader_box_centerText").css(this.CenterSpanObject.css);
			}
	
		}
	//console.log("测试已加载ListHeader");

	return Listheader

})