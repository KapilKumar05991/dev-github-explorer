
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="rounded-lg px-3 py-2 transition-all bg-[#ffffffde] dark:bg-[#212830]  hover:outline-2 outline-[#535bf2] font-semibold border cursor-pointer">{children}</button>
  )
}

export default Button