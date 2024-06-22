import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import { footerLogos } from "@lib/data/data"
import Image from "next/image"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="w-full">
    <div className="container mx-auto max:sm:mt-5 mt-10 md:px-20 pb-10">
      <div className="flex flex-col sm:flex-row justify-between ">
          <p className="font-roboto text-sm leading-[20px] text-[#5A7184]">Store © Copyright 2024, Inc. All rights reserved</p>
      <div className="flex flex-row max-sm:mt-2 gap-4">
          {footerLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          ))}
      </div>
      </div>
    </div>
  </footer>
  )
}
