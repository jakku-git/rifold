import type { Metadata } from "next"
import { articles, type Article } from "../articles"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articles.find((a: Article) => a.slug === params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found | RIFOLD',
      description: 'The requested article could not be found.',
    }
  }

  const title = typeof article.title === 'string' ? article.title : 'RIFOLD Article'

  return {
    title: `${title} | RIFOLD News`,
    description: article.excerpt,
    openGraph: {
      title,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: article.excerpt,
      images: [article.image],
    },
  }
} 