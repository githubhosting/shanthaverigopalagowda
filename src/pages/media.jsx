import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
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

function DownloadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-1 h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
      />
    </svg>
  )
}

function ViewIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-1 h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  )
}

const debatepdf = [
  {
    id: 1,
    date: '1952-06-18',
    title: 'Credentials',
    link: 'https://drive.google.com/file/d/1Gv1w2Nqz6i4yj3o2y9L8z9JiYh4r1d4q/view?usp=sharing',
  },
]

function Debate() {
  const onButtonClick = () => {
    fetch('/documents/').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Event_Report_2020.pdf'
        alink.click()
      })
    })
  }
  const onButtonClick2 = () => {
    fetch('/documents/').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Event_Report_2021.pdf'
        alink.click()
      })
    })
  }
  return (
    <>
      <p className="pt-10 text-left text-2xl font-bold text-insp2 dark:text-white">
        Assembly Debates Extract
      </p>
      <ul
        role="list"
        className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-10 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2"
      >
        <li className="neumorphism mb-10 rounded-2xl border border-gray-200 p-5">
          <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-zinc-100">
            1952-06-18
          </h3>
          <p className="mt-2 text-center text-gray-700 dark:text-zinc-100/50">
            Credentials:
          </p>
          <div className="flex justify-center overflow-hidden p-2 ">
            <div className="space-y-2 rounded-lg border border-gray-200 p-4 sm:-mx-1 sm:flex sm:space-y-0">
              <button
                onClick={onButtonClick}
                className="flex w-full transform items-center justify-center rounded-md bg-sky-600 px-7 py-1.5 text-base text-white shadow-lg transition-colors duration-300 hover:bg-sky-500 focus:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-40 sm:mx-1 sm:w-auto"
              >
                <DownloadIcon />
                <span className="mx-1">Download</span>
              </button>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex w-full transform items-center justify-center rounded-md bg-sky-600 px-7 py-1.5 text-base text-white shadow-lg transition-colors duration-300 hover:bg-sky-500 focus:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-40 sm:mx-1 sm:w-auto"
              >
                <ViewIcon />
                <span className="mx-1">View</span>
              </a>
            </div>
          </div>
        </li>
        <li className="neumorphism mb-10 rounded-2xl border border-gray-200 p-5">
          <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-zinc-100">
            1952-06-23
          </h3>
          <p className="mt-2 text-center text-gray-700 dark:text-zinc-100/50">
            Credentials:
          </p>
          <div className="flex justify-center overflow-hidden p-2 ">
            <div className="space-y-2 rounded-lg border border-gray-200 p-4 sm:-mx-1 sm:flex sm:space-y-0">
              <button
                onClick={onButtonClick2}
                className="flex w-full transform items-center justify-center rounded-md bg-sky-600 px-7 py-1.5 text-base text-white shadow-lg transition-colors duration-300 hover:bg-sky-500 focus:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-40 sm:mx-1 sm:w-auto"
              >
                <DownloadIcon />
                <span className="mx-1">Download</span>
              </button>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex w-full transform items-center justify-center rounded-md bg-sky-600 px-7 py-1.5 text-base text-white shadow-lg transition-colors duration-300 hover:bg-sky-500 focus:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-40 sm:mx-1 sm:w-auto"
              >
                <ViewIcon />
                <span className="mx-1">View</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default function Media() {
  const [url, setUrl] = useState([])
  const [audioUrl, setAudioUrl] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await database.collection('Media').get()
        const data = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setUrl(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await database.collection('Media_Audio').get()
        const data = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setAudioUrl(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const embedded_ul = url.map((item) => {
    const videoId = item.url.split('/').pop()
    const embeddedUrl = `https://www.youtube.com/embed/${videoId}`
    return { id: item.id, url: embeddedUrl }
  })

  const embedded_audio = audioUrl.map((item) => {
    const audioId = item.url.split('/').pop()
    const embeddedUrl = `https://www.youtube.com/embed/${audioId}`
    return { id: item.id, url: embeddedUrl }
  })

  return (
    <>
      <Head>
        <title>Media - Shanthaveri Gopala Gowda</title>
        <meta name="description" content="Media - Shanthaveri Gopala Gowda" />
        <meta
          name="keywords"
          content="Shanthaveri Gopala Gowda, Shanthaveri Gopala Gowda Centenary, Shanthaveri Gopala Gowda Centenary Tribute, Shanthaveri Gopala Gowda Centenary, Gopal Gowda, Gopalagowda, Thirthahalli Constituency, Shimoga politics, Sagar Hosanagar, Goa agitation, Kagodu Farmers, Ramamanohar Lohia, Sonakka, Rashtriya Samajwadi Party, Karnataka Samajwadi Party, Socialist Leader India, Firebrand politician, Konanduru Lingappa, Land Reforms Act, Araga, Renaming Mysore, Socialist Leader, Avasthe, Victoria Hospital"
        />
      </Head>
      <Container className="mt-8 sm:mt-16">
        <h1 className="pb-10 text-center text-4xl font-bold text-insp2 dark:text-white">
          Media
        </h1>
      </Container>
      <Container className="mt-6 md:mt-7">
        <div>
          <iframe
            src="https://drive.google.com/file/d/1WNxwx_8JEgMHpT8VWF6MpjWuVcI9QUSB/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Watch Youtube Videos
        </h1>
        <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6 lg:grid-cols-3">
          {embedded_ul.map((url) => (
            <div key={url.id} className="mt-6">
              <iframe
                className="aspect-video w-full rounded-lg shadow-lg"
                src={url.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <h1 className="mt-10 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Listen to Youtube Audios
        </h1>
        <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6 lg:grid-cols-3">
          {embedded_audio.map((audioUrl) => (
            <div key={audioUrl.id} className="mt-6">
              <iframe
                className="aspect-video w-full rounded-lg shadow-lg"
                src={audioUrl.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-6 md:mt-7">
        <Debate />
      </Container>
    </>
  )
}
