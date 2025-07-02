import Img1 from '../assets/icon-brand-recognition.svg';
import Img2 from '../assets/icon-detailed-records.svg';
import Img3 from '../assets/icon-fully-customizable.svg';
import '../App.css';
export default function Form() {
    return (
        <div className=" max-w-screen-xl mx-auto px-4 md:px-8 ">
            <div className="text-center mx-auto mb-20 md:w-[50%]">
                <h1 className="text-5xl font-bold mb-5">Advance Statistic</h1>
                <p className="text-p3 text-sm md:text-lg">Track how your links are performing across the web with our advanced statistics dashboard. </p>
            </div>
            {/* cards */}
            <div className="cards">
                <span className="
                    absolute z-0 bg-second transform -translate-x-1/2 md:-translate-y-1/2
                    md:top-1/2 md:left-0 md:right-0 md:h-2 md:w-full md:transform-none 
                    top-0 left-[45%] w-2 h-full 
                    ">
                </span>
                <div className="card" >
                    <div className="cardIcon">
                        <img src={Img1} alt="" className="" />
                    </div>
                    <div className='px-7 pb-7 pt-16'>
                        <h3 className='font-bold md:text-xl mb-3'>Brand Recognition  </h3>
                        <p className='text-p3 text-xs md:text-sm'>Boost your brand recognition with each click. Generic links don’t mean a thing.Branded links help instil confidence in your content. </p>
                    </div>
                </div>
                <div className="card top-10 z-10">
                    <div className="cardIcon">
                        <img src={Img2} alt="" className="" />
                    </div>
                    <div className='px-7 pb-7 pt-16'>
                        <h3 className='font-bold md:text-xl mb-3'>Detailed Records </h3>
                        <p className='text-xs md:text-sm text-p3'> Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions. </p>
                    </div>
                </div>
                <div className="card top-20">
                    <div className="cardIcon">
                        <img src={Img3} alt="" className="" />
                    </div>
                    <div className='px-7 pb-7 pt-16'>
                        <h3 className='font-bold text-xl mb-3'>Fully Customizable </h3>
                        <p className='text-p3 text-xs md:text-sm'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
