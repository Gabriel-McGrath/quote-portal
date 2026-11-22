"use server";

export async function submitQuoteForm(formData: FormData) {
  // get the form data from the FormData object
  const name = formData.get("name");
  const email = formData.get("email");
  const projectType = formData.get("projectType");
  const details = formData.get("details");

  // Validate the form data  
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof projectType !== "string" ||
    typeof details !== "string"
  ) {
    console.log("Invalid form data:", { name, email, projectType, details });
    return;
  }
  

  // Here you can handle the form submission, e.g., save to a database or send an email.
  console.log("Form submitted:", { name: name.trim(), email: email.trim(), projectType, details: details.trim() });
}