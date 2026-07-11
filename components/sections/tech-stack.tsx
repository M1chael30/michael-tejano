import { CodeIcon, DatabaseIcon, FlaskConicalIcon, GitBranchIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'


const techStack = [
    {
        title: 'Frontend',
        icon: CodeIcon,
        items: [
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'React',
            'Next.js',
        ]
    },
    {
        title: 'Backend',
        icon: DatabaseIcon,
        items: [
            'Node.js',
            'Express.js',
            'PHP',
            'Laravel',
            'MySQL',
            'MongoDB'
        ]
    },
    {
        title: 'Tools',
        icon: GitBranchIcon,
        items: [
            'Git',
            'GitHub',
            'GitHub Desktop',
            'Postman',
            'VS Code',
            'Anti Gravity'
        ]
    }
]

export default function TechStack() {
    return (
        <section className='w-full'>
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <FlaskConicalIcon className="text-muted-foreground" size={18} />
                        <CardTitle>Tech Stack</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {techStack.map((stack, index) => (
                            <Card key={index} className='p-0 ring-0 rounded-0'>
                                <CardHeader className='p-1'>
                                    <div className="flex items-center gap-2">
                                        <stack.icon className="text-muted-foreground" size={18} />
                                        <CardTitle>{stack.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className='p-1'>
                                    <div className="flex flex-wrap gap-2">
                                        {stack.items.map((item, index) => (
                                            <Badge key={index} className="text-xs rounded-sm">{item}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}