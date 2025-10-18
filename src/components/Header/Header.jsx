import logo from '../../assets/logo.png'
import { format} from "date-fns";
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-8'>
            <img className='w-[250px] md:w-[450px]' src={logo}alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format (new Date(), "EEEE, MMMM, MM, yyyy")}</p>
        </div>
    );
};

export default Header;