import { Image } from "@nextui-org/react"
import React from "react"

export const Logo = () => {
  return (
    <>
      <Image alt="nextui logo"
        height={40}
        radius='sm'
        src="https://avatars.githubusercontent.com/u/88533355?v=4"
        width={40}
        className="min-w-[40px]"
        />
    </>
  )
}