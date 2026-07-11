import { LinkIcon, SquareArrowOutUpRightIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { Badge } from '../ui/badge'

const socialLinks = [
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/michael-tejano-09a73238a/',
    },
    {
        title: 'GitHub',
        url: 'https://github.com/M1chael30',
    },
    {
        title: 'Instagram',
        url: 'https://www.instagram.com/lojiiiiiiiiiii/?hl=en',
    },
    {
        title: 'Facebook',
        url: 'https://www.facebook.com/lojiiiiiiiiiii',
    },
]

export default function SocialLinks() {
    return (
        <Card className='w-full md:w-[30%]'>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <LinkIcon className="text-muted-foreground" size={18} />
                    <CardTitle>
                        Social Links
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex gap-3 flex-wrap">
                    {socialLinks.map((link, index) => (
                        <Link
                            href={link.url}
                            target="_blank"
                            key={index}
                        >
                            <Badge className='rounded-sm'>
                                <span>{link.title}</span>
                                <SquareArrowOutUpRightIcon size={14} />
                            </Badge>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}