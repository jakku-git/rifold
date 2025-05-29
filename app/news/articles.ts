import type { ReactNode } from "react"

export interface Author {
  name: string
  role: string
  bio: string
  image: string
}

export interface RelatedArticle {
  id: number
  title: string
  excerpt: string
  image: string
  slug: string
}

export interface Article {
  id: number
  title: string | ReactNode
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
  slug: string
  content: string
  author?: Author
  relatedArticles?: RelatedArticle[]
}

export const articles: Article[] = [
  {
    id: 1,
    title: "The Science Behind Vitamin D Absorption",
    excerpt: "New research reveals how vitamin K2 significantly improves vitamin D absorption and utilization in the body.",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&h=800&fit=crop",
    category: "Research",
    slug: "vitamin-d-absorption-science",
    author: {
      name: "Dr. Sarah Chen",
      role: "Research Director",
      bio: "Dr. Chen has over 15 years of experience in nutritional research, specializing in fat-soluble vitamins and their interactions.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop"
    },
    content: `
      <p class="lead">
        Recent breakthroughs in nutritional science have revealed a fascinating synergy between vitamins D and K2, 
        fundamentally changing how we understand these essential nutrients' roles in human health.
      </p>

      <h2>The Vitamin D-K2 Connection</h2>
      <p>
        For decades, vitamin D has been celebrated as the "sunshine vitamin," crucial for bone health and immune function. 
        However, emerging research suggests that its effectiveness is significantly enhanced when paired with vitamin K2, 
        creating what scientists now call the "D-K2 synergy."
      </p>

      <h2>Understanding the Mechanism</h2>
      <p>
        Vitamin D promotes calcium absorption in the gut, while vitamin K2 activates proteins that direct calcium to the 
        bones and teeth, preventing its accumulation in soft tissues. This partnership is particularly important for:
      </p>
      <ul>
        <li>Bone density maintenance</li>
        <li>Cardiovascular health</li>
        <li>Immune system function</li>
        <li>Inflammation regulation</li>
      </ul>

      <h2>Latest Research Findings</h2>
      <p>
        A groundbreaking study published in the Journal of Clinical Nutrition demonstrated that participants who took 
        vitamin D3 with K2 showed:
      </p>
      <ul>
        <li>27% higher vitamin D levels compared to D3 alone</li>
        <li>Improved calcium utilization efficiency</li>
        <li>Better bone mineral density markers</li>
      </ul>

      <h2>Practical Applications</h2>
      <p>
        At RIFOLD, we've incorporated these findings into our supplement formulations, ensuring optimal ratios of 
        vitamins D3 and K2 for maximum effectiveness. Our research team continues to monitor emerging studies to 
        refine our formulations further.
      </p>

      <blockquote>
        "The D-K2 synergy represents a paradigm shift in how we approach nutritional supplementation. 
        It's not just about individual nutrients anymore, but how they work together." — Dr. Sarah Chen
      </blockquote>

      <h2>Looking Forward</h2>
      <p>
        As research continues to uncover the complex interactions between these vitamins, we're committed to 
        staying at the forefront of nutritional science. Our ongoing studies aim to further optimize the 
        D-K2 ratio for different population groups and health goals.
      </p>
    `,
    relatedArticles: [
      {
        id: 5,
        title: "Magnesium: The Overlooked Mineral for Sleep Quality",
        excerpt: "Research shows that magnesium supplementation can significantly improve sleep duration and quality.",
        image: "https://images.unsplash.com/photo-1541480609187-89f18b5a4b0c?w=1200&h=800&fit=crop",
        slug: "magnesium-sleep-quality"
      },
      {
        id: 3,
        title: "The Connection Between Gut Health and Immunity",
        excerpt: "Exploring the fascinating relationship between your microbiome and immune system function.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop",
        slug: "gut-health-immunity"
      }
    ]
  },
  {
    id: 2,
    title: "RIFOLD Launches New Omega-3 Formula",
    excerpt: "Our new sustainable fish oil supplement provides 30% higher EPA and DHA content with improved taste.",
    date: "April 22, 2023",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1200&h=800&fit=crop",
    category: "Product News",
    slug: "new-omega3-formula-launch",
    author: {
      name: "Michael Thompson",
      role: "Product Development Lead",
      bio: "Michael leads RIFOLD's product innovation team, bringing 12 years of experience in nutritional supplement formulation.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
    },
    content: `
      <p class="lead">
        We're excited to announce the launch of our revolutionary new Omega-3 formula, representing a significant 
        advancement in fish oil supplementation technology and sustainability.
      </p>

      <h2>Breakthrough in Omega-3 Technology</h2>
      <p>
        After three years of research and development, our team has created a next-generation Omega-3 supplement 
        that addresses the most common challenges with fish oil products:
      </p>
      <ul>
        <li>30% higher concentration of EPA and DHA</li>
        <li>Eliminated fishy aftertaste</li>
        <li>Improved absorption rate</li>
        <li>Sustainable sourcing practices</li>
      </ul>

      <h2>Sustainability Commitment</h2>
      <p>
        Our new formula comes from MSC-certified sustainable fisheries, ensuring that our commitment to 
        environmental responsibility goes hand-in-hand with product quality. Each batch is:
      </p>
      <ul>
        <li>Traceable to sustainable sources</li>
        <li>Certified by independent auditors</li>
        <li>Produced with minimal environmental impact</li>
      </ul>

      <h2>Enhanced Benefits</h2>
      <p>
        The new formulation provides several advantages over traditional fish oil supplements:
      </p>
      <ul>
        <li>Faster absorption for quicker benefits</li>
        <li>No refrigeration required</li>
        <li>Longer shelf life</li>
        <li>Smaller, easier-to-swallow softgels</li>
      </ul>

      <blockquote>
        "This represents not just an improvement in our product line, but a new standard for the entire 
        industry in terms of both efficacy and sustainability." — Michael Thompson
      </blockquote>

      <h2>Customer Experience</h2>
      <p>
        Early feedback from our beta testing group has been overwhelmingly positive, with particular praise for:
      </p>
      <ul>
        <li>Improved taste and aftertaste</li>
        <li>Noticeable health benefits</li>
        <li>Convenient packaging</li>
        <li>Clear sustainability messaging</li>
      </ul>

      <h2>Availability</h2>
      <p>
        The new Omega-3 formula is now available on our website and through select retail partners. 
        We're offering a special launch promotion for the first month, including:
      </p>
      <ul>
        <li>20% off first purchase</li>
        <li>Free shipping</li>
        <li>Comprehensive usage guide</li>
        <li>30-day satisfaction guarantee</li>
      </ul>
    `,
    relatedArticles: [
      {
        id: 4,
        title: "RIFOLD Partners with Environmental Conservation Group",
        excerpt: "Our new initiative aims to protect marine ecosystems that provide many of our key ingredients.",
        image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&h=800&fit=crop",
        slug: "environmental-conservation-partnership"
      }
    ]
  },
  {
    id: 3,
    title: "The Connection Between Gut Health and Immunity",
    excerpt: "Exploring the fascinating relationship between your microbiome and immune system function.",
    date: "March 10, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop",
    category: "Wellness",
    slug: "gut-health-immunity",
    author: {
      name: "Dr. Emily Rodriguez",
      role: "Wellness Research Specialist",
      bio: "Dr. Rodriguez specializes in gut microbiome research and its impact on overall health and immunity.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
    },
    content: `
      <p class="lead">
        The gut-immune connection represents one of the most exciting frontiers in modern health science, 
        revealing how our digestive system influences our body's defense mechanisms in profound ways.
      </p>

      <h2>The Gut-Immune Axis</h2>
      <p>
        Recent research has uncovered a complex communication network between our gut microbiome and immune system, 
        often called the gut-immune axis. This bidirectional relationship plays a crucial role in:
      </p>
      <ul>
        <li>Immune system development</li>
        <li>Inflammation regulation</li>
        <li>Pathogen defense</li>
        <li>Autoimmune response</li>
      </ul>

      <h2>Understanding the Microbiome</h2>
      <p>
        Our gut microbiome consists of trillions of microorganisms that:
      </p>
      <ul>
        <li>Train our immune system to recognize threats</li>
        <li>Produce beneficial compounds</li>
        <li>Maintain gut barrier integrity</li>
        <li>Modulate immune responses</li>
      </ul>

      <h2>Key Research Findings</h2>
      <p>
        Studies have shown that a healthy gut microbiome can:
      </p>
      <ul>
        <li>Reduce inflammation</li>
        <li>Enhance immune response to vaccines</li>
        <li>Improve resistance to infections</li>
        <li>Support recovery from illness</li>
      </ul>

      <blockquote>
        "The gut microbiome is like a command center for our immune system, constantly communicating and 
        coordinating our body's defense strategies." — Dr. Emily Rodriguez
      </blockquote>

      <h2>Practical Applications</h2>
      <p>
        Based on this research, we can support our gut-immune health through:
      </p>
      <ul>
        <li>Diverse, fiber-rich diet</li>
        <li>Probiotic supplementation</li>
        <li>Stress management</li>
        <li>Regular exercise</li>
        <li>Adequate sleep</li>
      </ul>

      <h2>Future Directions</h2>
      <p>
        As research continues to uncover the complexities of the gut-immune relationship, we're developing 
        new approaches to support this crucial connection through targeted supplementation and lifestyle 
        recommendations.
      </p>
    `,
    relatedArticles: [
      {
        id: 1,
        title: "The Science Behind Vitamin D Absorption",
        excerpt: "New research reveals how vitamin K2 significantly improves vitamin D absorption and utilization in the body.",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&h=800&fit=crop",
        slug: "vitamin-d-absorption-science"
      }
    ]
  }
  // Additional articles can be added here
] 