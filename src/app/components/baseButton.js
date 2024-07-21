'use client'
/* use for Links 
    <Link href='ref'>
     <BaseButton>go to ref</BaseButton>
    </Link>
*/
const BaseButton = ({ onClick, children, className, disabled = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-accent hover:bg-emerald-950 text-white mx-2 py-2 px-4 font-buttonfont ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
export default BaseButton
