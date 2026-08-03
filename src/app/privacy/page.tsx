export const metadata = {
  title: 'Privacy | AURA',
  description: 'Private by default.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12">
      <div className="container max-w-3xl space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">Privacy</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-primary">
            Private by default.
          </h1>
        </div>

        <div className="space-y-5 rounded-[1.75rem] border border-soft bg-surface p-6 text-sm leading-7 text-secondary">
          <p>
            This is a plain-language project notice, not formal legal advice.
          </p>
          <p>
            AURA does not require an account. Saved routines stay in your browser using localStorage and can be deleted at any time.
          </p>
          <p>
            The app does not accept photographs. It does not intentionally collect medical history or other sensitive personal data.
          </p>
          <p>
            If live AI generation is enabled, your text answers may be sent to the configured AI provider. Users should not enter identifying or sensitive information into those fields.
          </p>
          <p>
            Saved routines can be removed from the Saved page, and clearing your browser data will also remove them.
          </p>
        </div>
      </div>
    </div>
  );
}
