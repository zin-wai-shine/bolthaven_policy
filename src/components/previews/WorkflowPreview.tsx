import React from 'react';
import {
  FiFolderPlus,
  FiFileText,
  FiShare2,
  FiCheckCircle,
  FiActivity,
  FiArrowRight,
} from 'react-icons/fi';

interface WorkflowStep {
  number: string;
  title: string;
  summary: string;
  details: string;
  icon: React.ReactNode;
}

const defaultWorkflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Import Property Media',
    summary: 'Centralize listing assets.',
    details: 'Upload photos, videos, and architectural specs with automatic vertical 9:16 reformatting.',
    icon: <FiFolderPlus className="w-5 h-5 text-accent" />,
  },
  {
    number: '02',
    title: 'Prepare Content',
    summary: 'Structure listing specs.',
    details: 'Format pricing, floor area, neighborhood amenities, and localized property tags.',
    icon: <FiFileText className="w-5 h-5 text-accent" />,
  },
  {
    number: '03',
    title: 'Choose Channels',
    summary: 'Select target networks.',
    details: 'Configure channel-specific captions for TikTok, Instagram, and Facebook profiles.',
    icon: <FiShare2 className="w-5 h-5 text-accent" />,
  },
  {
    number: '04',
    title: 'Review and Publish',
    summary: 'Validate and queue.',
    details: 'Preview feed renders, verify OAuth token validity, and schedule dispatch times.',
    icon: <FiCheckCircle className="w-5 h-5 text-accent" />,
  },
  {
    number: '05',
    title: 'Track Results',
    summary: 'Monitor live status.',
    details: 'Review automated dispatch logs, platform receipt IDs, and publication audit trails.',
    icon: <FiActivity className="w-5 h-5 text-accent" />,
  },
];

interface WorkflowPreviewProps {
  steps?: WorkflowStep[];
  className?: string;
}

export const WorkflowPreview: React.FC<WorkflowPreviewProps> = ({
  steps = defaultWorkflowSteps,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Desktop Horizontal Stepper */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="relative bg-white border border-borderSubtle p-5 rounded-lg flex flex-col justify-between hover:border-gray-300 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-accent bg-accent-subtle px-2 py-0.5 rounded">
                  {step.number}
                </span>
                <span className="p-2 rounded-md bg-bgSecondary">{step.icon}</span>
              </div>
              <h3 className="font-semibold text-textPrimary text-sm mb-1.5">
                {step.title}
              </h3>
              <p className="text-textSecondary text-xs leading-relaxed">
                {step.details}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div
                className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white border border-borderSubtle rounded-full p-1 text-textSecondary"
                aria-hidden="true"
              >
                <FiArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile / Tablet Vertical Stepper */}
      <div className="lg:hidden space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="bg-white border border-borderSubtle p-4 rounded-lg flex items-start gap-4"
          >
            <div className="flex flex-col items-center">
              <span className="font-mono text-xs font-semibold text-accent bg-accent-subtle px-2 py-1 rounded">
                {step.number}
              </span>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-10 bg-borderSubtle my-1" aria-hidden="true" />
              )}
            </div>

            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-textPrimary text-sm">
                  {step.title}
                </h3>
              </div>
              <p className="text-textSecondary text-xs leading-relaxed">
                {step.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
