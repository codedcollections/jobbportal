import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc"

export default function Hero({ blok }) {
  const backgroundStyle = blok.backgroundImage?.filename
    ? {
        backgroundImage: `url(${blok.backgroundImage.filename})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        /* 				backgroundImage: `url(${blok.backgroundImage.filename})`,
				
				backgroundSize: 'cover',
				backgroundPosition: 'center',*/
      }
    : undefined

  return (
    <section
      className="flex my-4 gap-1 items-center"
      {...storyblokEditable(blok)}
      style={backgroundStyle}
    >
      <div className="w-1/2">
        <h1 className="text-6xl mb-2">{blok.title}</h1>
        <p>{blok.description}</p>
      </div>
      {blok.input?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  )
}
