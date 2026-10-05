import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Fluxilin',
  description: 'Terms governing the use of Fluxilin services and website.',
};

const SECTIONS = [
  {
    title: '1. Acceptance of terms',
    body: 'By using this website or our services, you agree to these terms. If you do not agree, please do not use the site.',
  },
  {
    title: '2. Our services',
    body: 'Fluxilin provides influencer marketing services, including creator matchmaking, campaign management and reporting. Specific deliverables, timelines and fees are set out in a written agreement or proposal for each campaign.',
  },
  {
    title: '3. Payments',
    body: 'Fees and payment schedules are as agreed in the campaign proposal. Delayed payments may pause campaign work.',
  },
  {
    title: '4. Creator and brand responsibilities',
    body: 'Brands must provide accurate briefs and approvals on time. Creators must follow the agreed brief and disclose paid partnerships as required by ASCI and applicable Indian law.',
  },
  {
    title: '5. Results disclaimer',
    body: 'We work to deliver strong results, but we cannot guarantee specific reach, sales or ROAS, as outcomes depend on factors outside our control.',
  },
  {
    title: '6. Limitation of liability',
    body: 'To the extent permitted by law, Fluxilin is not liable for indirect or consequential losses arising from the use of our website or services.',
  },
  {
    title: '7. Governing law',
    body: 'These terms are governed by the laws of India. Disputes will be subject to the courts of Noida, Uttar Pradesh.',
  },
  {
    title: '8. Contact',
    body: 'Fluxilin Media Pvt. Ltd. | Email: Fluxilin@gmail.com',
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-20">
      <h1 className="font-display text-4xl font-bold text-main mb-2">Terms of Service</h1>
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
