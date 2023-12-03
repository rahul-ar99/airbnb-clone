import React, {useState} from 'react';
import ExploreModal from './exploreLink/ExploreModal';


const ExploreLink = () => {

    // modal Hooks for show and hide modal
    const [modal,setmodal] = useState(false)

    return (
        <div className='flex w-full justify-center h-16 font-semibold items-center bg-[#f7f3f3] border-b-2 border-b-neutral-200'>

            {/* button for show ExploreModal */}
            <button className='text-xl underline underline-offset-4 cursor-pointer' onClick={()=> setmodal(true)}>Learn about Guest Favourites, the loved homes on Airbnb</button>

            {/* if modal is true ExploreModal is show,otherwise its don't show, 
                close props is used for close this modal with close btn and outside of modal
            */}
            {modal && <ExploreModal close={setmodal} />}
        </div>
    );
};

export default ExploreLink;