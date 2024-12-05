import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="w-full text-gray-700 bg-gray-100 dark:bg-dark body-font">
      <div className="container lg:max-w-7xl flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 mx-auto text-center md:mx-0 md:text-left md:pl-20">
          <Link className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <img src="/logo.jpg" alt="keep" className="w-7 h-7 md:w-8 md:h-8" />
            <span className="dark:text-white text-heading-5 font-bold hidden md:block">
              hill Gamer
            </span>
          </Link>

          <p className="mt-2 text-sm text-gray-500">
            A Game Review Application
          </p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a
                href="https://www.facebook.com/thisisrashadulislam/"
                target="_blank"
                className="text-gray-500 cursor-pointer hover:text-primary-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://x.com/StackRashad"
                target="_blank"
                className="ml-3 text-gray-500 cursor-pointer hover:text-primary-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/rashadstack/"
                target="_blank"
                className="ml-3 text-gray-500 cursor-pointer hover:text-primary-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rashadstack/"
                target="_blank"
                className="ml-3 text-gray-500 cursor-pointer hover:text-primary-700">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 lg:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 dark:text-white uppercase title-font">
              About
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  Company
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  Careers
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  Blog
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 dark:text-white uppercase title-font">
              Support
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  Contact Support
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  Help Resources
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  Release Updates
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 dark:text-white uppercase title-font">
              Platform
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  Terms &amp; Privacy
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  Pricing
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  FAQ
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 dark:text-white uppercase title-font">
              Contact
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  Send a Message
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  Request a Quote
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-primary-900 text-sm">
                  +123-456-7890
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 dark:bg-secondary-900">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-gray-700 dark:text-white capitalize xl:text-center">
            © {new Date().getFullYear()} All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
