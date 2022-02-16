import React from 'react';

const Avantages = () => {
    return (
        <div className='Avantages'>
            <h2 className=' text-center '> <span className='text-lime-300'>Avantages</span> et <span class='text-red-500'>inconvénient</span></h2>
            <div class="grid grid-cols-3 gap-4">
                <div class="...">01</div>
                <div class="...">02</div>
                <div class="...">03</div>
                <div class="col-span-2 ...">04</div>
                <div class="...">05</div>
                <div class="...">06</div>
                <div class="col-span-2 ...">07</div>
            </div>
        </div>
    );
};

export default Avantages;