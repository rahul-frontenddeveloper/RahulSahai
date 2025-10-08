const Background3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float-slow opacity-30" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-glow-pulse opacity-30" />
      </div>

      {/* 3D Geometric Grid */}
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        {/* Floating Cubes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary/10"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              transform: `rotateX(${45 + i * 10}deg) rotateY(${45 + i * 10}deg) rotateZ(${i * 15}deg)`,
              transformStyle: "preserve-3d",
              animation: `float-slow ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4A90E2" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          {/* Dynamic connecting lines */}
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-glow-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          
          {/* Neural nodes */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="3"
              fill="#4A90E2"
              className="animate-glow-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Hexagonal Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25v50L50 100 6.7 75V25z' fill='none' stroke='%234A90E2' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{
            animation: "scan 4s linear infinite",
          }}
        />
      </div>

      {/* Corner Brackets (HUD Style) */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-primary/20" />
    </div>
  );
};

export default Background3D;
