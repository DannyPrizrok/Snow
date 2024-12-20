$(document).ready(function(){
$("button").click(function(){
    $.ajax({url:"test.txt",
    success:
    function(result){
        $("#p1").html(result);
    }
    })
})

})