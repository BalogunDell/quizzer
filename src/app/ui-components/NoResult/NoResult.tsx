type NoResultProps = {
  className?: string;
  title?: string;
  description?: string;
}

export const NoResult = ({ title = 'No quizzes found', description = "Try adjusting your search terms", className}: NoResultProps) => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-10 text-gray-400">
      <svg 
        className="w-16 h-16 mb-4 opacity-50" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </svg>
      <p className="text-lg">{title}</p>
      <p className="text-sm opacity-75">{description}</p>
    </div>
  )
}