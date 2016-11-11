/**
 * Created by shusc on 2016/10/8.
 *
 * HTML 结构demo
 *  <div class="c-photoUpload">
 *     <div class="c-photoUpload__title">
 *       证件正面附件
 *     </div>
 *
 *     <div class="c-photoUpload__content" id="j-idpic-01">
 *
 *     </div>
 *
 *     <input style="visibility: hidden"  id="uploadImage01" type="file"   />
 *   </div>
 *
 *   js 初始化
 *
 *   dom.jidpic01.on("click",function(){
 *               dom.photoimage01.click()
 *           })
 *   dom.photoimage01.on("change",function(){
 *              dom.photoimage01.imgUpload(dom.jidpic01);
 *           })
 *
 *
 *
 */



define(["jquery"],function ($) {

    $.fn.imgUpload = function(JoutEle){

        // Get a reference to the fileList
        var files = !!this[0].files ? this[0].files : [];

        // If no files were selected, or no FileReader support, return
        if (!files.length || !window.FileReader) return;

        // Only proceed if the selected file is an image
        if (/^image/.test( files[0].type)){

            // Create a new instance of the FileReader
            var reader = new FileReader();

            // Read the local file as a DataURL
            reader.readAsDataURL(files[0]);

            // When loaded, set image data as background of div
            reader.onloadend = function(){

                // console.log(this.result)

                JoutEle.css("background-image", "url("+this.result+")");

                return this.result
            }
        }
    }

})