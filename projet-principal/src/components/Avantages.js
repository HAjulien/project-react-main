import React from 'react';

const Avantages = () => {
    return (
        <div className='Avantages'>
            <h2 className=' text-center text-react mb-28'>Avantages et inconvénient</h2>
            <div class="grid grid-cols-6 grid-rows-6 gap-4 flex	justify-center 	">
                
                <div class="col-start-3 col-end-5 row-start-1 mb-3 flex justify-center ">
                   <p className='w-1/2 bg-green text-center items-center	'> Avantages</p>
                </div>
                <div class="col-start-2 col-end-4 row-start-2 flex justify-end mr-4	">
                    <p className='w-2/3 bg-green text-center'> Conçu par Google qui s’occupe du suivi et des mises à jour.</p>
                </div>
                <div class="col-end-6 col-span-2 row-start-3 row-span-1 flex justify-start ml-4">
                    <p className='w-2/3 bg-green text-center '> 2</p>
                </div>
                <div class="col-start-2 col-end-4 row-start-4 flex justify-end mr-4	">
                    <p className='w-2/3 bg-green text-center	'> 3</p>
                </div>
                <div class="col-end-6 col-span-2 row-start-5 flex justify-start ml-4">
                    <p className='w-2/3 bg-green text-center	'> last</p>
                </div>
            </div>
        </div>
    );
};

export default Avantages;