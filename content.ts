// Reads the JSON files that Keystatic edits. Nothing here needs changing to add or edit content.
import home from '../../content/home.json';
import contact from '../../content/contact.json';

const load = (g: Record<string, any>) =>
  Object.entries(g).map(([p, m]) => ({ slug: p.split('/').pop()!.replace('.json', ''), ...m.default }))
    .sort((a: any, b: any) => (a.order ?? 999) - (b.order ?? 999));

export const projects: any[] = load(import.meta.glob('../../content/projects/*.json', { eager: true })).filter((p: any) => p.show && (p.pdf || p.link));
export const places: any[] = load(import.meta.glob('../../content/places/*.json', { eager: true })).filter((p: any) => p.show);
export const writing: any[] = load(import.meta.glob('../../content/writing/*.json', { eager: true })).filter((p: any) => p.show);
export const organizations: any[] = load(import.meta.glob('../../content/organizations/*.json', { eager: true })).filter((o: any) => o.show && o.jobTitle);
export { home, contact };

export const projectHref = (p: any): string => p.pdf || p.link;
// A Google Drive or Docs link has a file id; Google serves that file's first page as a public thumbnail.
export const driveThumb = (url: string) => {
  const m = /(?:\/d\/|[?&]id=)([\w-]{20,})/.exec(url || '');
  return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w800` : null;
};
export const GROUPS = ['Policy Briefs', 'Research & Reports', 'Dissertations & Academic Work', 'Applied Projects & Presentations'];
export const groupOf = (type: string) =>
  type === 'Policy Brief' ? GROUPS[0] : ['Research Report', 'Consulting Report', 'Capstone Report'].includes(type) ? GROUPS[1] : type === 'Dissertation' ? GROUPS[2] : GROUPS[3];
