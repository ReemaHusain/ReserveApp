var seatInfo = []; 

$('.button').on('click', function(){
  var seat = $('#seat').val();
   var name = $('#name').val();
   var email = $('#email').val();
   var number = $('#number').val();
   
  seatInfo.push({
    seat: seat,
    name: name,
    email: email,
    number: number
 
    }); 
 console.log(seatInfo);
 window.alert("Congratulations " + name + "! " + "You have reserved seat " + seat);

  $(`.seat${seat}`).css('background-color', 'lightgoldenrodyellow');
    

});


$('div').hover(function(){
  for (var i = 0; i < seatInfo.length; i++){
    var $div = $(this);
    if($div.text() == seatInfo[i].seat){
      $div.text(seatInfo[i].name);
      // $div.css('background-color', 'lightgoldenrodyellow');
    }
  }

});