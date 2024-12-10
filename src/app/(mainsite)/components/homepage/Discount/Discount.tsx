"use client"

import Link from 'next/link';
import styles from './discount.module.css';

export default function Discount(){
return (
 <div className={styles.believe}>

    <h2>10% Off<span className="highlight">!</span></h2>

    <p>Up to 10% off for first-time customers!</p>

    <Link className='main-link' href={"/contact"}>Contact Us</Link>
 
    <img src='/img/discount.webp' alt='Image of house' className='bg-img' />
    <div className='shader' style={{backgroundColor: "rgba(0,0,0,0.71)"}}></div>
 </div>
)};