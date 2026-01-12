/* eslint-disable react/prop-types */
function Button({ children, ...props }) {
  return <button
    {...props}
    className="bg-slate-400 p-2 rounded-md text-white">
    {children}
  </button>;
}

export default Button;