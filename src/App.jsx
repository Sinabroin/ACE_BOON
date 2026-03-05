import React, { useState } from 'react';
import { 
  GraduationCap, 
  Coins, 
  Users, 
  Trophy, 
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Code2,
  Sparkles,
  MessageSquare,
  LayoutTemplate,
  Workflow
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const goToNext = () => setCurrentScreen(2);
  const goToPrev = () => setCurrentScreen(1);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-[#e6f2fc] via-[#f0f8ff] to-[#e0f0fb] text-gray-800 relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-8"
      style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
    >
      <div className="fixed top-0 left-0 z-[100] flex items-center">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Logo"
          className="w-28 h-28 md:w-32 md:h-32 object-contain"
        />
        <span className="text-xl md:text-2xl font-medium text-[#2d3748] tracking-tight -ml-4">
          AI Design Lab
        </span>
      </div>

      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40"></div>

      <div className="relative w-full max-w-6xl z-10 transition-all duration-500 ease-in-out">
        {currentScreen === 1 ? (
          <Screen1 onNext={goToNext} />
        ) : (
          <Screen2 onPrev={goToPrev} />
        )}
      </div>

      {currentScreen === 1 && (
        <>
          <div 
            className="absolute top-0 right-0 w-1/12 h-full cursor-pointer z-20 hover:bg-black/5 transition-colors flex items-center justify-center group"
            onClick={goToNext}
            title="다음 화면으로"
          >
            <ChevronRight className="text-blue-500 opacity-0 group-hover:opacity-100 w-12 h-12 transition-opacity" />
          </div>
          <div 
            className="absolute bottom-0 left-0 w-full h-16 cursor-pointer z-20 flex items-center justify-center"
            onClick={goToNext}
            title="다음 화면으로"
          >
            <span className="text-blue-600 font-semibold">클릭하여 AI 구독 가이드 보기 ↓</span>
          </div>
        </>
      )}
      
      {currentScreen === 2 && (
        <div 
          className="absolute top-0 left-0 w-1/12 h-full cursor-pointer z-20 hover:bg-black/5 transition-colors flex items-center justify-center group"
          onClick={goToPrev}
          title="이전 화면으로"
        >
          <ChevronLeft className="text-blue-500 opacity-0 group-hover:opacity-100 w-12 h-12 transition-opacity" />
        </div>
      )}
    </div>
  );
}

function Screen1({ onNext }) {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-12 mt-16 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a365d] tracking-tight mb-4 drop-shadow-sm">
          ACE 활동 특전
        </h1>
        <p className="text-lg md:text-xl text-[#2b6cb0] font-medium">
          ACE 멤버만이 누릴 수 있는 특별한 혜택
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
        <BenefitCard 
          label="SPECIAL BENEFIT 01"
          title="패스트캠퍼스 AI 온오프라인 강의 제공"
          desc="최신 AI 기술과 실무 중심의 고품질<br/>교육 콘텐츠를 제공받으실 수 있습니다."
          sub="온라인 + 오프라인 병행 학습 가능"
          Icon={GraduationCap}
        />
        <BenefitCard 
          label="SPECIAL BENEFIT 02"
          title="매달 10만원 AI 사용료 및 구독료 지원"
          desc="ChatGPT, Claude, Cursor, Genspark 등 AI 도구 사용 비용을<br/>월 10만원 한도 내에서 지원 받으실 수 있습니다."
          sub="다양한 AI 도구 자유롭게 활용"
          Icon={Coins}
        />
        <BenefitCard 
          label="SPECIAL BENEFIT 03"
          title="ACE 커뮤니티 입장 권한 제공"
          desc="ACE들과 최신 AI지식을 공유 할 수 있는<br/>ACE만의 팀즈 채널에 참여하실 수 있습니다."
          sub="실시간 정보 공유 및 협업 기회"
          Icon={Users}
        />
        <BenefitCard 
          label="SPECIAL BENEFIT 04"
          title="우수 활동 인원 포상 예정"
          desc="열정적으로 활동하는 멤버들을 위한<br/>특별한 포상과 선물이 준비되어 있습니다."
          sub="활동 실적에 따른 추가 혜택 제공"
          Icon={Trophy}
        />
      </div>

      <div 
        className="bg-white px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-blue-100 flex items-center gap-3"
      >
        <span className="text-blue-500 text-xl">🚀</span>
        <span className="font-bold text-[#1a365d] text-lg">ACE 활동을 진심으로 축하드립니다.</span>
        <span className="text-blue-500 text-xl">🚀</span>
      </div>
    </div>
  );
}

