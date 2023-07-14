import React from 'react'
import { useNavigate } from 'react-router-dom';
import goals from '../Images/Goals.svg'

const Dashboard = () => {
    let history = useNavigate();
    return (
        <div className="flex items-center justify-between">
            <span className="font-bold text-3xl ml-3">Goals</span>
            <button onClick={() => history('/goals')} className="ml-auto mr-3">
                <img src={goals} alt="goals" className="h-15" />
            </button>
        </div>


    )
}

export default Dashboard
