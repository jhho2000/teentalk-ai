// chatgpt.js

const ChatGPTAPI = (function () {
    const API_KEY = 'YOUR-API-KEY';  // OpenAI API 키를 여기에 넣으세요
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const MODEL = 'gpt-4o-mini-2024-07-18';  // 사용할 모델, 필요에 따라 변경 가능
    const TEMPERATURE = 0.7;  // 응답의 창의성 설정
    const SYSTEM_ROLE = '너는 청소년들의 상담사야. 친구처럼 대해줘. 존댓말하지말고 반말로 친근하게 대답하고 적절한 이모지를 보내.';
   
    
    let context = [{"role": "system", "content": SYSTEM_ROLE}];

    function addUserMessage(message) {
      context.push({"role": "user", "content": message});
    }

    
    // API 요청을 보내는 private 함수
    async function sendRequest() {
      console.log(context);

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          },
          body: JSON.stringify({
            model: MODEL,  
            messages: context,
            temperature: TEMPERATURE 
          })
        });
  
        const data = await response.json();
        console.log(`total token : ${data.usage.total_tokens}`);
        // API 호출 성공 시 응답 처리
        if (response.ok) {
          context.push({
            "role": data.choices[0].message.role,
            "content": data.choices[0].message.content});
          return data.choices[0].message.content;
        } else {
          console.error('Error from API:', data);
          return `Error: ${data.error.message}`;
        }
      } catch (error) {
        console.error('Error during fetch:', error);
        return `Error: ${error.message}`;
      }
    }


    function getResponseContent(){
      return context[context.length-1]['content'];
    }
  
    // 메시지 객체를 생성하는 public 함수
    function createMessage(role, content) {
      let object = { role: role, content: content };
      // context.push(object);
      return object;
    }
  
    // 외부에서 사용할 수 있는 함수들을 리턴 (public API)
    return {
      addUserMessage: addUserMessage,
      sendRequest: sendRequest,
      getResponseContent: getResponseContent,
      createMessage: createMessage
    };
  })();
  
