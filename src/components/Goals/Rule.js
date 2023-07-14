import React from 'react'
import { useParams } from 'react-router-dom';
import { rulesCard } from '../../Constant';

const Rule = () => {
    const { ruleId } = useParams();
    const ruleIdNumber = parseInt(ruleId);
    const ruleSelected = rulesCard.find((rule) => rule.ruleId === ruleIdNumber);
    const { ruleName, ruleImage, ruleColor } = ruleSelected;
    const [rule, setRule] = React.useState(ruleSelected);


    const handleOnChange = (e) => {
        e.preventDefault();
        setRule({ ...rule, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(rule);
    }


    return (
        <>
            <a href="#" class={`block max-w-sm p-6 ${ruleColor}-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-3`}>
                <div class="flex items-center justify-between">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ruleName}</h5>
                    <img src={ruleImage} alt="Placeholder" class="h-6 w-6" />
                </div>
            </a>
            <p className='m-3'>Every time you spend, we'll round up to the nearest dollar and transfer the spare change to your chosen goal. Start saving today!</p>
            <form className='m-3' onSubmit={handleSubmit}>
                <div className="mb-6">
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-gray border border-black bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:border-black dark:bg-transparent dark:hover:bg-gray-600 dark:focus:ring-blue-800"
                        type="button"
                    >
                       Set Round Up Increment
                        <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    <div
                        id="dropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">$1</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">$2</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">$3</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mb-6">
                    <label for="ruleName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Your Savings Target:</label>
                    <input type="ruleName" id="ruleName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={ruleName} value={rule.ruleName} onChange={handleOnChange} required />
                </div>
                <div class="mb-6">
                    <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transfer money from</label>
                    <input type="amount" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={rule.amount} onChange={handleOnChange} required />
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enable Rule</button>
            </form>
        </>
    )
}

export default Rule
