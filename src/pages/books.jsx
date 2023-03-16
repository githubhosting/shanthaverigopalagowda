import Head from 'next/head'
import Image from 'next/image'

import { Container } from '@/components/Container'

import book1 from '@/images/books/book_1.jpeg'
import book2 from '@/images/books/book_2.jpeg'
import book3 from '@/images/books/book_3.jpeg'
import book3b from '@/images/books/book_3b.jpeg'
import book4 from '@/images/books/book_4.jpeg'
import book4b from '@/images/books/book_4b.jpeg'
import book5 from '@/images/books/book_5.jpeg'
import book5b from '@/images/books/book_5b.jpeg'
import book6 from '@/images/books/book_6.jpeg'
import book6b from '@/images/books/book_6b.jpeg'
import book7 from '@/images/books/book_7.jpeg'
import book7b from '@/images/books/book_7b.jpeg'
import book8 from '@/images/books/book_8.jpeg'
import book8b from '@/images/books/book_8b.jpeg'
import book9 from '@/images/books/book_9.jpeg'
import book10 from '@/images/books/book_10.jpeg'
import book10b from '@/images/books/book_10b.jpeg'
import book11 from '@/images/books/book_11.jpeg'
import book11b from '@/images/books/book_11b.jpeg'
import book12 from '@/images/books/book_12.jpeg'
import book12b from '@/images/books/book_12b.jpeg'
import book13 from '@/images/books/book_13.jpeg'
import book13b from '@/images/books/book_13b.jpeg'
import book14 from '@/images/books/book_14.jpeg'
import book14b from '@/images/books/book_14b.jpeg'
import book15 from '@/images/books/book_15.jpeg'
import book15b from '@/images/books/book_15b.jpeg'
import book16 from '@/images/books/book_16.jpeg'
import book16b from '@/images/books/book_16b.jpeg'

const books = [
  {
    title: ' Shasana Sabheyalli',
    author: ' Shanthaveri',
    image: book1,
  },
  {
    title: 'Shanthaveri Gopala Gowdaru',
    author: 'Devangi T. Chandrashekhar',
    image: book2,
  },
  {
    title: 'Shanthaveri Gopala Gowda',
    author: 'H. M. Nagayya',
    image: book3,
  },
  {
    title: 'Jeevantha Jwale',
    description: 'Shanthaveri Gopala Gowda Smaraka Grantha',
    author: 'Konanduru Venkappa Gowda',
    image: book4,
    imageb: book4b,
  },
  {
    title: 'Gopala Gowdara Diary',
    image: book5,
    imageb: book5b,
  },
  {
    title: 'Gopala Gowda Shanthaveri',
    author: 'H. C Visnumurthy',
    image: book6,
    imageb: book6b,
  },
  {
    title: 'Gopala Gowda Shanthaveri',
    description: 'Antharanga Bahiranga',
    author: 'H. C Visnumurthy',
    image: book7,
    imageb: book7b,
  },
  {
    title: 'Shanthaveri Gopala Gowda',
    description: 'Nenapina Samputa',
    author: 'Prof. Kalegowda Nagavara',
    author2: 'G. V. Ananthamurthy',
    image: book8,
    imageb: book8b,
  },
  {
    title: 'A string of short anecdotes about a talented legislator',
    description: 'Shanthaveri Gopala Gowda',
    author: 'Karnataka Vidhana Sabha Secretariat',
    author2: 'Vidhana Soudha, Bengaluru- 560001',
    image: book9,
  },
  {
    title: 'Shanthaveri Gopala Gowda',
    description: 'Nenapu (Memory)',
    author: 'B. S. Umesh',
    image: book10,
    imageb: book10b,
  },
  {
    title: 'Konaanduru Venkappa Gowda',
    description: 'The Man Behind the Land Reform Revolution',
    author: '(Shanthaveri Gopala Gowda)',
    image: book11,
    imageb: book11b,
  },
  {
    title: 'Dr B.S. Jayappa Gowda',
    description: 'Samajwadi (Socialist) SGG',
    author: 'Karnataka State Open University',
    image: book12,
    imageb: book12b,
  },
  {
    title: 'Kannada Luminaries , Episode- 2',
    description:
      'A Wise Leader and a Political Idealist Shanthaveri Gopala Gowda',
    author: 'Konanduru Venkappa Gowda',
    image: book13,
    imageb: book13b,
  },
  {
    title: 'Makers of New Karnataka',
    description: 'Shanthaveri Gopala Gowda',
    author: 'Dr. N. D’ Souza',
    image: book14,
    imageb: book14b,
  },
  {
    title: 'Shanthaveri Gopala Gowda',
    author: 'Nataraja Huliyar',
    image: book15,
    imageb: book15b,
  },
  {
    title: 'A Wise Social Reformer',
    description: 'Shanthaveri Gopala Gowda A Brief Life History',
    author: 'Nataraja Huliyar',
    image: book16,
    imageb: book16b,
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
          {books.map((book) => (
            <div
              key={book.title}
              className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800"
            >
              <div className="relative mb-4 h-56 w-40">
                <div className="flip">
                  <div className="flip-content">
                    <div className="flip-front">
                      <Image
                        src={book.image}
                        alt={book.title}
                        objectFit="contain"
                        className="rounded-md shadow-md"
                      />
                    </div>
                    <div className="flip-back">
                      {book.imageb && (
                        <Image
                          src={book.imageb}
                          alt={book.title}
                          objectFit="contain"
                          className="rounded-md shadow-md"
                        />
                      )}
                      {!book.imageb && (
                        <Image
                          src={book.image}
                          alt={book.title}
                          objectFit="contain"
                          className="rounded-md shadow-md"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-justify text-lg font-semibold text-gray-800 dark:text-white">
                {book.title}
              </h2>
              <p className="text-justify text-sm font-medium text-gray-600 dark:text-gray-400">
                {book.date}
              </p>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {book.description}
              </p>
              <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                - {book.author}
              </p>
              {book.author2 && (
                <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                  - {book.author2}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
