import CompanyLogoSvg from '../../static/company-logo.svg';
import TwitterSvg from '../../static/twitter.svg';
import InstagramSvg from '../../static/instagram.svg';
import FacebookSvg from '../../static/facebook.svg';

const Footer = () => {
  return (
    <div tw="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div tw="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div tw="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            tw="inline-flex items-center"
          >
            <CompanyLogoSvg tw="w-8 text-deep-purple-accent-400" />
            <span tw="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Company
            </span>
          </a>
          <div tw="mt-4 lg:max-w-sm">
            <p tw="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p tw="mt-4 text-sm text-gray-800">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div tw="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p tw="font-semibold tracking-wide text-gray-800">
              Category
            </p>
            <ul tw="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  World
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  References
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p tw="font-semibold tracking-wide text-gray-800">
              Business
            </p>
            <ul tw="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Web
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  eCommerce
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Entertainment
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p tw="font-semibold tracking-wide text-gray-800">Apples</p>
            <ul tw="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Brochure
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Nonprofit
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Educational
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p tw="font-semibold tracking-wide text-gray-800">Cherry</p>
            <ul tw="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Infopreneur
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Wiki
                </a>
              </li>
              <li>
                <a
                  href="/"
                  tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Forum
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div tw="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p tw="text-sm text-gray-600">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <div tw="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            href="/"
            tw="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <TwitterSvg tw="h-5" />
          </a>
          <a
            href="/"
            tw="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <InstagramSvg tw="h-6" />
          </a>
          <a
            href="/"
            tw="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <FacebookSvg tw="h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
