import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { goalCard } from '../../Constant';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../State/index'
import { useNavigate } from 'react-router-dom';




const Goal = () => {
    let navigate = useNavigate();
    const { goalId } = useParams();
    const goalIdNumber = parseInt(goalId);
    const goalSelected = goalCard.find((goal) => goal.goalId === goalIdNumber);
    const { goalName, goalImage } = goalSelected;
    const dispatch = useDispatch();
    const { addGoal } = bindActionCreators(actioncreators, dispatch)
    const [goal, setGoal] = useState(goalSelected)
    localStorage.setItem('goal', JSON.stringify(goal))

    const handleOnChange = (e) => {
        e.preventDefault();
        if (e.target.id === 'shared') {
            setGoal({ ...goal, [e.target.id]: e.target.checked })
            return
        }
        setGoal({ ...goal, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(goal)
        addGoal(goal)
        navigate('/rules')
    }

    return (
        <>
            <h5 className="m-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create your next Goal</h5>
            <form className='m-3' onSubmit={handleSubmit}>
                <img src={goalImage} alt="Placeholder" className="object-cover w-full h-48 rounded-t-lg" />
                <div class="mb-6">
                    <label for="goalName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Goal</label>
                    <input type="goalName" id="goalName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={goalName} value={goal.goalName} onChange={handleOnChange} required />
                </div>
                <div class="mb-6">
                    <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount to Save</label>
                    <input type="amount" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={goal.amount} onChange={handleOnChange} required />
                </div>
                <div class="mb-6">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="shared" value={goal.shared} class="sr-only peer" onChange={handleOnChange} />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Shared Goal</span>
                    </label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue</button>
            </form>
        </>
    )
}

export default Goal
