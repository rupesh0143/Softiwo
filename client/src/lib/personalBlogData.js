// Personal Blog Data - Add your personal blog posts here
// Each blog post should have a unique slug and comprehensive SEO data

export const personalBlogData = {
  // Example personal blog post - you can modify or replace this
  'my-journey-as-a-developer': {
    id: 1,
    title: 'My Journey as a Full-Stack Developer: From Beginner to Building Complex Applications',
    slug: 'my-journey-as-a-developer',
    excerpt: 'Sharing my personal journey, challenges, and lessons learned while building applications and growing as a developer.',
    metaDescription: 'Personal story of becoming a full-stack developer, sharing experiences, challenges overcome, and lessons learned in software development.',
    author: {
      name: 'Rupesh Kumar',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full-Stack Developer passionate about creating innovative solutions and sharing knowledge with the community.',
      social: {
        twitter: '@rupeshkumar',
        linkedin: '/in/rupeshkumar',
        github: 'rupesh0143'
      }
    },
    publishedAt: '2024-12-15T10:00:00Z',
    updatedAt: '2024-12-15T10:00:00Z',
    readTime: 8,
    category: 'Personal',
    tags: ['Career', 'Development', 'Personal Story', 'Full-Stack', 'Journey'],
    featured: true,
    image: {
      url: '/images/blog/developer-journey.jpg',
      alt: 'Developer working on multiple screens with code',
      width: 1200,
      height: 630
    },
    content: {
      introduction: "Every developer has a unique story. Mine started five years ago when I wrote my first 'Hello World' program, and today I'm building complex full-stack applications that serve thousands of users. This is the story of my journey, the challenges I faced, and the lessons I learned along the way.",
      sections: [
        {
          title: 'The Beginning: First Steps into Programming',
          content: "Like many developers, I started with curiosity and a simple question: 'How do websites work?' This led me to HTML and CSS, then JavaScript, and eventually to the vast world of full-stack development. I remember spending countless nights debugging my first JavaScript function, feeling both frustrated and exhilarated when it finally worked."
        },
        {
          title: 'Learning the Fundamentals',
          content: "The early days were all about building a strong foundation. I focused on understanding core concepts rather than jumping between frameworks. This approach served me well as I progressed to more complex topics like databases, APIs, and system architecture. I learned that patience and persistence are a developer's best friends."
        },
        {
          title: 'Building Real Projects',
          content: "Theory is important, but nothing beats hands-on experience. I started building personal projects, contributing to open source, and eventually working on client projects. Each project taught me something new about problem-solving, user experience, and the importance of clean, maintainable code."
        },
        {
          title: 'Embracing Modern Technologies',
          content: "The tech industry evolves rapidly, and staying current is both a challenge and an opportunity. I've embraced technologies like React, Next.js, Node.js, and cloud platforms. The key is understanding that learning never stops – it's about adapting and growing with the industry."
        },
        {
          title: 'Lessons Learned and Future Goals',
          content: "Through this journey, I've learned that being a developer is about more than just writing code. It's about solving problems, understanding users, collaborating with teams, and continuously learning. My goal now is to build applications that make a real difference while sharing my knowledge with other aspiring developers."
        }
      ],
      conclusion: "The journey of a developer is never really complete – there's always something new to learn, a problem to solve, or a better way to do things. If you're just starting out, embrace the challenges, celebrate the small wins, and remember that every expert was once a beginner.",
      cta: "Are you on your own development journey? I'd love to hear your story and help you build amazing applications."
    },
    seo: {
      canonical: 'https://softiwo.com/blog/personal/my-journey-as-a-developer',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "My Journey as a Full-Stack Developer: From Beginner to Building Complex Applications",
        "description": "Personal story of becoming a full-stack developer, sharing experiences, challenges overcome, and lessons learned in software development.",
        "author": {
          "@type": "Person",
          "name": "Rupesh Kumar"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Softiwo",
          "logo": {
            "@type": "ImageObject",
            "url": "https://softiwo.com/logo.png"
          }
        },
        "datePublished": "2024-12-15T10:00:00Z",
        "dateModified": "2024-12-15T10:00:00Z",
        "image": "https://softiwo.com/images/blog/developer-journey.jpg",
        "url": "https://softiwo.com/blog/personal/my-journey-as-a-developer"
      }
    }
  },

  // Add more personal blog posts here following the same structure
  // Example structure for adding new posts:
  /*
  'your-blog-slug': {
    id: 2,
    title: 'Your Blog Title',
    slug: 'your-blog-slug',
    excerpt: 'Brief description of your blog post...',
    metaDescription: 'SEO description for search engines...',
    author: {
      name: 'Your Name',
      avatar: '/images/your-avatar.jpg',
      bio: 'Your bio...',
      social: {
        twitter: '@yourhandle',
        linkedin: '/in/yourprofile',
        github: 'yourgithub'
      }
    },
    publishedAt: '2024-12-15T10:00:00Z',
    updatedAt: '2024-12-15T10:00:00Z',
    readTime: 5,
    category: 'Technology', // or 'Personal', 'Tutorial', 'Opinion', etc.
    tags: ['tag1', 'tag2', 'tag3'],
    featured: false,
    image: {
      url: '/images/blog/your-image.jpg',
      alt: 'Alt text for your image',
      width: 1200,
      height: 630
    },
    content: {
      introduction: "Your introduction...",
      sections: [
        {
          title: 'Section 1 Title',
          content: "Section 1 content..."
        }
        // Add more sections as needed
      ],
      conclusion: "Your conclusion...",
      cta: "Your call to action..."
    },
    seo: {
      canonical: 'https://softiwo.com/blog/personal/your-blog-slug',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        // Add structured data here
      }
    }
  }
  */
};

// Helper functions for blog management
export const getPersonalBlogPosts = () => {
  return Object.values(personalBlogData).sort((a, b) => 
    new Date(b.publishedAt) - new Date(a.publishedAt)
  );
};

export const getFeaturedPersonalPosts = () => {
  return getPersonalBlogPosts().filter(post => post.featured);
};

export const getPersonalBlogsByCategory = (category) => {
  return getPersonalBlogPosts().filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
};

export const getPersonalBlogBySlug = (slug) => {
  return personalBlogData[slug] || null;
};

export const getRelatedPersonalBlogs = (currentSlug, limit = 3) => {
  const currentPost = personalBlogData[currentSlug];
  if (!currentPost) return [];
  
  return getPersonalBlogPosts()
    .filter(post => 
      post.slug !== currentSlug && 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
};

export const getAllPersonalBlogTags = () => {
  const allTags = new Set();
  Object.values(personalBlogData).forEach(post => {
    post.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
};

export const getPersonalBlogCategories = () => {
  const categories = new Set();
  Object.values(personalBlogData).forEach(post => {
    categories.add(post.category);
  });
  return Array.from(categories).sort();
};