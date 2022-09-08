
$(document).ready( function(){
    // Boton Email
   $("#buttonEmail").click(() => {
    alert("El correo fue enviado correctamente...");
   })

   $( "h6" ).on( "dblclick", function() {
    if(this.style.color !== 'red'){
        this.style.color = "red";
    }
    else{
        this.style.color = "var(--black)";
    }
  });

  // Boton Email
  $(".card-title").click(() => {
    $(".card-text").toggle("slow");
   })



   function changeTitle(){
    alert('Acaa')
   }
});
