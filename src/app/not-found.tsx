import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="py-20">
      <div className="container text-center">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-soft bg-surface p-8 shadow-soft">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            This part of AURA is still taking shape.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-secondary">
            The page you are looking for does not exist or may have moved.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/">
              <Button variant="primary" size="lg">
                Return home
              </Button>
            </Link>
            <Link href="/routine">
              <Button variant="secondary" size="lg">
                Build a routine
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
