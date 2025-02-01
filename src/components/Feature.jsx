import Img from '../assets/image.png';

export function Feature() {
    return (
        <div className="bg-white">
            <section aria-labelledby="features-heading" className="relative">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
                    <img
                        alt="img"
                        src={Img}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg"
                    />
                </div>

                <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
                    <div className="lg:col-start-2">
                        <h2 id="features-heading" className="text-4xl text-gray-500"></h2>
                        <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Hotspot Mapping 🗺️</p>
                        <p className="mt-4 text-xl tracking-tight text-gray-900">
                            Uses dynamic mapping technology to identify areas where food donations are needed the most.
                            Connects donors, volunteers, and organizations with people in need in real time.
                            Uses AI to analyze trends and predict future hotspots for better resource distribution.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Feature;