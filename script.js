$("button").click(function () {

    var input = $(this).siblings('input');
    var inputVal = input.val()
    console.log(input.val());
    var id = $(this).siblings('input').attr("id");
    console.log(id)
    localStorage.setItem(id, inputVal)
})

$("#hr9").val(localStorage.getItem("hr9"))
$("#hr10").val(localStorage.getItem("hr10"))
$("#hr11").val(localStorage.getItem("hr11"))
$("#hr12").val(localStorage.getItem("hr12"))
$("#hr1").val(localStorage.getItem("hr1"))
$("#hr2").val(localStorage.getItem("hr2"))
$("#hr3").val(localStorage.getItem("hr3"))
$("#hr4").val(localStorage.getItem("hr4"))
$("#hr5").val(localStorage.getItem("hr5"))

// define moment.js


// if statement, if time is less than moment.js, set attribute/style of input area to grey
// else if time is greater than moment.js, set attribute/style of input to green
// else if time is equal to moment.js, set attribute/style of input to red