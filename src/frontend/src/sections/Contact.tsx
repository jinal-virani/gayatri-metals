import {
  CheckCircle,
  Clock,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    content:
      "Plot No. 4025, Phase III, G.I.D.C, Dared, Jamnagar (Gujarat) - 361004, India",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Primary Phone",
    content: "+91 98989-08290",
    href: "tel:+919898908290",
  },
  {
    icon: Phone,
    label: "Alternate Phone",
    content: "+91 8849391584",
    href: "tel:+918849391584",
  },
  {
    icon: Mail,
    label: "General Email",
    content: "info@gayatrimetals.com",
    href: "mailto:info@gayatrimetals.com",
  },
  {
    icon: Mail,
    label: "Sales Email",
    content: "sales@gayatrimetals.com",
    href: "mailto:sales@gayatrimetals.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    content: "linkedin.com/company/gayatrimp",
    href: "https://www.linkedin.com/company/gayatrimp",
  },
  {
    icon: Clock,
    label: "Office Hours",
    content: "Monday - Saturday: 9:00 AM - 6:00 PM IST",
    href: undefined,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) newErrors.email = "Email address is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Please enter a valid email.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name])
      setErrors((prev) => {
        const n = { ...prev };
        delete n[name];
        return n;
      });
  };

  return (
    <section id="contact" className="py-24 bg-card" data-ocid="contact.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-3">
            REACH OUT
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground font-display mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We'd love to hear from you. Send us a message or visit our facility
            in Jamnagar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-xl border border-border bg-background p-8">
              <h3 className="text-xl font-bold text-foreground font-display mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-foreground hover:text-accent transition-colors duration-200 break-words"
                            data-ocid={`contact.${item.label.toLowerCase().replace(/\s/g, "_")}_link`}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-foreground break-words">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="rounded-xl border border-border overflow-hidden h-48 bg-background flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  G.I.D.C Dared, Jamnagar, Gujarat
                </p>
                <a
                  href="https://maps.google.com/?q=G.I.D.C+Dared+Jamnagar+Gujarat+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline mt-1 inline-block"
                  data-ocid="contact.map_link"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="rounded-xl border border-border bg-background p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle size={56} className="text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-foreground font-display mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you! We'll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-sm text-accent hover:underline"
                    data-ocid="contact.send_another_button"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                  data-ocid="contact.form"
                >
                  <h3 className="text-xl font-bold text-foreground font-display mb-1">
                    Send Us a Message
                  </h3>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-md border border-border bg-card text-foreground px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                      data-ocid="contact.name_input"
                    />
                    {errors.name && (
                      <p
                        className="mt-1 text-xs text-destructive"
                        data-ocid="contact.name_field_error"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-md border border-border bg-card text-foreground px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                      data-ocid="contact.email_input"
                    />
                    {errors.email && (
                      <p
                        className="mt-1 text-xs text-destructive"
                        data-ocid="contact.email_field_error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone + Subject row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-md border border-border bg-card text-foreground px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                        data-ocid="contact.phone_input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full rounded-md border border-border bg-card text-foreground px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                        data-ocid="contact.subject_input"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full rounded-md border border-border bg-card text-foreground px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 resize-none"
                      data-ocid="contact.message_textarea"
                    />
                    {errors.message && (
                      <p
                        className="mt-1 text-xs text-destructive"
                        data-ocid="contact.message_field_error"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/85 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-lg hover:shadow-accent/30 mt-1"
                    data-ocid="contact.submit_button"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
