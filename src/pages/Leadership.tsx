import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Avatar } from '@/components/sections/LeadershipPreview';
import { CoreValues } from '@/components/sections/CoreValues';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureSplit } from '@/components/sections/FeatureSplit';
import { ContactSection } from '@/components/sections/ContactSection';
import { leadership } from '@/data/company';
import { cn } from '@/lib/cn';
import { useSeo } from '@/lib/useSeo';

const description =
  'Meet the leadership team behind Sound Fire & Safety LLC — Abdoulie Lowe (CEO), Haddy Saho (COO), Nixon Kwaku Duah Junior (CSO) and Mass Lowe (Director of Operations).';

export default function Leadership() {
  useSeo({ title: 'Leadership', description });

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The Team Behind Sound Fire & Safety"
        body="Strategic leadership, operational discipline and a shared commitment to code-compliant protection across Washington State."
        crumbs={[{ label: 'Leadership' }]}
        image="/images/team-collaboration.jpg"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="space-y-14 lg:space-y-20">
            {leadership.map((leader, index) => (
              <Reveal key={leader.name}>
                <article className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
                  <div
                    className={cn(
                      'lg:col-span-4',
                      index % 2 === 1 && 'lg:order-2',
                    )}
                  >
                    <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-navy-100 bg-navy-900 shadow-card">
                      <div className="relative aspect-[4/5]">
                        {leader.photo ? (
                          <>
                            <img
                              src={leader.photo}
                              alt={`${leader.name}, ${leader.role}`}
                              className="size-full object-cover object-top"
                              loading="lazy"
                            />
                            <span
                              className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
                              aria-hidden="true"
                            />
                          </>
                        ) : (
                          <Avatar initials={leader.initials} />
                        )}
                      </div>
                      <div className="bg-navy-900 px-5 py-4 text-white">
                        <p className="font-display text-base font-extrabold leading-tight">
                          {leader.name}
                        </p>
                        {leader.credentials && (
                          <p className="mt-1 text-[11px] font-semibold tracking-wide text-navy-300">
                            {leader.credentials.join(', ')}
                          </p>
                        )}
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-flame-400">
                          {leader.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={cn('lg:col-span-8', index % 2 === 1 && 'lg:order-1')}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-flame-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-flame-700">
                      {leader.role}
                    </span>
                    <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
                      {leader.name}
                    </h2>

                    {leader.credentials && (
                      <ul
                        className="mt-4 flex flex-wrap gap-2"
                        aria-label={`Qualifications for ${leader.name}`}
                      >
                        {leader.credentials.map((credential) => (
                          <li
                            key={credential}
                            className="rounded-full border border-navy-200 bg-navy-50 px-3 py-1.5 text-xs font-bold tracking-wide text-navy-700"
                          >
                            {credential}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="prose-body mt-5 space-y-4 border-l-2 border-navy-100 pl-6">
                      {leader.bio.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FeatureSplit
        eyebrow="How We Operate"
        title="One Team, One Standard, Every Job"
        body="Strategy, operations and field delivery sit close together at Sound Fire & Safety. That means the person who scopes your site, the person who schedules the work and the person who signs off the tag are all working to the same standard."
        points={[
          'Direct access to decision makers',
          'Consistent process across every site',
          'Quality assurance on every service call',
          'Clear records and documentation',
        ]}
        image="/images/team-collaboration.jpg"
        imageAlt="The Sound Fire &amp; Safety team reviewing service schedules together"
        imageSide="right"
        background="muted"
        cta={{ label: 'Contact the Team', to: '/contact' }}
      />

      <CoreValues />
      <CtaBand title="Work With a Team That Answers the Phone" body="Speak directly with the people responsible for your service — no call centres, no runaround." />
      <ContactSection showMap={false} />
    </>
  );
}
