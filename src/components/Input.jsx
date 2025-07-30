
export const Input = ({ onChange, placeholder }) => {
  return (
    <input onChange={onChange} className='border w-full px-2 py-1 rounded-lg' type="text" placeholder={placeholder} />
  )
}
