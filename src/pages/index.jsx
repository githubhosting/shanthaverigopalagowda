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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

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
    <li className={clsx(className, 'flex')} key={href}>
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
    id: 'timeline.1.id',
    date: 'timeline.1.date',
    title: 'timeline.1.title',
    description: 'timeline.1.description',
  },
  {
    id: 'timeline.2.id',
    date: 'timeline.2.date',
    title: 'timeline.2.title',
    description: 'timeline.2.description',
  },
  {
    id: 'timeline.3.id',
    date: 'timeline.3.date',
    title: 'timeline.3.title',
    description: 'timeline.3.description',
  },
  {
    id: 'timeline.4.id',
    date: 'timeline.4.date',
    title: 'timeline.4.title',
    description: 'timeline.4.description',
  },
  {
    id: 'timeline.5.id',
    date: 'timeline.5.date',
    title: 'timeline.5.title',
    description: 'timeline.5.description',
  },
  {
    id: 'timeline.6.id',
    date: 'timeline.6.date',
    title: 'timeline.6.title',
    description: 'timeline.6.description',
  },
  {
    id: 'timeline.7.id',
    date: 'timeline.7.date',
    title: 'timeline.7.title',
    description: 'timeline.7.description',
  },
  {
    id: 'timeline.8.id',
    date: 'timeline.8.date',
    title: 'timeline.8.title',
    description: 'timeline.8.description',
  },
  {
    id: 'timeline.9.id',
    date: 'timeline.9.date',
    title: 'timeline.9.title',
    description: 'timeline.9.description',
  },
  {
    id: 'timeline.10.id',
    date: 'timeline.10.date',
    title: 'timeline.10.title',
    description: 'timeline.10.description',
  },
  {
    id: 'timeline.11.id',
    date: 'timeline.11.date',
    title: 'timeline.11.title',
    description: 'timeline.11.description',
  },
  {
    id: 'timeline.12.id',
    date: 'timeline.12.date',
    title: 'timeline.12.title',
    description: 'timeline.12.description',
  },
  {
    id: 'timeline.13.id',
    date: 'timeline.13.date',
    title: 'timeline.13.title',
    description: 'timeline.13.description',
  },
  {
    id: 'timeline.14.id',
    date: 'timeline.14.date',
    title: 'timeline.14.title',
    description: 'timeline.14.description',
  },
  {
    id: 'timeline.15.id',
    date: 'timeline.15.date',
    title: 'timeline.15.title',
    description: 'timeline.15.description',
  },
  {
    id: 'timeline.16.id',
    date: 'timeline.16.date',
    title: 'timeline.16.title',
    description: 'timeline.16.description',
  },
  {
    id: 'timeline.17.id',
    date: 'timeline.17.date',
    title: 'timeline.17.title',
    description: 'timeline.17.description',
  },
  {
    id: 'timeline.18.id',
    date: 'timeline.18.date',
    title: 'timeline.18.title',
    description: 'timeline.18.description',
  },
]
function Timeline() {
  const { t } = useTranslation()
  return (
    <>
      <h1 className="mb-6 border-t pt-4 text-2xl font-bold tracking-tight text-insp-200 dark:border-zinc-700 dark:text-zinc-100 sm:text-3xl">
        {t('timelinetitle')}
      </h1>
      <ol className="border-l border-gray-300">
        {timeline.map((item) => (
          <li key={item.id}>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-white">
                {t(item.date)}
              </h3>
            </div>
            <div className="mb-6 ml-4 mt-0.5">
              <h4 className="mb-1.5 text-lg font-semibold text-zinc-800 dark:text-zinc-100 lg:text-xl">
                {t(item.title)}
              </h4>
              <p className="mb-3 text-justify text-gray-600 dark:text-zinc-400">
                {t(item.description)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

function Events() {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="mb-6 border-t pt-4 text-2xl font-bold tracking-tight text-insp-200 dark:border-zinc-700 dark:text-zinc-100 sm:text-3xl">
        {t('e')}
      </h1>
      <div className="lg:pr-20">
        <div className="pr-2.5 sm:pr-6">
          <h2 className="mb-4 text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            {t('e0')}
          </h2>
          <ul className="list-none md:list-disc">
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e1')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e2')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e3')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e4')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e5')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e6')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e7')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e8')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e9')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e10')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e11')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e12')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e13')}
            </li>
            <li className="mb-3 text-justify text-zinc-800 dark:text-gray-400">
              {t('e14')}
            </li>
          </ul>
        </div>
      </div>
    </div>
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
export default function Home() {
  const { t } = useTranslation()
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
            includedLanguages: 'en,hi,ta,te,ml,mr,',
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
              {t('name')} <br></br>
              <span>{t('span')}</span>
            </h1>
            <div className="mt-6 space-y-7 text-justify text-base text-zinc-700 dark:text-zinc-400">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
              <p>{t('p4')}</p>
              <div className="flex justify-center">
                <Button
                  href="/about"
                  className="focus:shadow-outline-blue flex w-full items-center justify-center rounded-md border border-transparent bg-sky-500 px-8 py-3 text-base font-medium leading-6 text-white shadow-sm transition duration-150 ease-in-out hover:bg-sky-400 focus:outline-none active:bg-sky-600"
                  aria-label="Read more about Shanthaveri Gopala Gowda"
                >
                  {t('b1')}
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
          <h2 className="text-center font-bold italic">{t('p5')}</h2>
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

export async function getStaticProps(context) {
  const { locale } = context
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      letters: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
