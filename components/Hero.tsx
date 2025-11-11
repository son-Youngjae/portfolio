import { memo } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = memo(function Hero() {
  return (
    <section id="about" className="mb-20">
      <div className="bg-white rounded-2xl shadow-lg p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
            <Image
              src="/images/p.jpg"
              alt="손영재 프로필 사진"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">손영재</h1>
            <p className="text-xl text-gray-700 mb-4">Full Stack Developer</p>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              java & Spring / NodeJS & Typescript / DB (MySQL, Oracle) 기반의 긍정적이고 배움에 두려움이 없는 개발자 입니다. 다양한 웹 업무를 수행하며, 문제 해결 능력과 협업 경험을 쌓아왔습니다. 
              개발자의 편함 보다는 사용자의 불편함을 더 많이 생각해야 좋은 프로그램이 나온다고 생각합니다. 
              
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                <Github size={20} />
                GitHub
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <Mail size={20} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
