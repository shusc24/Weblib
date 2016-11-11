define(['Vue',"jquery"], function(Vue,$) {

	function twoColsWarpper(id,sets) {
		this.Eleid = id;
		
		this.defaultsSets = {
				headerData: [{
						text: '综合',
						css: function(state) {
							if(state == 1) {
								return 'C_twoColsWarpper_header_title turnon'
							} else {
								return 'C_twoColsWarpper_header_title turnOff'
							}
						},
						clickFn: 'twoColsWarpper.classState = 1',
					}, {
						text: '人气',
						css: function(state) {
							if(state == 2) {
								return 'C_twoColsWarpper_header_title turnon'
							} else {
								return 'C_twoColsWarpper_header_title turnOff'
							}
						},
						clickFn: 'twoColsWarpper.classState = 2',
					}],
				boxData: [{
						css: function(state) {
							if(state == 1) {
								return 'C_twoColsWarpper_Body_box db'
							} else {
								return 'C_twoColsWarpper_Body_box dn'
							}
						 }
					   }, {
						css: function(state) {
							if(state == 2) {
								return 'C_twoColsWarpper_Body_box db'
							} else {
								return 'C_twoColsWarpper_Body_box dn'
							}
						}
					}]
		}
		
		this.sets = $.extend({},this.defaultsSets,sets || {});
		
		this.initVue();
	}

	twoColsWarpper.prototype = {

		initVue: function() {
			var self = this;
			var twoColsWarpper = new Vue({
				el: '#' + self.Eleid,
				data: {
					classState: 1,
					headerData:this.sets.headerData,
					boxData:this.sets.boxData,
				},
				methods: {

				}
			})
			
		 window.twoColsWarpper = twoColsWarpper;
		}
	}
	
	return twoColsWarpper
})