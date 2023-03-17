function submitForm() {
    var name = $("input[name=name]").val();
    var password = $("input[password=password]").val();
    var formData = {
      name: name,
      password: password
    };
    $.ajax({
      url: "./php/login.php",
      type: "POST",
      data: formData,
      success: function (response) {
       console.log(response)
      },
    });
  }
