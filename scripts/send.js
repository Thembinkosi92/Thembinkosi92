function sendEmail(){
     let form = document.getElementById('sendmsg').value;
    let fullname = form.elements['name'];
    let userEmail = form.elements['email'];
    let userMessage = form.elements['message'];
    
    let fullname = name.value;
    let userEmail = email.value;
    let userMessage = message.value;
    
    var contactparameters = {
        from_name : fullname,
        from_email : userEmail,
        from_msg : userMessage
    };
     Email.send({
        Host: "smtp.gmail.com",
        Username: "ttwalaskhandisa@gmail.com",
        Password: "92@TTe.!",
         
        To: 'ttwalaskhandisa@gmail.com',
        From: from_email,
        Subject: from_name,
        Body: from_msg,
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
}
    