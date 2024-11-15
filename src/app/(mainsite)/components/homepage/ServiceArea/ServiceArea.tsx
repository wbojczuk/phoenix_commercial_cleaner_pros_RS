import styles from "./servicearea.module.css"
import Area from "./Area"
import serviceData from "@/app/(mainsite)/data/serviceData"

export default function ServiceArea() {

    const areaElems = serviceData.map((area, i)=>{
        return <Area area={area} key={i} />
    })

  return (
    <section className={styles.serviceArea}>
        <div className={styles.areas}>
            <h2><span>Service Area</span></h2>
            {areaElems}
            <div className={styles.areaShader}></div>
        </div>
        <div className={styles.serviceAreaMap} >
        <div className={styles.menuCover} ></div>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=16NQ-lJHNlrSFtN5j2XuWwHjj5sEYjEY&ehbc=2E312F"></iframe>
        </div>
        
        <img src='/img/servicearea.webp' alt='Image of vacuum' className='bg-img' />
        <div style={{backgroundColor: "rgba(0,0,0,0.7)"}} className='shader'></div>
        <div className={`shader ${styles.shader2}`}></div>
    </section>
  )
}
