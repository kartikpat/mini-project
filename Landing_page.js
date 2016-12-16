 function closeNav(para) {
        if(para.className === "closebtn") {
          para.className += " active"; 
          para.parentElement.className += " active1";
          
        }
        else {
          para.className = "closebtn";
           para.parentElement.className = "sidenav smlnav";
         
        }
     }

    var header = document.getElementsByTagName("header");

    var backgrounds = new Array(
        'url(Himachal.jpg)'
      , 'url(Himachal2.jpg)'
      , 'url(Himachal3.jpg)'
    );

    var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
                
        header[0].style.backgroundImage = backgrounds[current];
      
    }
    setInterval(nextBackground, 4000); 

     
    var readblog = function(para) {
      
       para.nextElementSibling.className += " animate";
      window.onclick = function(para) {
    
        para.nextElement.style.display = "none";
        
      }
    }

    var closeblog = function(para) {
      para.parentElement.className = "blog";
    }


   
   function getNewQuote() {
   	
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
            var jsondata = JSON.parse(this.responseText);
            var quoteSource = jsondata.quoteSource;
          
            var length  = quoteSource.length;
            
            var randomNumber = Math.floor(Math.random() * length);
            var randomNumber1 = Math.floor(Math.random() * length);

         
            var output = '<blockquote class="blockquote">';
            output += '<p><q>' + quoteSource[randomNumber].quote + '</q></p>';
            output += '<footer>' + quoteSource[randomNumber].name + '</footer>';
            output += '</blockquote>'; 
            output += '<blockquote class="blockquote">';
            output += '<p><q>' + quoteSource[randomNumber1].quote + '</q></p>'; 
            output += '<footer>' + quoteSource[randomNumber1].name+ '</footer>';
            output +='</blockquote>' ;

          document.getElementById('quotecontent').innerHTML = output;
         }
     
       }
	 xhttp.open("GET", "TravelQuotes.json", true);
	 xhttp.send();
   }

   document.body.onload = function() {
    getNewQuote();
   }

 
   document.getElementById('date').innerHTML = Date();
