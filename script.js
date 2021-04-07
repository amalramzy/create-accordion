let heading = document.getElementsByClassName('btn');/*  هات كل الهدنج اللي في الصفحة وعمله array*/ 
let i;


for ( i = 0 ; i < heading.length ; i++ )  {/* تكرار */

heading[i].addEventListener('click', function (){  /*لما ادوس علي الهدنج اعملي وظيفة*/ 


   this.classList.toggle('active') ;/* ضيفلي كلاس من css*/


    let desc = this.nextElementSibling;/* اظهرلي العنصر التالي */

   
    if(desc.style.maxHeight){
       desc.style.maxHeight = null
    }else{
       desc.style.maxHeight =desc.scrollHeight + "px"
       }  
})
}