function BenefitCard({ label, title, desc, sub, Icon }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-blue-200 transition-colors h-full flex flex-col relative overflow-hidden group">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-[#0ea5e9] rounded-xl p-3 text-white shadow-md shadow-sky-200 group-hover:scale-110 transition-transform">
          <Icon size={28} strokeWidth={2.5} />
        </div>
        <div>
          <div className="text-[#0ea5e9] text-xs font-bold tracking-wider mb-1">{label}</div>
          <h3 className="text-xl font-bold text-[#1e293b] leading-tight">{title}</h3>
        </div>
      </div>
      <p 
        className="text-[#64748b] text-sm leading-relaxed mb-6 flex-grow"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
      <div className="flex items-center gap-2 text-[#0ea5e9] font-semibold text-sm bg-sky-50 py-2 px-3 rounded-lg w-fit">
        <CheckCircle2 size={16} />
        {sub}
      </div>
    </div>
  );
}

function Screen2({ onPrev }) {
  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-right-8 duration-700 max-w-5xl mx-auto mt-12 md:mt-0 h-[85vh] overflow-y-auto pr-2 custom-scrollbar pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b-2 border-blue-200 pb-4 shrink-0 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#1a365d] flex items-center gap-3">
            <span className="text-blue-600">ACE</span> AI 유료구독 가이드
          </h1>
          <p className="text-blue-500 font-semibold mt-2">AI 구독료 (10만원/月 限)</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 mb-8">
        <ToolRowWithImage 
          name="Cursor Pro" type="필수" price="$20" desc="바이브 코딩 기반 개발 에디터"
          Icon={Code2} imageUrl={`${import.meta.env.BASE_URL}pricing-cursor.png`}
          link="https://cursor.com/pricing"
        />
        <ToolRowWithImage 
          name="Genspark Plus" type="필수" price="$19.99" desc="지능형 검색 및 문서자료 생성"
          Icon={Sparkles} imageUrl={`${import.meta.env.BASE_URL}pricing-genspark.png`}
          link="https://www.genspark.ai/pricing"
        />
        <ToolRowWithImage 
          name="Claude Pro" type="선택" price="$17" desc="기획·문서·코드 생성 LLM (범용 AI 두뇌)"
          Icon={MessageSquare} imageUrl={`${import.meta.env.BASE_URL}pricing-claude.png`}
          link="https://claude.com/ko-kr/pricing"
        />
        <ToolRowWithImage 
          name="Lovable Pro" type="선택" price="$25" desc="노코드 대화형 웹/앱 개발"
          Icon={LayoutTemplate} imageUrl={`${import.meta.env.BASE_URL}pricing-lovable.png`}
          link="https://lovable.dev/pricing"
        />
        <ToolRowWithImage 
          name="n8n Starter" type="선택" price="€24" desc="워크플로우 자동화 도구"
          Icon={Workflow} imageUrl={`${import.meta.env.BASE_URL}pricing-n8n.png`}
          link="https://n8n.io/pricing/"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 flex flex-col sm:flex-row items-center justify-between shrink-0">
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">합계</div>
          <div className="text-2xl font-black text-[#1e293b]">$39.99 <span className="text-sm font-medium text-gray-500">(필수)</span></div>
        </div>
        <div className="text-blue-700 font-semibold bg-blue-50 px-6 py-3 rounded-xl">
          필수 기준 57,000원 <span className="text-blue-400 font-normal">(월 최대 98,000원 소요)</span>
        </div>
      </div>

      <button onClick={onPrev} className="mt-8 mx-auto text-blue-500 font-medium hover:text-blue-700 flex items-center gap-2 transition-colors z-30 relative shrink-0">
        <ChevronLeft size={20} /> 첫 번째 화면으로 돌아가기
      </button>
    </div>
  );
}

function ToolRowWithImage({ name, type, price, desc, Icon, imageUrl, link }) {
  const isRequired = type === "필수";
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all p-5 flex flex-col lg:flex-row gap-6 items-center">
      <div className="w-full lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100 pb-5 lg:pb-0 lg:pr-6 shrink-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isRequired ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
              <Icon size={20} />
            </div>
            <h3 className="text-xl font-extrabold text-gray-800">{name}</h3>
          </div>
          <span className={`text-xs font-bold px-2 py-1 rounded-md ${isRequired ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-gray-50 text-gray-500 border border-gray-200'}`}>
            {type}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-4 font-medium">{desc}</p>
        <div className="text-lg font-bold text-[#1a365d] bg-blue-50 w-fit px-4 py-1.5 rounded-lg">
          {price} <span className="text-sm font-normal text-gray-500">/월</span>
        </div>
      </div>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full lg:w-2/3 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 relative group flex items-center justify-center shadow-inner min-h-[160px] cursor-pointer"
      >
        <img 
          src={imageUrl} 
          alt={`${name} 요금제`} 
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-40">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 font-bold px-4 py-2 rounded-lg text-sm shadow-lg flex items-center gap-2">
            <Sparkles size={16} className="text-blue-500" />
            {name} 요금제 보러가기
          </span>
        </div>
      </a>
    </div>
  );
}
