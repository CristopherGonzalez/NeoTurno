$(document).ready(function(){
$('#btnSiguiente').click(function(e){
        //Aumentamos el valor del campo
        if($('#lblTurno').text().trim()=="" ){
           $('#lblTurno').text("0"); 
        }else{
          $('#lblTurno').text(parseInt($('#lblTurno').text()) + 1);
        };

        //Borrar QR que ya esta en el div
        //$('#qrcode').empty();
        //Inserta QR nuevo en el div
        /*jQuery('#qrcode').qrcode({
          render:'div',
          width:150,
          height:150,
          color:'#3a3',
          text:$('#lblTurno').val()
        });
        var data = {};
        console.log( $('#lblTurno').val());
        console.log(jQuery.now());

        console.log("NOT001");

          data.numero = $('#lblTurno').val();
          var date = new Date();
          data.fecha = date;
          data.id_local= "NOT001";
         */ 
        /*$.ajax({
          type: "POST",
          data: JSON.stringify(data),
          contentType: 'application/json',
          url: "../endpoint",
           success: function(data) {
                            console.log('success');
                            console.log(data);
                        }

        });*/




        //todo - Generar la impresion

        
});




});