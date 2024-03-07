import React, { useContext } from 'react'
import { destination } from '../MainPage/navbar/CenterItems';




const Destination = () =>{

    const { setSearchDestination} = useContext(destination)

    return(
        <>
            <div className="absolute left-[-2rem] top-28 bg-gray-100 z-10 p-10 w-[60rem] border-2 rounded-3xl">
                <div className="flex w-full justify-between ">
                    <div className="flex flex-col w-[35%]">
                        <h6 className="text-lg font-medium mb-4">Recent searches</h6>
                        <div>
                            <div className="flex mb-3">
                                <div className="bg-gray-200 p-[15px] w-min mr-5 rounded-2xl">
                                    <div className="w-8">
                                        <img src={require("../../assets/images/other_images/clock.png")} className="w-full"></img>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h6 className="text-base">Middle East- Stays</h6>
                                    <p className="text-sm text-gray-600">11-12 Mar - 16 guests</p>
                                </div>
                            </div>
                            <div className="flex mb-10">
                                <div className="bg-gray-200 p-[15px] w-min mr-5 rounded-2xl">
                                    <div className="w-8">
                                        <img src={require("../../assets/images/other_images/clock.png")} className="w-full"></img>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h6 className="text-base">Middle East- Stays</h6>
                                    <p className="text-sm text-gray-600">11-12 Mar - 16 guests</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[55%] border-l-2 pl-10">
                        <h6 className="text-lg font-medium mb-4">Search by region</h6>
                        <div className="flex flex-wrap">
                            <div className="flex flex-wrap gap-5">
                                <div>
                                    <div className="rounded-3xl w-[130px] border-2 border-gray-300 overflow-hidden cursor-pointer" onClick={()=>setSearchDestination("")}>
                                        <img src={require("../../assets/images/other_images/world.jpg")} className="w-full" alt="image" />
                                    </div>
                                    <h5 className="text-sm ml-1 my-1">I'm flexible</h5>                    
                                </div>
                                <div >
                                    <div className="rounded-3xl w-[130px] border-2 border-gray-300 overflow-hidden cursor-pointer" onClick={()=>setSearchDestination("Europe")}>
                                        <img src={require("../../assets/images/other_images/region1.webp")} className="w-full" alt="image" />
                                    </div>
                                    <h5 className="text-sm ml-1 my-1">Europe</h5>                    
                                </div>
                                <div>
                                    <div className="rounded-3xl w-[130px] border-2 border-gray-300 overflow-hidden cursor-pointer" onClick={()=>setSearchDestination("United Kingdom")}>
                                        <img src={require("../../assets/images/other_images/region2.webp")} className="w-full" alt="image" />
                                    </div>
                                    <h5 className="text-sm ml-1 my-1">United Kingdom</h5>                    
                                </div>
                                <div>
                                    <div className="rounded-3xl w-[130px] border-2 border-gray-300 overflow-hidden cursor-pointer" onClick={()=>setSearchDestination("Southeast Asia")}>
                                        <img src={require("../../assets/images/other_images/region3.webp")} className="w-full" alt="image" />
                                    </div>
                                    <h5 className="text-sm ml-1 my-1">Southeast Asia</h5>                    
                                </div>
                                <div>
                                    <div className="rounded-3xl w-[130px] border-2 border-gray-300 overflow-hidden cursor-pointer" onClick={()=>setSearchDestination("Canada")}>
                                        <img src={require("../../assets/images/other_images/region4.webp")} className="w-full" alt="image" />
                                    </div>
                                    <h5 className="text-sm ml-1 my-1">Canada</h5>                    
                                </div>
                                <div>
                                    <div className="rounded-3xl w-[130px] border-2 border-gray-300 overflow-hidden cursor-pointer" onClick={()=>setSearchDestination("Middle East")}>
                                        <img src={require("../../assets/images/other_images/region5.webp")} className="w-full" alt="image" />
                                    </div>
                                    <h5 className="text-sm ml-1 my-1">Middle East</h5>                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Destination;