import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { Container } from '@/components/Container'

import img1 from '@/images/photos/Ramamanohar.png'
import img2 from '@/images/photos/Araga_Jnanendra.png'
import img3 from '@/images/photos/Purushotham.jpg'

const projects = [
  {
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}
const members = [
  {
    name: 'Sri. KonanduruLingappa',
    designation: 'Ex Legislator',
  },
  {
    name: 'Sri. Swamy Rao',
    designation: 'Ex Legislator',
  },
  {
    name: 'Sri. K.S. Srinivas',
    designation: 'Ex Minister',
  },
  {
    name: 'Sri. VeerannaMattikatti',
    designation: 'Ex Legislator',
  },
  {
    name: 'Sri. Mahima Patel',
    designation: 'Ex Legislator',
  },
  {
    name: 'Sri. Nagaraj Shettar',
    designation: 'Thirthahalli',
  },
]
const officebearers = [
  {
    name: 'Sri. M.G. Mani Hegde',
  },
  {
    name: 'Sri. K.T. Nagaraju',
  },
  {
    name: 'Sri. Madan',
  },
  {
    name: 'Sri. K.P. Manjappa',
  },
  {
    name: 'Sri. P.C. Rajanna',
  },
  {
    name: 'Sri. H.M. Umesh',
  },
  {
    name: 'Sri. Subbaiah Nanturu',
  },
  {
    name: 'Sri. Arun Hosakoppa',
  },
  {
    name: 'Sri. Manamalaiah Ilimane',
  },
  {
    name: 'Smt. Ila Geeta Shanthaveri',
  },
  {
    name: 'Smt. Asha Hegde M.M.',
  },
]
const workingmembers = [
  {
    name: 'Sri. Araga Jnanendra',
    designation: 'President',
    img: img2,
  },
  {
    name: 'Sri. G.A. Purushotham Gowda',
    designation: 'Vice President',
    img: img3,
  },
  {
    name: 'Sri. Ram Manohar Shanthaveri',
    designation: 'Secretary',
    img: img1,
  },
]

export default function Committee() {
  return (
    <>
      <Head>
        <title>Centenary Commemoration Committee</title>
        <meta name="description" content="Centenary Commemoration Committee" />
        <meta
          name="keywords"
          content="Shanthaveri Gopala Gowda, Shanthaveri Gopala Gowda Centenary, Shanthaveri Gopala Gowda Centenary Tribute, Shanthaveri Gopala Gowda Centenary, , Gopal Gowda, Gopalagowda, Thirthahalli Constituency, Shimoga politics, Sagar Hosanagar, Goa agitation, Kagodu Farmers, Ramamanohar Lohia, Sonakka, Rashtriya Samajwadi Party, Karnataka Samajwadi Party, Socialist Leader India, Firebrand politician, Konanduru Lingappa, Land Reforms Act, Araga, Renaming Mysore, Socialist Leader, Avasthe, Victoria Hospital"
        />
      </Head>
      <Container>
        <div className="container mx-auto px-5 py-12">
          <div className="mb-5 flex w-full flex-col text-center">
            <h1 className="title-font text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">
              Advisory Committee
            </h1>
          </div>
          <div className="-m-2 flex flex-wrap justify-center">
            {members.map((member) => (
              // eslint-disable-next-line react/jsx-key
              <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                <div className="flex h-full items-center rounded-lg border p-4 shadow-md dark:border-gray-600 dark:bg-zinc-800">
                  <div className="flex-grow">
                    <h2 className="title-font font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h2>
                    <p className="text-gray-500 dark:text-white/70">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">
              Working Committee
            </h1>
          </div>
          <div className="-m-2 flex flex-wrap justify-center">
            {workingmembers.map((workingmember) => (
              // eslint-disable-next-line react/jsx-key
              <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                <div className="flex h-full items-center rounded-lg border p-4 shadow-md dark:border-gray-600 dark:bg-zinc-800">
                  <Image
                    alt="..."
                    class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                    src={workingmember.img}
                    // height={64}
                    // width={64}
                  />
                  <div className="flex-grow">
                    <h2 className="title-font font-semibold text-gray-900 dark:text-zinc-100">
                      {workingmember.name}
                    </h2>
                    <p className="text-gray-500 dark:text-white/70">
                      {workingmember.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="title-font mb-4 text-center text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">
          Office Bearers
        </h1>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          {officebearers.map((member) => (
            // eslint-disable-next-line react/jsx-key
            <div className="w-full p-2 sm:w-1/2">
              <div className="flex h-full items-center rounded bg-gray-100 p-2 pl-4 shadow-sm dark:bg-zinc-800/90 dark:text-zinc-100">
                <span className="title-font font-medium">{member.name}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
