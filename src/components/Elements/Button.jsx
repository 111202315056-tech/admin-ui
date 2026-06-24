function Button(props) {
  const { children, type = "submit", variant = "primary", onClick } = props

  const baseClasses = "h-12 rounded-md text-sm w-full cursor-pointer hover:scale-105 transition-transform"
  const variantClasses = {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    secondary: "bg-gray-100 text-gray-600 hover:bg-gray-200",
  }

  const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary}`

  return (
    <button className={finalClasses} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button