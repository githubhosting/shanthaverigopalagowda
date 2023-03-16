import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
  checkIcon,
  phoneIcon,
} from '@/components/SocialIcons'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-sky-500 dark:hover:text-sky-400"
    >
      {children}
    </Link>
  )
}
function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function socialDiv() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Software designer, founder, and amateur astronaut.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I’m Spencer, a software designer and entrepreneur based in New York
        City. I’m the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their own
        terms.
      </p>
    </div>
  )
}

function PageViews() {
  return (
    //page views count
    <p className="mt-5 text-center text-sm text-zinc-400 dark:text-zinc-500">
      Currently this page has been viewed .... times.
    </p>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="items-left flex flex-col justify-between gap-6 sm:flex-row">
              <div className="flex flex-col gap-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 md:flex-row">
                <NavLink href="/committee">Centenary Committee</NavLink>
                <NavLink href="/programs">Programs</NavLink>
                <NavLink href="/gallery">Gallery</NavLink>
                <NavLink href="/letters">Letters</NavLink>
                <NavLink href="/books">Books</NavLink>
                <NavLink href="/quizz">Quizz</NavLink>
                <NavLink href="/media">Media</NavLink>
                <NavLink href="/contactus">Contact Us</NavLink>
              </div>

              <div className="items-left flex justify-start gap-6 border-t pt-10 dark:border-zinc-700/40 sm:border-0 sm:pt-0">
                <SocialLink
                  href="https://www.facebook.com/people/Shanthaveri-GopalaGowda/100087288491865/"
                  aria-label="Follow on Facebook"
                  icon={checkIcon}
                />
                <SocialLink
                  href="https://twitter.com/GShanthaveri"
                  aria-label="Follow on Twitter"
                  icon={TwitterIcon}
                />
                <SocialLink
                  href="https://instagram.com"
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                />
                <SocialLink
                  href="https://www.youtube.com/@shanthaveri"
                  aria-label="Follow on Facebook"
                  icon={YouTubeIcon}
                />
              </div>
            </div>
            <p className="mt-5 text-center text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Shanthaveri Gopala Gowda. All
              rights reserved.
            </p>
            <PageViews />
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

//  add page view count

// function PageViews() {
//   const { data } = useSWR('/api/page-views', fetcher)
//   const views = new Number(data?.total)

//   return <>{views > 0 ? views.toLocaleString() : '–––'}</>
// }
