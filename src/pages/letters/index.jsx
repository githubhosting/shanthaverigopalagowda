import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllLetters } from '@/lib/getAllLetters'
import { formatDate } from '@/lib/formatDate'

function Letter({ letter }) {
  return (
    <letter className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/letters/${letter.slug}`}>{letter.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={letter.date}
          className="md:hidden"
          decorate
        >
          {formatDate(letter.date)}
        </Card.Eyebrow>
        <Card.Description>{letter.description}</Card.Description>
        <Card.Cta>Read Letter</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={letter.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(letter.date)}
      </Card.Eyebrow>
    </letter>
  )
}

export default function LettersIndex({ letters }) {
  return (
    <>
      <Head>
        <title>Letters - Shanthaveri Gopala Gowda</title>
        <meta
          name="description"
          content="All of Letters by Shanthaveri Gopala Gowda in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Letters"
        intro="All of Letters by Shanthaveri Gopala Gowda in chronological order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {letters.map((letter) => (
              <Letter key={letter.slug} letter={letter} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      letters: (await getAllLetters()).map(({ component, ...meta }) => meta),
    },
  }
}
