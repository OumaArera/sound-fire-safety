import { useEffect } from 'react';
import { site } from '@/data/site';

type Seo = {
  title: string;
  description?: string;
};

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/** Keeps the document title and key meta tags in sync with the active route. */
export function useSeo({ title, description }: Seo) {
  useEffect(() => {
    const fullTitle = `${title} | ${site.name}`;
    document.title = fullTitle;

    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    }
  }, [title, description]);
}
