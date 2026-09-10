import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc"

export default function Page({ blok, query, filter }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          query={query}
          filter={filter}
        />
      ))}
    </main>
  )
}
