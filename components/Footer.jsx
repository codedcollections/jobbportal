import Image from "next/image"
import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc"

export default function Footer({ blok }) {
  return (
    <footer
      className="flex mt-9 py-3 px-5 justify-between bg-gray-100 rounded-2xl m-2"
      {...storyblokEditable(blok)}
    >
      <div className="flex gap-3">
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
      </div>
      {blok.input?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </footer>
  )
}
