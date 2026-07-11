import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BriefcaseBusinessIcon } from "lucide-react"

export default function About() {
    return (
        <Card className="w-full md:w-[60%]">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <BriefcaseBusinessIcon className="text-muted-foreground" size={18} />
                    <CardTitle>
                        About Me
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="font-light text-sm">
                    I am a Bachelor of Science in Information Technology (BSIT) graduate with a strong love for coding, particularly in web development.
                    I specialize in building modern, responsive websites using ReactJS, TypeScript, and Laravel, and I am dedicated to continuously learning and improving my craft.
                </p>
                <p className="font-light text-sm">
                    During my college years, I actively participated in hackathons and successfully delivered projects during my On-the-Job Training (OJT). Beyond my formal education, I consistently build hobby projects to explore new technologies, sharpen my problem-solving skills, and deepen my technical knowledge.
                </p>
                <p className="font-light text-sm">
                    Beyond writing code, I highly value user-centric design and effective collaboration. I thrive in environments where I can tackle complex problems, brainstorm innovative solutions, and work alongside other passionate developers.
                    I believe that great software is built not just with solid technical foundations, but with strong communication and a shared vision.
                </p>
            </CardContent>
        </Card>
    )
}
