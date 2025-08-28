<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create categories
        $categories = [
            ['name' => 'Technology', 'slug' => 'technology', 'description' => 'Latest tech trends and innovations'],
            ['name' => 'Web Development', 'slug' => 'web-development', 'description' => 'Web development tutorials and tips'],
            ['name' => 'Design', 'slug' => 'design', 'description' => 'UI/UX design insights and inspiration'],
            ['name' => 'Business', 'slug' => 'business', 'description' => 'Business strategy and entrepreneurship'],
            ['name' => 'Lifestyle', 'slug' => 'lifestyle', 'description' => 'Life tips and personal growth'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }

        // Create tags
        $tags = [
            ['name' => 'JavaScript', 'slug' => 'javascript'],
            ['name' => 'Laravel', 'slug' => 'laravel'],
            ['name' => 'React', 'slug' => 'react'],
            ['name' => 'Vue.js', 'slug' => 'vuejs'],
            ['name' => 'PHP', 'slug' => 'php'],
            ['name' => 'CSS', 'slug' => 'css'],
            ['name' => 'HTML', 'slug' => 'html'],
            ['name' => 'Node.js', 'slug' => 'nodejs'],
            ['name' => 'TypeScript', 'slug' => 'typescript'],
            ['name' => 'MySQL', 'slug' => 'mysql'],
            ['name' => 'PostgreSQL', 'slug' => 'postgresql'],
            ['name' => 'API', 'slug' => 'api'],
            ['name' => 'Tutorial', 'slug' => 'tutorial'],
            ['name' => 'Tips', 'slug' => 'tips'],
            ['name' => 'Guide', 'slug' => 'guide'],
        ];

        foreach ($tags as $tag) {
            Tag::create($tag);
        }

        // Create posts with sample content
        $posts = [
            [
                'title' => 'Getting Started with Laravel 10',
                'slug' => 'getting-started-with-laravel-10',
                'excerpt' => 'Learn the basics of Laravel 10 and build your first web application with this comprehensive guide.',
                'content' => "Laravel 10 brings exciting new features and improvements to the popular PHP framework. In this tutorial, we'll walk through setting up a new Laravel 10 project and explore its key features.\n\n## Installation\n\nFirst, make sure you have Composer installed on your system. Then run:\n\n```bash\ncomposer create-project laravel/laravel my-app\n```\n\n## Key Features\n\nLaravel 10 includes several new features:\n\n- Improved Eloquent ORM\n- Enhanced routing capabilities\n- Better testing tools\n- Updated security features\n\n## Conclusion\n\nLaravel 10 continues to be an excellent choice for web development with its elegant syntax and powerful features.",
                'category_id' => 2,
                'published' => true,
                'views' => 245,
            ],
            [
                'title' => 'Modern CSS Grid Layouts',
                'slug' => 'modern-css-grid-layouts',
                'excerpt' => 'Master CSS Grid and create stunning responsive layouts with these practical examples and tips.',
                'content' => "CSS Grid has revolutionized how we create layouts on the web. Let's explore some modern techniques and best practices.\n\n## Basic Grid Setup\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1rem;\n}\n```\n\n## Responsive Design\n\nCSS Grid makes responsive design much easier:\n\n- Automatic column sizing\n- Flexible gap management\n- Easy alignment options\n\n## Advanced Techniques\n\nExplore named grid lines, subgrids, and more advanced layout patterns.",
                'category_id' => 3,
                'published' => true,
                'views' => 189,
            ],
            [
                'title' => 'Building RESTful APIs with Node.js',
                'slug' => 'building-restful-apis-nodejs',
                'excerpt' => 'A complete guide to building scalable and secure REST APIs using Node.js and Express.',
                'content' => "REST APIs are the backbone of modern web applications. In this guide, we'll build a complete API using Node.js and Express.\n\n## Project Setup\n\n```bash\nnpm init -y\nnpm install express cors helmet\n```\n\n## Creating Routes\n\nSet up your basic routes:\n\n```javascript\nconst express = require('express');\nconst app = express();\n\napp.get('/api/users', (req, res) => {\n  res.json({ users: [] });\n});\n```\n\n## Security Best Practices\n\n- Use HTTPS\n- Implement rate limiting\n- Validate input data\n- Use proper authentication\n\n## Testing\n\nAlways test your API endpoints thoroughly before deployment.",
                'category_id' => 2,
                'published' => true,
                'views' => 312,
            ],
            [
                'title' => 'The Future of Web Development',
                'slug' => 'future-of-web-development',
                'excerpt' => 'Explore emerging trends and technologies that will shape the future of web development.',
                'content' => "Web development is constantly evolving. Let's look at the trends and technologies that will define the next decade.\n\n## Emerging Technologies\n\n### WebAssembly\nWebAssembly (WASM) allows near-native performance in web browsers.\n\n### Progressive Web Apps\nPWAs continue to bridge the gap between web and native applications.\n\n### JAMstack Architecture\nJavaScript, APIs, and Markup create fast, secure websites.\n\n## Key Trends\n\n- AI-powered development tools\n- Low-code/no-code platforms\n- Edge computing\n- Improved accessibility standards\n\n## Conclusion\n\nStaying current with these trends will help you build better web applications.",
                'category_id' => 1,
                'published' => true,
                'views' => 567,
            ],
            [
                'title' => 'Productivity Tips for Developers',
                'slug' => 'productivity-tips-developers',
                'excerpt' => 'Boost your coding productivity with these proven strategies and tools used by successful developers.',
                'content' => "Productivity is crucial for developers. Here are time-tested strategies to help you code more efficiently.\n\n## Time Management\n\n### Pomodoro Technique\nWork in 25-minute focused sessions with short breaks.\n\n### Time Blocking\nSchedule specific times for different types of work.\n\n## Development Tools\n\n- Use a powerful code editor (VS Code, JetBrains)\n- Master keyboard shortcuts\n- Automate repetitive tasks\n- Use version control effectively\n\n## Code Quality\n\n- Write clean, readable code\n- Use linters and formatters\n- Practice test-driven development\n- Document your code\n\n## Continuous Learning\n\nStay updated with new technologies and best practices.",
                'category_id' => 5,
                'published' => true,
                'views' => 423,
            ],
            [
                'title' => 'Database Optimization Strategies',
                'slug' => 'database-optimization-strategies',
                'excerpt' => 'Learn how to optimize your database queries and improve application performance significantly.',
                'content' => "Database performance can make or break your application. Here are essential optimization strategies.\n\n## Query Optimization\n\n### Indexing\n```sql\nCREATE INDEX idx_user_email ON users(email);\n```\n\n### Query Analysis\nUse EXPLAIN to understand query execution plans.\n\n## Database Design\n\n- Normalize your schema appropriately\n- Choose the right data types\n- Avoid redundant data\n- Design efficient relationships\n\n## Performance Monitoring\n\n- Monitor slow queries\n- Track database metrics\n- Use connection pooling\n- Implement caching strategies\n\n## Scaling Strategies\n\n- Read replicas\n- Horizontal sharding\n- Vertical scaling\n- Database clustering",
                'category_id' => 1,
                'published' => true,
                'views' => 298,
            ],
        ];

        foreach ($posts as $postData) {
            $post = Post::create($postData);
            
            // Attach random tags to each post
            $tagIds = Tag::inRandomOrder()->limit(random_int(2, 4))->pluck('id');
            $post->tags()->attach($tagIds);
        }
    }
}