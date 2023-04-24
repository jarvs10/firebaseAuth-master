
const Alert = ({children}) => {
  return (
    <div className="bg-red-600 py-2 w-full text-white font-bold text-center uppercase mt-4 rounded-sm">
      {children}
    </div>
  )
}

export default Alert