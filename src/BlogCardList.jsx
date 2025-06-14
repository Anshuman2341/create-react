import Card1 from './assets/Card1.png';
import Card2 from './assets/Card2.png';
import Card3 from './assets/Card3.png';
import BlogCard from './BlogCard';

export default function BlogCardList() {
    const blogs = [
        {
            image: Card1,
            date: 'Nov 9, 2023',
            title: 'How UX works in web',
            tags: ['UI', 'UX'],
        },
        {
            image: Card2,
            date: 'Aug 18, 2023',
            title: 'Case study - Analysis Application.',
            tags: ['DESIGN', 'PRINT'],
        },
        {
            image: Card3,
            date: 'Feb 16, 2023',
            title: '3 ways to develop your skill',
            tags: ['FIGMA', 'WEB'],
        },
    ];

    return (
        <div>
            {blogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
            ))}
        </div>
    );
}
