

import { QuizCardProps } from "@/app/shared/models";
import Image from "next/image";
import Link from "next/link";

export const QuizCard = ({
  title,
  description,
  questionsCount,
  difficulty,
  timeLimit,
  slug,
  thumbnail
}: QuizCardProps) => {
  const difficultyColor = {
    Easy: 'text-green-400',
    Medium: 'text-yellow-400',
    Hard: 'text-red-400'
  };

  return (
    <Link href={`/quizzes/${slug}`} className="relative group">
      <div className="relative min-w-[250px] bg-gray-800/90 rounded-lg p-6 h-full border border-gray-700/50">
        {thumbnail && (
          <div className="flex items-center mb-6">
            <Image 
              src={thumbnail} 
              alt={title}
              className="h-6 w-6 rounded-full object-cover transform group-hover:scale-110 transition duration-200"
            />
            <h3 className="text-xl font-semibold text-white ml-2">{title}</h3>
          </div>
        )}
        <p className="text-gray-300 text-sm mb-4 h-12 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {questionsCount} questions
            </span>
            {timeLimit && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {timeLimit}min
              </span>
            )}
          </div>
          <span className={`font-medium ${difficultyColor[difficulty]}`}>
            {difficulty}
          </span>
        </div>
      </div>
    </Link>
  );
};