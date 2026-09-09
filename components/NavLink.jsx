import { storyblokEditable } from "@storyblok/react/rsc"

export default function NavLink({ blok }) {
  let url = blok.link?.url ? blok.link?.url : blok.link?.cached_url

  if (url === "home") {
    url = "/"
  }

  return (
    <li className="flex uppercase" {...storyblokEditable(blok)}>
      <a className="hover:font-bold" href={url}>
        {blok.label}
      </a>
    </li>
  )
}
