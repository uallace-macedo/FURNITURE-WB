import { Link } from 'react-scroll';
import { navigation } from '../../data';

const NavMobile = () => {
  return (
    <nav className="bg-white w-full h-full shadow-2xl">
      <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
        {navigation.map((item, index) => (
          <li key={index}>
            <Link to={item.name} smooth={true} duration={500} offset={-70} className='select-none capitalize text-xl font-medium cursor-pointer'>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMobile;