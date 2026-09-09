import { storyblokEditable } from "@storyblok/react/rsc"
import InputUI from "./ui/InputUI"

export default function Input({ blok }) {
  console.log("input blok is:", blok)
  return (
    <div className="flex items-center" {...storyblokEditable(blok)}>
      <InputUI
        placeholder={blok.placeholder}
        submitText={blok.submitText}
        inputType={blok.inputType}
      />
    </div>
  )
}
