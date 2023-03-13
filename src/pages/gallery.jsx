/* eslint-disable @next/next/no-img-element */
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import img1 from '@/images/gallery_img/gallery (1).png'
import img2 from '@/images/gallery_img/gallery (2).png'
import img3 from '@/images/gallery_img/gallery (3).png'
import img4 from '@/images/gallery_img/gallery (4).png'
import img5 from '@/images/gallery_img/gallery (5).png'
import img6 from '@/images/gallery_img/gallery (6).png'
import img7 from '@/images/gallery_img/gallery (7).png'
import img8 from '@/images/gallery_img/gallery (8).png'
import img9 from '@/images/gallery_img/gallery (9).png'
import img10 from '@/images/gallery_img/gallery (10).png'
import img11 from '@/images/gallery_img/gallery (11).png'
import img12 from '@/images/gallery_img/gallery (12).png'
import img13 from '@/images/gallery_img/gallery (13).png'
import img14 from '@/images/gallery_img/gallery (14).png'
import img15 from '@/images/gallery_img/gallery (15).png'
import img16 from '@/images/gallery_img/gallery (16).png'

const gallery = [
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(1).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(2).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(3).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(4).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(5).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(6).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(7).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(8).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(9).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(10).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(11).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(12).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(13).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(14).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(15).png',
  'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(16).png',
]

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - Shri Shantaveri Gopala Gowda</title>
        <meta
          name="description"
          content="Gallery - Shri Shantaveri Gopala Gowda"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <section className="overflow-hidden text-gray-700 ">
          <div className="container mx-auto px-5 py-2 lg:px-12 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
              {gallery.map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <div className="flex w-1/3 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="Gallery Images"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={item}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
