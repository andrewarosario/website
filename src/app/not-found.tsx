import { Empty } from '@/components/Empty';
import { RecommendedArticles } from '@/components/RecommendedArticles';

export default function NotFound() {
  return (
    <Empty>
      <h1 className="text-center text-4xl font-extrabold">
        Oops, essa página não foi encontrada.
      </h1>
      <p className="mt-4 text-center text-xl text-gray-400">
        Posts recomendados para você:
      </p>
      <RecommendedArticles />
    </Empty>
  );
}
