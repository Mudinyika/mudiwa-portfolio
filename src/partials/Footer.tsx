import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="py-4 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Mudiwa Nyikavaranda. Built by Infinitezw.
    </div>
  </Section>
);

export { Footer };
