function test1(){

	var fName = prompt("Hey what's your name?");
	var myColour = prompt("Pick a colour, " + fName);

	if(myColour == "red"){

		console.log("ha. this guy likes red");
	} 
	else if(myColour == "green"){
		console.log("ah, green. He's alright.");
	}
	else if(myColour == "yellow"){
		console.log("het him something yellow.");
	}
	else {
		console.log("that's not a color");
	}
}

function test2(){    
	var age=prompt("how old are you?");
	

	if(age < 14){
		alert("GET OUUUUTTT");

	}
	else if(age == 14){
		alert("14 is a good age");

	}
	else if(age > 14){
		alert("YOU ARE IIIINNNN");

	}
	else{
		alert("Not a valid age");
	}
}


function FizzBuzz(){
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}

function Nested(){
var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}


/* 
Guess the Number 
*/

function Guess() {
    var rand = Math.floor((Math.random() * 1000));
    var num = prompt("Guess a number between 1 and 1000.");

    while(num != rand){
        if(num > rand){
            num=prompt("Too high, try again!");
        }
        else if(num < rand){
            num=prompt("Too low, try again!");
        }
        else if(num == rand){
            num=alert("You right");
        }
        else{
            alert("Do you even Math, bro?");
        }
    }
}