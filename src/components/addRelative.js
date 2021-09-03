import { useState } from "react"

export const AddRelative = () => {
  const [relatives, setRelatives] = useState([])
  console.log("relatives: ", relatives)

  const handleAddRelatives = newMember => {
    setRelatives(oldState => {
      const state = [...oldState]
      state.push(newMember)
      return state
    })
  }

  return { handleAddRelatives, relatives }
}
