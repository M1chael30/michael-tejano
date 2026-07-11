import BeyondCoding from "../sections/beyond-coding";
import RecentProjects from "../sections/recent-projects";
import SocialLinks from "../sections/social-links";

export default function OthersAboutMe() {
    return (
        <section className='w-full flex flex-col md:flex-row gap-4'>
            <SocialLinks />
            <div className="flex flex-col gap-4 w-full md:w-[70%]">
                <BeyondCoding />
                <RecentProjects />
            </div>
        </section>
    )
}
