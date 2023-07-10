import React from 'react';
import goalCard from '../../Constant';
import { useNavigate } from 'react-router-dom';

const Goals = () => {
  let navigate = useNavigate();

  const handleClick = (goalId) => {
    navigate(`/goal/${goalId}`);
  };

  return (
    <>
      <h5 className="m-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create a Goal</h5>
      <p className="m-3">If you're looking to start saving or interested in investing, this is where to get started</p>
      <div className="flex flex-wrap m-3">
        {goalCard.map((goal) => (
          <div
            key={goal.goalId}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-3 py-3"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" onClick={() => handleClick(goal.goalId)}>
                <img
                  src={goal.goalImage}
                  alt="Placeholder"
                  className="object-cover w-full h-48 rounded-t-lg"
                />
              </a>
              <div className="p-5">
                <a href="#" onClick={() => handleClick(goal.goalId)}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {goal.goalName}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Goals;
