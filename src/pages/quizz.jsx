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
      </Head>
      <Container className="mt-8 sm:mt-16">
        <h1 className="pb-10 text-center text-4xl font-bold text-insp2 dark:text-white">
          Quizz
        </h1>
        <ul className="space-y-4">
          {letters.map((letter) => (
            <li
              key={letter.title}
              className="neumorphism mb-10 rounded-2xl border border-gray-200 p-5"
            >
              <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-zinc-100">
                {letter.title}
              </h3>
              <p className="mt-2 text-center text-gray-700 dark:text-zinc-100/50">
                {letter.date}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
