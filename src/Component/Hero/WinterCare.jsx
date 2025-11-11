import React from 'react';
import image from '../../assets/download (5).jpg'
import image1 from '../../assets/download (6).jpg'
import image2 from '../../assets/download (7).jpg'
import image3 from '../../assets/download (8).jpg'

const WinterCare = () => {
    return (
        <div className='w-full flex flex-col items-center my-6'>
            <h1 className="text-4xl font-bold text-center mb-9 text-primary">Winter Care Tips for Pets</h1>
            <div className='flex flex-col gap-2 align-center'>
                <div className="text-center">
                    <h3 className='text-2xl font-semibold'>Limit outdoor time:</h3>
                    <p className='text-[20px]'> Cold weather can lead to frostbite and hypothermia, especially in small, short-haired, or elderly pets.</p>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl font-semibold'>Use pet clothing:</h3>
                    <p className='text-[20px]'> Sweaters or coats help short-haired dogs or small breeds retain warmth.</p>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl font-semibold'>Dry them off:</h3>
                    <p className='text-[20px]'> After walks, wipe paws and belly to remove snow, ice, and salt, which can irritate skin.</p>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl font-semibold'>Monitor food intake:</h3>
                    <p className='text-[20px]'> Pets who are more active outdoors may need extra calories, while indoor pets may need less.</p>
                </div>
            </div>
            <section className="bg-base-200 w-full max-w-[1500px] mx-auto p-6 sm:p-10 my-10 rounded-2xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-primary">
                    Meet Our Pet Care Doctors
                </h1>

                <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="card bg-base-100 shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
                        <figure>
                            <img src={image} alt="James Herriot" className="w-full h-[280px] rounded-t-lg" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary">James Herriot</h2>
                            <p>
                                Revered as the most famous veterinarian in the world due to his heartwarming and internationally best-selling books that chronicled the life of a country vet in the Yorkshire Dales, inspiring millions to enter the profession.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
                        <figure>
                            <img src={image1} alt="Dr. Brian Murphy" className="w-full h-[280px] rounded-t-lg" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary">Dr. Brian Murphy</h2>
                            <p>
                                Known for his groundbreaking research on feline infectious peritonitis (FIP) and feline immunodeficiency virus (FIV), which has led to the discovery of various antiviral therapies, significantly improving feline health worldwide.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
                        <figure>
                            <img src={image2} alt="Dr. Evan Antin" className="w-full h-[280px] rounded-t-lg" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary">Dr. Evan Antin</h2>
                            <p>
                                A globally recognized wildlife and exotic animal veterinarian who uses his significant social media presence to promote animal conservation and raise awareness about endangered species.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
                        <figure>
                            <img src={image3} alt="Dr. Mark Morris Sr" className="w-full h-[280px] rounded-t-lg" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary">Dr. Mark Morris Sr</h2>
                            <p>
                                A legend in veterinary nutrition, he established Hill's Pet Nutrition and developed the concept of therapeutic diets to manage specific health issues in animals, a practice now standard in veterinary medicine.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Profile</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default WinterCare;