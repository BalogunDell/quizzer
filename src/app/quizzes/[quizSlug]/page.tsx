export default async function Page({ params }: { params: Promise<{ quizSlug: string }> }) {
  const { quizSlug } = await params;

  return (
    <section>
      <h1>Quiz page</h1>
      <p>This is the quiz page for {quizSlug}</p>
    </section>
  );
}