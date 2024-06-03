import React, { useState, useEffect } from 'react'
import './NavbarLogin.scss'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiFillCloseCircle, AiOutlineSetting, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { MdHistory } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import img from '../../images/avatar_login.jpg'


export default function index() {

  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id;
      axios.get(`http://localhost:8080/api/user/${userId}`)
        .then((response) => {
          const userData = response.data.data;
          setUser(userData);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  }, []);

  const navigate = useNavigate();

  const notify = () => toast("Feature being updated, please come back later!");

  // toggle show navbar
  const [active, setActive] = useState('navBar')

  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  // close navBar 
  const closeNav = () => {
    setActive('navBar')
  }

  // add background color to the header
  const [transparent, setTransparent] = useState('header')
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader')
    }
    else {
      setTransparent('header')
    }
  }
  // window.addEventListener('scroll', addBg)

  useEffect(() => {
    window.addEventListener('scroll', addBg);
    return () => {
      window.removeEventListener('scroll', addBg);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        // Hide elements with classes closeNavbar and toggleNavbar
        document.querySelector('.closeNavbar').style.display = 'none';
        document.querySelector('.toggleNavbar').style.display = 'none';
      } else {
        // Show elements with classes closeNavbar and toggleNavbar
        document.querySelector('.closeNavbar').style.display = 'block';
        document.querySelector('.toggleNavbar').style.display = 'block';
      }
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  function handleLogout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <section className='navBarSection'>
      <div className={transparent}>

        <div className='logoDiv'>
          <a href="#" className='logo' onClick={() => navigate('/')}>
            <h1 className='flex font-bold text-xl'><SiYourtraveldottv className='icon' />
            BookingChill
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink" onClick={() => navigate("/")}>Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink" onClick={() => navigate('/list-tour')}>List Chill</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink" onClick={() => navigate('/history-booking-tour')}>History Booking</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink" onClick={() => navigate("/gallery")}></a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink" onClick={() => navigate("/News")}></a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink" onClick={() => navigate("/about")}></a>
            </li>

            <div className="headerBtns flex items-center relative pl-4">
              <div className="avatar" onClick={toggleMenu}>
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="rounded-full h-8 w-8 cursor-pointer hover:animate-bounce"
                />
              </div>

              {showMenu && (
                <div className="flex dropdown-menu absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md overflow-hidden transform origin-top transition-all duration-300" style={{ border: '1px solid grey', boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.4)' }}>
                  <ul className="py-3 px-5">
                    <div className='rounded-full bg-orange-400 text-slate-50 px-3 mb-3 hover:bg-orange-500 hover:cursor-pointer'
                      style={{ boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.3)' }}
                    >
                      <span className='flex justify-center text-center font-medium'>User</span>
                    </div>
                    <li className="menu-item flex items-center hover:underline hover:cursor-pointer hover:text-orange-400" onClick={notify}>
                      <AiOutlineSetting className="menu-icon" />
                      <span className="ml-4">Settings</span>
                    </li>
                    <div className='mt-2 mb-2' style={{ border: '1px solid lightgrey', boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.2)' }}></div>
                    <li className="menu-item flex items-center hover:underline hover:cursor-pointer hover:text-orange-400" onClick={() => navigate("/profile")}>
                      <AiOutlineUser className="menu-icon" />
                      <span className="ml-4">Profile</span>
                    </li>
                    <div className='mt-2 mb-2' style={{ border: '1px solid lightgrey', boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.2)' }}></div>
                    <li className="menu-item flex items-center hover:underline hover:cursor-pointer hover:text-orange-400" onClick={handleLogout}>
                      <AiOutlineLogout className="menu-icon" />
                      <span className="ml-4">Logout</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

          </ul>

          <div onClick={closeNav} className='closeNavbar'>
            <AiFillCloseCircle className='icon' />
          </div>

        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>

      </div>
    </section>
  )
}
