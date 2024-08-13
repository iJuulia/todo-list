import todoLogo from '../assets/rocket.svg'

export function Header() {
  return (
    <header className='flex h-52 select-none items-center justify-center bg-gray-700'>
      <div className='flex items-center justify-center gap-3'>
        <img src={todoLogo} />
        <h1 className='text-4xl font-black'>
          <span className='text-blue-light'>to</span>
          <span className='text-purple-light'>do</span>
        </h1>
      </div>
    </header>
  )
}
