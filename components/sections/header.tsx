import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { BadgeCheckIcon, LaptopIcon, MailIcon, MapPinIcon } from "lucide-react"
import { ModeToggle } from "../mode-toggle"
import { Button } from "../ui/button"

export default function Header() {
    return (
        <section className="relative flex flex-col sm:flex-row justify-between items-center sm:items-end w-full">
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-end w-full sm:w-auto">
                {/* my profile picture */}
                <div className="shrink-0">
                    <Avatar className="size-24 sm:size-36">
                        <AvatarImage
                            src="/img/profile/my_profile.jpg"
                            alt="@shadcn"
                            className="rounded-2xl"
                        />
                        <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                </div>

                {/* name and details */}
                <div className="flex flex-col space-y-2 items-center sm:items-start text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5">
                        <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold">Michael Tejano</h1>
                        <BadgeCheckIcon className="text-blue-500 shrink-0" />
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-muted-foreground">
                        <MapPinIcon size={16} className="shrink-0" />
                        <p className="text-sm lg:text-base">Cabanatuan City, Nueva Ecija</p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5">
                        <LaptopIcon size={16} className="shrink-0 text-muted-foreground" />
                        <p className="text-sm lg:text-base">Full Stack Junior Developer</p>
                    </div>

                    {/* email me button */}
                    <Button size={'sm'} className={'cursor-pointer'}>
                        Email me <MailIcon />
                    </Button>
                    {/* <Button size={'sm'} className={'cursor-pointer'} asChild>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tejanomichael@gmail.com" target="_blank" rel="noopener noreferrer">
                            Email me <MailIcon />
                        </a>
                    </Button> */}
                </div>
            </div>

            {/* theme toggle */}
            <div className="absolute top-0 right-0 sm:relative sm:top-auto sm:right-auto">
                <ModeToggle />
            </div>
        </section>
    )
}
