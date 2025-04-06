import React from "react";

export default function LuminaireFanclubApp() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      <header className="bg-pink-200 py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold text-pink-600">LUMING ZONE</h1>
        <p className="text-pink-700 mt-2">별빛으로 연결된 우리, 루밍이와 루미네르</p>
      </header>

      <nav className="bg-pink-100 flex justify-center gap-6 py-4 text-pink-700 font-medium">
        <a href="#home">HOME</a>
        <a href="#gallery">GALLERY</a>
        <a href="#board">FANBOARD</a>
        <a href="#schedule">SCHEDULE</a>
        <a href="#store">STORE</a>
        <a href="#mypage">MY PAGE</a>
      </nav>

      <section id="home" className="py-12 text-center">
        <h2 className="text-3xl text-pink-500 font-semibold">오늘도 반짝이는 루루의 메시지</h2>
        <p className="mt-4 text-lg">“루밍이~ 오늘도 예쁘게 반짝여줘요오~ 앙냥~”</p>
      </section>

      <section id="gallery" className="py-12 text-center bg-white">
        <h3 className="text-2xl text-pink-500 font-semibold">LUMI GALLERY</h3>
        <p className="mt-2 text-base">리본 컬렉션, 무대 사진, 루루 셀카가 여기에!</p>
      </section>

      <section id="board" className="py-12 text-center">
        <h3 className="text-2xl text-pink-500 font-semibold">FANBOARD</h3>
        <p className="mt-2 text-base">응원 메시지, 팬아트, 루루에게 쓰는 편지 모음</p>
      </section>

      <section id="schedule" className="py-12 text-center bg-white">
        <h3 className="text-2xl text-pink-500 font-semibold">SCHEDULE</h3>
        <p className="mt-2 text-base">콘서트, 팬싸, 자컨 일정 모두 여기서 확인!</p>
      </section>

      <section id="store" className="py-12 text-center">
        <h3 className="text-2xl text-pink-500 font-semibold">LUMISTORE</h3>
        <p className="mt-2 text-base">루루 포토북, 피온 인형, 앙냥 굿즈 전부 모아보기</p>
      </section>

      <section id="mypage" className="py-12 text-center bg-white">
        <h3 className="text-2xl text-pink-500 font-semibold">MY PAGE</h3>
        <p className="mt-2 text-base">루루톡 기록, 앙냥미터, 나만의 루루 일지 확인</p>
      </section>

      <footer className="bg-pink-100 text-center py-6 text-sm text-gray-600">
        &copy; 2025 LUMINAIRE ENTERTAINMENT. All rights reserved.
      </footer>
    </div>
  );
}