import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.pageTitle}</h1>

        <img src="/img/pagetitle-bg.webp" className="bg-img" aria-hidden />
        <div className="shader" style={{background: "linear-gradient(to right, rgba(2,208,232,.37) 0%, rgb(37,51,64) 100%)"}}></div>
    </header>
  )
}
