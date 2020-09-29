let core =(function(){
     let data ={
        yourList:[],
        listNum:function(){
             return this.yourList.length+1;
        }  
     };
     let updatedDom = function(ul,btnSp,input){
          input.value ="";
          input.focus();
          btnSp.textContent = data.listNum();
          ul.innerHTML=data.yourList.map(function(list){
               return `<li>${list}</li>`
          });
     }
     
     return {
         data:data,
         updatedDom: updatedDom,
     }
})();

let view = (function(){
   let dataFromHtml ={
         myForm:document.querySelector('.myForm'),
         myList: document.getElementById('myList'),
         btn   : document.querySelector('.btn'),
         lists :document.querySelector('.list'),
         listNum:document.querySelector('.listsNum'),
   };
   return {
       dataFromHtml: dataFromHtml,
   }
})();

let main= (function(core , view){
     let viewData = view.dataFromHtml;
     let coreData = core.data;
     let update = function(){
          core.updatedDom(viewData.lists.firstElementChild,viewData.listNum,viewData.myList);
     }
     update();
     viewData.myForm.addEventListener('submit',function(e){
          e.preventDefault();
          if(viewData.myList!==""){
              coreData.yourList.push(viewData.myList.value);
              update();
          }else{
               alert("Please enter your list to do");
          }
     });
})(core,view);