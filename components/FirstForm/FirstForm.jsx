import React from 'react'
import styles from "./FirstForm.module.scss"





export default function FirstFormcomp() {
    return (
        <>

            <div className={styles.main}>

                <h1>Basic Details</h1>
                <div className={styles.col1}>

                    <div className={styles.one}>
                        <input type="text" name="Company Name" placeholder='Company Name' />
                    </div>

                    <div className={styles.two}>

                        {/* <input type="text" name="" id="sec" placeholder='Website URL' />
                    <p>Assistive text</p> */}
                        <label>Label</label>
                        <input type="text" name="" id="" value="Number of Employees" />
                    </div>


                    <div className={styles.three}>
                        <label>Label</label>
                        <input type="text" name="" id="" value="Account manager name" />
                    </div>

                    <div className={styles.four}>
                        <input className={styles.rtl} type="text" id="first" name="Company Name" placeholder='Input Text 1' />
                    </div>



                    <div className={styles.five}>
                        <label>Label</label>
                        <input className={styles.rtl1} type="text" name="" id="" value="Input text 3" />
                    </div>

                    <div className={styles.six}>
                        <label>Label</label>
                        <input className={styles.rtl2} type="text" name="" id="" value="Input text 5" />
                    </div>

                    <div className={styles.seven}>
                        <input type="text" className={styles.subdomain} name="Company Name" placeholder='Input Text 7' />
                        <input type="text" className={styles.subdomaintwo} value='Edit' readonly="readonly"/>
                    </div>



                </div>



            </div>




        </>
    )
}