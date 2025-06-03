export type DifficultyType = 'Easy' | 'Medium' | 'Hard';
export type QuizCardProps = {
  title: string;
  slug: string
  description: string;
  questionsCount: number;
  difficulty: DifficultyType
  timeLimit?: number; 
  thumbnail?: string;
}

