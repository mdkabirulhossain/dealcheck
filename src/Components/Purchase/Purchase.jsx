import React from 'react';
import { GoQuestion } from "react-icons/go";
import { FaPen } from 'react-icons/fa'

const Purchase = () => {
    return (
        <div className='pt-16'>
            <h2 className='text-blue-600 text-xl font-semibold pb-5'>PURCHASE & REHAB</h2>
            <div className='grid grid-cols-2 gap-5 bg-white shadow-2xl'>
                {/* left  */}
                <div>
                    <div className='flex justify-between pl-2 pt-6'>
                        <p className='flex gap-1 items-center'><GoQuestion className='text-blue-600'></GoQuestion> Purchase Price: </p>
                        <p>$194,000</p>
                    </div>
                    <div className='flex justify-between pl-2 pt-4'>
                        <p className='flex gap-1 items-center'><GoQuestion className='text-blue-600'></GoQuestion> Amount Financed: </p>
                        <p>- $155,200</p>
                    </div>
                    <hr className='h-1 my-1 ml-6 bg-blue-600' />
                    <div className='flex justify-between pl-2 '>
                        <p className='font-bold text-blue-600  ml-4'>Down Payment: </p>
                        <p>= $ 38,800</p>
                    </div>
                    <div className='flex justify-between pl-2 pt-6'>
                        <p className='flex gap-1 items-center'><GoQuestion className='text-blue-600'></GoQuestion> Purchase Costs: </p>
                        <p className='flex gap-1 items-center'>+ $ 5,820 <FaPen className='text-blue-600'></FaPen></p>
                    </div>
                    <div className='flex justify-between pl-2 pt-6'>
                        <p className='flex gap-1 items-center'>
                            <GoQuestion className='text-blue-600' />
                            Rehab Costs:
                            <select className=' px-2 py-1 focus:outline-none'>
                                <option className='text-blue-600 border-hidden' value='' disabled selected hidden>

                                </option>
                                <option className='w-full' value='rehab-costs'>Rehab Costs: $0</option>
                                <option value='cost-overrun'>Cost Overrun (10%): $0</option>
                            </select>
                        </p>

                        <p className='flex gap-1 items-center'>+ $ 5,820 <FaPen className='text-blue-600'></FaPen></p>

                    </div>
                    <hr className='h-1 my-1 ml-6 bg-blue-600' />
                    <div className='flex justify-between pl-2 pb-6'>
                        <p className='font-bold text-blue-600  ml-4'>Total Cash Needed: </p>
                        <p>= $ 38,800</p>
                    </div>
                </div>
                {/* right  */}
                <div>
                    <div className='flex justify-evenly pt-6'>
                        <p className='flex items-center gap-1'>Purchase Costs <FaPen className='text-blue-600'></FaPen></p>
                        <p className='flex items-center gap-1 text-blue-600'>Rehab Costs <FaPen ></FaPen></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;