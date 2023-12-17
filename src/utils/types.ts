import { IconType } from "react-icons"

export interface Works{
  title: string
  url: string
  description: string
  color?:string
}

export interface Favorite {
  title: string
  description:string
  color:string
}

export interface Skill {
  url: string
  color?: string
  name: string
}