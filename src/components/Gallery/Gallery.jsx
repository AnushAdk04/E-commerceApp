import React from 'react'
import combo from '../../assets/galleryimages/combo.jpeg'
import jutta from '../../assets/galleryimages/jutta.jpg'
import laptop from '../../assets/galleryimages/laptop.jpeg'
import onepiece from '../../assets/galleryimages/onepiece.jpg'
import womenjutta from '../../assets/galleryimages/womenjutta.jpg'
import watch from '../../assets/galleryimages/watch.jpg'

const Gallery = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Our Gallery</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Our GrabMart Gallery features a wide range of collections from electronics items to men's wear as well as female wear and Groceries.</p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={combo}/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={jutta}/>
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={onepiece}/>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={laptop}/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={womenjutta}/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={watch}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery