import React from 'react'
import { rulesCard } from '../../Constant'
import { useNavigate } from 'react-router-dom';

const Rules = () => {
  let navigate = useNavigate();
  const handleClick = (ruleId) => {
    navigate(`/rule/${ruleId}`);
  };

  return (
    <>
      <h5 className="m-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Choose a Rule</h5>
      <p className="m-3">If an automated rule would result in your account balance falling below $100, the rule will be temporarily paused until your balance reaches the required threshold.</p>
      <div className="flex flex-wrap m-3">
        {
          rulesCard.map((rule) => (
            <div
              key={rule.ruleId}
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-3 py-3"
            >
              <div className={`max-w-sm ${rule.ruleColor}-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
                < div className="flex justify-center items-center mt-5" >
                  <a href="#" onClick={() => handleClick(rule.ruleId)}>
                    <div className={`flex items-center justify-center h-12 w-12 rounded-full ${rule.ruleColor}-900`}>
                      <img className="h-6 w-6" src={rule.ruleImage} alt="" />
                    </div>
                  </a>
                </div >
                <div className="p-5">
                <a href="#" onClick={() => handleClick(rule.ruleId)}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">{rule.ruleName}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{rule.ruleDescription}</p>
                </div>
              </div >
            </div>

          ))
        }
      </div>
    </>
  )
}

export default Rules
