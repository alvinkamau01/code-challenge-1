let carspeed = parseInt(prompt("Input speed: "))
let demeritpoints=0
let speed;

if (carspeed <= 70) {
  document.write("Ok");
} 
else{
    while (carspeed > 70) {
    demeritpoints++;
    carspeed-=5
      
    }
  }
    document.write(demeritpoints )
  
