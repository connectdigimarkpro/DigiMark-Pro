"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles, 
  Code, 
  Layers, 
  TrendingUp, 
  CalendarCheck,
  Building,
  User,
  Mail
} from "lucide-react";

// Schema for Step 2 validation
const detailsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  message: z.string().min(10, "Project goals must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof detailsSchema>;

export default function ContactForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceCode, setReferenceCode] = useState("");

  // Step 1 state
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  // Services definition
  const services = [
    { name: "Branding & Identity", icon: Layers, desc: "Logos, visual strategy & authority" },
    { name: "Website Development", icon: Code, desc: "React, Next.js, premium engineering" },
    { name: "Digital Marketing", icon: TrendingUp, desc: "Meta/Google Ads & lead generation" },
    { name: "AI-Enhanced Solutions", icon: Sparkles, desc: "Chatbots, automation & content systems" }
  ];

  // Pre-configured time slots
  const timeSlots = ["10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  // Generate the next 14 available days (excluding Sundays)
  const availableDates = useMemo(() => {
    const dates: Date[] = [];
    const current = new Date();
    // start checking from today
    while (dates.length < 14) {
      // Skip Sundays (day = 0)
      if (current.getDay() !== 0) {
        dates.push(new Date(current));
      }
      current.setDate(current.getDate() + 1);
    }
    return dates;
  }, []);

  const {
    register,
    trigger,
    getValues,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      message: "",
    },
  });

  // Date Formatter helper
  const formatDateValue = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleNextStep1 = () => {
    if (selectedService && selectedDate && selectedTimeSlot) {
      setStep(2);
    }
  };

  const handleNextStep2 = async () => {
    // Validate only Step 2 details fields
    const isValid = await trigger(["name", "email", "businessName", "message"]);
    if (isValid) {
      setStep(3);
    }
  };

  const onSubmit = async () => {
    if (!selectedService || !selectedDate || !selectedTimeSlot) {
      setStep(1);
      return;
    }

    const details = getValues();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...details,
          serviceRequired: selectedService,
          date: formatDateValue(selectedDate),
          timeSlot: selectedTimeSlot,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setReferenceCode(`DMP-${Math.floor(100000 + Math.random() * 900000)}`);
        setStatus("success");
        // Confetti burst
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#C9A66B", "#111111", "#FFFFFF"],
        });
      } else {
        throw new Error(result.error || "Unable to book appointment. Please try again.");
      }
    } catch (err: unknown) {
      setStatus("error");
      const errMessage = err instanceof Error ? err.message : "Unable to submit request. Please try again later.";
      setErrorMessage(errMessage);
    }
  };

  const handleReset = () => {
    setSelectedService("");
    setSelectedDate(null);
    setSelectedTimeSlot("");
    setReferenceCode("");
    reset();
    setStatus("idle");
    setStep(1);
  };

  // Render Steps Progress Header
  const renderStepsProgress = () => {
    const stepsList = [
      { label: "Schedule", stepNum: 1 },
      { label: "Details", stepNum: 2 },
      { label: "Confirm", stepNum: 3 }
    ];

    return (
      <div className="flex items-center justify-between max-w-md mx-auto mb-8 sm:mb-10 relative px-1">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black/[0.05] -translate-y-1/2 z-0" />
        {stepsList.map((s) => {
          const isActive = step === s.stepNum;
          const isCompleted = step > s.stepNum;

          return (
            <div key={s.stepNum} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  isActive 
                    ? "bg-[#111111] text-[#FAF8F5] ring-4 ring-[#FAF8F5] shadow-sm"
                    : isCompleted
                    ? "bg-[var(--color-accent)] text-[#111111]"
                    : "bg-[#FAF8F5] border border-black/[0.08] text-[#6B7280]"
                }`}
              >
                {isCompleted ? <CheckCircle2 size={16} /> : s.stepNum}
              </div>
              <span className="text-[9px] uppercase tracking-widest font-bold mt-2 text-[#111111] bg-white px-2">
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  if (status === "success") {
    const details = getValues();
    return (
      <div className="bg-white border border-black/[0.04] rounded-2xl p-8 md:p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[450px]">
        <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mb-6">
          <CalendarCheck size={32} />
        </div>
        <h3 className="font-sans text-2xl font-bold text-[#111111]">
          Consultation Confirmed
        </h3>
        <p className="text-[#6B7280] max-w-md mx-auto text-xs md:text-sm leading-relaxed mt-2">
          Your free growth strategy consultation has been successfully scheduled. An invitation link has been dispatched to your email address.
        </p>

        {/* Ticket receipt mockup */}
        <div className="w-full max-w-sm mt-8 border border-black/[0.06] rounded-xl overflow-hidden bg-[#FAF8F5]">
          <div className="bg-[#111111] text-[#FAF8F5] py-3.5 px-5 text-left flex justify-between items-center">
            <span className="text-[9px] uppercase tracking-widest font-bold">Booking Receipt</span>
            <span className="text-[9px] font-mono text-[var(--color-accent)]">{referenceCode}</span>
          </div>
          <div className="p-5 text-left space-y-4 text-xs">
            <div>
              <span className="block text-[8px] uppercase tracking-widest text-[#6B7280] font-bold">Service Category</span>
              <span className="font-bold text-[#111111]">{selectedService}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-[#6B7280] font-bold">Date</span>
                <span className="font-bold text-[#111111]">{selectedDate?.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-[#6B7280] font-bold">Time Slot</span>
                <span className="font-bold text-[var(--color-accent)]">{selectedTimeSlot} (IST)</span>
              </div>
            </div>
            <div className="border-t border-black/[0.04] pt-3">
              <span className="block text-[8px] uppercase tracking-widest text-[#6B7280] font-bold">Client Contact</span>
              <span className="font-semibold text-[#111111]">{details.name} ({details.businessName})</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full border border-black/[0.08] text-xs font-semibold uppercase tracking-wider text-[#111111] hover:bg-black/[0.02] transition-colors"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-black/[0.04] rounded-2xl p-5 sm:p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden">
      
      {/* Step Indicators */}
      {renderStepsProgress()}

      {/* Error Message */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 flex items-center space-x-3 text-xs mb-6">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* STEP 1: Select Service & Scheduling */}
      {step === 1 && (
        <div className="space-y-8 animate-fadeIn">
          {/* Service Grid */}
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111] block">
              1. Choose a Service
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((srv) => {
                const Icon = srv.icon;
                const isSelected = selectedService === srv.name;
                return (
                  <button
                    key={srv.name}
                    type="button"
                    onClick={() => setSelectedService(srv.name)}
                    className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all duration-200 ${
                      isSelected
                        ? "bg-[#111111] border-[#111111] text-[#FAF8F5]"
                        : "bg-[#FAF8F5] border-black/[0.04] text-[#111111] hover:border-[var(--color-accent)]/40 hover:bg-[#FAF8F5]/80"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isSelected ? "bg-[#FAF8F5]/10 text-[var(--color-accent)]" : "bg-white text-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.02)]"}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider">{srv.name}</h4>
                      <p className={`text-[10px] mt-1 leading-normal ${isSelected ? "text-[#FAF8F5]/60" : "text-[#6B7280]"}`}>{srv.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Date Picker */}
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111] block">
              2. Select Appointment Date
            </span>
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
              {availableDates.map((date, idx) => {
                const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                const isTodayDate = date.toDateString() === new Date().toDateString();
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setSelectedDate(date);
                      setSelectedTimeSlot(""); // Reset slot when date changes
                    }}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-200 ${
                      isSelected
                        ? "bg-[#111111] border-[#111111] text-[#FAF8F5]"
                        : "bg-[#FAF8F5] border-black/[0.04] text-[#111111] hover:border-[var(--color-accent)]/40 hover:bg-[#FAF8F5]/80"
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-wider font-semibold opacity-60">
                      {date.toLocaleDateString("en-US", { weekday: "short" })}
                    </span>
                    <span className="text-sm font-bold mt-1">
                      {date.getDate()}
                    </span>
                    {isTodayDate && (
                      <span className={`text-[8px] font-bold uppercase tracking-wider mt-1 px-1 rounded ${isSelected ? "bg-[#FAF8F5]/20 text-[#FAF8F5]" : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"}`}>
                        Today
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Slot Picker */}
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111] block">
              3. Available Time Slots
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {timeSlots.map((slot) => {
                const isSelected = selectedTimeSlot === slot;
                const isDisabled = !selectedDate;
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`py-3 px-2 rounded-xl border text-center text-xs font-semibold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 ${
                      isDisabled
                        ? "bg-black/[0.02] border-black/[0.02] text-black/20 cursor-not-allowed"
                        : isSelected
                        ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-[#111111]"
                        : "bg-[#FAF8F5] border-black/[0.04] text-[#111111] hover:border-[var(--color-accent)]/40 hover:bg-[#FAF8F5]/80"
                    }`}
                  >
                    <Clock size={11} className="opacity-60" />
                    {slot}
                  </button>
                );
              })}
            </div>
            {!selectedDate && (
              <p className="text-[10px] text-[#6B7280] italic">Please select a date to unlock available time slots.</p>
            )}
          </div>

          {/* Progress button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleNextStep1}
              disabled={!selectedService || !selectedDate || !selectedTimeSlot}
              className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-[#111111] disabled:bg-black/[0.06] text-[#FAF8F5] disabled:text-black/30 font-semibold text-xs uppercase tracking-widest transition-all duration-300 disabled:cursor-not-allowed group shadow-sm"
            >
              Continue to Details
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Fill Details */}
      {step === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111] block mb-2">
            4. Enter Personal & Business Details
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#111111] flex items-center gap-1.5">
                <User size={12} className="opacity-50" />
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
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#111111] flex items-center gap-1.5">
                <Mail size={12} className="opacity-50" />
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

          <div className="grid grid-cols-1 gap-6">
            {/* Business Name */}
            <div className="space-y-2">
              <label htmlFor="businessName" className="text-xs font-bold uppercase tracking-widest text-[#111111] flex items-center gap-1.5">
                <Building size={12} className="opacity-50" />
                Business/Organization Name
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

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#111111]">
                Describe Your Project Goals
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Briefly describe what you'd like to achieve, target audience, and any timelines..."
                {...register("message")}
                className={`w-full px-4 py-3 bg-[#FAF8F5] border rounded-xl text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] resize-none ${
                  errors.message ? "border-red-300 focus:ring-red-400" : "border-black/[0.06] focus:border-[var(--color-accent)]"
                }`}
              />
              {errors.message && (
                <p className="text-xs font-medium text-red-600">{errors.message.message}</p>
              )}
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full sm:w-1/3 inline-flex items-center justify-center py-4 rounded-xl border border-black/[0.08] hover:bg-black/[0.02] text-[#111111] font-semibold text-xs uppercase tracking-widest transition-all duration-300"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back
            </button>
            <button
              type="button"
              onClick={handleNextStep2}
              className="w-full sm:w-2/3 inline-flex items-center justify-center py-4 rounded-xl bg-[#111111] hover:bg-[var(--color-accent)] text-[#FAF8F5] hover:text-[#111111] font-semibold text-xs uppercase tracking-widest transition-all duration-300 group shadow-sm"
            >
              Review Schedule
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Review Details & Booking */}
      {step === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111] block mb-2">
            5. Review & Confirm Consultation
          </span>

          {/* Styled ticket card */}
          <div className="border border-black/[0.06] rounded-xl overflow-hidden shadow-sm bg-[#FAF8F5]">
            <div className="bg-[#111111] text-[#FAF8F5] py-3.5 px-5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Calendar size={13} className="text-[var(--color-accent)]" />
                <span className="text-[9px] uppercase tracking-widest font-bold">Strategy Consultation Summary</span>
              </div>
              <span className="text-[9px] font-semibold tracking-widest text-[var(--color-accent)] uppercase">Review</span>
            </div>

            <div className="p-6 space-y-6 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-[#6B7280] font-bold">Selected Capability</span>
                  <span className="font-bold text-[#111111] block mt-1">{selectedService}</span>
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-[#6B7280] font-bold">Date & Time Slot</span>
                  <span className="font-bold text-[var(--color-accent)] block mt-1">
                    {formatDateValue(selectedDate)} at {selectedTimeSlot} (IST)
                  </span>
                </div>
              </div>

              <div className="border-t border-black/[0.04] pt-4">
                <span className="block text-[8px] uppercase tracking-widest text-[#6B7280] font-bold">Client Information</span>
                <div className="mt-2 space-y-1.5 text-xs text-[#111111]">
                  <p><span className="text-[#6B7280]">Name:</span> <span className="font-semibold">{getValues("name")}</span></p>
                  <p><span className="text-[#6B7280]">Email:</span> <span className="font-semibold">{getValues("email")}</span></p>
                  <p><span className="text-[#6B7280]">Business:</span> <span className="font-semibold">{getValues("businessName")}</span></p>
                </div>
              </div>

              <div className="border-t border-black/[0.04] pt-4">
                <span className="block text-[8px] uppercase tracking-widest text-[#6B7280] font-bold">Project Goals</span>
                <p className="mt-2 text-xs leading-relaxed text-[#4B5563] bg-white border border-black/[0.03] p-3 rounded-lg max-h-24 overflow-y-auto whitespace-pre-wrap">
                  {getValues("message")}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={status === "submitting"}
              className="w-full sm:w-1/3 inline-flex items-center justify-center py-4 rounded-xl border border-black/[0.08] hover:bg-black/[0.02] text-[#111111] font-semibold text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-50"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back
            </button>
            <button
              type="button"
              onClick={onSubmit}
              disabled={status === "submitting"}
              className="w-full sm:w-2/3 inline-flex items-center justify-center py-4 rounded-xl bg-[#111111] hover:bg-[var(--color-accent)] text-[#FAF8F5] hover:text-[#111111] font-semibold text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="animate-spin mr-2 w-4 h-4" />
                  Booking Consultation...
                </>
              ) : (
                <>
                  Confirm & Schedule
                  <CalendarCheck className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
