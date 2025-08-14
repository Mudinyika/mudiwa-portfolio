import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Stay Updated with my <GradientText>Projects</GradientText>
        </>
      }
      description="Get notified when I launch new apps, publish articles, or share project updates. No spam — just meaningful tech content."
    />
  </Section>
);

export { CTA };
