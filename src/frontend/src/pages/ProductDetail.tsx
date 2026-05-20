import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PRODUCTS } from "@/data/content";
import {
  AlertCircle,
  ArrowLeft,
  Award,
  CheckCircle2,
  ChevronRight,
  Home,
  Package,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

// ── Field definitions ────────────────────────────────────────────
type FieldKey =
  | "name"
  | "email"
  | "phone"
  | "company"
  | "quantity"
  | "requirements";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  quantity: string;
  requirements: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  quantity?: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  quantity: "",
  requirements: "",
};

function validateForm(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  if (!form.quantity.trim()) errors.quantity = "Quantity required is required.";
  return errors;
}

// ── Inline Navbar ─────────────────────────────────────────────────
function DetailNavbar({ productName }: { productName: string }) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-none group shrink-0"
            data-ocid="detail.logo_link"
          >
            <span className="text-xl font-black tracking-[0.18em] text-accent font-display transition-opacity duration-200 group-hover:opacity-80">
              GAYATRI
            </span>
            <span className="text-[10px] tracking-[0.22em] text-muted-foreground font-body uppercase">
              Metal Products
            </span>
          </Link>

          {/* Centre: current product name (desktop) */}
          <span className="hidden md:block text-sm text-muted-foreground truncate max-w-xs">
            {productName}
          </span>

          {/* Back button */}
          <Link
            to="/#products"
            className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200 shrink-0"
            data-ocid="detail.back_link"
          >
            <ArrowLeft size={16} />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

// ── Breadcrumb ────────────────────────────────────────────────────
function Breadcrumb({ productName }: { productName: string }) {
  return (
    <nav
      className="flex items-center gap-1.5 text-xs text-muted-foreground"
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className="hover:text-accent transition-colors duration-200 flex items-center gap-1"
      >
        <Home size={12} />
        Home
      </Link>
      <ChevronRight size={12} className="shrink-0" />
      <Link
        to="/#products"
        className="hover:text-accent transition-colors duration-200"
      >
        Products
      </Link>
      <ChevronRight size={12} className="shrink-0" />
      <span className="text-foreground/80 truncate max-w-[160px] sm:max-w-xs">
        {productName}
      </span>
    </nav>
  );
}

