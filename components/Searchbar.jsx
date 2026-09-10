import { storyblokEditable } from "@storyblok/react/rsc"
import InputUI from "./ui/InputUI"

export default function SearchBar({ blok, query }) {
  return (
    <>
      <InputUI
        {...storyblokEditable(blok)}
        inputType={blok.inputType}
        placeholder={blok.placeholder}
        query={query}
      />
    </>
  )
}
