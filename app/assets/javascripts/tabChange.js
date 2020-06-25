$(function() {

  $('#plusbtn').click(function(){
    document.getElementById("minusbtn").style.display ="inline-block";
    document.getElementById("plusbtn").style.display ="none";

    var result = document.getElementsByClassName("tablebasic")
    var iend = result.length

    for ( var i = 0; i < iend;  i++ ){
      result[i].style.display ="table-row";
      result[i].style.verticalAlign ="inherit";
      result[i].style.borderColor ="inherit";  
    }
  });

  $('#minusbtn').click(function(){
    document.getElementById("plusbtn").style.display ="inline-block";
    document.getElementById("minusbtn").style.display ="none";

    var result = document.getElementsByClassName("tablebasic")
    var iend = result.length

    for ( var i = 0; i < iend;  i++ ){
      result[i].style.display ="none";
    }
  })

  $('#plusbtn2').click(function(){
    document.getElementById("minusbtn2").style.display ="inline-block";
    document.getElementById("plusbtn2").style.display ="none";

    var result = document.getElementsByClassName("tableaddition")
    var iend = result.length

    for ( var i = 0; i < iend;  i++ ){
      result[i].style.display ="table-row";
      result[i].style.verticalAlign ="inherit";
      result[i].style.borderColor ="inherit";  
    }
  });

  $('#minusbtn2').click(function(){
    document.getElementById("plusbtn2").style.display ="inline-block";
    document.getElementById("minusbtn2").style.display ="none";

    var result = document.getElementsByClassName("tableaddition")
    var iend = result.length

    for ( var i = 0; i < iend;  i++ ){
      result[i].style.display ="none";
    }
  })  

})