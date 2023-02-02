/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../styles/App.scss';
import Header from '../components/Header';
import Tools from '../components/Tools'
import TimerCard from '../components/TimerCard'
import { Dialog, TextInput , Button, toaster } from 'evergreen-ui'
import moment from 'moment'
import axios from 'axios';


function Main() {
    const [timer, setTimer] = useState([])
    const [name, setName] = useState('')
    const [isShownAddTimerDialog, setIsShownAddTimerDialog] = useState(false)
    const [gitlabData, setGitlabData] = useState()
    const [isGitlabData, setIsGitlabData] = useState()

    useEffect(() => {
        setIsGitlabData(true)
    }, [gitlabData])
      
    console.log(gitlabData)
    const addTimer = (name) => {
        let tempArr = timer
        const temp = {
            name
        }

        tempArr = tempArr.concat(temp)

        setTimer(tempArr)
        setIsShownAddTimerDialog(false)
        toaster.success('Well done, the timer has been added')
    }
    return (
        <>
            <div className="App">
                <Header/>
                <Tools
                    addTimer={() => setIsShownAddTimerDialog(true)}
                />
                {timer.map(x => 
                    <TimerCard name={x.name}/>
                )}
            </div>

            <Dialog
                isShown={isShownAddTimerDialog}
                title="Add Timer"
                onCloseComplete={() => setIsShownAddTimerDialog(false)}
                confirmLabel="Confirm"
                hasFooter={false}
            >
                Task name:&nbsp;
                <TextInput 
                    label="Task name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    placeholder="Put your task name"
                />
                <Button 
                    appearance="primary" 
                    intent="success" 
                    onClick={() => addTimer(name)}
                >
                    Add Timer
                </Button>
            </Dialog>
    </>
  );
}

export default Main;
