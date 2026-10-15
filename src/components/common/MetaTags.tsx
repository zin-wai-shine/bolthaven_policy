import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description?: string;
  canonicalPath?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description = 'Project_EA brings property media, content preparation, social publishing, and workflow management together in a streamlined workspace.',
  canonicalPath = '',
}) => {
  useEffect(() => {
    const fullTitle = `${title} | Project_EA`;
    document.title = fullTitle;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update OG title & description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [title, description, canonicalPath]);

  return null;
};
