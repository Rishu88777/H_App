import React from 'react';
import "./Companionship.scss";
import Companionshipcart from './Companionshipcart';
export default function Companionship() {
    const companionshipData = [
        {
          text:
            "Enjoying good times with people you love and care about has some great benefits and contributes to overall wellbeing. There’s nothing quite like having a good laugh with a friend or participating in your favorite activity with an old friend.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6dWyJViTEkSm4FMRQchGRCAtlZ033EBlRQ&usqp=CAU",
        },
        {
          text:
            "Unfortunately, loss of companionship is something many people experience as they get older. This can be due to losing friends/family members or different due to health issues getting in the way and prevent your loved ones from socializing as much as they once did.",
          image: "https://cdn.expresspharma.in/wp-content/uploads/2023/03/09152153/EP_Mar_2023_CoverStory_Feature_750.jpg",
        },
        {
            text:
              "Having someone to talk to and share life experiences with can bring joy and comfort, especially during challenging times. Companionship services provide a caring and friendly presence, offering emotional support and companionship.",
            image: "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F7b4e7c41-1e3a-4312-b6ce-deaa67a46606.jpg?fit=scale-down&source=next&width=700",
          },
          {
            text:
              "Companionship caregivers engage in meaningful conversations, listen attentively, and engage in activities that bring joy to individuals. They can also assist with light household tasks, grocery shopping, and accompanying individuals to appointments or outings.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzcThWmtHzhmTucDiR2EbEHOaypJNbI2tLtHsNoL5MIoDkyk6KGKeIjtknGwv71Dg3Q4&usqp=CAU",
          },
      ];
  return (
    <>
    <div className="compaintxt">
    <h1>Our companion services can help</h1>
    </div>
   <div className="compaionship">
        {companionshipData.map((item) => (
            <Companionshipcart item={item}/>
        ))}
   </div>
   </>
  )
}
