import React from 'react';
import { FiArrowLeft, FiCompass } from 'react-icons/fi';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { MetaTags } from '../components/common/MetaTags';

export const NotFound: React.FC = () => {
  return (
    <>
      <MetaTags
        title="404 — Page Not Found"
        description="The page you requested could not be located."
      />

      <section className="py-24 sm:py-32 bg-white">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <span className="font-mono text-xs font-semibold text-accent bg-accent-subtle px-3 py-1 rounded">
              Error 404
            </span>

            <h1 className="text-section-title font-bold text-textPrimary tracking-tight">
              Page not found.
            </h1>

            <p className="text-base sm:text-lg text-textSecondary max-w-md mx-auto leading-relaxed">
              The page you are looking for does not exist, has been removed, or has been relocated.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Button to="/" variant="primary" size="lg" icon={<FiArrowLeft className="w-4 h-4" />} iconPosition="left">
                Return to Home
              </Button>
              <Button to="/features" variant="secondary" size="lg" icon={<FiCompass className="w-4 h-4" />}>
                Explore Features
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
