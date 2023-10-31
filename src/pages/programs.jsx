/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/future/image'
import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation, EffectFade, Keyboard } from 'swiper'

import { Container } from '@/components/Container'
import event1_1 from '@/images/events/1 (1).jpg'
import event1_2 from '@/images/events/1 (2).jpg'
import event1_3 from '@/images/events/1 (3).jpg'
import event1_4 from '@/images/events/1 (4).jpg'
import event1_5 from '@/images/events/1 (5).jpg'
import event1_6 from '@/images/events/1 (6).jpg'
import event1_7 from '@/images/events/1 (7).jpg'
import event1_8 from '@/images/events/1 (8).jpg'
import event1_9 from '@/images/events/1 (9).jpg'
import event2_1 from '@/images/events/2 (1).jpeg'
import event2_2 from '@/images/events/2 (2).jpeg'
import event2_3 from '@/images/events/2 (3).jpeg'
import event2_4 from '@/images/events/2 (4).jpeg'
import event2_5 from '@/images/events/2 (5).jpeg'
import event2_6 from '@/images/events/2 (6).jpeg'
import event2_7 from '@/images/events/2 (7).jpeg'
import event2_8 from '@/images/events/2 (8).jpeg'
import event2_9 from '@/images/events/2 (9).jpeg'
import event2_10 from '@/images/events/2 (10).jpeg'
import event3_1 from '@/images/events/3 (1).jpg'
import event3_2 from '@/images/events/3 (2).jpg'
import event3_3 from '@/images/events/3 (3).jpg'
import event3_4 from '@/images/events/3 (4).jpg'
import event3_5 from '@/images/events/3 (5).jpg'
import event3_6 from '@/images/events/3 (6).jpg'
import event3_7 from '@/images/events/3 (7).jpg'
import event3_8 from '@/images/events/3 (8).jpg'
import event3_9 from '@/images/events/3 (9).jpg'
import event3_10 from '@/images/events/3 (10).jpg'
import event4 from '@/images/events/4.jpeg'
import event5 from '@/images/events/5.jpeg'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDRSRvZa40f49r9GhcTqWHJOOUkS09hg5M',
  authDomain: 'shanthaverigopalagowda-8aa2d.firebaseapp.com',
  databaseURL:
    'https://shanthaverigopalagowda-8aa2d-default-rtdb.firebaseio.com',
  projectId: 'shanthaverigopalagowda-8aa2d',
  storageBucket: 'shanthaverigopalagowda-8aa2d.appspot.com',
  messagingSenderId: '905421208104',
  appId: '1:905421208104:web:b4bd3d62430e9f294e931d',
}
firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()

const events = [
  {
    id: 1,
    title:
      'Inauguration of Sri. Shanthaveri Gopala Gowda’s Centenary Celebrations, Gopala Gowda Circle. ',
    date: '14th March 2022',
    description: 'cvmh',
    images: [
      event1_1,
      event1_2,
      event1_3,
      event1_4,
      event1_5,
      event1_6,
      event1_7,
      event1_8,
      event1_9,
    ],
  },
  {
    id: 2,
    title: 'District Programs, Bhadravathi, Chunchadri Women’s Association',
    date: '26th November 2022 ',
    description: 'cvmh',
    images: [
      event2_1,
      event2_2,
      event2_3,
      event2_4,
      event2_5,
      event2_6,
      event2_7,
      event2_8,
      event2_9,
      event2_10,
    ],
  },
  {
    id: 3,
    title:
      'District Programs, Dharwad, Patil Puttappa Bhavan, Karnataka Vidyavarthaka Sangha.',
    date: '8th December 2022',
    description: 'cvmh',
    images: [
      event3_1,
      event3_2,
      event3_3,
      event3_4,
      event3_5,
      event3_6,
      event3_7,
      event3_8,
      event3_9,
      event3_10,
    ],
  },
  {
    id: 4,
    title: 'District Program, Sahyadri College, Shimoga',
    date: '14th December 2022',
    description: 'cvmh',
    images: [event4],
  },
  {
    id: 5,
    title: 'District Program, Saidooru',
    date: '28th December 2022',
    description: 'cvmh',
    images: [event5],
  },
]

export default function Programs() {
  const [programs, setOtherlinks] = useState([])

  return (
    <>
      <Head>
        <title>Events - Shanthaveri Gopala Gowda</title>
        <meta
          name="description"
          content="Programs and Events - Shanthaveri Gopala Gowda"
        />
        <meta
          name="keywords"
          content="Shanthaveri Gopala Gowda, Shanthaveri Gopala Gowda Centenary, Shanthaveri Gopala Gowda Centenary Tribute, Shanthaveri Gopala Gowda Centenary, Gopal Gowda, Gopalagowda, Thirthahalli Constituency, Shimoga politics, Sagar Hosanagar, Goa agitation, Kagodu Farmers, Ramamanohar Lohia, Sonakka, Rashtriya Samajwadi Party, Karnataka Samajwadi Party, Socialist Leader India, Firebrand politician, Konanduru Lingappa, Land Reforms Act, Araga, Renaming Mysore, Socialist Leader, Avasthe, Victoria Hospital"
        />
      </Head>
      <Container className="mt-8 sm:mt-16">
        <h1 className="pb-10 text-center text-4xl font-bold text-insp2 dark:text-white">
          Events
        </h1>
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li
              key={index}
              className="dark:neumorphism mb-10 rounded-2xl border border-slate-100 p-5 shadow-lg dark:border-zinc-600"
            >
              <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-zinc-100">
                {event.title}
              </h3>
              <p className="mt-2 text-center text-gray-700 dark:text-zinc-100/50">
                {event.date}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {event.images.map((image, index) => (
                  <Image
                    key={index}
                    className="w-1/2 rounded-md object-contain sm:w-1/3 xl:w-1/6"
                    src={image}
                    alt={event.title}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
