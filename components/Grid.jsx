import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc"

const Grid = ({ blok }) => (
  <div
    {...storyblokEditable(blok)}
    className="grid grid-cols-[70%_30%] w-full items-center justify-items-center"
  >
    {blok.columns.map((nestedBlok) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
)

export default Grid
