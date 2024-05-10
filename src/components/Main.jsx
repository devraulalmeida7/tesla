import styles from "./styles/Main.module.css"
import modely from "../assets/ModelY.avif"
export default function Main() {
    return(
        <>
        <main className={styles.main}>

            <picture>
                <source srcset="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Mobile-Global.jpg" media="(max-width: 599px)"/>
                <source srcset="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png" media="(min-width: 600px)"/>
                <source srcset="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Mobile-Global.jpg" media="(min-width: 600px) and (orientation:portrait)"/>
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png" srcset="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png" alt="Metallic blue Model Y driving down a hillside highway" class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center"/>
            </picture>
            <section className={styles.model}>
                {/* <img src={modely} alt="Model Y" className={styles.imagem_model} /> */}
                <h2 className={styles.model_heading}>Model Y</h2>
                <p className={styles.model_price}>From $31,490</p>
                <p className={styles.model_taxes}>After Federal Tax Credit &amp; Est. Gas Savings</p>
                <button className={styles.model_button}></button>
                <button className={styles.model_button}></button>
            </section>
        </main>
        </>
    )
}