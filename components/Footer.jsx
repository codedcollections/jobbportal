import { storyblokEditable } from "@storyblok/react/rsc"

export default function Footer({ blok }) {
  return (
    <footer {...storyblokEditable(blok)}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        dolore. Qui asperiores voluptas nostrum amet, quaerat exercitationem
        tempore deleniti error vel iure, possimus eaque laborum dolorum at
        dolore atque ipsam!
      </p>
    </footer>
  )
}
