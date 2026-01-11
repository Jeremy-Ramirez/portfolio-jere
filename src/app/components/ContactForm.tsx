"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { sendEmail } from "../server_actions/sendEmail";
import { ContactFormState } from "@/lib/schemas";
import { useLanguageStoreHydrated } from "@/store/useLanguageStore";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguageStoreHydrated();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full border rounded-md border-green-600 p-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending
        ? t?.contact?.sending || "Sending..."
        : t?.contact?.send || "Send message"}
    </button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: undefined, errors: {} };
  const [state, dispatch] = useActionState(sendEmail, initialState);
  const { t } = useLanguageStoreHydrated();

  return (
    <form action={dispatch} className="space-y-6">
      {state.success && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">
            {t?.contact?.successTitle || "Success!"}
          </strong>
          <span className="block sm:inline">
            {" "}
            {t?.contact?.success || "Message sent successfully!"}
          </span>
        </div>
      )}
      {state.success === false && state.message && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">
            {t?.contact?.errorTitle || "Error!"}
          </strong>
          <span className="block sm:inline">
            {" "}
            {t?.contact?.error || "Error sending message. Please try again."}
          </span>
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {t?.contact?.name || "Name"}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={t?.contact?.namePlaceholder || "Your name"}
          required
          className="w-full p-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-describedby="name-error"
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {state.errors?.name &&
            state.errors.name.map((error: string) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t?.contact?.email || "Email"}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={t?.contact?.emailPlaceholder || "Your email"}
          required
          className="w-full p-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-describedby="email-error"
        />
        <div id="email-error" aria-live="polite" aria-atomic="true">
          {state.errors?.email &&
            state.errors.email.map((error: string) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t?.contact?.message || "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={
            t?.contact?.messagePlaceholder || "Tell me about your project..."
          }
          rows={5}
          required
          className="w-full p-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-describedby="message-error"
        />
        <div id="message-error" aria-live="polite" aria-atomic="true">
          {state.errors?.message &&
            state.errors.message.map((error: string) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>
      </div>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="confirmEmail">
          Don&apos;t fill this out if you&apos;re human:
        </label>
        <input
          type="text"
          id="confirmEmail"
          name="confirmEmail"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <SubmitButton />
    </form>
  );
}
