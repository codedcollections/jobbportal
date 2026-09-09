import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc"
import Image from "next/image"

export default function Hero({ blok }) {
  return (
    <section
      className="flex my-4 gap-1 items-center justify-between pb-8 border-b border-gray-200"
      {...storyblokEditable(blok)}
    >
      <div className="flex flex-col w-1/2 items-start">
        <h1 className="text-6xl mb-2">{blok.title}</h1>
        <p>{blok.description}</p>
        {blok.input?.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      <Image
        className="w-1/2 rounded-xl"
        src={blok.backgroundImage?.filename}
        alt={blok.backgroundImage?.filename}
        width={500}
        height={500}
      ></Image>
    </section>
  )
}
