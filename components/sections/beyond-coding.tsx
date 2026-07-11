import { GalleryVerticalEndIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function BeyondCoding() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <GalleryVerticalEndIcon className="text-muted-foreground" size={18} />
                    <CardTitle>
                        Beyond Coding
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <p className="font-light text-xs sm:text-sm">
                    When not writing code,
                    I enjoy staying active and entertained.
                    I'm passionate about
                    <span className="text-blue-400 hover:underline cursor-pointer"> biking, </span>
                    <span className="text-blue-400 hover:underline cursor-pointer">rubics, </span>
                    and
                    <span className="text-blue-400 hover:underline cursor-pointer"> online gaming.</span>
                    These activities help me maintain a healthy work-life balance and provide a great way to unwind and relax.
                </p>
            </CardContent>
        </Card>
    )
}