// ── Inquiry Form ──────────────────────────────────────────────────
function InquiryForm({ productName }: { productName: string }) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const set =
    (key: FieldKey) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateForm(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm(INITIAL);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 py-12 px-6 text-center"
        data-ocid="inquiry.success_state"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-foreground font-display">
          Inquiry Sent Successfully!
        </h3>
        <p className="text-muted-foreground text-sm max-w-md">
          Thank you for your interest in{" "}
          <span className="text-accent font-medium">{productName}</span>. Our
          team will review your requirements and get back to you within 24
          hours.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setSubmitted(false)}
          data-ocid="inquiry.reset_button"
        >
          Send Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate data-ocid="inquiry.form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="inq-name" className="text-sm font-medium">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inq-name"
            value={form.name}
            onChange={set("name")}
            placeholder="Your full name"
            className={errors.name ? "border-destructive" : ""}
            data-ocid="inquiry.name_input"
          />
          {errors.name && (
            <p
              className="text-xs text-destructive flex items-center gap-1"
              data-ocid="inquiry.name.field_error"
            >
              <AlertCircle size={12} />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="inq-email" className="text-sm font-medium">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inq-email"
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@company.com"
            className={errors.email ? "border-destructive" : ""}
            data-ocid="inquiry.email_input"
          />
          {errors.email && (
            <p
              className="text-xs text-destructive flex items-center gap-1"
              data-ocid="inquiry.email.field_error"
            >
              <AlertCircle size={12} />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="inq-phone" className="text-sm font-medium">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inq-phone"
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="+91 XXXXX XXXXX"
            className={errors.phone ? "border-destructive" : ""}
            data-ocid="inquiry.phone_input"
          />
          {errors.phone && (
            <p
              className="text-xs text-destructive flex items-center gap-1"
              data-ocid="inquiry.phone.field_error"
            >
              <AlertCircle size={12} />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Company (optional) */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="inq-company" className="text-sm font-medium">
            Company Name
          </Label>
          <Input
            id="inq-company"
            value={form.company}
            onChange={set("company")}
            placeholder="Your company (optional)"
            data-ocid="inquiry.company_input"
          />
        </div>

        {/* Quantity */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="inq-qty" className="text-sm font-medium">
            Quantity Required <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inq-qty"
            value={form.quantity}
            onChange={set("quantity")}
            placeholder="e.g. 5000 pcs / 100 kg"
            className={errors.quantity ? "border-destructive" : ""}
            data-ocid="inquiry.quantity_input"
          />
          {errors.quantity && (
            <p
              className="text-xs text-destructive flex items-center gap-1"
              data-ocid="inquiry.quantity.field_error"
            >
              <AlertCircle size={12} />
              {errors.quantity}
            </p>
          )}
        </div>

        {/* Special Requirements */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="inq-req" className="text-sm font-medium">
            Special Requirements
          </Label>
          <Textarea
            id="inq-req"
            value={form.requirements}
            onChange={set("requirements")}
            placeholder="Describe any special materials, tolerances, finishes, or delivery requirements…"
            rows={4}
            data-ocid="inquiry.requirements_textarea"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="mt-6 w-full sm:w-auto px-8"
        data-ocid="inquiry.submit_button"
      >
        Send Inquiry
      </Button>
    </form>
  );
}

// ── Main Page ─────────────────────────────────────────────────────
export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <DetailNavbar productName="Product Not Found" />
        <div
          className="flex-1 flex flex-col items-center justify-center gap-6 px-4 text-center"
          data-ocid="detail.not_found"
        >
          <div className="w-20 h-20 rounded-full bg-muted/50 border border-border flex items-center justify-center">
            <Package className="w-10 h-10 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold font-display text-foreground mb-2">
              Product Not Found
            </h1>
            <p className="text-muted-foreground">
              The product you're looking for doesn't exist or may have been
              removed.
            </p>
          </div>
          <Link to="/#products">
            <Button data-ocid="detail.not_found_home_button">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      data-ocid="detail.page"
    >
      <DetailNavbar productName={product.name} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <Breadcrumb productName={product.name} />
        </motion.div>

        {/* Hero: Image + Info two-column on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
            className="relative rounded-2xl overflow-hidden bg-card border border-border aspect-[4/3] md:aspect-auto md:min-h-[420px]"
            data-ocid="detail.product_image"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: "easeOut" as const,
            }}
            className="flex flex-col gap-6"
          >
            {/* Product name */}
            <div>
              <span className="text-accent text-xs font-semibold uppercase tracking-widest font-body">
                Product Overview
              </span>
              <h1 className="mt-2 text-3xl md:text-4xl font-black font-display text-foreground leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Full description */}
            <div className="space-y-3">
              {product.fullDescription
                .split(". ")
                .reduce<string[][]>((acc, sentence, i) => {
                  const para = Math.floor(i / 3);
                  if (!acc[para]) acc[para] = [];
                  acc[para].push(sentence);
                  return acc;
                }, [])
                .map((sentences, i) => (
                  <p
                    key={sentences[0]?.slice(0, 20) ?? i}
                    className="text-muted-foreground text-sm md:text-base leading-relaxed"
                  >
                    {sentences.join(". ")}
                    {sentences.length > 0 &&
                    !sentences[sentences.length - 1].endsWith(".")
                      ? "."
                      : ""}
                  </p>
                ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              <div
                className="flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-lg px-3 py-2"
                data-ocid="detail.cert_iso9001"
              >
                <Award className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs font-semibold text-accent">
                  ISO 9001:2015
                </span>
              </div>
              <div
                className="flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-lg px-3 py-2"
                data-ocid="detail.cert_iatf"
              >
                <Award className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs font-semibold text-accent">
                  IATF 16949
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specs + Materials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="bg-card border border-border rounded-2xl p-6"
            data-ocid="detail.specifications"
          >
            <h2 className="text-lg font-bold font-display text-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full" />
              Specifications
            </h2>
            <ul className="space-y-2.5">
              {product.specifications.map((spec) => (
                <li
                  key={spec.slice(0, 20)}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Materials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
            className="bg-card border border-border rounded-2xl p-6"
            data-ocid="detail.materials"
          >
            <h2 className="text-lg font-bold font-display text-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full" />
              Materials
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((mat) => (
                <Badge
                  key={mat}
                  variant="outline"
                  className="border-accent/30 text-accent/90 bg-accent/5 text-xs font-medium px-3 py-1"
                >
                  {mat}
                </Badge>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
              All materials are sourced from certified suppliers and accompanied
              by mill test certificates. Custom alloy specifications are
              available on request.
            </p>
          </motion.div>
        </div>

        {/* Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="bg-card border border-border rounded-2xl p-6 md:p-10"
          data-ocid="detail.inquiry_section"
        >
          <div className="mb-8">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest font-body">
              Get a Quote
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold font-display text-foreground">
              Request an Inquiry
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Fill in your requirements for{" "}
              <span className="text-accent font-medium">{product.name}</span>{" "}
              and our team will respond within 24 hours.
            </p>
          </div>
          <InquiryForm productName={product.name} />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Gayatri Metal Products, Jamnagar.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
