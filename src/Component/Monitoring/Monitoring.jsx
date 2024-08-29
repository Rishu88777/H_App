import React from 'react'
import "./Monitoring.scss";
import Monitoringcart from './Monitoringcart';

export default function Monitoring() {
    const moitoring = [
        {
            id: 1,
            title: "The Coming Revolution",
            desc: "Track your heart rate, blood pressure, and other vital signs with our advanced wearable devices.",
            img: "https://mobisoftinfotech.com/resources/wp-content/uploads/2018/05/wearable_technology_healthcare_blog_mobisoft_infotech.png"
          },
          {
            id: 2,
            title: "Smart Health Tracker",
            desc: "Stay on top of your health with real-time data monitoring and personalized insights.",
            img: "https://rukminim2.flixcart.com/image/416/416/l5bd5zk0/smartwatch/d/v/5/1-3-blood-oxygen-step-count-sleep-monitoring-pedometer-for-girls-original-imaggykak753fdzt.jpeg?q=70"
          },
          {
            id: 3,
            title: "HealthGuard Pro",
            desc: "A comprehensive health guardian for you and your loved ones.",
            img: "https://5.imimg.com/data5/HE/TB/MY-35119525/electric-ro-water-purifier-250x250.jpg"
          },
          {
            id: 4,
            title: "VitalSense Wear",
            desc: "Get vital health data at your fingertips with our sleek and comfortable wearables.",
            img: "https://img.fruugo.com/product/7/85/769181857_max.jpg"
          },
          {
            id: 5,
            title: "LifeTrack 360",
            desc: "Take charge of your well-being with our all-in-one health and fitness companion.",
            img: "https://m.media-amazon.com/images/I/41Z5WR2klWL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFIVE%2CBottomLeft%2C360%2C-6_SR600%2C315_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
          },
          {
            id: 6,
            title: "PulseCare",
            desc: "Revolutionary heart rate monitoring for optimal performance and wellness.",
            img: "https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22588_16539156642301393.jpg"
          },
          {
            id: 7,
            title: "WellnessGuard",
            desc: "Your 24/7 wellness assistant, ensuring you always stay in the best shape.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W8wTU6bmyTrv1oGWCOx9wwXjE5AyW0NeCjmmglVCWTpULLhY1-V-k7RZyhokNDCv6gc&usqp=CAU"
          },
          {
            id: 8,
            title: "EcoFit Healthband",
            desc: "Eco-friendly and ergonomic design for the eco-conscious health enthusiasts.",
            img: "https://static.wixstatic.com/media/ef3ba0_61b830efc2534258a1ffcf1452a93969~mv2.png/v1/crop/x_0,y_9,w_390,h_369/fill/w_473,h_517,al_c,lg_1,q_85,enc_auto/Diagnostic%20Medical%20Equipment.png"
          },
          {
            id: 9,
            title: "BioWatch Pro",
            desc: "The future of wearable health tech is here with real-time health analytics.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzwzXmO0XZcJTtgPB2HalzsNqu5qbKo6yqvWYHNVfRzY18-z29CVN1MdkcTVmxR7QExQ&usqp=CAU"
          },
          {
            id: 10,
            title: "Wellness Monitor X",
            desc: "The ultimate wearable for fitness enthusiasts with advanced workout tracking.",
            img: "https://sulcdn.azureedge.net/content/images/blogs/25546077-shutterstock-261082472.jpg"
          },
    ]
    return (
        <div className="monitoring">
    
            {
                moitoring.map((item)=> (
                    <Monitoringcart item={item} key={item.id}/>
                ))
            }
          
           
        </div>
        
    )
}
