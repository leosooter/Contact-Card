$(document).ready(function() {
  console.log("JQuery has loaded");
  $("#add-user").click(function(){
    console.log("Add User");
    var newCard = $("<div class='contact-card show-name'></div>");
    var editButton = $("<button class='edit' type='button'>Edit</button>")
    var editForm = $('<form><label>First Name<input class="edit-f-name" type="text" value=""></label><label>Last Name<input class="edit-l-name" type="text" value=""></label><label>Description<textarea class="edit-description" rows="8" cols="40"></textarea></label><button class="update" type="button" >Update</button><button class="cancel" type="button" >Cancel</button></form>');
    var name = $("<h2></h2>").append($("#f-name").val() + " " + $("#l-name").val());
    var description = $('<p></p>').append($("#description").val());
    newCard.append(editButton);
    newCard.append(editForm);
    newCard.append(name);
    newCard.append(description);
    editForm.children().children(".edit-f-name").val($("#f-name").val());
    editForm.children().children(".edit-l-name").val($("#l-name").val());
    editForm.children().children(".edit-description").val($("#description").val());
    $(".card-box").append(newCard);

  })
});

$(".card-box").on("click", ".contact-card", function(){
  console.log("Toggle Name/Description");
  $(this).toggleClass("show-name show-description");
});

$(".card-box").on("click", ".edit", function(event){
  console.log("edit");
  event.stopPropagation();
  $(this).parent().removeClass();
  $(this).parent().addClass("contact-card show-edit");
});

$(".card-box").on("click", ".cancel", function(event){
  console.log("cancel");
  event.stopPropagation();
  $(this).parent().parent().removeClass();
  $(this).parent().parent().addClass("contact-card show-name");
});

$(".card-box").on("click", ".update", function(event){
   console.log("update");
   event.stopPropagation();
   $(this).parent().siblings("h2").remove();
   $(this).parent().siblings("p").remove();
   var newFName = $(this).siblings().children(".edit-f-name").val();
   var newLName = $(this).siblings().children(".edit-l-name").val();
   var newDescription = $(this).siblings().children(".edit-description").val();
   var name = $("<h2></h2>").append(newFName + " " + newLName);
   var description = $('<p></p>').append(newDescription);
   $(this).parent().parent().append(name);
   $(this).parent().parent().append(description);
   $(this).parent().parent().removeClass();
   $(this).parent().parent().addClass("contact-card show-name");
});
