<script>
  import { onMount } from 'svelte';

  let messages = [
    { sender: "신부", text: "안녕! 이제 결혼식 준비 시작했어?", time: "오전 10:30" },
    { sender: "신랑", text: "응! 벌써부터 설레네 ㅎㅎ", time: "오전 10:31" },
    { sender: "신부", text: "그런데... 내가 청첩장을 어디에 두었는지 기억이 안 나 😅", time: "오전 10:33" },
    { sender: "신랑", text: "청첩장? 같이 찾아보자!", time: "오전 10:34" }
  ];

  let inputValue = "";

  const sendMessage = (event) => {
    if (event) event.preventDefault(); // 기본 이벤트 방지
    if (inputValue.trim() === "") return;

    // 메시지 추가
    messages = [
      ...messages,
      { sender: "나", text: inputValue, time: "오전 10:35" }
    ];

    inputValue = "";
  };

  function handleKeydown(e) {
    if (e.key === "Enter") {
      sendMessage(e); // preventDefault가 포함된 sendMessage 호출
    }
  }
</script>

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: calc(100vh - 60px); /* 전체 화면에서 입력창 높이만큼 뺀 값 */
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }

  .message {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .message.shinbu {
    align-items: flex-end;
  }

  .message.shinlang {
    align-items: flex-start;
  }

  .message.me {
    align-items: flex-end;
  }

  .bubble {
    max-width: 70%;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 2px;
  }

  .shinbu .bubble {
    background-color: #ffe0e6;
    margin-left: auto;
  }

  .shinlang .bubble {
    background-color: #e6f7ff;
  }

  .me .bubble {
    background-color: #d4af37;
    color: white;
  }

  .time {
    font-size: 0.8rem;
    color: #999;
  }

  .input-container {
    display: flex;
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid #ddd;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    z-index: 10; /* Chat container 위로 올리기 */
  }

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 5px;
  }

  button {
    background-color: #d4af37;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #c89b37;
  }
</style>

<div class="chat-container">
  {#each messages as message}
    <div class="message {message.sender === '신부' ? 'shinbu' : message.sender === '신랑' ? 'shinlang' : 'me'}">
      <div class="bubble">{message.text}</div>
      <div class="time">{message.time}</div>
    </div>
  {/each}
</div>

<div class="input-container">
  <script>
    let isComposing = false;
  </script>
  <input
    type="text"
    placeholder="메시지 입력..."
    bind:value={inputValue}
    on:compositionstart={() => (isComposing = true)}
    on:compositionend={() => (isComposing = false)}
    on:keydown={(e) => {
      if (e.key === "Enter" && !isComposing) {
        sendMessage(e);
      }
    }}
  />
  <button on:click={sendMessage}>전송</button>
</div>