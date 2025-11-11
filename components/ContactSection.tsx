import { memo } from "react";

const ContactSection = memo(function ContactSection() {
  return (
    <section id="contact" className="mb-12">
      <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-blue-100 mb-8 text-lg">협업이나 문의사항이 있으시면 언제든 연락주세요</p>
        <div className="mb-6 space-y-1">
          <p className="text-white">
            Email Address : <a href="mailto:gngntjs88@naver.com" className="underline">gngntjs88@naver.com</a>
          </p>
          <p className="text-white">
            Phone Number : <a href="tel:0104445992" className="underline">010-4445-9928</a>
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          {/* <a href="mailto:gngntjs88@naver.com" className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium">
            Send Email
          </a> */}
          {/* <a href="tel:0104445992" className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-medium">
            Call / Text
          </a> */}
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
