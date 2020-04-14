//jshint esversion:6
$("#myModal").click(function() {
  $('#exampleModalLong').modal('hide');

  let grade = getGrade();

  if (grade > 8){
    $("#Sucess-alert-modal").modal('show');
      $("#notaSucess").text("Tu nota es: " + grade);
  }
  else if (grade > 3){
    $("#Warning-alert-modal").modal('show');
    $("#notaWarning").text("Tu nota es: " + grade);
  }
  else{
    $("#Danger-alert-modal").modal('show');
    $("#notaDanger").text("Tu nota es: " + grade);
  }

  $("#notaModal").text("Tu nota es: " + grade);
  $("#nota").text(grade + "/10");
});

function getGrade() {
  var grade = 0;
   if($("#exampleRadios1").is(":checked")){
     grade = grade + 2;
   }
   if($("#exampleRadios6").is(":checked")){
     grade = grade + 2;
   }
   if($("#exampleRadios11").is(":checked")){
     grade = grade + 2;
   }
   if($("#exampleRadios15").is(":checked")){
     grade = grade + 2;
   }
   if($("#exampleRadios18").is(":checked")){
     grade = grade + 2;
   }

   return grade;
}

$("#discusion-submit").click(function() {
  let text = $("#discusion-input").val();
  if (text != "") {
    $("#conversaciones-cards").append(
      `<div class="card text-white bg-info ml-5 mb-3">
                              <div class="card-header text-right">
                                Estudiante
                              </div>
                              <div class="card-body">
                                <p class="card-text">` + text + `</p>
                              </div>
                            </div>
                          </div>`);

    setTimeout(function() {
      $("#conversaciones-cards").append(
        `<div class="card text-white bg-success mr-5 mb-3">
                              <div class="card-header">
                                Profesor Chavez
                              </div>
                                <div class="card-body">
                                  <p class="card-text">Excelente observación! Buen trabajo!</p>
                                </div>
                              </div>`);
    }, 1000);
  }
});
