import { GradientText, Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <h2 className="text-2xl font-semibold mb-2">
      Stay Updated with my <GradientText>Projects</GradientText>
    </h2>
    <p className="mb-4 text-gray-400">
      Get notified when I launch new apps, publish articles, or share project updates. No spam — just meaningful tech content.
    </p>
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/mudiwa"
      method="post"
      target="_blank"
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="p-3 rounded-lg border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <button
        type="submit"
        className="bg-cyan-600 text-white rounded-lg px-6 py-3 hover:bg-cyan-700 transition-colors"
      >
        Subscribe
      </button>
    </form>
  </Section>
);

export { CTA };
