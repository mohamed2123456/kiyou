var x = 0;
  var my = setInterval(function() {
	
    x += 1;
document.getElementById('ho').innerHTML=x ;

if( x == '10'){






/*addEventListener('load' , function(){
    var mcr = document.getElementById('click').style;
    mcr.animation = 'mo 1s infinite linear'
    */
var you = document.getElementById('result');
 

    var spe = true;
    window.SpeechRecognition = window.webkitSpeechRecognition ;
    const recognition = new SpeechRecognition();
   
 recognition.lang = 'ar-AE'
    recognition.interimResults = true;

    recognition.addEventListener('result' , e=>{
        const transcript = Array.from(e.results)
        
        .map(resuLt =>resuLt[0])
        .map(resuLt =>resuLt.transcript)
      
        you.innerHTML = transcript;

        let s = document.getElementById("result").value 
    
       
      
        document.getElementById('dp').innerHTML = s;
/*this is table 1 =========>>>>*/        
        if(s == 'واحد زائد واحد' ){
                let d1 = new Audio('v2.mp3');
	            d1.play();
            } else  if(s == 'واحد زائد اثنان'){
                let d1 = new Audio('v3.mp3');
	            d1.play();
            }if(s == 'واحد زائد ثلاثه'){
                let d1 = new Audio('v4.mp3');
	            d1.play();
            }if(s == 'واحد زائد اربعه'){
                let d1 = new Audio('v5.mp3');
	            d1.play();
            }if(s == 'واحد زائد خمسه'){
                let d1 = new Audio('v6.mp3');
	            d1.play();
            }if(s == 'واحد زائد سته'){
                let d1 = new Audio('v7.mp3');
	            d1.play();
            }
            if(s =='واحد زائد سبعه'){
                let d1 = new Audio('v8.mp3');
	            d1.play();
            }
            if(s == 'واحد زائد ثمانيه'){
                let d1 = new Audio('v9.mp3');
	            d1.play();
            }
            if(s == 'واحد زائد تسعه'){
                let d1 = new Audio('v10.mp3');
	            d1.play();
            }
/*this is from 1 to 9 =========>>>>*/  

/*this is from 2 to 9 =========>>>>*/ 
if(s == 'اثنان زائد واحد' ){
                let d1 = new Audio('v3.mp3');
	            d1.play();
            } else  if(s == 'اثنان زائد اثنان'){
                let d1 = new Audio('v4.mp3');
	            d1.play();
            }if(s == 'اثنان زائد ثلاثه'){
                let d1 = new Audio('v5.mp3');
	            d1.play();
            }if(s == 'اثنان زائد اربعه'){
                let d1 = new Audio('v6.mp3');
	            d1.play();
            }if(s == 'اثنان زائد خمسه'){
                let d1 = new Audio('v7.mp3');
	            d1.play();
            }if(s == 'اثنان زائد سته'){
                let d1 = new Audio('v8.mp3');
	            d1.play();
            }
            if(s =='اثنان زائد سبعه'){
                let d1 = new Audio('v9.mp3');
	            d1.play();
            }
            if(s == 'اثنان زائد ثمانيه'){
                let d1 = new Audio('v10.mp3');
	            d1.play();
            }
            if(s == 'اثنان زائد تسعه'){
                let d1 = new Audio('v11.mp3');
	            d1.play();
            }


/*this is from 2 to 9 =========>>>>*/ 
/*this is from 3 to 9 =========>>>>*/ 
            if(s == 'ثلاثه زائد واحد'){
                let d1 = new Audio('v4.mp3');
	            d1.play();
            } 
            if(s =='ثلاثه زائد اثنان'){
                let d1 = new Audio('v5.mp3');
	            d1.play();
            } 
            if(s =='ثلاثه زائد ثلاثه'){
                let d1 = new Audio('v6.mp3');
	            d1.play();
            } 
            if(s =='ثلاثه زائد اربعه'){
                let d1 = new Audio('v7.mp3');
	            d1.play();
            } 
            if(s =='ثلاثه زائد خمسه'){
                let d1 = new Audio('v8.mp3');
	            d1.play();
            } 
            if(s =='ثلاثه زائد سته'){
                let d1 = new Audio('v9.mp3');
	            d1.play();
            } 
            if(s =='ثلاثه زائد سبعه'){
                let d1 = new Audio('v10.mp3');
	            d1.play();
            } 
            if(s =='ثلاثه زائد ثمانيه'){
                let d1 = new Audio('v11.mp3');
	            d1.play();
            } 
            if(s =='ثلاثه زائد تسعه'){
                let d1 = new Audio('v12.mp3');
	            d1.play();
            } 
/*this is from 3 to 9 =========>>>>*/ 
/*this is from 4 to 9 =========>>>>*/ 
if(s == 'اربعه زائد واحد'){
                let d1 = new Audio('v5.mp3');
	            d1.play();
            } 
            if(s =='اربعه زائد اثنان'){
                let d1 = new Audio('v6.mp3');
	            d1.play();
            } 
            if(s =='اربعه زائد ثلاثه'){
                let d1 = new Audio('v7.mp3');
	            d1.play();
            } 
            if(s =='اربعه زائد اربعه'){
                let d1 = new Audio('v8.mp3');
	            d1.play();
            } 
            if(s =='اربعه زائد خمسه'){
                let d1 = new Audio('v9.mp3');
	            d1.play();
            } 
            if(s =='اربعه زائد سته'){
                let d1 = new Audio('v10.mp3');
	            d1.play();
            } 
            if(s ==' اربعه زائد سبعه '){
                let d1 = new Audio('v10.mp3');
	            d1.play();
            } 
            if(s =='اربعه زائد ثمانيه'){
                let d1 = new Audio('v11.mp3');
	            d1.play();
            } 
            if(s =='اربعه زائد تسعه'){
                let d1 = new Audio('v12.mp3');
	            d1.play();
            } 
            
            if(s == 'مرحبا كيو'){
                document.getElementById('ki1').innerHTML = " <div id='u'></div>"
                let d1 = new Audio('himoh.mp3');
	            d1.play();
            }
            if(s == 'الطقس'){
                document.getElementById('ki1').innerHTML = " <div id='u'></div>"
                document.getElementById('wa1').innerHTML = '<div id="war1"></div> '
                document.getElementById('wa2').innerHTML = '<div id="war2"></div> '
                document.getElementById('wa3').innerHTML = '<div id="war3"></div> '
                document.getElementById('wa4').innerHTML = '<div id="war4"></div> '
                document.getElementById('wa5').innerHTML = '<div id="war5"></div> '
                document.getElementById('wa6').innerHTML = '<div id="war6"></div> '
                let d1 = new Audio('war1.mp3');
	            d1.play();
            }

/*this is from 4 to 9 =========>>>>*/ 
/*
            if(s == 'واحد'){
                let d1 = new Audio('v1.mp3');
	            d1.play();
            } 
            if(s =='اثنان'){
                let d1 = new Audio('v2.mp3');
	            d1.play();
            } 
            if(s =='ثلاثه'){
                let d1 = new Audio('v3.mp3');
	            d1.play();
            } 
            if(s =='اربعه'){
                let d1 = new Audio('v4.mp3');
	            d1.play();
            } 
            if(s =='خمسه'){
                let d1 = new Audio('v5.mp3');
	            d1.play();
            } 
            if(s =='سته'){
                let d1 = new Audio('v6.mp3');
	            d1.play();
            } 
            if(s =='سبعه'){
                let d1 = new Audio('v7.mp3');
	            d1.play();
            } 
            if(s =='ثمانيه'){
                let d1 = new Audio('v8.mp3');
	            d1.play();
            } 
            if(s =='تسعه'){
                let d1 = new Audio('v9.mp3');
	            d1.play();
            } 
            if(s =='10'){
                let d1 = new Audio('v10.mp3');
	            d1.play();
            } 
       
*/
      
    })
    
    if(spe == true ){
      
        recognition.start();
       
}


x -=10;   

}

if(x =='8'){
   


     let d1 = new Audio('coyosp.mp3');
     d1.play();
}



  } , 1000)
  document
  var c = 0;
  var my = setInterval(function() {
	
    c += 1;
document.getElementById('ho2').innerHTML=c;

if( c == '6'){
  

  document.getElementById('m1').innerHTML = "<div id='sh1'> </div>"
  document.getElementById('m2').innerHTML = "<div id='sh2'></div>"
  document.getElementById('m3').innerHTML = "<div id='sh3'> </div>"
  document.getElementById('m4').innerHTML = "<div id='sh4'></div>"
  c -=6;
 
}


  }, 1000)
  