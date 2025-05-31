import Image from 'next/image';
export default function HeroBanner() {
  return (
    <div className="pt-15">
      <div className="container mx-auto px-4 py-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-t from-[#f2ffef] to-white text-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gray-900/10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]" />
          </div>
          <div className="relative px-6 py-12 md:py-20 md:px-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Welcome to SASO 2025
              </h1>
              <div className="md:w-1/2 flex justify-center sm:hidden">
                <Image
                  src="/iwkz_logo.png"
                  alt="Picture of the IWKZ Logo"
                  width={400}
                  height={200}
                />
              </div>
              <p className="text-lg opacity-80 mb-6 text-justify">
                Sate Somay a.k.a SASO, salah satu event Bazar makanan Indonesia terbesar di
                Berlin-Jerman yang diiniasi oleh Jamaah Masjid Al-Falah IWKZ e.V.
              </p>
              <div className="hidden sm:inline">
                <p className="text-lg opacity-80 mb-6 text-justify ">
                  Acara ini bertujuan untuk menggalang dana operasional Masjid Al Falah dengan
                  menjual beranega ragam makanan khas Indonesia. Selain dijadikan moment untuk
                  bersilaturahmi sesama masyarakat Indonesia, SASO juga menjadi ajang promosi
                  kuliner kepada masyarakat Jerman.
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                <button className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors">
                  Shop Now
                </button>
                <button className="bg-transparent border border-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:flex md:w-1/2  justify-center ">
              <Image src="/iwkz_logo.png" alt="Picture of the IWKZ Logo" width={400} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
