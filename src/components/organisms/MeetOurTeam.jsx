import { useState } from 'react';
import { CircleLeftPng } from '../../assets';
import { GradientText, NavigationButton } from '../atoms';
import TeamCarousel from '../molecules/TeamCarousel';
import TeamInfo from '../molecules/TeamInfo';

const MeetOurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(0);
  const teamMembers = [
    { 
      id: 1, 
      image: 'https://picsum.photos/300/300?random=1',
      name: 'Sarah Johnson',
      designation: 'Lead AI Engineer',
      quote: 'Innovation is the key to transforming complex problems into elegant solutions.\nEvery challenge we face is an opportunity to create something extraordinary.'
    },
    { 
      id: 2, 
      image: 'https://picsum.photos/300/300?random=2',
      name: 'Michael Chen',
      designation: 'Senior Data Scientist',
      quote: 'Data tells a story, and our job is to listen and translate it into action.\nThe insights we uncover today shape the decisions of tomorrow.'
    },
    { 
      id: 3, 
      image: 'https://picsum.photos/300/300?random=3',
      name: 'Emily Rodriguez',
      designation: 'Product Manager',
      quote: 'Great products are born from understanding user needs and exceeding expectations.\nSuccess comes from turning customer feedback into meaningful experiences.'
    },
  ];

  const handlePrevious = () => {
    setSelectedMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setSelectedMember((prev) => (prev + 1) % teamMembers.length);
  };
  return (
    <section className="pt-16.25 relative">
      <img
        src={CircleLeftPng}
        alt="Circle background"
        className="absolute left-0 top-0 z-0"
      />
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-raleway font-semibold text-[3rem] tracking-[-1px] text-center text-[#141219]">Meet Our Team</h2>
        <pre className="font-manrope font-normal text-[1.5rem] text-center mx-auto">
          <GradientText>Meet our passionate and talented team, committed to delivering exceptional{"\n"} results, driving innovation, and transforming your vision into reality.</GradientText>
        </pre>
        
        <div className="flex justify-center gap-2.5 mt-8">
          <NavigationButton onClick={handlePrevious}>←</NavigationButton>
          <NavigationButton onClick={handleNext}>→</NavigationButton>
        </div>
        
        <TeamCarousel teamMembers={teamMembers} selectedMember={selectedMember} />
        
        <TeamInfo member={teamMembers[selectedMember]} />
      </div>
    
    </section>
  );
};

export default MeetOurTeam;