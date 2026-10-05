import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Fluxilin',
  description: 'How Fluxilin collects, uses and protects your data.',
};

const SECTIONS = [
  {
    title: '1. Information we collect',
    body: 'When you fill a form, contact us or sign up for our newsletter, we collect details you give us: your name, email address, phone number, brand or social media handle, and the message you send. We also collect basic usage data such as pages visited and device or browser type.',
  },
  {
    title: '2. How we use your information',
    body: 'We use your information to respond to enquiries, match brands with creators, run and report on campaigns, send updates you have opted into, and improve our website.',
  },
  {
    title: '3. Sharing your information',
    body: 'We do not sell your personal data. We share it only with brands or creators involved in a campaign you have agreed to, and with service providers (hosting, analytics, email) who process data on our behalf.',
  },
  {
    title: '4. Data retention and security',
    body: 'We keep your data only as long as needed for the purposes above or as required by law, and we use reasonable technical measures to protect it.',
  },
  {
    title: '5. Your rights',
    body: 'You can ask us to access, correct or delete your personal data, or withdraw consent for communications, at any time by writing to us at the email below.',
  },
  {
    title: '6. Contact',
    body: 'Fluxilin Media Pvt. Ltd. | Email: Fluxilin@gmail.com',
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-20">
      <h1 className="font-display text-4xl font-bold text-main mb-2">Privacy Policy</h1>
      <p className="text-sm text-subtle mb-10">Last updated: October 2026</p>
      {SECTIONS.map((s) => (
        <section key={s.title} className="space-y-3 mb-8">
          <h2 className="font-display text-xl font-semibold text-main">{s.title}</h2>
          <p className="text-muted leading-relaxed">{s.body}</p>
        </section>
      ))}
    </div>
  );
}
