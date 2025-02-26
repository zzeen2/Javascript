if (!localStorage.getItem("allContent")) {
    localStorage.setItem("allContent", JSON.stringify([])); 
}

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("writing");
const exitBtn = document.getElementById("exit_btn");
const okBtn = document.getElementById("ok_btn");

exitBtn.addEventListener("click", () => {
    if (titleInput.value.trim() || contentInput.value.trim()) {
        if (confirm("Content in progress. Are you sure you want to leave this page?")) {
            goToMain();
        }
    } else {
        // 입력된 내용이 없으면 바로
        goToMain();
    }
});

okBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
        saveContent(title, content);
        showSaveAnimation();
        
        // 애니메이션 후 메인 페이지로 이동
        setTimeout(() => {
            goToMain();
        }, 800);
    } else {
        showError();
    }
});

function saveContent(title, write) {
    const allContent = JSON.parse(localStorage.getItem("allContent")) || [];
    const date = new Date().toISOString();
    
    allContent.unshift({ title, write, date });
    localStorage.setItem("allContent", JSON.stringify(allContent));
}

function goToMain() {
    window.location.href = "http://127.0.0.1:5501/20250225/page/main/main.html";
}

// 저장 성공 애니메이션
function showSaveAnimation() {
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = 'Complete to save!';
    
    successMsg.style.position = 'fixed';
    successMsg.style.top = '50%';
    successMsg.style.left = '50%';
    successMsg.style.transform = 'translate(-50%, -50%)';
    successMsg.style.background = 'rgba(100, 100, 100, 0.9)';
    successMsg.style.color = 'white';
    successMsg.style.padding = '15px 30px';
    successMsg.style.borderRadius = '50px';
    successMsg.style.fontSize = '18px';
    successMsg.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    successMsg.style.zIndex = '1000';
    
    if (!document.getElementById('animation-styles')) {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.textContent = `
            @keyframes fadeInMessage {
                from { opacity: 0; transform: translate(-50%, -70%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
            }
            @keyframes fadeOutMessage {
                from { opacity: 1; transform: translate(-50%, -50%); }
                to { opacity: 0; transform: translate(-50%, -30%); }
            }
            .fade-in {
                animation: fadeInMessage 0.3s forwards;
            }
            .fade-out {
                animation: fadeOutMessage 0.3s forwards;
            }
        `;
        document.head.appendChild(style);
    }
    
    successMsg.classList.add('fade-in');
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.classList.remove('fade-in');
        successMsg.classList.add('fade-out');
        
        setTimeout(() => {
            if (document.body.contains(successMsg)) {
                document.body.removeChild(successMsg);
            }
        }, 300);
    }, 500);
}

function showError() {
    if (!titleInput.value.trim()) {
        titleInput.style.boxShadow = '0 0 10px inset rgba(255, 0, 0, 0.3)';
        titleInput.placeholder = "What's your title?";
        titleInput.classList.add('error-shake');
        

        setTimeout(() => {
            titleInput.classList.remove('error-shake');
        }, 500);
    }
    if (!contentInput.value.trim()) {
        contentInput.style.boxShadow = '0 0 10px inset rgba(255, 0, 0, 0.3)';
        contentInput.placeholder = 'Write your content here';
        contentInput.classList.add('error-shake');
        

        setTimeout(() => {
            contentInput.classList.remove('error-shake');
        }, 500);
    }
    
    titleInput.addEventListener('focus', resetError);
    contentInput.addEventListener('focus', resetError);
}

function resetError(e) {
    e.target.style.boxShadow = '';
    if (e.target === titleInput) {
        titleInput.placeholder = "What's your title?";
    } else if (e.target === contentInput) {
        contentInput.placeholder = 'Write your content here';
    }
}

if (!document.getElementById('error-shake-style')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'error-shake-style';
    styleSheet.textContent = `
        @keyframes error-shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
        .error-shake {
            animation: error-shake 0.5s ease;
        }
    `;
    document.head.appendChild(styleSheet);
}