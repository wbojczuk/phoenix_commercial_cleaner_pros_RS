"use client"

import Link from 'next/link';
import styles from './handle.module.css';

export default function Handle(){
return (
 <div className={styles.find}>

    <h2>Let Us Handle It!</h2>

    <h3>Let us handle your next cleaning project. Take the stress out of it and let us get it done!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
    </div>
 
    <img src='/img/handle.webp' alt='Image of vacuum' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};