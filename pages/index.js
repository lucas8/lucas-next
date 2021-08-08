import Head from 'next/head'
import { motion } from 'framer-motion'

import Background from '../components/Background'
import Title, { nameDelay } from '../components/Title'
import Link from '../components/Link'

const workProjects = [
  {
    title: 'Primer',
    description: 'Online homeschooling communities.',
    image: 'primer.png',
    href: 'https://withprimer.com',
  },
  {
    title: 'Tunedin',
    description: 'Listen to spotify with friends.',
    image: 'tunedin.png',
    href: 'https://github.com/lucas8/tunedin',
  },
  {
    title: 'Snippet',
    description: 'Collaboratively share code snippets, in seconds.',
    image: 'snippet.png',
    href: 'https://github.com/lucas8/snippet',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Stettner</title>
        <link rel="icon" href="/static/img/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center pt-8 md:px-16 px-2">
        <Background />
        <motion.main
          variants={{
            hidden: { backgroundColor: 'transparent', y: 8 },
            visible: { backgroundColor: 'white', y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: 'spring', delay: nameDelay }}
          className="bg-white overflow-auto rounded-lg md:p-8 p-4 h-full max-w-4xl w-full z-10 relative"
        >
          <div className="flex justify-between">
            <Title />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 4 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ delay: nameDelay }}
            >
              <div className="flex align-center justify-center">
                <a href="https://www.twitter.com/lucasstettner/">
                  <div
                    className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center cursor-pointer"
                    style={{ backgroundColor: '#1DA1F2' }}
                  >
                    <svg
                      className="fill-current text-white w-5 h-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="https://www.github.com/lucas8/">
                  <div className="ml-4 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-black flex items-center justify-center cursor-pointer">
                    <svg
                      className="fill-current text-white w-5 h-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="github"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/lucas-stettner-5316231b2/">
                  <div
                    className="ml-4 w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center cursor-pointer"
                    style={{ backgroundColor: '#2867B2' }}
                  >
                    <svg
                      className="fill-current text-white w-5 h-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin-in"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 4 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: nameDelay }}
          >
            <p className="font-mono mt-4 text-gray-600 text-sm md:text-base">
              I’m a developer, aspiring designer and incoming freshman at the{' '}
              <Link href="https://uwaterloo.ca/future-students/programs/global-business-and-digital-arts">
                University of Waterloo
              </Link>
              , currently on a gap year in San Francisco. Born and raised in
              Brooklyn, NY 🏙️. I'm currently building experiences for ambitious
              kids at <Link href="https://withprimer.com">Primer</Link> and
              mentoring students at{' '}
              <Link href="https://www.nanohackers.org">
                Nano Hackers Academy
              </Link>{' '}
              on the side.
            </p>
            <h2 className="font-subheader text-xl md:text-2xl text-gray-900 mt-10 mb-4">
              work
            </h2>
            <div
              className="grid auto-rows-auto gap-4"
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              }}
            >
              {workProjects.map((project, i) => (
                <a key={i} href={project.href} className="no-underline">
                  <div className="group relative cursor-pointer min-h-full">
                    <div className="absolute top-0 left-0 w-full h-full rounded-md transition-all group-hover:scale-105 group-hover:bg-gray-100" />
                    <img
                      className="rounded-md h-28 w-full object-cover relative  z-10"
                      src={`/static/img/${project.image}`}
                    />
                    <h4 className="mt-2 font-mono font-bold text-base md:text-lg text-gray-900 relative  z-10">
                      {project.title}
                    </h4>
                    <span className="font-mono text-sm md:text-base text-gray-500 relative z-10">
                      {project.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.main>
      </div>
    </>
  )
}
