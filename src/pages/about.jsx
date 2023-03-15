import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  checkIcon,
  phoneIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/potrait.png'
import { Button } from '@/components/Button'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function SocialLinks({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Shanthaveri Gopala Gowda</title>
        <meta
          name="description"
          content="This page is about Shanthaveri Gopala Gowda"
        />
        <meta
          name="keywords"
          content="Shantaveri Gopala Gowda, Shantaveri Gopala Gowda Centenary, Shantaveri Gopala Gowda Centenary Tribute, Shantaveri Gopala Gowda Centenary, , Gopal Gowda, Gopalagowda, Thirthahalli Constituency, Shimoga politics, Sagar Hosanagar, Goa agitation, Kagodu Farmers, Ramamanohar Lohia, Sonakka, Rashtriya Samajwadi Party, Karnataka Samajwadi Party, Socialist Leader India, Firebrand politician, Konanduru Lingappa, Land Reforms Act, Araga, Renaming Mysore, Socialist Leader, Avasthe, Victoria Hospital"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Shanthaveri Gopala Gowda Image"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl border border-zinc-500 bg-zinc-100 object-cover shadow-xl dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Shanthaveri Gopala Gowda
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                A Firebrand politician who understood the culture of the land
                being a villager himself had a great following amongst the
                farmers and the farming community of Karnataka. A well-read
                person with a great love for the Kannada language, Sri
                Shanthaveri Gopal Gowda was a close friend to many intellectual
                and literary luminaries such as the poet, Sri Gopalakrishna
                Adiga, the novelist, Dr. U.R. Ananthamurthy, writer and
                journalist, P. Lankesh and the farmers’ Association leader, M.D.
                Nanjundaswamy. Dr. Ananthamurthy wrote the novel- Avasthe
                (‘’State of Life’’) based on the life of Sri Gopal Gowda. This
                was made into a sensitive film of the same name with Dr. Anant
                Nag playing the lead role.
              </p>
              <p>
                A rare idealist and a daredevil leader - his Kagodu Satyagraha,
                an indefinite fast held to provide justice to the farmers of
                Karnataka is still fresh in the minds of Karnataka people. His
                death at an early age heralded the slow decline of the socialist
                movement in Karnataka. M.D. Nanjundaswamy was one of the few to
                carry forward the movement along the lines that Sri Gopal Gowda
                envisaged. Gowda played a pivotal role in drawing the attention
                of the nation to the plight of the farmers.
              </p>
              <p>
                This website would give you a glimpse into the life and times of
                Sri Gopal Gowda, and his simplicity while still pursuing the
                highest ideals of service to the people with missionary zeal,
                dedication, and commitment. His sacrifice and contribution to
                our state, Karnataka, and therefore to the nation is still
                fondly remembered even today by various leaders and torchbearers
                of our Democracy. He is the epitome of how a political leader
                should conduct himself in both political and personal life.
              </p>
            </div>
          </div>
          <div className="lg:pl-28">
            <ul role="list">
              <SocialLinks
                href="https://www.facebook.com/people/Shanthaveri-GopalaGowda/100087288491865/"
                icon={checkIcon}
              >
                Follow on Facebook
              </SocialLinks>
              <SocialLinks
                href="https://twitter.com/GShanthaveri"
                icon={TwitterIcon}
                className="mt-4"
              >
                Follow on Twitter
              </SocialLinks>
              <SocialLinks href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLinks>
              <SocialLinks href="#" icon={YouTubeIcon} className="mt-4">
                Subscribe on YouTube
              </SocialLinks>
              <SocialLinks
                href="mailto:shanthaveri@gmail.com"
                icon={MailIcon}
                className="mt-8 pt-8"
              >
                shanthaveri@gmail.com
              </SocialLinks>
              <SocialLinks
                href="tel:9901803300"
                icon={phoneIcon}
                className="pt-8"
              >
                +91 9901803300
              </SocialLinks>
              <Button
                href="https://en.wikipedia.org/wiki/Shantaveri_Gopala_Gowda"
                className="mt-8 flex w-full"
              >
                Wikipedia
              </Button>
              <Button href="#" className="mt-8 flex w-full">
                Donate
              </Button>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
