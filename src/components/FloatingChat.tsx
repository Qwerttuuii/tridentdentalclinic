import { MessageCircle } from "lucide-react";

export default function FloatingChat() {
  return (
    <a
      href="https://wa.me/2347040848555?text=Hello%20Trident%20Dental%2C%20I%27d%20like%20to%20make%20an%20enquiry."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-brand px-5 py-4 text-[15px] font-semibold text-white shadow-[0_18px_36px_-12px_rgba(43,75,214,0.75)] transition-colors hover:bg-brand-dark sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}