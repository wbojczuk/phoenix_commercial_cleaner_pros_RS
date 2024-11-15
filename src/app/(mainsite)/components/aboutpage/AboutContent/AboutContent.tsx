import Link from 'next/link';
import styles from './aboutcontent.module.css';

export default function AboutContent(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>About Us</h2>
        <p>Founded in 2020, Phoenix Commercial Cleaner Pros brings over 20 years of experience in commercial and residential cleaning. We deliver top-quality service by listening to each client’s unique needs and tailoring our approach to exceed expectations. Trust us to care for your spaces with precision, reliability, and attention to detail.</p>
        <Link className='main-link' href={`/contact`}>Get A Quote</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/aboutcontent.webp" alt="image of a kitchen" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};