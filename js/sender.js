var form = document.getElementById("contact-form");
var formStatus = document.getElementById("contact-form-formStatus");

async function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  try {
    const response = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    const json = await response.json();
    if (json.hasOwnProperty("errors")) {
      formStatus.innerHTML = json.errors
        .map((error) => error.message)
        .join(", ");
    } else {
      formStatus.innerHTML = "Thanks for your submission!";
      form.reset();
    }
  } catch (error) {
    formStatus.innerHTML = "Oops! There was a problem submitting your form";
  }
}

form.addEventListener("submit", handleSubmit);
