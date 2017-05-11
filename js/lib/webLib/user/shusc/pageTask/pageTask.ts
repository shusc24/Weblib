// taskmanager 
;(function (factory) {
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        let _ = require("lodash");
        let $ = require('jquery');
        let pageTask  = factory($,_);
        module.exports = pageTask;
    } else if (typeof define == 'function' && define.amd) {
        define(['lodash','jquery'], function (_,$) {
            let pageTask  = factory($,_);
            return pageTask;
        });
    } else {
            console.log("pageTask加载");
            let pageTask  = factory($,_);
            window.pageTask = pageTask ;
    }
})(function ($,_) {
    class Event{
        private o:any;
        public on(options:any){
            this.o.bind.apply(this.o,arguments);
        };
        public off(options:any){
            this.o.unbind.apply(this.o,arguments);
        };
        public trigger(options:any){
            this.o.trigger.apply(this.o,arguments);
        };

        constructor(){
            this.o = $({});
        }
    }
    class pageTask extends Event{
        private data:any;
        private taskFn:any;
        public add(type:string,name:string,Obj:any){
            if(_.has(this.data, type)){
                this.data[type][name] = Obj;
            }else{
                this.data[type] = {};
                this.data[type][name] = Obj;
            }
            return this;
        };
        public get(type:string,name:string){
            if(_.has(this.data,type)){
                return this.data[type][name]
            }
        };
        public delete(type:string,name:string){
            if(_.has(this.data[type],name)) {
                delete this.data[type][name]
            }
            return this;
        };
        public addDataType(type:string){
            if(!_.has(this.data,type)){
                this.data[type] = {};
            }
            return this;
        };
        public addTask(name:string,fn:any){
            if(_.has(this.taskFn, name)){
                _.each(this.taskFn[name],(item)=>{
                    if(_.trim(fn.toString()) !== _.trim(item.toString())){
                        this.taskFn[name].push(fn);
                    }
                });
            }else{
                this.taskFn[name] = [];
                this.taskFn[name].push(fn);
            }
            return this;
        };
        public runTask(name:any){
            if(_.isString(name)){
                this.taskRun(name);
            }
            if(_.isArray(name)){
                _.each(name,(item)=>{
                    if(_.has(this.taskFn,item)){
                        this.taskRun(item)
                    }
                })
            }
            this.trigger("taskdone");
            return this;
        };
        private taskRun(name){
            _.each(this.taskFn[name],(fn)=>{
                fn(this);
            });
            return this;
        };
        constructor(){
            super();
            this.data = {};
            this.taskFn={};
        }
    }
    return pageTask;
});

