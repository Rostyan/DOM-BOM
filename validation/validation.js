 var forms = document.createElement("form");
 document.body.appendChild(forms);

 forms.innerHTML = '<input type="text" name="age"><br>';
 forms.innerHTML += '<input type="text" name="username"><br>';
 forms.innerHTML += '<input type="text" name="date"><br>';
 forms.innerHTML += '<input type="button" value="Validate Me"><br>';

 document.querySelector("input[name=age]").setAttribute("placeholder", "age");
 document.querySelector("input[name=username]").setAttribute("placeholder", "username user_...");
 document.querySelector("input[name=date]").setAttribute("placeholder", "date MMM Do YY");
 document.querySelector("body form input[type=button]").onclick = function () {
     var age = document.querySelector("body form input[name=age]").value;
     var userName = document.querySelector("body form input[name=username]").value;
     var date = document.querySelector("body form input[name=date]").value;

     if (age === "" || age.match(/\D/g) || age<0) {
         alert("Your data is invalid, wrong age!");
     }
     if (!userName.match(/^user_/g)) {
         alert("Your data is invalid, wrong username!");
     }
     if (date !== moment().format("MMM Do YY")) {
         alert("Your data is invalid, wrong date!");
     }
 };