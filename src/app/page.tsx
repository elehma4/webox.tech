import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'

/* 
 * SERVICES: Custom Image + Value Statements
*/
function Services() {
  return (
    <div className="rounded-4xl bg-neutral-950 py-20 sm:py-32 max-sm:mx-1">
      <Container>
        <FadeInStagger faster>
          <SectionIntro
            eyebrow="Services"
            title="We partner with you to transform challenges into opportunities."
            className="text-white"
            invert
          >
            <p>
              Showcase your brand&apos;s identity with our custom web solutions.
            </p>
          </SectionIntro>
        </FadeInStagger>
      </Container>
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
            <ListItem title="Modern Web Design" invert>
              We have a skilled team ready to design and personalize your online presence through innovative strategies.
            </ListItem>
            <ListItem title="Custom Web Development" invert>
              Stand out from the competition and accelerate your business with custom web solutions tailored to your unique needs.
            </ListItem>
            <ListItem title="Business Photography and Videography" invert>
             Showcase your business with our high-quality photo and video services, including on-location shoots and updated product photography.
            </ListItem>
          </List>
        </div>
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
          Through innovative designs and advanced web technologies, we can strengthen your online presence.
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
                    Local Business
                  </strong>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span></span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Web Development
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Offering professional web development services to businesses throughout <strong>Manhattan</strong>, <strong>Clay County</strong>,  <strong>Salina</strong> and surrounding areas.
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
                    Regional Business
                  </strong>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span></span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Custom Web Solutions
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Serving the businesses of <strong>Kansas</strong> and nearby regions, we offer customized web solutions for <strong>small</strong> to <strong>mid-sized</strong> businesses.
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
                    Consulting Services
                  </strong>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span></span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Web Consulting
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Seeking a group of <strong>skilled engineers</strong> to build your software? Contact us about our comprehensive <strong>web solutions</strong> and <strong>support</strong>.
                </p>
              </article>
            </FadeIn>
        </FadeInStagger>
      </Container>
    </>
  )
}

// function Services() {
//   return (
//     <>
//       <SectionIntro
//         eyebrow="Services"
//         title="We partner with you to transform challenges into opportunities."
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           Showcase your brand&apos;s identity with our custom web solutions. Specialized strategies designed to amplify your digital presence.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <div className="lg:flex lg:items-center lg:justify-end">
//           <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
//             <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
//               <StylizedImage
//                 src={imageLaptop}
//                 sizes="(min-width: 1024px) 41rem, 31rem"
//                 className="justify-center lg:justify-end"
//               />
//             </FadeIn>
//           </div>
//           <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
//             <ListItem title="Custom Web Development">
//               Stand out from the competition and accelerate your business with custom web solutions tailored to your unique needs.
//             </ListItem>
//             <ListItem title="Inspiring User Interfaces">
//               We have a skilled group of engineers ready to design and develop your application&apos;s user interface. 
//             </ListItem>
//             <ListItem title="Cutting-Edge Technology">
//               We stay at the forefront of technology, ensuring you benefit from advanced and effective solutions.
//             </ListItem>
//             <ListItem title="Photography and Branding">
//              Showcase your business with our high-quality photo and video services, whether on-location or through updated product photography.
//             </ListItem>
//           </List>
//         </div>
//       </Container>
//     </>
//   )
// }

export const metadata: Metadata = {
  description:
    'We build interactive web solutions that strengthen your digital presence. Our dedicated team, innovative designs, and client-focused approach ensure your business stands out online and achieves success.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-32 md:mt-56 mb-72">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl flex-auto">
             Innovative Solutions for Digital Success          
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a dedicated web development and media team committed to delivering modern, engaging user experiences. Elevate your brand's presence with our seamless, cutting-edge web designs that leave a lasting impression.
          </p>
        </FadeIn>
      </Container>

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
