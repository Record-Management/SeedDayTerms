import React, { useState } from 'react';
import { FileText, Shield, Lock, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function PolicyWebsite() {
  const [activeTab, setActiveTab] = useState('terms');
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const tabs = [
    { id: 'terms', label: '이용약관', icon: FileText },
    { id: 'privacy', label: '개인정보처리방침', icon: Shield },
    { id: 'location', label: '아동안전 표준 정책 이용약관', icon: Lock }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const ExpandableSection = ({ id, title, children }) => {
    const isExpanded = expandedSections[id];
    
    return (
      <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden hover:shadow-md transition-shadow">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>
        {isExpanded && (
          <div className="p-4 bg-white text-gray-600 leading-relaxed">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
    className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-y-scroll"
    style={{ scrollbarGutter: 'stable' }}
    >
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">약관 및 정책</h1>
            </div>
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="w-full px-6 lg:px-12">
          {/* Desktop Menu */}
          <div className="hidden sm:flex justify-start space-x-2 py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <span className="font-medium text-gray-900">메뉴</span>
              {menuOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {menuOpen && (
              <div className="mt-2 space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          {activeTab === 'terms' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">씨드데이 이용약관</h2>
              <p className="text-sm text-gray-500 mb-8">최종 수정일: 2024년 12월 19일</p>
              <ExpandableSection id="terms-1" title="제1조 (목적)">
                <p className="text-gray-600 leading-relaxed">
                  이 약관은 씨드데이(이하 ‘회사’)가 제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-2" title="제2조 (정의)">
                <p className="text-gray-600 leading-relaxed">
                  이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>“서비스”란 회사가 제공하는 모든 온라인 및 모바일 서비스를 의미합니다.</li>
                  <li>“이용자”란 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
                  <li>“회원”이란 회사와 서비스 이용계약을 체결하고 이용자 아이디를 부여받은 자를 말합니다.</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="terms-3" title="제3조 (약관의 게시 및 개정)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회사는 이 약관의 내용을 이용자가 알 수 있도록 서비스 초기화면 또는 연결화면에 게시합니다.<br />
                  2. 회사는 “약관의 규제에 관한 법률”, “정보통신망 이용촉진 및 정보보호 등에 관한 법률” 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.<br />
                  3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스의 초기화면 또는 연결화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.<br />
                  4. 이용자가 개정약관의 적용에 동의하지 않는 경우, 회사는 개정약관의 내용을 적용할 수 없으며 이 경우 이용자는 서비스 이용을 중단할 수 있습니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-4" title="제4조 (서비스의 제공 및 변경)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회사는 다음과 같은 서비스를 제공합니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>기록 및 사진을 저장하는 서비스</li>
                  <li>기타 회사가 정하는 서비스</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-2">
                  2. 회사는 서비스의 내용 및 제공 방식을 변경할 수 있으며, 중요한 변경 시 사전 공지합니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-5" title="제5조 (서비스의 중단)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.<br />
                  2. 회사는 제1항의 사유로 서비스 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상하지 아니합니다. 단, 회사의 고의 또는 중대한 과실이 있는 경우에는 그러하지 아니합니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-6" title="제6조 (회원가입)">
                <p className="text-gray-600 leading-relaxed">
                  1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.<br />
                  2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.<br />
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>가입 신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                  <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                  <li>허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우</li>
                  <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="terms-7" title="제7조 (회원 탈퇴 및 자격 상실)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며, 회사는 즉시 회원탈퇴를 처리합니다.<br />
                  2. 회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>가입 신청 시에 허위 내용을 등록한 경우</li>
                  <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                  <li>서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="terms-8" title="제8조 (회원의 의무)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회원은 다음 행위를 하여서는 안 됩니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>신청 또는 변경 시 허위내용의 등록</li>
                  <li>타인의 정보 도용</li>
                  <li>회사 및 제3자의 지적재산권에 대한 침해</li>
                  <li>회사 및 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                  <li>외설 또는 폭력적인 메시지, 화상, 음성 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="terms-9" title="제9조 (회사의 의무)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여야 합니다.<br />
                  2. 회사는 이용자가 안전하게 서비스를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-10" title="제10조 (서비스 이용시간)">
                <p className="text-gray-600 leading-relaxed">
                  1. 서비스의 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.<br />
                  2. 회사는 서비스별로 이용가능 시간을 별도로 정할 수 있으며, 이 경우 그 내용을 사전에 공지합니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-11" title="제11조 (게시물의 관리)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회원이 서비스 내에 게시한 게시물의 저작권은 게시한 회원에게 귀속됩니다.<br />
                  2. 회사는 회원이 게시하거나 등록하는 서비스 내의 내용물이 다음 각 호에 해당한다고 판단되는 경우 사전통지 없이 삭제할 수 있습니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>타인을 비방하거나 명예를 훼손하는 내용인 경우</li>
                  <li>공공질서 및 미풍양속에 위반되는 내용인 경우</li>
                  <li>범죄적 행위에 결부된다고 인정되는 내용인 경우</li>
                  <li>회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우</li>
                  <li>기타 관계 법령에 위배된다고 판단되는 경우</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="terms-12" title="제12조 (저작권)">
                <p className="text-gray-600 leading-relaxed">
                  1. 서비스 내에 제공되는 모든 콘텐츠(텍스트, 이미지, 영상 등)의 저작권 및 기타 지적재산권은 회사 또는 정당한 권리자에 귀속됩니다.<br />
                  2. 회원은 회사의 사전 승낙 없이 서비스 내의 콘텐츠를 복제, 전송, 출판, 배포, 방송 기타 방법으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-13" title="제13조 (면책조항)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회사는 천재지변, 불가항력적 사유로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.<br />
                  2. 회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.<br />
                  3. 회사는 회원 상호간 또는 회원과 제3자 간에 서비스를 매개로 하여 발생한 분쟁에 개입하지 않으며, 이로 인한 손해를 배상하지 않습니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-14" title="제14조 (계약 해지 및 이용 제한)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회원이 이 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우 회사는 사전통지 없이 이용계약을 해지하거나 서비스 이용을 제한할 수 있습니다.<br />
                  2. 회사는 전항에 따라 서비스 이용을 제한하거나 계약을 해지한 경우 그 사실을 회원에게 통지합니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-15" title="제15조 (분쟁 해결)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회사와 이용자 간에 서비스 이용과 관련하여 분쟁이 발생한 경우, 회사와 이용자는 분쟁의 해결을 위해 성실히 협의합니다.<br />
                  2. 전항의 협의에도 불구하고 분쟁이 해결되지 않을 경우, 소송의 관할은 회사의 본사 소재지를 관할하는 법원으로 합니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-16" title="제16조 (개인정보 보호)">
                <p className="text-gray-600 leading-relaxed">
                  1. 회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다.<br />
                  2. 개인정보의 보호 및 사용에 대해서는 관련 법령 및 회사가 별도로 고지하는 개인정보처리방침에 따릅니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="terms-17" title="제17조 (기타)">
                <p className="text-gray-600 leading-relaxed">
                  1. 이 약관에 명시되지 않은 사항은 관계법령 및 상관례에 따릅니다.<br />
                  2. 본 약관은 2024년 12월 26일부터 시행합니다.
                </p>
              </ExpandableSection>
              <p className="mt-6 text-sm text-gray-500 border-t border-gray-200 pt-4">
                공지일자: 2024년 12월 19일<br />
                시행일자: 2024년 12월 26일
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">개인정보 처리방침</h2>
              <p className="text-sm text-gray-500 mb-8">최종 수정일: 2024년 12월 19일</p>
              <ExpandableSection id="privacy-1" title="제1조 (개인정보의 처리 목적)">
                <p className="text-gray-600 leading-relaxed">
                  씨드데이(이하 “회사”라 함)는 개인정보를 다음의 목적 이외의 용도로는 이용하지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>회원 가입 및 관리</li>
                  <li>서비스 제공 및 운영</li>
                  <li>고객 상담 및 민원 처리</li>
                  <li>마케팅 및 광고에의 활용</li>
                  <li>기타 신규 서비스 개발 및 맞춤 서비스 제공</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="privacy-2" title="제2조 (개인정보의 처리 및 보유 기간)">
                <p className="text-gray-600 leading-relaxed">
                  회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>회원 가입 및 관리: 회원 탈퇴 시까지</li>
                  <li>서비스 제공에 따른 계약 및 요금 정산: 서비스 제공 완료 및 요금 정산 완료 시까지</li>
                  <li>관련 법령에 따라 보존이 필요한 경우 해당 기간까지</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="privacy-3" title="제3조 (처리하는 개인정보의 항목)">
                <p className="text-gray-600 leading-relaxed">
                  회사는 다음의 개인정보 항목을 처리하고 있습니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>필수항목: 별명, 메인 기록</li>
                  <li>서비스 이용 과정에서 자동으로 생성되는 정보: 접속 IP, 쿠키, 서비스 이용 기록 등</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="privacy-4" title="제4조 (개인정보의 제3자 제공)">
                <p className="text-gray-600 leading-relaxed">
                  회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>이용자가 사전에 동의한 경우</li>
                  <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="privacy-5" title="제5조 (개인정보처리의 위탁)">
                <p className="text-gray-600 leading-relaxed">
                  회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>수탁자: [수탁업체명]</li>
                  <li>위탁하는 업무의 내용: [위탁업무의 내용]</li>
                  <li>위탁 기간: 계약 종료 시까지</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-2">
                  위탁업무의 내용이나 수탁자가 변경될 경우 본 개인정보 처리방침을 통하여 공개하겠습니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="privacy-6" title="제6조 (정보주체와 법정대리인의 권리·의무 및 행사방법)">
                <p className="text-gray-600 leading-relaxed">
                  정보주체는 회사에 대해 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  권리 행사는 개인정보 보호법 시행령 제41조 제1항에 따라 서면, 이메일, FAX 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="privacy-7" title="제7조 (개인정보의 파기)">
                <p className="text-gray-600 leading-relaxed">
                  회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>전자적 파일: 복구 및 재생이 불가능한 방법으로 영구 삭제</li>
                  <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="privacy-8" title="제8조 (개인정보의 안전성 확보조치)">
                <p className="text-gray-600 leading-relaxed">
                  회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>관리적 조치: 내부관리계획 수립 및 시행, 직원 교육 등</li>
                  <li>기술적 조치: 접근권한 관리, 암호화, 보안프로그램 설치 등</li>
                  <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="privacy-9" title="제9조 (개인정보 보호책임자)">
                <p className="text-gray-600 leading-relaxed">
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>개인정보 보호책임자: 김용해</li>
                  <li>연락처: yoho1019@naver.com, 010-5065-9224</li>
                </ul>
              </ExpandableSection>
              <ExpandableSection id="privacy-10" title="제10조 (권익침해 구제방법)">
                <p className="text-gray-600 leading-relaxed">
                  정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
                </p>
              </ExpandableSection>
              <ExpandableSection id="privacy-11" title="제11조 (개인정보 처리방침의 변경)">
                <p className="text-gray-600 leading-relaxed">
                  이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
              </ExpandableSection>
              <p className="mt-6 text-sm text-gray-500 border-t border-gray-200 pt-4">
                공지일자: 2024년 12월 19일<br />
                시행일자: 2024년 12월 26일
              </p>
            </div>
          )}

          {activeTab === 'location' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">아동 안전 표준 정책</h2>
              <p className="text-sm text-gray-500 mb-8">최종 수정일: 2024년 12월 19일</p>

              <ExpandableSection id="childsafe-1" title="1. 아동 안전 원칙">
                <p className="text-gray-600 leading-relaxed">
                  씨드데이는 아동의 안전과 보호를 최우선으로 하며, 모든 서비스 제공 과정에서 아동의 권리와 복지를 존중합니다. 아동의 개인정보는 철저히 보호되며, 모든 아동이 안전하게 서비스를 이용할 수 있도록 적극적으로 노력합니다.
                </p>
              </ExpandableSection>

              <ExpandableSection id="childsafe-2" title="2. 아동 보호를 위한 운영 방침">
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      아동의 개인정보 수집, 이용, 제공 시 법정대리인의 동의를 반드시 받습니다.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      아동에게 유해하거나 부적절한 콘텐츠의 등록, 노출, 공유를 금지하며, 발견 시 즉시 삭제 및 관련 조치를 취합니다.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      아동의 위치정보 등 민감정보는 최소한의 범위에서만 수집·이용하며, 안전하게 보호합니다.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      아동이 서비스 내에서 겪을 수 있는 위험(사이버 괴롭힘, 개인정보 노출 등)에 대해 예방 교육 및 신고 시스템을 제공합니다.
                    </span>
                  </li>
                </ul>
              </ExpandableSection>

              <ExpandableSection id="childsafe-3" title="3. 아동 안전을 위한 기술적·관리적 조치">
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      아동 계정에 대한 접근권한을 엄격히 관리하며, 비밀번호, 인증 등 보안 절차를 강화합니다.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      아동 관련 데이터는 암호화 등 기술적 조치를 통해 외부 유출을 방지합니다.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      아동 보호 담당자 및 청소년 보호 책임자를 지정하여 상시 모니터링 및 신고 접수를 처리합니다.
                    </span>
                  </li>
                </ul>
              </ExpandableSection>

              <ExpandableSection id="childsafe-4" title="4. 아동‧청소년 유해정보 차단 및 신고">
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      아동‧청소년에게 유해한 정보(음란, 폭력, 도박 등)는 서비스 내에서 차단하며, 관련 게시물 발견 시 즉시 삭제합니다.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      이용자 누구나 아동 유해 콘텐츠를 신고할 수 있으며, 신고된 내용은 신속하게 검토 및 처리합니다.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      신고 접수는 이메일(gunhee0072@gmail.com) 또는 고객센터(010-9293-0072)로 가능합니다.
                    </span>
                  </li>
                </ul>
              </ExpandableSection>

              <ExpandableSection id="childsafe-5" title="5. 정책의 공지 및 교육">
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      아동 안전 정책은 서비스 내에 명확히 게시하며, 이용자와 임직원 모두가 쉽게 확인할 수 있도록 합니다.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 leading-relaxed">
                      임직원 대상 아동 보호 교육을 정기적으로 실시하여 정책 준수를 강화합니다.
                    </span>
                  </li>
                </ul>
              </ExpandableSection>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-900 mb-2">청소년 보호 책임자 및 아동 안전 담당자</div>
                <div className="text-gray-600 leading-relaxed">
                  <div>
                    <span className="font-semibold">이름:</span> 이건희<br />
                    <span className="font-semibold">이메일:</span> gunhee0072@gmail.com<br />
                    <span className="font-semibold">전화:</span> 010-9293-0072
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>본 약관 및 정책에 대한 문의사항이 있으시면 고객센터로 연락주시기 바랍니다.</p>
          <p className="mt-2">이메일: yoho1019@naver.com | 전화: 010-5065-9224</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm">© 2025 씨드데이. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}