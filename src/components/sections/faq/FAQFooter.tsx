import Button from "@/components/shared/Button";

export default function FAQFooter() {
  return (
    <div className="mx-auto mt-24 max-w-3xl text-center">
      <h3 className="font-[family:var(--font-cormorant)] text-5xl text-[var(--forest)]">
        Still have questions?
      </h3>

      <p className="mx-auto mt-6 max-w-xl text-lg leading-9 text-stone-600">
        If there's anything you'd like to know before joining REWILD,
        we'd love to help. Reach out anytime and we'll get back to you
        as soon as possible.
      </p>

      <div className="mt-10">
  <a
    href="mailto:hello@rewildretreat.com"
    className="inline-flex items-center gap-2 text-lg font-medium text-[var(--forest)] transition-all duration-300 hover:gap-3 hover:opacity-75"
  >
    Get in Touch
    <span aria-hidden="true">→</span>
  </a>
</div>
    </div>
  );
}