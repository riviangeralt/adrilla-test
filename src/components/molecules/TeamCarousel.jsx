const TeamCarousel = ({ teamMembers, selectedMember }) => {
  return (
    <div className="flex justify-center items-center gap-20 mt-10 relative h-75">
      {teamMembers.map((member, index) => {
        const position = (index - selectedMember + teamMembers.length) % teamMembers.length;
        
        let styles = {};
        if (position === 0) {
          // Center - selected member
          styles = { x: 0, scale: 1, z: 10, opacity: 1 };
        } else if (position === 1) {
          // Right side
          styles = { x: 250, scale: 0.6, z: 5, opacity: 1 };
        } else if (position === teamMembers.length - 1) {
          // Left side
          styles = { x: -250, scale: 0.6, z: 5, opacity: 1 };
        } else {
          // Hidden
          styles = { x: 0, scale: 0, z: 0, opacity: 0 };
        }
        
        const { x, scale, z, opacity } = styles;
        
        return (
          <div
            key={member.id}
            className="absolute top-1/2 left-1/2 transition-all duration-500 ease-out"
            style={{
              transform: `translate(-50%, -50%) translateX(${x}px) scale(${scale})`,
              zIndex: z,
              opacity,
            }}
          >
            <img 
              src={member.image} 
              alt={`Team member ${member.id}`} 
              className={`w-62.5 h-62.5 rounded-full object-cover ${
                position === 0 ? 'border-[0.95px] border-[#CD6028]' : ''
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TeamCarousel;