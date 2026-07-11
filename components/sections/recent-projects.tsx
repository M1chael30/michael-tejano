import { FolderIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item"

const recentProjects = [
    {
        title: 'SNHS Digistar',
        description: 'School portal capstone project',
        project_url: '#',
        project_url_name: 'snhs-portal.com',
    },
    {
        title: 'Jedlian Website',
        description: 'A company website with cms feature',
        project_url: 'https://jedlian.com',
        project_url_name: 'jedlian.com',
    },
]

export default function RecentProjects() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <FolderIcon className="text-muted-foreground" size={18} />
                    <CardTitle>
                        Recent Projects
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    recentProjects.map((project, index) => (
                        <Item key={index} variant="outline">
                            <ItemContent>
                                <ItemTitle>{project.title}</ItemTitle>
                                <ItemDescription>
                                    {project.description}
                                </ItemDescription>
                                <Button disabled={project.project_url === '#'} variant={'link'} className="w-fit">
                                    <Link target="_blank" href={project.project_url} className="font-light">
                                        {project.project_url_name}
                                    </Link>
                                </Button>
                            </ItemContent>
                        </Item>
                    ))
                }
            </CardContent>
        </Card>
    )
}