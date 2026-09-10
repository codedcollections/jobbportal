import { storyblokEditable } from "@storyblok/react/rsc"
import InputUI from "./ui/InputUI"
import ButtonUI from "./ui/ButtonUI"

export default function InputFooter({ blok }) {
  return (
    <form className="flex items-center gap-1" {...storyblokEditable(blok)}>
      <InputUI
        placeholder={blok.placeholder}
        submitText={blok.submitText}
        inputType={blok.inputType}
      />
      <ButtonUI submitText={blok.submitText} />
    </form>
  )
}
