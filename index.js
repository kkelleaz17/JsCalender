const Month = document.getElementById('Month');
const montharray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



const Holder = document.getElementById('DayHolder')

var CurrentMonth = new Date().getMonth();
var CurrentYear = new Date().getFullYear();







function MoveCalender(val){
if(CurrentMonth === 0 && val === -1){
    CurrentYear += val;
    CurrentMonth = 12;
}
if(CurrentMonth === 11 && val === 1){
    CurrentYear += val;
    CurrentMonth = -1;
}

CurrentMonth +=val;
UpdateCalender();

}

UpdateCalender();


function UpdateCalender(){
    Month.innerHTML = `${montharray[CurrentMonth]}  ${CurrentYear}`;
    Holder.innerHTML =''


     let FirstDay = new Date(`${montharray[CurrentMonth]},${CurrentYear}`).getDay()
     let LastDay = new Date(CurrentYear, CurrentMonth+1, 0).getDay()
     let monthlength = new Date(CurrentYear, CurrentMonth+1, 0).getDate()

     let lastmonthlength = new Date(CurrentYear, CurrentMonth, 0).getDate();
     let nextmonthlength = new Date(CurrentYear, CurrentMonth+2, 0).getDate();

     console.log(nextmonthlength)

     ///start
     var daysStart =[];
     for(let i = 0;i<FirstDay;i++){
         daysStart.push('<div class="grey">'+(lastmonthlength-i)+'</div>')
     }
     
     daysStart.reverse().forEach(e=>{
        Holder.innerHTML += e
     })
     //// middle
     for(let i = 1;i<monthlength+1;i++){
        Holder.innerHTML += '<div>'+(i)+'</div>'
     }
     //// end
      daysStart =[];
     for(let i = Holder.childNodes.length;i<42;i++){
        daysStart.push('<div class="grey">'+(42 - i)+'</div>')
     }
   
     daysStart.reverse().forEach(e=>{
        Holder.innerHTML += e
     })

}

