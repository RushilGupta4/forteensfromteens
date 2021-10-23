import React from 'react';
import {theProblemData} from "../data";
import Typing from 'react-typist';
import styles from "./TheProblem.module.css";
import {animated, useSpring, config} from 'react-spring';
import VisibilitySensor from "../components/common/VisibilitySensor";
import Card from "../components/common/UI/Card";


function TheProblem(props) {
    const animatedStylesIntro = useSpring({
        config: config.gentle,
        delay: 750,
        from: {transform: "translateY(-10vh)", opacity: 0},
        to: {transform: "translateY(0)", opacity: 1}
    })

    return (
        <div>
            <div className={styles.titleContainer}>
                <Typing startDelay={0} avgTypingDelay={35} stdTypingDelay={0} cursor={{
                    show: false
                }}>
                    <p className={styles.title}>
                        The Problem
                    </p>
                </Typing>
                <animated.p className={styles.titleContent} style={animatedStylesIntro}>
                    {theProblemData.filter(x => x.titleContent)[0]["titleContent"]}
                </animated.p>
            </div>

            <div className={styles.mainContainer}>
                {
                    theProblemData.filter(x => x.title).map(x =>
                        <VisibilitySensor key={x.title}>
                            {({isVisible}) => (
                                <Card className={isVisible ? styles.dataContainerFadeIn : styles.dataContainerFadeOut}
                                      key={x.title}>
                                    <p className={styles.subHeading}>{x.title}</p>
                                    <p className={styles.content}>{x.content}</p>
                                    {
                                        x.picture_path && <img className={styles.img} src={x.picture_path}
                                                               alt="Featured NGO"/>
                                    }
                                    {
                                        x.symptoms &&

                                        <ul className={styles.symptoms}>
                                            {x.symptoms.map(symptom =>
                                                <li className={styles.symptom}>{symptom}</li>)}
                                        </ul>
                                    }
                                </Card>
                            )}
                        </VisibilitySensor>
                    )
                }
            </div>

        </div>
    );
}

export default TheProblem;