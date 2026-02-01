import { Mail, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <p className="font-sans text-xs tracking-[0.32em] uppercase text-black/60">Contact</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1] md:text-6xl">Let’s talk.</h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/75">
            Press, wholesale, collaborations, or a personal note to include with a piece — email us.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <a
              href="mailto:hello@houseofbecome.com?subject=House%20of%20Become%20Inquiry"
              className="group rounded-3xl border border-black/10 bg-white/40 p-7 hover:bg-white/60"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-black/70" />
                <span className="font-sans text-sm text-black/70">Email</span>
              </div>
              <div className="mt-3 font-serif text-2xl">hello@houseofbecome.com</div>
              <p className="mt-2 font-sans text-sm text-black/65">We usually reply within 1–2 business days.</p>
            </a>

            <a href="#" className="group rounded-3xl border border-black/10 bg-white/40 p-7 hover:bg-white/60">
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-black/70" />
                <span className="font-sans text-sm text-black/70">Instagram</span>
              </div>
              <div className="mt-3 font-serif text-2xl">@houseofbecome</div>
              <p className="mt-2 font-sans text-sm text-black/65">Replace this link when your handle is live.</p>
            </a>
          </div>

          <div className="mt-12 rounded-3xl border border-black/10 bg-white/40 p-7">
            <p className="font-sans text-sm text-black/70">
              If you want the contact form to send emails directly (instead of mailto), wire it up with a Vercel route + Resend/Postmark — you’ll need API keys.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
