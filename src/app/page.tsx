import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>

        <FadeInStagger faster>
          <blockquote className="relative font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                WebOx's developers are among the most naturally gifted developers I've worked with, consistently tackling difficult challenges and tasks. Anyone who has the opportunity to work with WebOx should jump at it.
              </p>
            </blockquote>
        </FadeInStagger>
        <FadeIn className="flex items-center gap-x-8 mt-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            - Adam Manka (Founder & Blockchain Specialist)
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
      </Container>
    </div>
  )
}

function CaseStudies() {
  return (
    <>
      <SectionIntro
        title="Utilizing technology to grow your business"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Through innovative designs and advanced web technologies, we can strengthen your digital presence.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <FadeIn className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8 ">
                <h3>
                    <span className="absolute inset-0 rounded-3xl" />
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <strong
                    className="font-semibold"
                  >
                    Regional Services
                  </strong>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span></span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Custom Web Development
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Serving businesses throughout the <strong>Western Slope</strong>, <strong>Southern Colorado</strong>, <strong>Southern Utah</strong>, and surrounding areas. 
                </p>
              </article>
            </FadeIn>
            <FadeIn className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8 ">
                <h3>
                    <span className="absolute inset-0 rounded-3xl" />
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <strong
                    className="font-semibold"
                  >
                    Web3 Services
                  </strong>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span></span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Blockchain Web Solutions
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Specializing in protocol-level web services, we serve communities built on <strong>Ethereum</strong>, <strong>Arbitrum</strong>, <strong>Optimism</strong>, and <strong>Base</strong>. Our team delivers tailored solutions for the evolving web3 ecosystem.
                </p>
              </article>
            </FadeIn>
        </FadeInStagger>
      </Container>
    </>
  )
}

/* 
 * SERVICES: Custom Image + Value Statements
*/
export function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We partner with you to transform challenges into opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Unlock new business potential through cutting-edge web solutions.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Custom Web Development">
              Stand out from the competition and accelerate your business with custom web solutions tailored to your unique needs.
            </ListItem>
            <ListItem title="Inspiring User Interfaces">
              We have a skilled group of engineers ready to design and develop your application's user interface. 
            </ListItem>
            <ListItem title="Cutting-Edge Technology">
              We stay at the forefront of technology, ensuring you benefit from advanced and effective solutions.
            </ListItem>
            <ListItem title="Media Services (Photo & Video)">
             Showcase your business with our high-quality photo and video services, whether on-location or through updated product photography.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We build interactive web solutions that strengthen your digital presence. Our dedicated web3 team, innovative designs, and client-focused approach ensure your business stands out online and achieves success.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Innovative Solutions for Digital Success          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a web development group dedicated to delivering modern and engaging user experiences. Let your business stand out with intuitive and responsive design for your clientele.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <CaseStudies />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <ContactSection />
    </>
  )
}
