// /starts a new line |delays
var string = "> Salaaaammmmmm| ||:))|/>khoobi banoo?|   | /> baz hatman pishe khodet migi in baz peydash shod -__-|   | /> are doroost fek karde |...| BAAZ MAN PEYDAAAM SHODD |:)))))))))||   | />بلسلببsrfkshfl />dhtghgf />rgcth";
 
var fString = "";
var progress = 0; 
var badString= "";
var blinker = false; 
 
var goMad = function(){ 
  badString="";
  var count = 0;
  while(badString.length<1350){
      badString+= Math.floor(Math.random()*10);
    count++;
  }   
  $('#terminal').text(badString);
  setTimeout(function(){
    $('body').css('background-color','black');
    $('#terminal').text("");
    $('#terminal').css('padding','0').css('-webkit-animation','off 1s forwards');
  },2000);  
} 
   

 blink = function(){
   blinker?$('#terminal').html(fString):$('#terminal').html(fString+"_")
   blinker=!blinker;
}; 

var pause = function(){
  var setBlink = setInterval(function(){blink();}, 500);
  setTimeout(function(){type(); clearInterval(setBlink);}, 1000);
};

var type = function(){
  if(progress<string.length){
  var next = string.substring(progress,progress+1);
  switch(next){
    case "|": pause(); break;
    case "/": fString+="<p>"; setTimeout(function(){type()},100);  break;
    default: fString+=next;
      $('#terminal').html(fString+"_"); 
      setTimeout(function(){type()}, 50 + Math.random()*100); 
      break;
    }
  progress++;
  }
  //else{setInterval(function(){blink();}, 500);}
  else{setInterval(function(){goMad();},50);}
};  



type();