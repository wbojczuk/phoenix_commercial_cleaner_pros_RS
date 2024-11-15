"use client"
import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>Professional Cleaning<br />In <span className="underline">Phoenix</span>, AZ</h1>

        <p>Phoenix Commercial Cleaner Pros is a trusted cleaning company serving homes and businesses in Phoenix, Arizona, and nearby areas. We offer janitorial services, residential cleaning, move-in/move-out cleaning, window cleaning, upholstery cleaning, carpet cleaning, and floor care maintenance. With a focus on quality and attention to detail, our experienced team ensures your space is spotless and well-maintained, whether you need a one-time deep clean or regular service.</p>
        

        <Link href="/contact" className="main-link">Get a Quote</Link>

        {/* <h4>-- Bonded and Insured! --</h4> */}

        <img src="/img/header-bg.webp" alt="" className="bg-img" />
        <div className="shader"></div>

    </header>
  )
}
