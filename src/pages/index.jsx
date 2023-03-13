/* eslint-disable @next/next/no-img-element */
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
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
import portraitImage from '@/images/potrait.png'
import portraitImage2 from '@/images/shanthaverigopalagowda.png'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
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
function Poem() {
  return (
    <div className="pt-4 lg:py-6">
      <div className="bg-grey-900 pb-8 lg:relative lg:z-10 lg:pb-0">
        <div className="items-center lg:ml-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-4 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0">
              <div className="aspect-w-10 aspect-h-12 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded-xl shadow-xl lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://user-images.githubusercontent.com/71520844/213868001-d2e719ce-81b0-49e6-bbfd-392473bc8e86.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-16">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="text-grey-900 h-12 w-12 opacity-25 dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-base font-medium dark:text-white">
                    ಬಂದೆ ಬಿಟ್ಟನೆ ಶಾರ್ವರಿ<br></br>
                    ಬಡವನ ಈ ಬಾಗಿಲಿಗೂ<br></br>
                    ಬಂದಂತೆ ಹಿಂದೆ ರಾಯಭಾರಿ ವಿದುರನ ಮನೆಗೆ.<br></br>
                    ಹೇಗೆ ಇದಿರುಗೊಳ್ಳಲಿ ?<br></br>
                    ಎಂತು ಸತ್ಕರಿಸಲೀ ಕಾಲಪುರುಷನ ?<br></br>
                    ಇಲ್ಲ ಮನೆಯೊಳಗೊಂದಿನಿತು ಅವಲಕ್ಕಿ ಕೂಡ,<br></br>
                    ವಂಚಿಸಿದೆ, ತಂದೆ ತಾಯಿ ಮಡದಿಮಕ್ಕಳ<br></br>
                    “ನಾಳೆ ತರುವೆ” , “ನಾಳೆ ಕೊಡುವೆ” ಎಂದು<br></br>
                    ಬರಲಿಲ್ಲ ಆ ನಾಳೆ, ನನ್ನ ನ್ನೇ ವಂಚಿಸಿಕೊಂಡೆ<br></br>
                    ನೆಮ್ಮಿ ಎಂದೂ ಬರದ ಆ ನಂಬುಗೆಯು ನಾಳೆಯನು<br></br>
                    ವಂಚಿಸಲಾರೆ ಇವನ , ಈ ಕಳ್ಳ ಕಾಲನ.<br></br>
                    ಅವಗೆ ಗೊತ್ತಿರುವುದನೆ, ಹೇಳಿಕೊಳ್ಳುವ ಮತ್ತೆ<br></br>
                    ಆದೀತು ನನ್ನ ಈ ಎದೆಭಾರ ಹಗುರ.<br></br>
                    ಎಷ್ಟಾದರೂ ಜಗಕೆ ಮಿತ್ರನಲ್ಲವೆ ಅವನು ?<br></br>
                    ಬೇಗನೇ ಉಣಬಡಿಸಿ ಆಡುವೆನು ಬೆಲ್ಲದ ಮಾತ,<br></br>
                    ಶಾರ್ವರಿ, ಇಗೋ ಇತ್ತೆ ನಿನಗೆ ಸ್ವಾಗತ !<br></br>
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">
                    - Giridhari
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const timeline = [
  {
    id: 1,
    date: '14 March, 1923',
    title: 'Birth',
    description:
      'Sri. Shanthaveri Gopala Gowda was born in Shanthaveri a village in Thirthahalli Taluk of Shimoga District into a poor agricultural family to______________ and ____________(father and mother)',
  },
  {
    id: 2,
    date: '1941',
    title: 'Entered India’s Freedom Struggle Movement',
    description:
      'He was deeply inspired by the Freedom Struggle Movement of Mahatma Gandhiji and joined the movement in 1941',
  },
  {
    id: 3,
    date: '1942',
    title: 'Quit India Movement',
    description:
      'Took active part in the Quit India Movement, Was kept in Shimoga Jail, was running a Night School for Harijans during this time.',
  },
  {
    id: 4,
    date: '1946',
    title: 'Student Union Congress ',
    description:
      'Participated in the Student Union Congress of Nanjangud and left Intermediate studies.',
  },
  {
    id: 5,
    date: '1947',
    title: 'General Secretary',
    description: 'Fought as General Secretary in Shimoga Student Congress',
  },

  {
    id: 6,
    date: '1948',
    title: 'Forged an Alliance between Congress and Samajwadi Party',
    description:
      'Was instrumental and played a pivotal role in forging an alliance between  the Congress and the Samajwadi Party.',
  },
  {
    id: 7,
    date: '1949',
    title: 'Karnataka Samajwadi Party',
    description:
      'Organised the First Association of Karnataka Samajwadi Party in Shimoga.',
  },
  {
    id: 8,
    date: '1951',
    title: 'Kagodu Farmers’ Satyagraha Movement',
    description:
      'Successfully led an indefinite fast held  in Kagodu to provide justice to the farmers of Karnataka, which is still fresh in the minds of people of Kagodu and Karnataka.',
  },
  {
    id: 9,
    date: '1951',
    title: 'Met Dr.RamamanoharLohia in Kagodu and Jayaprakash Narayan',
    description:
      'He met with socialist leaders  such as Dr. Ramamanohar Lohia, Jayaprakash Narayan and Kamaldevi Chattopadhyay and joined their Socialist party  after quitting the Congress.',
  },
  {
    id: 11,
    date: '1952',
    title: 'Got Elected as M.L.A.',
    description:
      'He got elected to the Karnataka Legislature (Mysore Vidhana Sabha) from Sagar-Hosanagar for the first time.',
  },
  {
    id: 12,
    date: '1955',
    title: 'Rashtriya Samajwadi Party',
    description:
      'Was appointed as a key member of the Rashtriya Samajwadi Party.',
  },
  {
    id: 13,
    date: '1957',
    title: 'Thirthahalli Constituency',
    description:
      'Contested from Thirthahalli Constituency and lost but established the Karnataka Samajwadi Youth Association.',
  },
  {
    id: 14,
    date: '1960',
    title: 'Goa Agitation',
    description:
      'Took active part in the Goa Agitation and published the Samajwadi Party’s newsletter called “Margadarshi”',
  },
  {
    id: 15,
    date: '1962',
    title: 'Elected as M.L.A',
    description:
      'Run with modest resources, borrowed from his supporters who rose above their  communal identities and rallied behind him  for his election campaigns. He enjoyed huge admiration and immense local support for his exemplary courage, integrity and charisma.',
  },
  {
    id: 16,
    date: '1964',
    title: 'Marriage to Smt. Sonakka',
    description:
      'He married Smt. Sonakka, a school teacher  in 1964. One of the few marriages that was solemnized at Vidhana Soudha',
  },
  {
    id: 17,
    date: '1967',
    title: 'Re-elected as M.L.A',
    description:
      'Was Reelected as M.L.A. from Thirthahalli Constituency. Daughter, Kum. Ila Geetha was born on ______, 1967at Namma Bengaluru.',
  },
  {
    id: 18,
    date: '1968',
    title: 'Birth of Son - Ramamanohar',
    description:
      'Son, Mst. Ramamanohar was born on April 4th 1968 at Namma Bengaluru.',
  },
  {
    id: 19,
    date: '9 June, 1971',
    title: 'Was admitted to Victoria Hospital',
    description:
      'Underwent prolonged but unsuccessful 6 month long treatment at the Bangalore Victoria Hospital, Breathed his last, Cremated at the Wilson Garden Crematorium.',
  },
]
function Timeline() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-insp-200 dark:text-zinc-100 sm:text-3xl">
        About Shantaveri Gopala Gowda
      </h1>
      <ol className="border-l border-gray-300">
        {timeline.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
              <p className="text-sm font-semibold text-gray-600 dark:text-white">
                {item.date}
              </p>
            </div>
            <div className="mt-0.5 ml-4 mb-6">
              <h4 className="mb-1.5 text-xl font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h4>
              <p className="mb-3 text-gray-500">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Shantaveri Gopala Gowda - A Legacy of Political Activism</title>
        <meta
          name="description"
          content="Explore the life and legacy of Shantaveri Gopala Gowda, one of Karnataka's most prominent socialist leaders. Learn about his early involvement in the freedom movement, his introduction to socialism and his role in shaping the political landscape of the state. Discover his contributions to the 'Land for the Tiller' movement and his stance on the unification of Karnataka. A centenary tribute website"
        />
      </Head>
      <Container className="mt-8 sm:mt-12">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pr-20">
            <div className="pr-2.5 sm:flex sm:items-center lg:max-w-none">
              <Image
                src={portraitImage2}
                alt="Shanthaveri Gopala Gowda Image"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-auto rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-second lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Shanthaveri Gopala Gowda
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Welcome to the official website dedicated to the life and legacy
                of Sri. Shanthaveri Gopal Gowda, a pioneer of socialism in
                Karnataka and a prominent socialist leader of India. His
                leadership began as early as 1951 and he was an exemplary leader
                that believed in service before self. He dedicated his entire
                time and life to the welfare of farmers and the downtrodden. He
                worked tirelessly to establish integrity and accountability in
                public life. He belonged to a rare breed of politicians who
                worked selflessly for the genuine upliftment of the poor farmer
                and the downtrodden sections of society.
              </p>
              <p>
                Ram Manohar Lohia deeply influenced him and he established
                himself as a mass leader as early as 1951. He was considered
                charismatic and gained a considerable following.
              </p>
              <p>
                He mentored several socialists in Karnataka including J.H.
                Patel, Bangarappa, S.M. Krishna, and D. Devaraj Urs who later
                became Chief Ministers of Karnataka. Urs was inspired and deeply
                influenced by the depth of the thoughts and sensitivity that Sri
                Gopala Gowda had for farmers and the downtrodden. The Land
                Reforms Act and the Renaming of Mysore state to Karnataka had
                their origins in the association of Devraj Urs to Sri
                Shanthaveri Gopal Gowda.
              </p>
              <p>
                N. Dharam Singh, the former Chief Minister of Karnataka said in
                the publication of his biography that Sri Gopal Gowda’s
                political contributions and the causes that he fought for are
                significant in the history of the legislature.
              </p>
              <div className="flex justify-center">
                <Button
                  href="/about"
                  className="focus:shadow-outline-blue flex w-full items-center justify-center rounded-md border border-transparent bg-sky-500 px-8 py-3 text-base font-medium leading-6 text-white shadow-sm transition duration-150 ease-in-out hover:bg-sky-400 focus:outline-none active:bg-sky-600"
                  aria-label="Read more about Shanthaveri Gopala Gowda"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:pl-10">
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
            </ul>
          </div>
        </div>
      </Container>

      {/* <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://youtube.com"
              aria-label="Follow on Facebook"
              icon={YouTubeIcon}
            />
            <SocialLink
              href="https://facebook.com"
              aria-label="Follow on Facebook"
              icon={checkIcon}
            />
          </div>
        </div>
      </Container> */}
      <Container className="mt-6 md:mt-7">
        <Poem />
        <Timeline />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
