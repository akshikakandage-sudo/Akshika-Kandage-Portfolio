import { config, fields, collection, singleton } from '@keystatic/core';

const T = (label: string, multiline = false) => fields.text({ label, multiline });
const img = (dir: string, label = 'Image') =>
  fields.image({ label, directory: `public/images/${dir}`, publicPath: `/images/${dir}/` });
const TYPES = ['Policy Brief', 'Research Report', 'Consulting Report', 'Capstone Report', 'Dissertation', 'Concept Note', 'Proposal', 'Assignment', 'Presentation', 'Other'];

export default config({
  // Local while developing; Keystatic Cloud (which saves to your GitHub repository) once deployed.
  storage: import.meta.env.PROD ? { kind: 'cloud' } : { kind: 'local' },
  cloud: { project: import.meta.env.PUBLIC_KEYSTATIC_PROJECT ?? 'your-team/akshika-portfolio' },
  ui: { brand: { name: 'Akshika Kandage' } },

  singletons: {
    home: singleton({
      label: 'Home', path: 'content/home', format: 'json',
      schema: {
        name: T('Name'), greeting: T('Greeting line'), intro: T('Introduction', true),
        photo: img('home', 'Portrait photograph'), photoAlt: T('Portrait description (alt text)'),
        exploreLabel: T('Link text to the projects page'),
        greetings: fields.array(fields.object({ language: T('Language'), text: T('Greeting') }), { label: 'Small greetings in other languages', itemLabel: (p) => p.fields.text.value }),
        shareImage: img('home', 'Image for social-sharing previews (optional)'),
      },
    }),
    contact: singleton({
      label: 'Contact', path: 'content/contact', format: 'json',
      schema: {
        text: T('Invitation', true), email: T('Email'), linkedin: fields.url({ label: 'LinkedIn link' }),
        substack: fields.url({ label: 'Substack or writing link' }), schedule: fields.url({ label: 'Scheduling link (optional)' }),
        resume: fields.file({ label: 'Résumé (PDF)', directory: 'public/files', publicPath: '/files/' }),
      },
    }),
  },

  collections: {
    projects: collection({
      label: 'Projects', slugField: 'title', path: 'content/projects/*', format: 'json',
      schema: {
        title: fields.slug({ name: { label: 'Project title' } }),
        link: fields.url({ label: 'Link to the document (a shareable Google Drive or Docs link)' }),
        pdf: fields.file({ label: 'Or upload the file (PDF, presentation or document)', directory: 'public/files', publicPath: '/files/' }),
        cover: img('projects', 'Cover image (optional; Google Drive links use the first page automatically)'),
        type: fields.select({ label: 'Document type (optional)', options: [{ label: '(none)', value: '' }, ...TYPES.map((t) => ({ label: t, value: t }))], defaultValue: '' }),
        show: fields.checkbox({ label: 'Show on the website', defaultValue: true }),
        order: fields.integer({ label: 'Order (1 appears first)' }),
        note: T('Private notes (never shown on the website)', true),
      },
    }),
    organizations: collection({
      label: 'Where I’ve worked', slugField: 'title', path: 'content/organizations/*', format: 'json',
      schema: {
        title: fields.slug({ name: { label: 'Organization name' } }),
        jobTitle: T('Job title'),
        logo: img('logos', 'Logo (optional; the name is shown as text if empty)'),
        website: fields.url({ label: 'Organization website (optional)' }),
        show: fields.checkbox({ label: 'Show on the website (needs a job title)', defaultValue: true }),
        order: fields.integer({ label: 'Order (1 appears first)' }),
      },
    }),
    places: collection({
      label: 'Map places', slugField: 'title', path: 'content/places/*', format: 'json',
      schema: {
        title: fields.slug({ name: { label: 'Place' } }), short: T('Short name on the map'),
        show: fields.checkbox({ label: 'Show on the map', defaultValue: true }),
        story: T('Short personal narrative', true), reflection: T('A little more (optional)', true),
        photo: img('places', 'Photograph'), photoAlt: T('Photograph description (alt text)'),
        lat: fields.number({ label: 'Latitude' }), lon: fields.number({ label: 'Longitude' }),
        countryId: T('Country code to shade (ISO numeric: Sri Lanka 144, UAE 784, UK 826, USA 840)'),
        side: fields.select({ label: 'Label side', options: [{ label: 'Right', value: 'right' }, { label: 'Left', value: 'left' }], defaultValue: 'right' }),
        order: fields.integer({ label: 'Order' }),
      },
    }),
    writing: collection({
      label: 'Writing', slugField: 'title', path: 'content/writing/*', format: 'json',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        status: fields.select({ label: 'Status', options: [{ label: 'Published', value: 'published' }, { label: 'Work in progress', value: 'wip' }], defaultValue: 'published' }),
        date: T('Publication or date (optional)'), link: fields.url({ label: 'Link (optional for works in progress)' }),
        show: fields.checkbox({ label: 'Show on the website', defaultValue: false }),
        order: fields.integer({ label: 'Order' }),
      },
    }),
  },
});
