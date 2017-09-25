 function validator() {
     var forms = document.createElement("form");
     document.body.appendChild(forms);

     forms.innerHTML = '<input type="text" name="age"><br>';
     forms.innerHTML += '<input type="text" name="username"><br>';
     forms.innerHTML += '<input type="text" name="date"><br>';
     forms.innerHTML += '<input type="button" value="Validate Me"><br>';

 }