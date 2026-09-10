import { getStoryblokApi } from "@storyblok/react"
import SelectUI from "./ui/SelectUI"

export default async function CategorySelect() {
  const storyblokApi = getStoryblokApi()
  let departments = null
  try {
    const response = await storyblokApi.get("cdn/datasource_entries/", {
      datasource: "job-departments",
    })
    departments = response.data.datasource_entries
  } catch (error) {
    console.error(error)
  }

  return <SelectUI departments={departments} />
}
