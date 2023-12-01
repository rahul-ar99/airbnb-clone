import React, {useState} from 'react';

import ExploreModal from './exploreLink/ExploreModal';


const ExploreLink = () => {

    const [modal,setmodal] = useState(false)

    return (
        <div className='flex w-full justify-center h-16 font-semibold items-center bg-[#f7f3f3] border-b-2 border-b-neutral-200'>
            <button className='text-xl underline underline-offset-4 cursor-pointer' onClick={()=> setmodal(true)}>Learn about Guest Favourites, the loved homes on Airbnb</button>
            {modal && <ExploreModal close={setmodal} />}
        </div>
    );
};

export default ExploreLink;