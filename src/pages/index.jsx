import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import Script from 'next/script'
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
import circleImage from '@/images/ShanthaveriGopalaGowdaCircle.png'
import youngSGG from '@/images/youngShanthaverigopalagowda.jpeg'
import previewImg from '@/images/preview.png'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
// import { getAllLetters } from '@/lib/getAllLetters'

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
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-insp-100 dark:text-zinc-200 dark:hover:text-sky-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-insp-100 dark:group-hover:fill-sky-500" />
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
    <div className="border-t pt-4 dark:border-zinc-700 lg:py-6">
      <div className="pb-8 lg:relative lg:z-10 lg:pb-0">
        <div className="items-center lg:ml-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-4 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0">
              <div className="aspect-w-10 aspect-h-12 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded-xl shadow-xl lg:h-full">
                <Image
                  priority={true}
                  className="object-cover lg:h-full lg:w-full"
                  src={youngSGG}
                  alt="Young Shanthaveri Gopala Gowda"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:pl-16">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-8">
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
                  <p className="mt-6 font-malige text-base font-medium tracking-wider text-zinc-800 dark:text-zinc-100 md:text-xl">
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
                  <p className="text-base font-medium text-zinc-800 dark:text-zinc-100">
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
      'Sri. Shanthaveri Gopala Gowda was born in Shanthaveri a village in Thirthahalli Taluk of Shimoga District into a poor agricultural family to Kolluraiah Gowda and Seshamma.',
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
      'Was instrumental and played a pivotal role in forging an alliance between the Congress and the Samajwadi Party.',
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
      'Successfully led an indefinite fast held in Kagodu to provide justice to the farmers of Karnataka, which is still fresh in the minds of people of Kagodu and Karnataka.',
  },
  {
    id: 9,
    date: '1951',
    title: 'Met Dr.RamamanoharLohia in Kagodu and Jayaprakash Narayan',
    description:
      'He met with socialist leaders such as Dr. Ramamanohar Lohia, Jayaprakash Narayan and Kamaldevi Chattopadhyay and joined their Socialist party  after quitting the Congress.',
  },
  {
    id: 10,
    date: '1952',
    title: 'Got Elected as M.L.A.',
    description:
      'He got elected to the Karnataka Legislature (Mysore Vidhana Sabha) from Sagar-Hosanagar for the first time.',
  },
  {
    id: 11,
    date: '1955',
    title: 'Rashtriya Samajwadi Party',
    description:
      'Was appointed as a key member of the Rashtriya Samajwadi Party.',
  },
  {
    id: 12,
    date: '1957',
    title: 'Thirthahalli Constituency',
    description:
      'Contested from Thirthahalli Constituency and lost but established the Karnataka Samajwadi Youth Association.',
  },
  {
    id: 13,
    date: '1960',
    title: 'Goa Agitation',
    description:
      'Took active part in the Goa Agitation and published the Samajwadi Party’s newsletter called “Margadarshi”',
  },
  {
    id: 14,
    date: '1962',
    title: 'Elected as M.L.A',
    description:
      'Run with modest resources, borrowed from his supporters who rose above their communal identities and rallied behind him for his election campaigns. He enjoyed huge admiration and immense local support for his exemplary courage, integrity and charisma.',
  },
  {
    id: 15,
    date: '1964',
    title: 'Marriage to Smt. Sonakka',
    description:
      'He married Smt. Sonakka, a school teacher in 1964. One of the few marriages that was solemnized at Vidhana Soudha',
  },
  {
    id: 16,
    date: '1967',
    title: 'Re-elected as M.L.A',
    description:
      'Was Reelected as M.L.A. from Thirthahalli Constituency. Daughter, Kum. Ila Geetha was born in the year 1967 in Bengaluru.',
  },
  {
    id: 17,
    date: '1968',
    title: 'Birth of Son - Ramamanohar',
    description:
      'Son, Mst. Ramamanohar was born in the year 1968 at Bengaluru.',
  },
  {
    id: 18,
    date: '9 June, 1971',
    title: 'Was admitted to Victoria Hospital',
    description:
      'Underwent prolonged but unsuccessful 6 month long treatment at the Bangalore Victoria Hospital, Breathed his last, Cremated at the Wilson Garden Crematorium.',
  },
]
function Timeline() {
  return (
    <>
      <h1 className="mb-6 border-t pt-4 text-2xl font-bold tracking-tight text-insp-200 dark:border-zinc-700 dark:text-zinc-100 sm:text-3xl">
        About Shanthaveri Gopala Gowda
      </h1>
      <ol className="border-l border-gray-300">
        {timeline.map((item) => (
          <li key={item.id}>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-white">
                {item.date}
              </h3>
            </div>
            <div className="mt-0.5 ml-4 mb-6">
              <h4 className="mb-1.5 text-lg font-semibold text-zinc-800 dark:text-zinc-100 lg:text-xl">
                {item.title}
              </h4>
              <p className="mb-3 text-justify text-gray-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

const event = [
  'On 14th March 2022, the Birth Centenary Commemoration Program was inaugurated. In the Centenary year of 2023, programs related to the Centenary Celebration would be organized across all prominent District Headquarters of the State.',
  'Around 100 People that include Elders of his era, and contemporaries who have known and interacted with Shri Shanthaveri Gopala Gowda closely will be met, and interviewed and these video clippings and sound bytes would be recorded.',
  'A Short Documentary Film of about 5 to 10 minutes in duration showing various pictures of his hometown, his life, and times would be produced.',
  'A Small Handbook with about 60 paragraphs would be published and at least 10,000 copies would be printed.',
  'This Handbook would be translated into English and 10,000 copies of the same would be printed.',
  'In about 50 to 100 colleges and universities in the State, about 10,000 students would be addressed to create awareness, the Documentary Film made would be screened, each of them would be given a handbook, also through speeches, information about him, his principles and details about his legacy would be given.',
  'There are about 15 books published in Kannada about Shri Shanthaveri Gopala Gowda. Out of this one of the books would be translated into both English and Hindi and published.',
  'Various Details about Shri Shanthaveri Gopala Gowda, about his life, Details about all the programs relating to the commemoration of his Birth Centenary, various articles published in Daily Newspapers, various Audio Snippets made, YouTube Videos, his various images, the images of various letters, speeches given in the assembly, all of this information would be available in one single website created for this purpose.',
  'Just like on the website, even on other social media sites such as YouTube, Instagram, Facebook, WhatsApp, and other similar platforms, one-minute videos, audio, and text that one can read and hear would be produced and uploaded.',
  'These audio snippets would be played regularly on various radio channels for a period of 1 year.',
  'By the end of the year 2023, a Public Event would be held to commemorate the Centenary Year of the Late Shri Shanthaveri Gopala Gowda on which centenary commemorative souvenir issue would be released.',
  'The Postal Department would be reached out to and a postal letter, a postal envelope bearing his image would be released in commemoration of the centenary year.',
  'A request would be made to the Govt. of Karnataka to install a statue of Late Shri. Gopala Gowda Shanthaveri in front of Vidhana Soudha.',
  'Various such programs and initiatives would be undertaken throughout the coming year and the Centenary Birth Year of Shri Shanthaveri Gopala Gowda would be celebrated in a meaningful manner.',
]

function Events() {
  return (
    <>
      <h1 className="mb-6 border-t pt-4 text-2xl font-bold tracking-tight text-insp-200 dark:border-zinc-700 dark:text-zinc-100 sm:text-3xl">
        Events
      </h1>
      <div className="lg:pr-20">
        <div className="pr-2.5 sm:pr-6">
          <h2 className="mb-4 text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Details of Various Events Lined Up in this Birth Centenaray
            commemoration year
          </h2>
          <ul className="list-none md:list-disc">
            {event.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

function ArrowCircleUpIcon(props) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  )
}
export default function Home({ articles }) {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }

  // Dark Mode
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.theme = 'light'
    localStorage.theme = 'dark'
    localStorage.removeItem('theme')
  }, [])

  return (
    <>
      <Head>
        <title>Shanthaveri Gopala Gowda - A Legacy of Political Activism</title>
        <meta
          name="description"
          content="Explore the life and legacy of Shanthaveri Gopala Gowda, one of Karnataka's most prominent socialist leaders. Learn about his early involvement in the freedom movement, his introduction to socialism and his role in shaping the political landscape of the state. Discover his contributions to the 'Land for the Tiller' movement and his stance on the unification of Karnataka. A centenary tribute website."
        />
        <meta
          name="keywords"
          content="Shanthaveri Gopala Gowda, Shanthaveri Gopala Gowda Centenary, Shanthaveri Gopala Gowda Centenary Tribute, Shanthaveri Gopala Gowda Centenary, Gopal Gowda, Gopalagowda, Thirthahalli Constituency, Shimoga politics, Sagar Hosanagar, Goa agitation, Kagodu Farmers, Ramamanohar Lohia, Sonakka, Rashtriya Samajwadi Party, Karnataka Samajwadi Party, Socialist Leader India, Firebrand politician, Konanduru Lingappa, Land Reforms Act, Araga, Renaming Mysore, Socialist Leader, Avasthe, Victoria Hospital"
        />
        <meta
          name="author"
          content="Shanthaveri Gopala Gowda Centenary Tribute"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="apple-mobile-web-app-title"
          content="Shanthaveri Gopala Gowda"
        />
        <meta
          name="google-site-verification"
          content="9l6jBCdCjl0ZW1Q6RrsllF3h9y5WdO-_rNvO1BKgH9s"
        />
        <meta
          name="google-site-verification"
          content="AOyjXR-GQ8cfwRXxXayjNbTdma0XL_pVraLO6kvkyaM"
        />
        <link rel="preload" href="../public/fonts/Malige.ttf" as="font/ttf" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GShanthaveri" />
        <meta
          name="twitter:title"
          content="Shanthaveri Gopala Gowda - A Legacy of Political Activism"
        />
        <meta
          name="twitter:description"
          content="Explore the life and legacy of Shanthaveri Gopala Gowda, one of Karnataka's most prominent socialist leaders. Learn about his early involvement in the freedom movement, his introduction to socialism and his role in shaping the political landscape of the state. Discover his contributions to the 'Land for the Tiller' movement and his stance on the unification of Karnataka. A centenary tribute website."
        />
        <meta name="twitter:image" content={previewImg} />
        <script type="text/javascript">
          {`function googleTranslateElementInit() {
            new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,kn,hi,ta,te',
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          }, 'google_translate_element');
        }`}
        </script>
      </Head>
      <Container className="mt-8 sm:mt-12">
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
        <div className="flex flex-col items-start justify-center">
          <div id="google_translate_element"></div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pr-20">
            <div className="pr-2.5 sm:flex sm:items-center lg:max-w-none">
              <Image
                src={portraitImage2}
                alt="Shanthaveri Gopala Gowda Image"
                sizes="(min-width: 1024px) 28rem, 16rem"
                priority={true}
                className="aspect-auto rounded-2xl bg-zinc-100 object-cover shadow-lg dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-second lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Shanthaveri <br></br>
              <span>Gopala Gowda</span>
            </h1>
            <div className="mt-6 space-y-7 text-justify text-base text-zinc-700 dark:text-zinc-400">
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
              <SocialLinks
                href="https://www.youtube.com/@shanthaveri"
                icon={YouTubeIcon}
                className="mt-4"
              >
                Subscribe on YouTube
              </SocialLinks>
              <SocialLinks
                href="mailto:shanthaveri@gmail.com"
                icon={MailIcon}
                className="mt-6 pt-4 md:pt-8"
              >
                shanthaveri@gmail.com
              </SocialLinks>
              <SocialLinks
                href="tel:9901803300"
                icon={phoneIcon}
                className="pt-4 md:pt-8"
              >
                +91 9901803300
              </SocialLinks>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center rounded-xl bg-slate-50 p-5 shadow-md dark:bg-gray-800 dark:text-white">
          <h2 className="text-justify font-bold italic">
            Please join us as we commemorate his centenary birth year and
            celebrate his enduring legacy.
          </h2>
        </div>
      </Container>
      <Container className="mt-6 md:mt-7">
        <div className="border-t pb-8 dark:border-zinc-700/40"></div>
        <Image
          src={circleImage}
          alt="Shanthaveri Gopala Gowda Image"
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="aspect-auto rounded-2xl bg-zinc-100 object-cover shadow-lg dark:bg-zinc-800"
        />
      </Container>
      <Container className="mt-6 md:mt-7">
        <Poem />
        <Timeline />
        <Events />
      </Container>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <ArrowCircleUpIcon />
        </button>
      )}
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      letters: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
