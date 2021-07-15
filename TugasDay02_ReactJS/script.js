/* bagian slide foto 
*/
var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }

      /**
       * input data
       */


       function terimainput(){
        var x=document.forms['biodata']['no'].value;
        var y=document.forms['biodata']['nama'].value;
        var z=document.forms['biodata']['kota'].value;

         
        if(x==null || x=="")
        {
          document.getElementById("val_no").innerHTML="<font color='red'><b>* Harap Isi Kolom NO Dengan Benar</b></font>";
        
            if(y==null || y=="") {
            document.getElementById("val_nama").innerHTML="<font color='red'><b>* Harap Isi Kolom NAMA Dengan Benar</b></font>";   
          } else {
          document.getElementById("val_nama").innerHTML="<font color='purple'>* Benar</font>";
          }
        } else {
         
        document.getElementById("val_no").innerHTML="<font color='purple'>* Benar</font>";
        
        if(y==null || y=="") {
          document.getElementById("val_nama").innerHTML="<font color='red'><b>* Harap Isi Kolom NAMA Dengan Benar</b></font>";   
          } else {
         
            document.getElementById("val_nama").innerHTML="<font color='purple'>* Benar</font>";
        
            var tabel = document.getElementById("tabelinput");
            var row = tabel.insertRow(tabel.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
        
            cell1.innerHTML = x;
            cell2.innerHTML = y;
            cell3.innerHTML = z;
          }
        }
        }