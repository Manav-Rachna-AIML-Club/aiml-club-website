import { poppins, space_grotesk } from "@/app/fonts/fonts";
import { sanityFetch } from "@/sanity/lib/live";

const featuresQuery = `*[_type == "howWeHelp"]{title, description, icon}`

type Feature = {
    icon: string;
    title: string;
    description: string;
}


export default async function Features() {

    const { data: howWeHelp } = await sanityFetch({ query: featuresQuery });

    return (
        <div className="pt-[10rem] py-12 ">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className={`text-4xl font-bold text-center mb-12 ${poppins.className}`}>How We Help</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {howWeHelp.map((feature: Feature, index: number) => (
                        <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl hover:border-orange-500 border transition-shadow">
                            <div className="card-body text-center">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className={`text-xl font-bold mb-2 ${poppins.className}`}>{feature.title}</h3>
                                <p className={`${space_grotesk.className}`}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}