import { getStoryblokApi } from "@/lib/storyblok"
import { StoryblokServerComponent } from "@storyblok/react/rsc"

export default async function JobPage({ searchParams }) {
  const params = await searchParams

  const query = params.q ?? ""
  const filter = params.filter ?? ""

  const storyblokApi = getStoryblokApi()

  const { data } = await storyblokApi.get("cdn/stories/job/", {
    version: "published",
  })

  return (
    <StoryblokServerComponent
      blok={data.story.content}
      query={query}
      filter={filter}
    />
  )
}
