function validate() {
  if (document.contactForm.name.value == "") {
    alert("Please fill in your name!");
    return false;
  } else if (document.contactForm.name.value == "Irene Ruiz") {
    alert("Don't write to yourself, Irene!");
    return false;
  } else if (document.contactForm.name.value == "Nacho") {
    alert("Sorry for forgetting to use branches :'(!");
    return false;
  }

  if (document.contactForm.femail.value == "") {
    alert("We'll need an e-mail to get in touch with you!");
    return false;
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      document.contactForm.femail.value
    )
  ) {
    return true;
  }
  alert("Looks like you've entered an invalid e-mail address!");
  return false;

}



    