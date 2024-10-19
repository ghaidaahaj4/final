import {Button, Img, Text} from "./index";
import {Heading} from './Heading';
import React, {useRef, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import LogoutTooltip from "./logout";
import {signOut} from 'firebase/auth';
import {app, auth } from '../firebase/firebase';
import "../styles/index.css";
export default function Header({...props}) {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();

    console.log(userInfo);

    const tooltipRef = useRef();

    const handleLogout = () => {
        const confirmed = window.confirm('Are you sure you want to logout?');
        if (confirmed) {
            signOut(auth)
                .then(() => {
                  localStorage.clear();
                    // Add your additional logic here, like redirecting the user
                    // e.g., navigate('/login'); or history.push('/login');
                    navigate('/login');
                })
                .catch((error) => {
                    console.error('Error logging out:', error);
                    alert('Failed to log out. Please try again.');
                });
        } else {
            console.log('Logout canceled');
        }
        setShowTooltip(false); // Hide the tooltip regardless of the outcome
    };


    return (
        <header
            {...props}
            className={`${props.className} flex justify-center items-center px-[20px] sm:py-5 h-[106px] md:h-[210px] sm:h-[300px]`}
        >
            <div className="flex items-center w-full justify-between gap-5 md:flex-col self-stretch">
                <Link to={userInfo?.uid ? '/children' : "/home"}>
                    <Img
                        src="images/img_header_logo.png"
                        alt="Headerlogo"
                        className="h-[81px] w-[306px] md:h-[61px] md:w-[280px] sm:h-[50px] md:w-[250px] object-contain"
                    />
                </Link>
                {/*  <div className="flex items-center gap-[22px] sm:flex-col">
                    <ul className="flex flex-wrap gap-[22px]">
                        <li>
                            <NavLink to={userInfo?.uid? '/children': "/home"}>
                                <Text as="p">Home</Text>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">
                                <Text as="p">Products</Text>
                            </NavLink>
                        </li>
                       {userInfo?.uid? <li>
                            <NavLink to="/children">
                                <Text as="p">My Children</Text>
                            </NavLink>
                        </li> : null}
                        <li>
                            <NavLink to="/about">
                                <Text as="p">About</Text>
                            </NavLink>
                        </li>
                    </ul>
                    <Button
                        onClick={()=>{
                            navigate('/assest');
                        }}
                        shape="round"
                        rightIcon={
                            <Img
                                src="images/streamline_ai-technology-spark-solid.svg"
                                alt="Streamline:ai-technology-spark-solid"
                                className="h-[18px] w-[18px]"
                            />
                        }
                        className="min-w-[162px] gap-3 font-quicksand"
                    >
                        AI Assist
                    </Button>
                </div>*/}

                <div className="flex items-center gap-[22px] sm:flex-col cftayg">
                    <ul className="flex flex-wrap gap-[22px] ">
                        {!userInfo?.uid ? <li>
                            <NavLink
                                to='/home'
                                className={({isActive}) =>
                                    `px-4 py-2 rounded ${isActive ? 'bg-amber-200 text-black' : 'text-gray-400'}`
                                }
                            >
                                <Text as="p" className={"size14"}>Home</Text>
                            </NavLink>
                        </li> : <li>
                            <NavLink
                                to="/children"
                                className={({isActive}) =>
                                    `px-4 py-2 rounded ${isActive ? 'bg-amber-200 text-black' : 'text-gray-400'}`
                                }
                            >
                                <Text as="p" className={"size14"}>My Children</Text>
                            </NavLink>
                        </li>}
                        <li>
                            <NavLink
                                to="/product"
                                className={({isActive}) =>
                                    `px-4 py-2 rounded ${isActive ? 'bg-amber-200 text-black' : 'text-gray-400'}`
                                }
                            >
                                <Text as="p" className={"size14"}>Products</Text>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({isActive}) =>
                                    `px-4 py-2 rounded ${isActive ? 'bg-amber-200 text-black' : 'text-gray-400'}`
                                }
                            >
                                <Text as="p" className={"size14"}>About</Text>
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink
                        to="/assest"
                        className={({isActive}) =>
                            `flex items-center gap-3 px-4 py-2 rounded ${isActive ? 'bg-amber-200 text-black' : 'text-black'}`
                        }
                    >
                        <Img
                            src="images/streamline_ai-technology-spark-solid.svg"
                            alt="Streamline:ai-technology-spark-solid"
                            className="h-[14px] w-[14px]"
                        />
                        <span className={"size14"}>AI Assist</span>
                    </NavLink>
                </div>

                <div className="flex items-center gap-3">
                    <div className="rounded-full justify-center">
                        {userInfo?.uid ?
                            <div onClick={ ()=>{
                               setShowTooltip(true);
                            }} className="cursor-pointer w-10 h-10 rounded-full justify-center">
                                <Text
                                    className="text-center text-white-a700 text-2xl">{userInfo?.email.charAt(0)} </Text>
                            </div>
                            : <Button onClick={() => {
                                navigate('/login');
                            }}
                                      color="black_900" shape="round" className="font-quicksand md:mb-8">
                                Sign Up
                            </Button>
                        }
                    </div>

                    <LogoutTooltip displaystatus={showTooltip} logout={handleLogout} />


                </div>
            </div>
        </header>
    );
}


