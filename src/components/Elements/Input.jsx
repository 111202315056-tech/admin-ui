import React from "react"

function Input(props) {
  const {
    id,
    icon = false,
    backgroundColor = false,
    border = "border-gray-dx",
    ...rest
  } = props

  return (
    <div>
      <input
        className={`py-0 p-4 text-sm rounded-md w-full border text-gray-dx focus:outline-none focus:ring-0 ${backgroundColor || ""}`}
        id={id}
        {...rest}
      />
    </div>
  )
}

export default Input