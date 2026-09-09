import Image from "next/image"
import { storyblokEditable } from "@storyblok/react/rsc"
import Input from "./ui/InputUI"

export default function Footer({ blok }) {
  return (
    <footer
      className="flex justify-between mt-9 bg-gray-100 rounded-sm m-2"
      {...storyblokEditable(blok)}
    >
      {blok.ctaImage?.filename && (
        <Image
          src={blok.ctaImage?.filename}
          alt="mail icon"
          width={45}
          height={45}
        />
      )}
      <div>
        <h2 className="font-bold">{blok.ctaHeadline}</h2>
        <p>{blok.ctaText}</p>
      </div>
    </footer>
  )
}
