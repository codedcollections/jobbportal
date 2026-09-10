import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc"

const Grid = ({ blok, query, filter }) => (
  <div
    {...storyblokEditable(blok)}
    className="grid grid-cols-[70%_30%] w-full items-center justify-items-center"
  >
    {blok.columns.map((nestedBlok) => (
      <StoryblokServerComponent
        blok={nestedBlok}
        query={query}
        filter={filter}
        key={nestedBlok._uid}
      />
    ))}
  </div>
)

export default Grid
