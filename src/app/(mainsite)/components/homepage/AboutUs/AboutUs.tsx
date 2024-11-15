"use client"
import { CSSProperties } from "react"
import styles from "./aboutus.module.css"
import Link from "next/link"

export default function AboutUs() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Us</h4>
            <h1>About Phoenix Commerical<br /> <span className="underline">Cleaning Pros</span></h1>

            <p>Phoenix Commercial Cleaner Pros, founded in 2020, brings over 20 years of expertise in commercial and residential cleaning. We specialize in janitorial services, house cleaning, move-in/move-out cleaning, window cleaning, upholstery, carpet cleaning, and floor care. Serving Phoenix, Arizona, and nearby areas, we’re dedicated to quality and attentive service that meets every client’s needs. Let us make your space shine!</p>

            <Link className="main-link" href="/contact">Get a Quote</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/about.webp" alt="image of chair" className={styles.mainImg} />
            <div className={styles.imgStyle}></div>
          </div>
        </div>
    </section>
  )
}
