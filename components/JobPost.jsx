import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc"
import { renderRichText } from "@storyblok/react/rsc"
import Link from "next/link"

export default function JobPost({ blok }) {
  const renderedContent = renderRichText(blok.content)
  return (
    <section className="max-w-[50%] mx-auto" {...storyblokEditable(blok)}>
      <p className="text-blue-700 underline mb-3">
        <Link href="/job">← se alla jobbannonser</Link>
      </p>

      <h2 className="text-lg font-bold mb-1">{blok.title}</h2>

      <p className="mb-5">
        <span className="w-fit rounded-full bg-gray-200 px-3 py-1 text-sm font-normal text-gray-700">
          {blok.department}
        </span>{" "}
        &#x2022; {blok.location + " | "}
        {new Date(blok.publishedAt).toLocaleDateString("sv-SE")}
      </p>

      <p className="text-gray-700">{blok.summary}</p>

      <div
        className="[&_p]:leading-7"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />

      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  )
}
