import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
        <h2 className="bold-40 lg:bold-64 xl:max-w-[520px]">Professional TV Mounting Services</h2>
<p className="regular-16 text-gray-10">
Experience hassle-free, precision mounting for any TV size and wall type. Our certified technicians ensure secure installation, optimal viewing angles, and optional cable concealment — all scheduled at your convenience, with same-day service available in select areas.
</p>


          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Contact us"
              
              variant="btn_white"
             
            />
            <Button 
              type="button"
              title="View Pricing"
              
              variant="btn_dark_green_outline"
              
            />
          </div>
        </div>

        {/* <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div> */}
      </div>
    </section>
  )
}

export default GetApp