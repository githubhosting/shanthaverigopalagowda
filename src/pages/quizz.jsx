import Head from 'next/head'

import { Container } from '@/components/Container'

const letters = [
  {
    title: '227, Legislators Home',
    date: '30/03/1964',
    description: 'cvmh',
  },
]

export default function Quizz() {
  return (
    <>
      <Head>
        <title>Quizz - Shanthaveri Gopala Gowda</title>
        <meta name="description" content="Quizz - Shanthaveri Gopala Gowda" />
        <meta
          name="keywords"
          content="Shantaveri Gopala Gowda, Shantaveri Gopala Gowda Centenary, Shantaveri Gopala Gowda Centenary Tribute, Shantaveri Gopala Gowda Centenary, , Gopal Gowda, Gopalagowda, Thirthahalli Constituency, Shimoga politics, Sagar Hosanagar, Goa agitation, Kagodu Farmers, Ramamanohar Lohia, Sonakka, Rashtriya Samajwadi Party, Karnataka Samajwadi Party, Socialist Leader India, Firebrand politician, Konanduru Lingappa, Land Reforms Act, Araga, Renaming Mysore, Socialist Leader, Avasthe, Victoria Hospital"
        />
      </Head>
      <Container className="mt-8 sm:mt-16">
        <h1 className="pb-10 text-center text-4xl font-bold text-insp2 dark:text-white">
          Quizz
        </h1>
        <iframe
          className="h-screen w-full"
          height="1024"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfyFi7-SWwTAFY4OIqxzA4SdfHjNGMlCLfCVfbrP5Q-97r_jQ/viewform?embedded=true"
        >
          Loading…
        </iframe>
      </Container>
    </>
  )
}
