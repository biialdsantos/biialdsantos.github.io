let email_container_element, email_a_element, email_button_element;
let temp_input;

function setup() {
  noCanvas();

  email_container_element = select("#email_container");
  email_a_element = select("#email");

  if (email_a_element) {
    email_button_element = createButton("Copy Email");
    email_button_element.parent(email_container_element);
    email_button_element.hide();
    email_button_element.mousePressed(copyEmail);

    email_a_element.mousePressed(copyEmail);
  }
}

function copyEmail() {
  temp_input = createInput();
  temp_input.parent(email_container_element);
  temp_input.value("beatrizlazarosantoswork@gmail.com");

  try {
    navigator.clipboard.writeText(temp_input.elt.value)
      .then(() => {
        temp_input.remove();
        alert("Email copiado!");
      })
      .catch(err => {
        console.error("Clipboard API failed: ", err);
        copyEmailFallback();
      });
  } catch (err) {
    console.error("Clipboard API failed: ", err);
    copyEmailFallback();
  }
}

function copyEmailFallback() {
  temp_input.elt.select();
  document.execCommand('copy');
  temp_input.remove();
  alert("Email copiado (método alternativo)");
}
