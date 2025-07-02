import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,faTwitter, faPinterest  } from '@fortawesome/free-brands-svg-icons'; 
import '../App.css'

export default function Footer() {
    return (

        <div className='bg-backfooter md:flex  text-center justify-between max-w-screen-xl mx-auto py-11 px-14' >
            <div>
                <h1 className='font-bold text-white text-3xl mb-3'>Shortly</h1>
            </div>
            <div className='md:flex  text-white md:text-left gap-11 text-sm'>
                <ul className='mb-7'>
                    <li className='mb-4'><a href='#'>Features</a></li>
                    <li className='ulli'><a href='#'>Link Shortening</a></li>
                    <li className='ulli'><a href='#'>Branded Links</a></li>
                    <li className='ulli'><a href='#'>Analytics</a></li>
                </ul>
                <ul className='mb-7'>
                    <li className='mb-4'><a href='#'>Resources</a></li>
                    <li className='ulli'><a href='#'>Blog</a></li>
                    <li className='ulli'><a href='#'>Developers</a></li>
                    <li className='ulli'><a href='#'>Support</a></li>
                </ul>
                <ul className='mb-7'>
                    <li className='mb-4 '><a href='#'>Company</a></li>
                    <li className='ulli'> <a href='#'>About</a>  </li>
                    <li className='ulli'> <a href='#'>Our Team </a></li>
                    <li className='ulli'> <a href='#'>Careers</a></li>
                    <li className='ulli'>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='inline-flex md:flex '>
                <div className='px-2 text-white hover:text-second cursor-pointer text-2xl'>
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className='px-2 text-white hover:text-second cursor-pointer text-2xl'>
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className='px-2 text-white hover:text-second cursor-pointer text-2xl'>
                    <FontAwesomeIcon icon={faPinterest} />
                </div>
                <div className='px-2 text-white hover:text-second cursor-pointer text-2xl' >
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
        </div>
    )
}