import { Suspense } from "react"
import Image from "next/image"
import { headerImages1, headerImages2 } from "@lib/data/data"
import { listRegions } from "@lib/data"
import usaImg from "/public/header/usa.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    // <div className="sticky top-0 inset-x-0 z-50 group">
    //   <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
    //     <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
    //       <div className="flex-1 basis-0 h-full flex items-center">
    //         <div className="h-full">
    //           <SideMenu regions={regions} />
    //         </div>
    //       </div>

    //       <div className="flex items-center h-full">
    //         <LocalizedClientLink
    //           href="/"
    //           className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
    //           data-testid="nav-store-link"
    //         >
    //           Store
    //         </LocalizedClientLink>
    //       </div>

    //       <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
    //         <div className="hidden small:flex items-center gap-x-6 h-full">
    //           {process.env.FEATURE_SEARCH_ENABLED && (
    //             <LocalizedClientLink
    //               className="hover:text-ui-fg-base"
    //               href="/search"
    //               scroll={false}
    //               data-testid="nav-search-link"
    //             >
    //               Search
    //             </LocalizedClientLink>
    //           )}
    //           <LocalizedClientLink
    //             className="hover:text-ui-fg-base"
    //             href="/account"
    //             data-testid="nav-account-link"
    //           >
    //             Account
    //           </LocalizedClientLink>
    //         </div>
    //
    //       </div>
    //     </nav>
    //   </header>
    // </div>
    <nav className="w-full">
      <div className="container mx-auto md:px-10 lg:px-20 lg:pt-10 pt-5 md:pb-4">
        <div className="flex flex-col   ">
          <div className="flex flex-row justify-between items-center border-b pb-2 sm:pb-5">
            <div className="flex flex-col sm:w-full sm:pr-3 justify-between sm:flex-row gap-2 sm:gap-5 items-center">
              <div className="flex flex-row gap-5 items-center">
                {headerImages1.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                  />
                ))}
              </div>
              <div className="flex max-sm:justify-between max-sm:w-full sm:flex-row gap-2 sm:gap-5">
                <div className="flex-1 top-0 basis-0 h-full flex items-center">
                  <div className="h-full ">
                    <SideMenu regions={regions} />
                  </div>
                </div>

                <Suspense
                  fallback={
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base flex gap-2"
                      href="/cart"
                      data-testid="nav-cart-link"
                    >
                      Cart (0)
                    </LocalizedClientLink>
                  }
                >
                  <CartButton />
                </Suspense>
              </div>
            </div>
            <div className="hidden sm:flex gap-1">
              <Image
                src={usaImg}
                alt="usa"
                width={usaImg.width}
                height={usaImg.height}
              ></Image>
              <select
                title="Select language"
                className="font-rubik  text-base leading-[20px] tracking-[0.18px] text-[#161D25]
                bg-white"
              >
                <option>English (US)</option>
                <option>Bulgarian</option>
              </select>
            </div>

            <div className="flex sm:hidden flex-col gap-1 items-end">
              <div className="flex gap-1">
                <Image
                  src={usaImg}
                  alt="usa"
                  width={usaImg.width}
                  height={usaImg.height}
                ></Image>
                <select
                  title="Select language"
                  className="font-rubik text-sm sm:text-base leading-[20px] tracking-[0.18px] text-[#161D25]
                bg-white"
                >
                  <option>English (US)</option>
                  <option>Bulgarian</option>
                </select>
              </div>
              <div className="w-fit">
                <div className="flex flex-col text-start bg-white">
                  <p className="font-rubik max-lg:text-sm text-base leading-[20px] tracking-[0.18px] text-[#637381]">
                    Ivan Todorov
                  </p>
                  <select
                    title="Select Profile"
                    className="font-rubik max-lg:text-sm text-base leading-[20px] tracking-[0.18px] text-[#161D25]"
                  >
                    <option>My Account</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-black">
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
              </button>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-2 md:mt-5">
          <div className="flex flex-row gap-2 max-sm:w-full justify-between items-center pb-3">
            <Link
              href={"/"}
              className="font-rubik font-bold w-fit text-[24px] md:text-[28px] leading-[44px] tracking-[0.2px] "
            >
              STORE
            </Link>
            <div className="sm:hidden flex  flex-row md:gap-5 items-center">
              <div className="flex flex-row gap-2 max-sm:scale-75 md:gap-5 ">
                {headerImages2.map((img, index) => (
                  <Link href="/" key={index} className="relative">
                    <Image
                      src={img}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                    />
                    {index === 0 && (
                      <span className="absolute font-roboto top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-700 rounded-full">
                        3
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#F9FAFB] sm:max-md:w[80%]  rounded-lg pl-2 lg:pl-3 flex flex-row lg:gap-2">
            <input
              type="text"
              placeholder="Search something.."
              className="bg-[#F9FAFB] max-sm:w-[70%] focus:outline-none placeholder:text-[#637381] text-[#637381] font-Rubik"
            ></input>

            <select
              title="Select Categories"
              className="bg-[#F9FAFB] focus:outline-none placeholder:text-[#637381] text-[#637381] font-Rubik"
            >
              <option>All categories</option>
              <option>Phones</option>
            </select>

            <div className="p-2 lg:p-3 bg-[#212B36] hover:bg-[#43467F] rounded-lg cursor-pointer">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-white"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className="hidden sm:flex flex-row gap-5 items-center">
            <div className="flex flex-row gap-5 max-lg:scale-75">
              {headerImages2.map((img, index) => (
                <Link href="/" key={index} className="relative">
                  <Image
                    src={img}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                  />
                  {index === 0 && (
                    <span className="absolute font-roboto top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-700 rounded-full">
                      3
                    </span>
                  )}
                </Link>
              ))}
            </div>
            <div className="flex flex-col text-start bg-white">
              <p className="font-rubik max-lg:text-sm text-base leading-[20px] tracking-[0.18px] text-[#637381]">
                Ivan Todorov
              </p>
              <select
                title="Select Profile"
                className="font-rubik max-lg:text-sm text-base leading-[20px] tracking-[0.18px] text-[#161D25]"
              >
                <option>My Account</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
