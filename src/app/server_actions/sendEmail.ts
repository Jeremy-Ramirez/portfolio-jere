"use server";
import { Resend } from "resend";
import { revalidatePath } from "next/cache";
import { ContactFormSchema, ContactFormState } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot check
  if (formData.get("confirmEmail")) {
    console.log("Honeypot filled. Rejecting silently.");
    return { message: "Email sent successfully!", success: true, errors: {} };
  }

  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to send email.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    console.log(name, email, message);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["jeremyramirezgaleotti@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        message: "Failed to send email. Please try again.",
        success: false,
      };
    }

    revalidatePath("/");
    return { message: "Email sent successfully!", success: true, errors: {} };
  } catch (error: any) {
    console.error("Server error:", error);
    return {
      message: "Something went wrong. Please try again.",
      success: false,
    };
  }
}
