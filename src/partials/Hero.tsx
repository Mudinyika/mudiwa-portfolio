import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Mudiwa Nyikavaranda</GradientText> 👋
        </>
      }
      description={
        <>
          Full-stack developer specializing in building scalable, secure, and
          user-focused applications. Currently showcasing my flagship project:{' '}
          <a className="text-cyan-400 hover:underline" href="/project">
            Zimora
          </a>
          .
        </>
      }
      avatar={
        <img
          className="h-80 w-64 rounded shadow-lg"
          src="/images/mudiwa-avatar.png"
          alt="Mudiwa avatar"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://www.linkedin.com/in/mudiwa-nyikavaranda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/Mudinyika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial src="/icons/github.svg" alt="GitHub" />
          </a>
          <a href="mailto:mudiwanyikavaranda@gmail.com">
            <HeroSocial src="/icons/email.svg" alt="Email" />
          </a>
          <a
            href="https://wa.me/263719426867"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial src="/icons/whatsapp.svg" alt="WhatsApp" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
