import classImg from '../../src/assets/class.png'
import playground from '../../src/assets/playground.png'
import swimming from '../../src/assets/swimming.png'
import bg from '../../src/assets/bg.png'

const Qzone = () => {
    return (
     <div className="space-y-8 max-w-md mx-auto my-12 bg-base-200 p-5">
      <img src={swimming} alt="Swimming" className="w-full h-40  rounded-lg " />
      <img src={classImg} alt="Class" className="w-full h-40  rounded-lg shadow-sm" />
      <img src={playground} alt="Playground" className="w-full h-40 rounded-lg shadow-sm" />
      <img src={bg} alt="Background" className="w-full h-40 rounded-lg shadow-sm" />
    </div>


    );
};

export default Qzone;