var colors = ['#107db6','#e8aa15','#ae2956','#734396','#6ebeb9','#ed868c','#76b12c','#e26d22','#723c2c'];

function bodyOnLoad() {
  var randomCol = Math.floor(Math.random() * (8-0) + 0);
  var randomTicket = Math.floor(Math.random() * (6-124) + 124);
  var randomQueue = Math.floor(Math.random() * (3-42) + 42);

   document.body.style.backgroundColor = colors[randomCol];
   document.getElementById("num").innerHTML="L"+randomTicket;
   document.getElementById("ticketRemaining").innerHTML=randomQueue+" people remaining";
}
