import styles from "./styles/Header.module.css"

export default function Header() {
    return(
        <>
        <header className={styles.header}>
            <nav className={styles.menu}>

                <h1 className={styles.primary_logo}>
                    <a href="#" className={styles.tesla_link}>
                        <svg className={styles.tesla_logo} viewBox="0 0 342 35" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 
                        7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 
                        6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 
                        7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 
                        7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 
                        14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 
                        7-7h-40a9.6 9.6 0 0 0 7 7z" 
                        fill="currentColor"></path>
                        </svg>

                    </a>
                </h1>
                
           

            <ol className={styles.menu_options}>
                <a href="#vehicles" className={styles.menu_item}>Vehicles</a>
                <a href="#energy" className={styles.menu_item}>Energy</a>
                <a href="#charging" className={styles.menu_item}>Charging</a>
                <a href="#discover" className={styles.menu_item}>Discover</a>
                <a href="#shop" className={styles.menu_item}>Shop</a>
            </ol>


            <ol className={styles.menu_icons}>
                <a href="#" className={styles.menu_icon}><i className="fa-regular fa-circle-question"></i></a>  
                <button className={styles.menu_icon_global}><i className="fa-solid fa-globe"></i></button>
                <a href="#" className={styles.menu_icon}><i className="fa-solid fa-user"></i></a>
            </ol>
            </nav>
        </header>
        </>
    )
}