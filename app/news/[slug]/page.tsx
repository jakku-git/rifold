"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { articles, type Article, type RelatedArticle } from "../articles"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a: Article) => a.slug === params.slug)

  if (!article) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/news">Back to News</Link>
          </Button>
        </div>
      </div>
    )
  }

  const title = typeof article.title === 'string' ? article.title : 'RIFOLD Article'
  const shareUrl = `https://rifold.com/news/${article.slug}`

  return (
    <article className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <Image
          src={article.image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="container mx-auto px-4 relative z-10 pb-16">
          <div className="max-w-4xl">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
              {title}
            </h1>
            <div className="flex items-center text-white/80 text-sm">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Social Share */}
            <div className="flex items-center justify-between mb-12 pb-6 border-b">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to News
                </Link>
              </Button>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Share this article:</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-emerald-600 prose-blockquote:bg-emerald-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-ul:list-disc prose-ul:marker:text-emerald-600"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Author Bio */}
            {article.author && (
              <div className="mt-16 pt-8 border-t">
                <div className="flex items-start gap-6">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={article.author.image}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{article.author.name}</h3>
                    <p className="text-muted-foreground mb-2">{article.author.role}</p>
                    <p className="text-sm text-muted-foreground">{article.author.bio}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Related Articles */}
            {article.relatedArticles && article.relatedArticles.length > 0 && (
              <div className="mt-16 pt-8 border-t">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {article.relatedArticles.map((related: RelatedArticle) => (
                    <Link
                      key={related.id}
                      href={`/news/${related.slug}`}
                      className="group block"
                    >
                      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{related.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </article>
  )
} 