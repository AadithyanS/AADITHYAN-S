function submitForm() {
    var name = $("input[name=name]").val();
    var password = $("input[password=password]").val();
    var formData = {
      name: name,
      password: password
    };
    $.ajax({
      url: "./php/signup.php",
      type: "POST",
      data: formData,
      success: function (response) {
       if(response=="aaddi"){
        alert("okkk");
       }
      },
    });
  }