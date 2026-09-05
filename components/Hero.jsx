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
        backgroundPosition: "center",
        /* 				backgroundImage: `url(${blok.backgroundImage.filename})`,
				
				backgroundSize: 'cover',
				backgroundPosition: 'center',*/
      }
    : undefined

  return (
    <section
      className="flex justify-between"
      {...storyblokEditable(blok)}
      style={backgroundStyle}
    >
      <h1>{blok.title}</h1>
      <p>{blok.description}</p>
      {blok.blocks?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  )
}
