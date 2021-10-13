import React from 'react';
import styles from "./AboutUs.module.css";
import Typing from "react-typist";
import {aboutUsData} from "../data";

function AboutUs(props) {
    return (
        <div>
            <div className={styles.titleContainer}>
                <Typing startDelay={0} avgTypingDelay={35} stdTypingDelay={0} cursor={{
                    show: false
                }}>
                    <p className={styles.title}>
                        About Us
                    </p>
                </Typing>
            </div>
            <div>
                <div className={styles.containerHolder}>
                    {
                        aboutUsData.map(x =>
                            <div className={styles.mainContainer} key={x.title}>
                                <p className={styles.subHeading}>{x.title}</p>
                                {
                                    x.content.split("\n").map(content =>
                                        <p className={styles.content}>{content}</p>
                                    )
                                }

                                {
                                    x.picture_path && <img className={styles.img} src={x.picture_path}
                                                           alt="Featured NGO"/>
                                }
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
}

export default AboutUs;