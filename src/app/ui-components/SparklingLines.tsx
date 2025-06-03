interface SparklingLinesProps {
  numLines?: number;
  lineWidth?: number;
  lineColor?: string;
  opacity?: number;
}

export const SparklingLines = ({
  numLines = 15,
  lineWidth = 100,
  opacity = 0.5
}: SparklingLinesProps) => {
  return (
    <div className="absolute inset-0">
      {[...Array(numLines)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
          style={{
            width: `${lineWidth}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity,
            animation: `sparkle ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};
