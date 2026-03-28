import { useEffect, useCallback } from "react";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";
import ContactForm from "./ContactForm";

interface FormModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FormModal({ open, onClose }: FormModalProps) {
  const { lang } = useLang();
  const t = BIB_DATA[lang].formLabels;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.fillForm}
    >
      <div
        className="relative w-full max-w-md mx-4 rounded-lg bg-background p-6 shadow-bib-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold text-foreground mb-4">{t.fillForm}</h2>
        <ContactForm />
      </div>
    </div>
  );
}
