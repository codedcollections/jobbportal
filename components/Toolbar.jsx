import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc"
import Button from "./ui/ButtonUI"

export default function Toolbar({ blok, query, filter }) {
  return (
    <form
      action="/"
      className="flex flex-col gap-4 mt-3"
      method="get"
      {...storyblokEditable(blok)}
    >
      {blok.blocks?.map((nestedBlok) => (
        <StoryblokServerComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          query={query}
          filter={filter}
        />
      ))}
      <Button />
    </form>
  )
}
