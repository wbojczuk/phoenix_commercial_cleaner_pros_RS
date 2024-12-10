"use client"

import Link from 'next/link';
import styles from './discount.module.css';

export default function Discount2(){
return (
 <div className={styles.believe}>

    <h2>Sale<span className="highlight">!</span></h2>

    <p>3 areas of residential carpet cleaning for $135</p>

    <Link className='main-link' href={"/contact"}>Contact Us</Link>
 
    <img src='/img/contact.webp' alt='Image of house' className='bg-img' />
    <div className='shader' style={{backgroundColor: "rgba(0,0,0,0.71)"}}></div>
 </div>
)};