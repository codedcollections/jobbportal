import { storyblokEditable } from "@storyblok/react/rsc"
import { getStoryblokApi } from "@/lib/storyblok"
import Link from "next/link"

export default async function JobList({ blok }) {
  const storyblokApi = getStoryblokApi()

  const { data } = await storyblokApi.getStories({
    version: "draft",
    starts_with: "job/",
    content_type: "job-post",
  })

  const stories = data.stories

  return (
    <section className="" {...storyblokEditable(blok)}>
      {blok.heading && <h1>{blok.heading}</h1>}

      {stories.length === 0 ? (
        <p>{blok.empty_text || "Inga inlägg."}</p>
      ) : (
        stories.map((story) => (
          <article className="mb-6" key={story.uuid}>
            <div className="flex flex-col max-w-[40%] gap-2 ">
              <h2 className="text-lg font-bold">
                <Link href={`/${story.full_slug}`}>{story.content.title}</Link>
              </h2>

              <p>{story.content.summary}</p>
              <p className="w-fit rounded-full bg-gray-200 px-3 py-1 text-sm font-normal text-gray-700">
                {story.content.department}
              </p>
            </div>
          </article>
        ))
      )}
    </section>
  )
}
