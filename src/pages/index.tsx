import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`bg-whitepy-24 sm:py-32 py-24 ${inter.className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I&apos;m{" "}
            <span className="text-indigo-700 underline underline-offset-8">
              Nana Adjei Manu
            </span>
            .
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            I&apos;m a software engineer. I love building software with web
            technologies. I&apos;ve written lots of Ruby, JavaScript and
            TypeScript for small to large startups and companies with domain
            experience in Ecommerce, Finance, Insurance, Fintech & other SaaS.
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            I&apos;m almost a musician. I play guitar and sing (mostly in the
            shower) . I write articles about what i&apos;m learning and/or
            building on my{" "}
            <a
              href="/blog"
              className="text-xl font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline underline-offset-8"
            >
              blog
            </a>
            . I&apos;ve also built some cool{" "}
            <a
              href="/projects"
              className="text-xl font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline underline-offset-8"
            >
              projects.
            </a>
          </p>

          <p className="mt-6 text-xl leading-8 text-gray-600">
            Like most programmers, i{" "}
            <a
              href="https://twitter.com/nmanu__"
              target="_blank"
              rel="noopener"
              className="text-xl font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline underline-offset-8"
            >
              tweet
            </a>{" "}
            about my daily frustrations, try to keep an updated {""}
            <a
              href="https://linkedin.com/in/nana-adjei-manu"
              target="_blank"
              rel="noopener"
              className="text-xl font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline underline-offset-8"
            >
              resume
            </a>
            {""} and {""}
            <a
              href="https://github.com/claeusdev"
              target="_blank"
              rel="noopener"
              className="text-xl font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline underline-offset-8"
            >
              commit and contribute to open source.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
