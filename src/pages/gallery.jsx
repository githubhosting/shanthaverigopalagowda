/* eslint-disable @next/next/no-img-element */
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import React from 'react'
import ImgsViewer from 'react-images-viewer'

import { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'

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
import img17 from '@/images/gallery_img/gallery (17).png'
import img18 from '@/images/gallery_img/gallery (18).png'

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

const images = [
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaveri-gopalagowda/main/src/images/gallery_img/gallery%20(1).png',
    original: { img1 },
    width: 375,
    height: 480,
    caption: 'Sri Shanthaveri Gopala Gowda with ',
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Sri Shanthaveri Gopala Gowda with</div>
      </div>
    ),
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(2).png',
    original: { img2 },
    width: 375,
    height: 530,
    caption: 'Wife, Smt. Sonakka with son, Mst. Ramamanohar',
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Wife, Smt. Sonakka with son, Mst. Ramamanohar</div>
      </div>
    ),
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(3).png',
    original: { img3 },
    width: 375,
    height: 530,
    caption: 'Family Pic of SGG - L to R(Standing) - ……………… L to R(Sitting)',
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Family Pic of SGG - L to R(Standing) - ……………… L to R(Sitting)</div>
      </div>
    ),
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(4).png',
    original: { img4 },
    width: 375,
    height: 530,
    caption:
      'Wife,  Smt. Sonakka with son - Ramamanohar, Daughter - Ila Geetha and ',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(5).png',
    original: { img5 },
    width: 1809,
    height: 2560,
    caption: 'Smt. Sonakka',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(6).png',
    original: { img6 },
    width: 1809,
    height: 2560,
    caption: '??? (Mother of SGG)',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(7).png',
    original: { img7 },
    width: 1809,
    height: 2560,
    caption: 'SGG as a Youth Leader',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(8).png',
    original: { img8 },
    width: 1809,
    height: 2560,
    caption: 'Just Married (SGG with wife Sonakka)',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(9).png',
    original: { img9 },
    width: 1809,
    height: 2560,
    caption: 'Sketch of …………. Done by artist ',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(10).png',
    original: { img10 },
    width: 1809,
    height: 2560,
    caption: 'SGG at …………… event',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(11).png',
    original: { img11 },
    width: 1809,
    height: 2560,
    caption: 'SGG with children and …………..',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(12).png',
    original: { img12 },
    width: 1809,
    height: 2560,
    caption: 'Family Pic - SGG, Wife and children - Ila Geeta and Ramamanohar',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(13).png',
    original: { img13 },
    width: 1809,
    height: 2560,
    caption: '?',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(14).png',
    original: { img14 },
    width: 1548,
    height: 1042,
    caption: '?',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(15).png',
    original: { img15 },
    width: 2560,
    height: 1811,
    caption: 'SGG with ???',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaverigopalagowda/main/src/images/gallery_img/gallery%20(16).png',
    original: { img16 },
    width: 2560,
    height: 1742,
    caption: 'SGG with Smt. Indira Gandhi and ???',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaveri-gopalagowda/main/src/images/gallery_img/gallery%20(17).png',
    original: { img17 },
    width: 1200,
    height: 821,
    caption: '....',
  },
  {
    src: 'https://raw.githubusercontent.com/githubhosting/shanthaveri-gopalagowda/main/src/images/gallery_img/gallery%20(18).png',
    original: { img18 },
    width: 300,
    height: 175,
    caption: '...',
  },
]
function GalleryNew() {
  const [index, setIndex] = useState(-1)

  const currentImage = images[index]
  const nextIndex = (index + 1) % images.length
  const nextImage = images[nextIndex] || currentImage
  const prevIndex = (index + images.length - 1) % images.length
  const prevImage = images[prevIndex] || currentImage

  const handleClick = (index, item) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        thumbnailStyle={{
          borderRadius: '8px',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          enableZoom={false}
          animationDuration={500}
          imageCaption={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  )
}

export default function Gallery_() {
  return (
    <>
      <Head>
        <title>Gallery - Shri Shantaveri Gopala Gowda</title>
        <meta
          name="description"
          content="Gallery - Shri Shantaveri Gopala Gowda"
        />
      </Head>
      <Container className="mt-8 sm:mt-16">
        <h1 className="pb-10 text-center text-4xl font-bold text-insp2 dark:text-white">
          Gallery
        </h1>
        <GalleryNew />
      </Container>
    </>
  )
}
