import React from 'react'
import styles from "./FirstForm.module.scss"





export default function FirstFormcomp() {
    return (
        <>

        <div className={styles.main}>
        <h1>Basic Details</h1>

            <div className={styles.main1}>

                
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
                        <input type="text" className={styles.subdomaintwo} value='Edit' readonly="readonly" />
                    </div>



                </div>
                {/* _________________________________________ */}


                <div className={styles.col2}>

                    <div className={styles.ones}>
                        <input type="text" name="" id="sec" placeholder='Website URL' />
                        <p>Assistive text</p>

                    </div>

                    <div className={styles.twos}>

                        {/* <input type="text" name="" id="sec" placeholder='Website URL' />
<p>Assistive text</p> */}
                        <label>Label</label>
                        <input type="text" name="" id="" value="Industry" />
                        <p>Assistive text</p>

                    </div>


                    <div className={styles.threes}>
                        <label>Label</label>
                        <input type="text" name="" id="" value="Account manager Function" />
                        <p>Assistive text</p>
                    </div>

                    <div className={styles.fours}>
                        <input className={styles.rtl} type="text" id="first" name="Company Name" placeholder='Input Text 2' />
                        <p>Assistive text</p>
                    </div>



                    <div className={styles.fives}>
                        <label>Label</label>
                        <input className={styles.rtl1} type="text" name="" id="" value="Input text 4" />
                        <p>Assistive text</p>
                    </div>

                    <div className={styles.sixs}>
                        <label>Label</label>
                        <input className={styles.rtl2} type="text" name="" id="" value="Input text 6" />
                        <p>Assistive text</p>
                    </div>

                    <div className={styles.last}>

                    <div className={styles.sevens}>
                        <input type="text" className={styles.subdomains} name="Company Name" placeholder='Input Text 7' />
                        <input type="text" className={styles.subdomaintwos} value='Edit' readonly="readonly" />
                       
                    </div>
                    <div className={styles.sevens1}>
                    <p>Assistive text</p>
                    </div>

                    </div>














                </div>



            </div>

            </div>




        </>
    )
}