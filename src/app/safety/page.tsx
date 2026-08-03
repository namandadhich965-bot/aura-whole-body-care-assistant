import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Safety | AURA',
  description: 'AURA safety boundaries and guidance limits.',
};

const CAN_HELP_WITH = [
  'Simple cosmetic routines',
  'Dryness and rough texture',
  'Hair and scalp habits',
  'Shaving and friction aftercare',
  'Product use',
];

const CANNOT_DO = [
  'Diagnose medical conditions',
  'Prescribe medication',
  'Guarantee results',
  'Interpret photographs',
  'Replace professional care',
];

const ESCALATE = [
  'Severe pain',
  'Major swelling',
  'Difficulty breathing',
  'Eye involvement',
  'Open wounds',
  'Infected-looking skin',
  'Rapidly spreading reaction',
  'Sudden major hair loss',
  'Persistent or worsening symptoms',
];

const UNSAFE_DYI = [
  'Bleach or whitening mixtures',
  'Lemon or lime juice on skin',
  'Toothpaste as a spot treatment',
  'Baking soda on irritated skin',
  'Harsh scrubbing or over-exfoliating',
];

export default function SafetyPage() {
  return (
    <div className="py-12">
      <div className="container space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">Safety</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-primary">
            Clear limits make AURA more useful.
          </h1>
          <p className="mt-4 text-lg leading-8 text-secondary">
            AURA is for cosmetic self-care guidance only.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card variant="elevated">
            <h2 className="text-xl font-semibold text-primary">What AURA can help with</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-secondary">
              {CAN_HELP_WITH.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card variant="elevated">
            <h2 className="text-xl font-semibold text-primary">What AURA cannot do</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-secondary">
              {CANNOT_DO.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-semibold text-primary">When guidance stops</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-secondary">
            {ESCALATE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-primary">Unsafe DIY practices to avoid</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-secondary">
            {UNSAFE_DYI.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-primary">Dark and uneven-looking areas</h2>
          <p className="mt-3 text-sm leading-7 text-secondary">
            Natural skin tone varies across the body. Friction, dryness, shaving, and previous irritation can affect visible texture and tone. AURA focuses on comfort, healthy-looking skin, and cautious routines. It does not promote bleaching or promise to make every area the same colour.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-primary">Hair and scalp limits</h2>
          <p className="mt-3 text-sm leading-7 text-secondary">
            AURA can help with general hair and scalp care habits, but it does not diagnose hair loss patterns or conditions. If you notice sudden, patchy, or concerning hair loss, seek professional advice.
          </p>
        </Card>

        <div className="flex flex-wrap gap-3">
          <Link href="/routine">
            <Card className="inline-flex cursor-pointer items-center justify-center px-5 py-3 text-sm font-medium text-primary">
              Build a routine
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
