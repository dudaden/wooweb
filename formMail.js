$("#sendMail").on("click", function() {
    
    var create = document.querySelector('input[name="q1"]:checked');
    var companies = document.querySelector('input[name="q2"]:checked');
    var blog = document.querySelector('input[name="q3"]:checked');
    var platforms = document.querySelector('input[name="q4"]:checked');
    var money = document.querySelector('input[name="q5"]:checked');
    var website = document.querySelector('input[name="q6"]:checked');
    var face = document.querySelector('input[name="q7"]:checked');
    var price = document.querySelector('input[name="price"]');

    console.log(create);
    console.log(companies);
    console.log(blog);
    console.log(platforms);
    console.log(money);
    console.log(website);
    console.log(face);
    console.log(price);

    if(create === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(companies === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(blog === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(platforms === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(money === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(website === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(face === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(price === null || price.value === "") {
        $("#errorMess").text("Please write a price");
        return false;   
    }
    else {
    window.location = "Questionaries.html";
}
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        cache: false,
        data: { 
            'q1' : create.value,
            'q2' : companies.value,
            'q3' : blog.value,
            'q4' : platforms.value,
            'q5' : money.value,
            'q6' : website.value, 
            'q7' : face.value, 
            'price' : price.value, 
        },
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            console.log(data);
            if(!data) {
                alert("Message not send");
            } else {
                $("#mailForm").trigger("reset");
                $("#sendMail").prop("disabled", false);    
            }
        },
        error: function(data) {
            console.log("FAILED");
            console.log(data);
        }
    });
});

