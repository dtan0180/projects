const vh = document.getElementById("hours");
const vm = document.getElementById("min");
const vs = document.getElementById("sec");
const vampm = document.getElementsByClassName("text-1")

function update(){
   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();
   let ampm = 'AM';

   if(h > 12){
    h = h - 12;
    ampm = "PM"
   }
   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
   
   vh.innerText=h;
   vm.innerText=m;
   vs.innerText=s;
   vampm.innerText=ampm;
   
   const tupdate = setInterval(update,1000);

}
update();

