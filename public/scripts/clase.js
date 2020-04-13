//jshint esversion:6
$("#myModal").click(function() {
  $('#exampleModalLong').modal('hide');

  let grade = getGrade();

  if (grade > 6)
    $("#Sucess-alert-modal").modal('show');
  else if (grade > 3)
    $("#Warning-alert-modal").modal('show');
  else
    $("#Danger-alert-modal").modal('show');

  $("#nota").text(grade + "/10");
});

function getGrade() {
  return 3;
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
