import Head from 'next/head'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
import Rammanohar from '@/images/photos/Ramamanohar.png'

export default function Media() {
  return (
    <>
      <Head>
        <title>Contact Us - Shanthaveri Gopala Gowda</title>
        <meta
          name="description"
          content="Contact Us - Shanthaveri Gopala Gowda"
        />
        <meta
          name="keywords"
          content="Shanthaveri Gopala Gowda, Shanthaveri Gopala Gowda Centenary, Shanthaveri Gopala Gowda Centenary Tribute, Shanthaveri Gopala Gowda Centenary, , Gopal Gowda, Gopalagowda, Thirthahalli Constituency, Shimoga politics, Sagar Hosanagar, Goa agitation, Kagodu Farmers, Ramamanohar Lohia, Sonakka, Rashtriya Samajwadi Party, Karnataka Samajwadi Party, Socialist Leader India, Firebrand politician, Konanduru Lingappa, Land Reforms Act, Araga, Renaming Mysore, Socialist Leader, Avasthe, Victoria Hospital"
        />
      </Head>
      <Container className="mt-8 sm:mt-16">
        <h1 className="pb-10 text-center text-4xl font-bold text-insp2 dark:text-white">
          Contact Us
        </h1>
        <section className="body-font rounded-md bg-white p-5 text-gray-600 dark:bg-zinc-800">
          <div className="text-center sm:py-8 sm:pr-8">
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src={Rammanohar}
                alt="Ram Manohar Shanthaveri"
                width={200}
                height={200}
                className="rounded-full shadow-xl"
              />
              <h2 className="title-font mt-4 text-lg font-medium text-gray-900 dark:text-zinc-100">
                Ram Manohar Shanthaveri
              </h2>
              <p className="text-base text-zinc-800 dark:text-zinc-200">
                Son of Shanthaveri Gopala Gowda
              </p>
              <div className="mt-5 rounded-md border py-3 px-5">
                <p className="text-dark flex items-center text-sm font-medium dark:text-zinc-100">
                  <span className="text-primary mr-3">
                    <svg
                      width="19"
                      height="21"
                      viewBox="0 0 19 21"
                      className="fill-current"
                    >
                      <path d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z" />
                      <path d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z" />
                      <path d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z" />
                    </svg>
                  </span>
                  <a href="tel:9901803300">
                    <span>+91 9901803300</span>
                  </a>
                </p>
                <p className="text-dark mt-3 flex items-center text-sm font-medium dark:text-zinc-100">
                  <span className="text-primary mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="21"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </span>
                  <span>
                    <a href="mailto:shanthaveri@gmail.com">
                      shanthaveri@gmail.com
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12 flex items-center justify-center rounded-md bg-white dark:bg-zinc-800">
          <div className="px-6 py-6">
            <p className="text-md mb-3 text-center font-medium text-gray-700 dark:text-white">
              Contact the Developer
            </p>
            <p className="text-dark mt-3 flex items-center justify-center text-sm font-medium dark:text-zinc-100">
              <span className="text-primary mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="21"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </span>
              <span>
                <a href="mailto:shravanrevanna@gmail.com">
                  shravanrevanna@gmail.com
                </a>
              </span>
            </p>
          </div>
        </section>
      </Container>
    </>
  )
}
