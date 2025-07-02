import Buttons from "../component/Buttons";
import work from '../assets/illustration-working.svg';

export default function Define() {
    return (
        <div className=" max-w-screen-xl mx-auto px-4 md:px-8 mb-32  md:mt-10 md:mb-32 flex flex-col-reverse md:flex-row  justify-between items-center">
            <div className="detailes text-center md:text-left mt-10 md:mt-0">
                <h1 className="text-p1 text-3xl font-bold pb-5  md:text-7xl">More than just shorter links </h1>
                <p className="text-p3 text-md pb-5">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <Buttons value='Get Started' className='text-lg px-10 py-3' />
            </div>
            <div className="photo container overflow-visible ">
                <img src={work} alt="" className="max-w-none ml-0 w-[140%] md:w-[120%] md:ml-[30%]" />
            </div>
        </div>)
}