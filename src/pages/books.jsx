import Head from 'next/head'

import { Container } from '@/components/Container'

const letters = [
  {
    title: 'Book Title',
    date: '30-03-1964',
    description: 'discription',
  },
]

export default function Books() {
  return (
    <>
      <Head>
        <title>Books - Shanthaveri Gopala Gowda</title>
        <meta name="description" content="Books - Shanthaveri Gopala Gowda" />
        <meta
          name="keywords"
          content="Shantaveri Gopala Gowda, Shantaveri Gopala Gowda Centenary, Shantaveri Gopala Gowda Centenary Tribute, Shantaveri Gopala Gowda Centenary, , Gopal Gowda, Gopalagowda, Thirthahalli Constituency, Shimoga politics, Sagar Hosanagar, Goa agitation, Kagodu Farmers, Ramamanohar Lohia, Sonakka, Rashtriya Samajwadi Party, Karnataka Samajwadi Party, Socialist Leader India, Firebrand politician, Konanduru Lingappa, Land Reforms Act, Araga, Renaming Mysore, Socialist Leader, Avasthe, Victoria Hospital"
        />
      </Head>
      <Container className="mt-8 sm:mt-16">
        <h1 className="pb-10 text-center text-4xl font-bold text-insp2 dark:text-white">
          Books
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {letters.map((letter) => (
            <div
              key={letter.title}
              className="flex flex-col items-start justify-between rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <div className="flex-1">
                <a
                  href="#"
                  className="mt-2 block text-lg font-semibold text-gray-900 dark:text-white"
                >
                  {letter.title}
                </a>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                  {letter.description}
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Roel Aufderehar</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    <a href="#" className="hover:underline">
                      Author Name
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <span>Published</span>
                    <span aria-hidden="true">&middot;</span>
                    <time dateTime={letter.date}>{letter.date}</time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
