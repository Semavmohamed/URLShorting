import Form from "./Form";
import AdvancedStats from "./Advance";

export default function ShortenStatsSection() {
    return (
        <section className="">
            {/* الخلفية البنفسجية الممتدة لقسم الإحصائيات */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <AdvancedStats />
            </div>
        </section>
    );
}
