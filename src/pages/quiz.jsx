import Head from 'next/head'

import { Container } from '@/components/Container'

export default function Quiz() {
  return (
    <>
      <Head>
        <title>Quiz - Shanthaveri Gopala Gowda</title>
        <meta name="description" content="Quiz - Shanthaveri Gopala Gowda" />
        <meta
          name="keywords"
          content="Shanthaveri Gopala Gowda, Shanthaveri Gopala Gowda Centenary, Shanthaveri Gopala Gowda Centenary Tribute, Shanthaveri Gopala Gowda Centenary, , Gopal Gowda, Gopalagowda, Thirthahalli Constituency, Shimoga politics, Sagar Hosanagar, Goa agitation, Kagodu Farmers, Ramamanohar Lohia, Sonakka, Rashtriya Samajwadi Party, Karnataka Samajwadi Party, Socialist Leader India, Firebrand politician, Konanduru Lingappa, Land Reforms Act, Araga, Renaming Mysore, Socialist Leader, Avasthe, Victoria Hospital"
        />
      </Head>
      <Container className="mt-8 sm:mt-16">
        <h1 className="pb-10 text-center text-4xl font-bold text-insp2 dark:text-white">
          Quiz
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
