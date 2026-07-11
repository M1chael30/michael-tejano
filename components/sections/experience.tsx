import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { HistoryIcon, Calendar } from "lucide-react"
import { cn } from "@/lib/utils";

const experiences = [
    {
        title: "Jr. Full Stack Developer Freelancer",
        period: "2026 - Present",
        is_current: true,
        description:
            "Collaborated with clients to understand their business requirements and translated them into technical specifications.",
    },
    {
        title: "Jr. Full Stack Developer Intern",
        period: "2026",
        is_current: false,
        description:
            "Jedlian Holdings Inc.",
    },
    {
        title: "Wrote my first line of code",
        period: "2022",
        is_current: false,
        description:
            "Hello World!",
    },
];
export default function Experience() {
    return (
        <Card className="w-full md:w-[40%]">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <HistoryIcon className="text-muted-foreground" size={18} />
                    <CardTitle>Experience</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute top-4 bottom-0 left-0 border-l-2 border-muted" />

                    {experiences.map(
                        ({ description, period, title, is_current }, index) => (
                            <div className="relative pb-6 pl-6 last:pb-0" key={index}>
                                {/* Timeline dot */}
                                <div className={cn(
                                    "absolute top-1.5 left-px h-3 w-3 -translate-x-1/2 rounded-full",
                                    is_current ? "bg-primary" : "bg-muted"
                                )} />

                                {/* Content */}
                                <div className="space-y-1">
                                    <div>
                                        <h3 className="font-medium text-sm sm:text-base">
                                            {title}
                                        </h3>
                                        <div className="mt-2 flex items-center gap-2 text-sm">
                                            <Calendar className="h-4 w-4" />
                                            <span>{period}</span>
                                        </div>
                                    </div>
                                    <p className="text-pretty text-muted-foreground text-xs sm:text-sm">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
