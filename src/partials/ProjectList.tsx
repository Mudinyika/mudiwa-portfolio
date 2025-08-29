import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Featured <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {/* Project 1: Zimora */}
      <Project
        name="Zimora"
        description="A digital rewards platform allowing customers to earn and redeem points instantly. Admin, Till, and Customer applications included."
        link="/project"
        img={{
          src: '/assets/images/zimora-home.PNG',
          alt: 'Zimora Home Screen',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Flask</Tags>
            <Tags color={ColorTags.LIME}>PostgreSQL</Tags>
            <Tags color={ColorTags.SKY}>React</Tags>
            <Tags color={ColorTags.ROSE}>Flutter</Tags>
            <Tags color={ColorTags.VIOLET}>JWT Auth</Tags>
          </>
        }
      />
     {/* Project 2: Zimora Website */}
      <Project
        name="Zimora Website"
        description="Zimora is a multi-application rewards ecosystem that enables customers to earn and redeem points instantly, while merchants and administrators benefit from seamless management tools. Secure, fast, and intuitive."
        link="https://www.zimora.co.zw"
        img={{
          src: '/assets/images/zimora-landing.png',
          alt: 'Zimora Website Landing Page',
        }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Next.js</Tags>
            <Tags color={ColorTags.INDIGO}>TypeScript</Tags>
            <Tags color={ColorTags.AMBER}>Tailwind CSS</Tags>
            <Tags color={ColorTags.CYAN}>Flask API</Tags>
            <Tags color={ColorTags.PINK}>PostgreSQL</Tags>
          </>
        }
      />
      {/* Project 3: SADC Bus Booking (upcoming) */}
      <Project
        name="SADC Bus Booking System (Coming Soon)"
        description="A multi-country bus booking platform for SADC focusing on seamless ticketing, schedules and payment across borders."
        link="#"
        img={{
          src: '/assets/images/coming-soon.jpg',
          alt: 'Bus Booking System',
        }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>FastAPI</Tags>
            <Tags color={ColorTags.YELLOW}>PostgreSQL</Tags>
            <Tags color={ColorTags.SKY}>React</Tags>
            <Tags color={ColorTags.FUCHSIA}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
