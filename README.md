# 🗣️ TeenTalk AI

## 📌 프로젝트 개요
**TeenTalk AI**는 청소년을 위한 친근한 AI 챗봇으로, OpenAI의 GPT 모델을 활용하여 자유로운 대화와 상담을 제공합니다. 존댓말이 아닌 반말을 사용하여 더 친숙하고 자연스러운 대화를 지원합니다.

---

## 📂 프로젝트 구조
```
 프로젝트 루트 
 │── index.html # 웹페이지 UI 및 구조 
 │── chatgpt.js # 챗봇 로직 및 OpenAI API 연동 
 │── README.md # 프로젝트 설명 파일
 │── images/ # 이미지 및 아이콘 파일 
 │── css/ # 스타일시트 디렉토리 
    │── font/ # 폰트 디렉토리 
```


---

## 🛠️ 사용 기술
- **HTML / CSS**: 웹 UI 및 디자인
- **JavaScript (Vanilla JS)**: 챗봇 로직 및 사용자 인터랙션 처리
- **OpenAI GPT API**: 자연어 처리 및 대화 응답 생성

---

## 🎯 주요 기능
- 친근한 말투로 자유로운 대화 지원
- 사용자의 질문에 적절한 답변 제공
- 챗봇과의 대화 기록 유지 (간단한 컨텍스트 유지)
- 엔터 키 입력으로 메시지 전송 가능
- 새로 고침 버튼으로 대화 초기화 가능

---

## 🚀 사용 방법
1. **파일 다운로드**: 프로젝트 파일을 로컬 환경에 저장합니다.
2. **API 키 설정**: `chatgpt.js` 파일에서 `"YOUR-API-KEY"` 부분을 실제 OpenAI API 키로 변경합니다.
3. **브라우저에서 실행**: `index.html` 파일을 열어 챗봇과 대화를 시작합니다.

---

## 🔗 OpenAI API 사용 방법
- `chatgpt.js` 파일에서 `ChatGPTAPI.sendRequest()` 함수를 호출하여 OpenAI GPT 모델과 대화를 주고받습니다.
- `context` 배열을 사용하여 이전 대화를 일부 유지하며, 챗봇의 답변이 연속적으로 연결될 수 있도록 구성되어 있습니다.

---

## 📌 추가 개발 가능 요소
- ✅ 대화 로그 저장 기능 추가
- ✅ 더 다양한 대화 스타일 지원
- ✅ 감정 분석을 통한 맞춤형 답변 제공
- ✅ 모바일 최적화 UI 개선

---

## 📄 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.
