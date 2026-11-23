"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";

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
  

  await db.orm.public.Quote.create({
    
      name,
      email,
      projectType,
      details,
    });

  revalidatePath("/"); // Revalidate the home page to reflect the new quote submission

  console.log("Quote form submitted successfully:", { name, email, projectType, details });  
}