import React from 'react'

interface TestimonialProps {
    name: string;
    position: string;
    company: string;
    image: string;
    testimonial: string;
}


export default function Testimonials() {

    const Testimonial = ({ name, position, company, image, testimonial }: TestimonialProps) => {
        return (
            <div className='shrink-0 w-full sm:w-[85%] lg:w-[80%] flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-12 xl:gap-14'>
                <img 
                    src={image}
                    alt={`${name}'s picture`}
                    className='w rounded-xl w-[125px] lg:w-[150px] xl:w-[200px] h-[125px] lg:h-[150px] xl:h-[200px]'
                />
                <div className='relative'>
                    <p className='text-base font-semibold mb-1'>{name}</p>
                    <p className='text-xs text-[#8a8a8a] mb-2 lg:mb-4'>{`${position}, ${company}`}</p>
                    <p className='text-base font-semibold w-[90%] xl:w-[85%]'>
                        {testimonial}
                    </p>
                    <img 
                        src="/pattern.svg"
                        className='hidden sm:block absolute right-0 top-0 h-full'
                        alt="Pattern decoration"
                    />
                </div>
            </div>
        )
    }
  return (
    <section className="py-6 md:py-8 lg:py-10">
        <p className="my-3 md:my-4 lg:my-5 xl:my-6 text-center text-xl md:text-2xl lg:text-3xl font-semibold">Testimonials</p>
        <p className="mb-4 md:mb-6 lg:mb-8 lg:mb-10 text-center font-semibold text-xl">Check out reviews from our users</p>
        <div className='mb-10 lg:mb-14 xl:mb-20 flex flex-row gap-6 md:gap-6 lg:gap-12 overflow-x-hidden'>
            <Testimonial
                name="Clara Kent"
                position="CEO"
                company="Bags by Kent"
                image="/tes-image.svg"
                testimonial="I really enjoy using the services of clout jet cause my online presence has grown and is still growing at a rapid rate. All thanks to the real engagements I paid for. It was worth the service"
            />
            <Testimonial
                name="Clara Kent"
                position="CEO"
                company="Bags by Kent"
                image="/tes-image.svg"
                testimonial="I really enjoy using the services of clout jet cause my online presence has grown and is still growing at a rapid rate. All thanks to the real engagements I paid for. It was worth the service"
            />
        </div>
        <div className='flex justify-end'>
            <button className="py-2 px-8 rounded-md text-white bg-[#1d1c1c]">
                Next
            </button>
        </div>
    </section>
  )
}
