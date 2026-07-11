import About from "../sections/about";
import Experience from "../sections/experience";

export default function AboutAndExp() {
    return (
        <section className="w-full flex flex-col md:flex-row gap-4">
            <About />
            <Experience />
        </section>
    )
}
