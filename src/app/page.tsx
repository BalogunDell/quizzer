"use client"

import { useState } from "react";
import { Button, SearchBar, QuizCard, NoResult } from "./ui-components";
import { quizzes } from "./shared/constants";


export default function Quizzes() {
const [searchQuery, setSearchQuery] = useState('');
const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);

  const handleSearch = (value: string) => {
    setSearchQuery(value);

    if(searchQuery !==value) {
      setTimeout(() => {
        const filtered = quizzes.filter(quiz =>
          quiz.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredQuizzes(filtered);
      }, 1000)
      }
  };
  const hasQuizzes = filteredQuizzes.length > 0;

  return (
    <section>
      <div className="flex items-center flex-col md:flex-row">
        <SearchBar
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search quizzes..."
          className="w-full"
        />
        <Button className="ml-4 w-[100px] md:mt-0 mt-2" title="Search" />
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols:4 gap-6 py-6">
      {hasQuizzes&& (
        filteredQuizzes.map((quiz, index) => (
          <QuizCard key={index} {...quiz} />
        ))
      ) }

      {!hasQuizzes && (
        <NoResult />
      )}
    </div>
    </section>
  );
}
