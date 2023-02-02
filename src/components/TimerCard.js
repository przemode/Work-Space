/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../styles/Tools.scss';
import { Button } from 'evergreen-ui'
import moment from "moment";
import '../styles/TimerCard.scss'

function TimerCard({name}) {

    const [diff, setDiff] = useState(0);
    const [timer, setTimer] = useState();
    const [formatedTimer, setFormatedTimer]= useState('')
    const [isPause, setIsPause] = useState(false)

    const startTimer = () => {
        setIsPause(true)
        const timer = setInterval(() => {
            setDiff((diff) => diff + 1);
        }, 1000);
        setTimer(timer);
    }

    const pauseTimer = () => {
        setIsPause(false)
        clearInterval(timer)
    }
    useEffect(() => {
        setFormatedTimer(moment.utc(diff*1000).format("HH:mm:ss"))
    }, [diff])

    return (
        <div className="TimerCardContainer">
            <div className="TimerCardTitle">
                {name}
            </div>
            <div className="TimerValueContainer">
                {formatedTimer}
            </div>
            <div className="TimerControlBtnsContainer">
                { isPause ? (
                    <Button 
                        intent="none"
                        margin={5}
                        appearance="primary"
                        onClick={() => pauseTimer()}
                    >
                        Pause
                    </Button>
                ) : (
                    <Button 
                        intent="success"
                        margin={5}
                        appearance="primary"
                        onClick={() => startTimer()}
                    >
                        Start
                    </Button>
                )}


                <Button 
                    intent="danger"
                    margin={5}
                    appearance="primary"
                    onClick={() => setDiff(0)}
                >
                    Clear
                </Button>
            </div>
        </div>
    );
}

export default TimerCard;