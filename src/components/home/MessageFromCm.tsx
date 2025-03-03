function MessageFromCm() {
  return (
    <div className="w-full mx-auto flex">
      <div className="w-full">
        <div className="p-5">
          <h2 className="text-4xl font-bold mb-6 text-center animate-fade-in-up">
            Message From Hon'ble Chief Minister of Odisha
          </h2>

          <section className=" rounded-lg px-16 py-8">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              {/* Left column with image */}
              <div className="w-full md:w-2/5 mb-6 md:mb-0 animate-fade-in-left">
                <div className="text-center">
                  <img
                    loading="lazy"
                    className=" mx-auto w-full max-w-[250px] duration-1000 transition-all hover:animate-bounce"
                    src="https://ofdc.octamy.com/wp-content/uploads/2024/12/shrimohanchaaranmajhi.png"
                    alt="Shri Mohan Charan Majhi"
                  />
                </div>
              </div>

              {/* Right column with text */}
              <div className="w-full md:w-3/5 animate-fade-in-up">
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Over the years, OFDC has played a crucial role in the
                    evolution of Odia cinema, offering a range of services and
                    initiatives aimed at enhancing the quality and reach of
                    regional films. To further its mission, OFDC is now
                    embarking on the design and development of a bilingual web
                    portal that will serve as a dynamic platform for managing
                    and disseminating all its content and services.
                  </p>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  SHRI MOHAN CHARAN MAJHI
                </h2>

                <h3 className="text-lg font-medium text-gray-700">
                  Hon'ble Chief Minister of Odisha
                </h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MessageFromCm;
