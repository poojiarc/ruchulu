import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    window.open(`https://wa.me/919849578049?text=${whatsappMsg}`, "_blank");
  };

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold">Get in Touch</h2>

            <a href="tel:+919849578049" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm">Call Us</p>
                <p className="text-muted-foreground text-sm">+91 9849578049</p>
              </div>
            </a>

            <a href="mailto:chandalururuchulu@gmail.com" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm">Email Us</p>
                <p className="text-muted-foreground text-sm">chandalururuchulu@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm">Location</p>
                <p className="text-muted-foreground text-sm">Chandaluru, Andhra Pradesh, India</p>
              </div>
            </div>

            <a
              href="https://wa.me/919849578049"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-whatsapp text-whatsapp-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            {/* Google Map placeholder */}
            <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Google Map - Chandaluru, AP</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
