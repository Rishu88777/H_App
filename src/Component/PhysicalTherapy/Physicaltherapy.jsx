import React from 'react';
import "./Physicaltherapy.scss";
import Physicaltherapycart from './Physicaltherapycart';

const Physicaltherapy = () => {
  const excersie = [
    {
      id: 1,
      name: "Back stretching exercises",
      des: "You can restore hip and spinal muscle balance as you relieve muscular tensions with these body-exercises. You will also work on your abdominal muscles and hamstrings to improve your flexibility in specific muscle groups and reduce the strain exerted on your spine. This exercise will keep your muscles relaxed and comfortable.",
      link: "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325373/child-s-pose-yoga-stretch-and-exercise-gif.gif"
    },

    {
      id: 2,
      name: "Glute Stretch",
      des: "Start by grabbing the back of your right knee and pull it towards the chest. Keep your sacrum or tailbone in contact with the floor. Stay in position for 5-10 seconds, repeating the routine 2 or 3 times.",
      link: "https://i0.wp.com/thumbs.gfycat.com/FearlessUnimportantGoldeneye-size_restricted.gif?h=840"
    },

    {
      id: 3,
      name: "Piriformis stretch",
      des: "While lying on your back, cross the right ankle over the left knee and using your hand, push the right knee down to feel the stretch. Stay in this position for 5-10 seconds, repeating the routine 2 or 3 times.",
      link: "https://post.healthline.com/wp-content/uploads/2021/01/400x400_Exercises_for_Hip_Pain_Figure_Four_Stretch.gif"
    },

    {
      id: 4,
      name: "Hamstring stretch",
      des: "As you lie on your back, grab the back of the right knee and pull the right leg to stretch. Your knee can bend a little, but keep your tailbone on the floor. Keep the right knee straight, and flex the back of the foot to stretch even further.",
      link: "https://thumbs.gfycat.com/MinorLikableCanine-size_restricted.gif"
    },

    {
      id: 5,
      name: "Abdominal stretch",
      des: "As you lie with your tummy in contact with the floor, keep your abs firm, and place your hand right under your shoulders for an abdominal stretch. Press up with your hands gently to stretch your abs.",
      link: "https://post.healthline.com/wp-content/uploads/2019/08/400x400_Best_Ways_to_Stretch_Lats_Cobra.gif"
    },
  ]
  return (
    <>
      <div className="physical-therapy">
        <div className="therapy-header">
          <h2>Physical Therapy</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/128/5047/5047322.png"
            alt="Physical Therapy Icon"
          />
        </div>
        <p>
          Specialized exercises and treatments to improve mobility and strength.
        </p>
      </div>
      <div className="excersietask">
        {
          excersie.map((item) => (
            <Physicaltherapycart item={item} key={item.id}/>
          ))
        }


      </div>

    </>
  );
};

export default Physicaltherapy;
