// import React,{useState} from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import Logo from '../../public/img/logo.svg';
// import Buttons from "./Buttons";
// export default function Navbar() {
//     const [isOpen,setIsopen]=useState(false);
//     const toggleMenu=()=>{
//         setIsopen(!isOpen);
//     }
//     return (
    
//         <div className="nav flex justify-between pt-10 text-center font-bold max-w-screen-xl mx-auto px-4 md:px-8 ">
//             <div className="flex justify-between ">
//                 <div className="logoP">
//                     <img src={Logo} alt="Logo" />
//                 </div>
//                 <div className="list pl-10 hidden md:block ">
//                     <ul className="flex text-p3  ">
//                         <li className="px-4  hover:text-p1 "><a href="#">Features</a></li>
//                         <li className="px-4  hover:text-p1"><a href="#">Pricing</a></li>
//                         <li className="px-4  hover:text-p1"><a href="#">Resources</a></li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="regist">
//                 <div className="block md:hidden text-p2 text-lg cursor-pointer" onClick={toggleMenu}>
//                     <FontAwesomeIcon icon={faBars} />
//                 </div>
//                 <div className=" hidden md:block">
//                     <ul className="flex gap-10 ">
//                         <li className="flex text-p3 pt-2"><a href="">Log in</a></li>
//                         <li><Buttons value='Sing UP' /></li>
//                     </ul>
//                 </div>

//             </div>
//         </div>
//     )

// }
// import React, { useState } from "react"; // <--- استيراد useState
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import Logo from '../../public/img/logo.svg'; // تأكد من المسار الصحيح
// import Buttons from "./Buttons"; // تأكد من المسار الصحيح

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false); // <--- حالة لفتح/إغلاق قائمة الموبايل

//     const toggleMenu = () => {
//         setIsOpen(!isOpen); // تبديل حالة القائمة
//     };

//     return (
//         <div className="nav flex justify-between pt-10 text-center font-bold max-w-screen-xl mx-auto px-4 md:px-8 ">
//             <div className="flex justify-between ">
//                 <div className="logoP">
//                     <img src={Logo} alt="Logo" /> {/* أضف alt للنص البديل */}
//                 </div>
//                 {/* قائمة الدسك توب: تظل مخفية على الشاشات الصغيرة */}
//                 <div className="list pl-10 hidden md:block ">
//                     <ul className="flex text-p3 ">
//                         <li className="px-4 hover:text-p1 "><a href="#">Features</a></li>
//                         <li className="px-4 hover:text-p1"><a href="#">Pricing</a></li>
//                         <li className="px-4 hover:text-p1"><a href="#">Resources</a></li>
//                     </ul>
//                 </div>
//             </div>

//             <div className="regist">
//                 {/* زر البرغر (Burger Menu Icon) - يظهر فقط على الموبايل */}
//                 <div className="block md:hidden text-p2 text-lg cursor-pointer" onClick={toggleMenu}> {/* <--- إضافة onClick هنا */}
//                     <FontAwesomeIcon icon={faBars} />
//                 </div>

//                 {/* قائمة الموبايل المنبثقة (Mobile Menu) */}
//                 {/* نستخدم التنسيقات الشرطية بناءً على حالة isOpen */}
//                 <div className={`
//                     absolute top-[10%] left-2 right-0 bg-primary text-white p-4 rounded-lg shadow-lg
//                     md:hidden ${isOpen ? 'block' : 'hidden'}
//                     transition-all duration-300 ease-in-out transform
//                     ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
//                 `}>
//                     <ul className="flex flex-col  gap-4 mb-4">
//                         <li className="hover:text-p1 text-xl mb-3"><a href="#" onClick={toggleMenu}>Features</a></li> {/* <--- إغلاق القائمة عند النقر */}
//                         <li className="hover:text-p1 text-xl mb-3"><a href="#" onClick={toggleMenu}>Pricing</a></li>
//                         <li className="hover:text-p1 text-xl mb-3"><a href="#" onClick={toggleMenu}>Resources</a></li>
//                     </ul>
//                     <hr className="border-gray-200 mb-4" /> {/* خط فاصل */}
//                     <ul className="flex flex-col gap-4">
//                         <li className="text-xl"><a href="#" onClick={toggleMenu}>Log in</a></li>
//                         <li><Buttons value='Sign Up' className="w-full text-xl" onClick={toggleMenu} /></li> {/* <--- إضافة onClick وإعطاء حجم كامل */}
//                     </ul>
//                 </div>

//                 {/* روابط الدخول/التسجيل - تظهر فقط على الدسك توب */}
//                 <div className="hidden md:block">
//                     <ul className="flex gap-10 ">
//                         <li className="flex text-p3 pt-2"><a href="#">Log in</a></li>
//                         <li><Buttons value='Sign Up' /></li> {/* زرار عام */}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../public/img/logo.svg';
import Buttons from "./Buttons";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // حالة لفتح/إغلاق قائمة الموبايل

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // div الأساسي للـ Navbar
        <div className="nav flex flex-col md:flex-row justify-between items-center pt-10 font-bold max-w-screen-xl mx-auto px-4 md:px-8 relative"> {/* <--- إضافة flex-col و flex-row */}
            
            {/* الجزء العلوي في الموبايل: اللوجو وزر البرغر */}
            <div className="flex justify-between items-center w-full md:w-auto"> {/* <--- w-full على الموبايل */}
                <div className="logoP">
                    <img src={Logo} alt="Logo" />
                </div>
                {/* زر البرغر - يظهر فقط على الموبايل */}
                <div className="block md:hidden text-p2 text-lg cursor-pointer" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>

            {/* الجزء الرئيسي للقائمة والروابط - نفس القائمة للدسك توب والموبايل */}
            {/* <--- التحكم بالظهور والتخطيط بناءً على isOpen والشاشة */}
            <div className={`
                flex-col md:flex-row md:flex md:w-auto md:justify-between md:items-center text-center 
                absolute md:relative top-full md:top-auto left-2 md:left-auto right-0 md:right-auto
                w-full bg-primary md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none
                ${isOpen ? 'flex' : 'hidden'} 
                ${isOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-4 opacity-0'} 
                md:transform-none md:opacity-100 md:transition-none
                transition-all duration-300 ease-in-out
            `}>
                {/* روابط التنقل (Features, Pricing, Resources) */}
                <div className="list md:pl-10">
                    <ul className="flex flex-col md:flex-row text-white md:text-p3 gap-4 md:gap-0"> {/* <--- flex-col على الموبايل، flex-row على الدسك توب */}
                        <li className="px-4 hover:text-p1 "><a href="#" onClick={toggleMenu}>Features</a></li>
                        <li className="px-4 hover:text-p1"><a href="#" onClick={toggleMenu}>Pricing</a></li>
                        <li className="px-4 hover:text-p1"><a href="#" onClick={toggleMenu}>Resources</a></li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-4 md:hidden" /> {/* <--- خط فاصل يظهر فقط على الموبايل */}

                {/* روابط الدخول/التسجيل */}
                <div className="regist">
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-10"> {/* <--- flex-col على الموبايل، flex-row على الدسك توب */}
                        <li className="flex justify-center  text-white md:text-p3 md:pt-2"><a href="#" onClick={toggleMenu}>Log in</a></li> {/* <--- justify-center لمركزة العنصر في الموبايل */}
                        <li><Buttons value='Sign Up' className="w-full" onClick={toggleMenu} /></li> {/* <--- w-full على الموبايل */}
                    </ul>
                </div>
            </div>
        </div>
    );
}