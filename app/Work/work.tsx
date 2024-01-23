const Work = () => {
  return (
    <>
        <section className="text-white">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-950">
                            <h3 className="text-3xl font-semibold">Work Experiences</h3>
                            <span className="text-sm font-bold tracki uppercase text-gray-400"></span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-950">
                                <h3 className="text-xl font-semibold tracki">IBM</h3>
                                <time className="text-xs tracki uppercase text-gray-400">July 2023 - July 2024</time>
                                <p className="mt-3">Apprenticeship as a Java Developer</p>
                                <p className="mt-3">Java, SpringBoot, Maven, Podman, AWS...</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-950">
                                <h3 className="text-xl font-semibold tracki">Luminess</h3>
                                <time className="text-xs tracki uppercase text-gray-400">April 2023 - June 2023</time>
                                <p className="mt-3">Internship as a Python Developer</p>
                                <p className="mt-3">Python, Django, Bootstrap, Latex...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Work;
