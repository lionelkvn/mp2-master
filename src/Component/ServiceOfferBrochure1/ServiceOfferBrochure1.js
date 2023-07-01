import './ServiceOfferBrochure1.css';
import React from 'react';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import PackagePriceBrochure from '../PackagePriceBrochure/PackagePriceBrochure';

const ServiceOfferBrochure = () => {
    const carouselItemsBrochure = [
        {
          title: 'Brochure',
          imageUrl: './Brochureimg.jpg',
        },
        {
          title: 'Brochure',
          imageUrl: './Brochureimg.jpg',
        },
        {
          title: 'Brochure',
          imageUrl: './Brochureimg.jpg',
        },
        {
          title: 'Brochure',
          imageUrl: './Brochureimg.jpg',
        },
      ];
    
      const serviceOfferCat = "Graphics & Design";
      const carouselBrochureTitle = 'I will design a clean professional trifold or bifold brochure';
    
      return(
        <div id="ServicesOffer" class="ServicesOffer">
              <div class="ServicesOfferContent">
                    <div class="CarouselContainer">
                        <h1>{serviceOfferCat}</h1>
                        <h2>{carouselBrochureTitle}</h2>
                        <CarouselSlider items={carouselItemsBrochure} />
                        <h1>About This Service</h1>
                        <div class="packageContainer Container">
                            <h2>Are you looking for a clean trifold brochure?</h2>
                            <h3>I can help! I can design any brochure for any kind of business. Whether you want your brochure to be informational or promotional I can make sure your design fits your brand. I am quick to respond so feel free to reach out to me with any questions. I look forward to working with you!</h3>
                            <h2>What is included?</h2>
                            <h3>Unique and Professional Trifold Brochure Design</h3>
                            <h3>Fast turnaround time and delivery</h3>
                            <h3>High Resolution Print Files (PDF)</h3>
                            <h3>Source File (depending on package selected)</h3>
                            <h3>Fast and friendly service</h3>
                        </div>
                    </div>
                    <div class='ServiceOfferPackagePrices-wrapper'>
                            <PackagePriceBrochure />
                    </div>
              </div>
          </div>
        );
    }
    export default ServiceOfferBrochure;