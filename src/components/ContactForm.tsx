"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  serviceRequired: z.string().min(1, "Please select a service option"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      serviceRequired: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        reset();
        
        // Premium canvas-confetti burst
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C9A66B", "#111111", "#FFFFFF"],
        });
      } else {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }
    } catch (err: unknown) {
      setStatus("error");
      const errMessage = err instanceof Error ? err.message : "Unable to send message. Please try again later.";
      setErrorMessage(errMessage);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-black/[0.04] rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-sans text-2xl font-bold text-[#111111]">
          Message Sent Successfully
        </h3>
        <p className="text-[#6B7280] max-w-md mx-auto text-sm leading-relaxed">
          Thank you for reaching out. A growth strategist from DigiMark Pro will review your request and contact you within 24 hours to schedule your consultation.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full border border-black/[0.08] text-xs font-semibold uppercase tracking-wider text-[#111111] hover:bg-black/[0.02] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-black/[0.04] rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 flex items-center space-x-3 text-sm">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#111111]">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              {...register("name")}
              className={`w-full px-4 py-3 bg-[#FAF8F5] border rounded-xl text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] ${
                errors.name ? "border-red-300 focus:ring-red-400" : "border-black/[0.06] focus:border-[var(--color-accent)]"
              }`}
            />
            {errors.name && (
              <p className="text-xs font-medium text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#111111]">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className={`w-full px-4 py-3 bg-[#FAF8F5] border rounded-xl text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] ${
                errors.email ? "border-red-300 focus:ring-red-400" : "border-black/[0.06] focus:border-[var(--color-accent)]"
              }`}
            />
            {errors.email && (
              <p className="text-xs font-medium text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Name */}
          <div className="space-y-2">
            <label htmlFor="businessName" className="text-xs font-bold uppercase tracking-widest text-[#111111]">
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              placeholder="Acme Corp"
              {...register("businessName")}
              className={`w-full px-4 py-3 bg-[#FAF8F5] border rounded-xl text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] ${
                errors.businessName ? "border-red-300 focus:ring-red-400" : "border-black/[0.06] focus:border-[var(--color-accent)]"
              }`}
            />
            {errors.businessName && (
              <p className="text-xs font-medium text-red-600">{errors.businessName.message}</p>
            )}
          </div>

          {/* Service Required */}
          <div className="space-y-2">
            <label htmlFor="serviceRequired" className="text-xs font-bold uppercase tracking-widest text-[#111111]">
              Service Required
            </label>
            <select
              id="serviceRequired"
              {...register("serviceRequired")}
              className={`w-full px-4 py-3 bg-[#FAF8F5] border rounded-xl text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] appearance-none ${
                errors.serviceRequired ? "border-red-300 focus:ring-red-400" : "border-black/[0.06] focus:border-[var(--color-accent)]"
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' height='24' stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "16px"
              }}
            >
              <option value="">Select a service...</option>
              <option value="Branding & Identity">Branding & Identity</option>
              <option value="Website Development">Website Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Growth Solutions">Growth Solutions</option>
            </select>
            {errors.serviceRequired && (
              <p className="text-xs font-medium text-red-600">{errors.serviceRequired.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#111111]">
            How Can We Help You?
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your project, target audience, and goals..."
            {...register("message")}
            className={`w-full px-4 py-3 bg-[#FAF8F5] border rounded-xl text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] resize-none ${
              errors.message ? "border-red-300 focus:ring-red-400" : "border-black/[0.06] focus:border-[var(--color-accent)]"
            }`}
          />
          {errors.message && (
            <p className="text-xs font-medium text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-[#111111] hover:bg-[var(--color-accent)] text-[#FAF8F5] hover:text-[#111111] font-semibold text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin mr-2 w-4 h-4" />
              Sending Request...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
