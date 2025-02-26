
const selectedIndex = localStorage.getItem("selectedPostIndex");
const allContent = JSON.parse(localStorage.getItem("allContent")) || [];


const editTitleInput = document.getElementById("edit_title");
const editContentInput = document.getElementById("edit_content");
const saveBtn = document.getElementById("save_btn");
const cancelBtn = document.getElementById("cancel_btn");


if (selectedIndex !== null && allContent[selectedIndex]) {
    const selectedPost = allContent[selectedIndex];


    editTitleInput.value = selectedPost.title || "";
    editContentInput.value = selectedPost.write || "";
    
    if (selectedPost.title) {
        setTimeout(() => {
            editTitleInput.classList.add('populated');
        }, 300);
    }
} else {
    showNotification('Cant found content', 'error');
    
    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5501/20250225/page/main/main.html";
    }, 1000);
}

saveBtn.addEventListener("click", () => {
    const updatedTitle = editTitleInput.value.trim();
    const updatedContent = editContentInput.value.trim();

    if (!updatedTitle || !updatedContent) {
        showValidationError();
        return;
    }
    const originalPost = allContent[selectedIndex];
    allContent[selectedIndex] = { 
        ...originalPost,
        title: updatedTitle, 
        write: updatedContent,
        lastEdited: new Date().toISOString() 
    };
    
    localStorage.setItem("allContent", JSON.stringify(allContent));
    
    showNotification('Complete to update your content', 'success');
    
    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5501/20250225/page/detail/detail.html";
    }, 800);
});

cancelBtn.addEventListener("click", () => {
    const selectedPost = allContent[selectedIndex];
    const hasChanges = (
        editTitleInput.value !== selectedPost.title || 
        editContentInput.value !== selectedPost.write
    );
    
    if (hasChanges) {
        if (confirm("Content in progress. Are you sure you want to leave this page?")) {
            window.location.href = "http://127.0.0.1:5501/20250225/page/detail/detail.html";
        }
    } else {
        // 변경사항이 없는 경우 바로 이동
        window.location.href = "http://127.0.0.1:5501/20250225/page/detail/detail.html";
    }
});

// 알림 메시지 표시
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.position = 'fixed';
    notification.style.top = '50%';
    notification.style.left = '50%';
    notification.style.transform = 'translate(-50%, -50%)';
    notification.style.padding = '15px 30px';
    notification.style.borderRadius = '50px';
    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    notification.style.zIndex = '1000';
    notification.style.fontWeight = '500';
    
    if (type === 'success') {
        notification.style.backgroundColor = 'rgba(100, 100, 100, 0.9)';
        notification.style.color = 'white';
    } else if (type === 'error') {
        notification.style.backgroundColor = 'rgba(200, 80, 80, 0.9)';
        notification.style.color = 'white';
    } else {
        notification.style.backgroundColor = 'rgba(100, 100, 100, 0.9)';
        notification.style.color = 'white';
    }

    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes fadeInNotification {
                from { opacity: 0; transform: translate(-50%, -70%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
            }
            @keyframes fadeOutNotification {
                from { opacity: 1; transform: translate(-50%, -50%); }
                to { opacity: 0; transform: translate(-50%, -30%); }
            }
            .notification {
                animation: fadeInNotification 0.3s forwards;
            }
            .notification.fadeout {
                animation: fadeOutNotification 0.3s forwards;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fadeout');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 1500);
}

function showValidationError() {
    if (!editTitleInput.value.trim()) {
        editTitleInput.classList.add('error');
        editTitleInput.placeholder = 'Write your title here';
        
        if (!document.getElementById('error-styles')) {
            const style = document.createElement('style');
            style.id = 'error-styles';
            style.textContent = `
                .error {
                    box-shadow: 0 0 10px inset rgba(255, 0, 0, 0.3) !important;
                    animation: shake 0.5s ease;
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-5px); }
                    40%, 80% { transform: translateX(5px); }
                }
            `;
            document.head.appendChild(style);
        }
        
        editTitleInput.addEventListener('focus', function removeError() {
            this.classList.remove('error');
            this.placeholder = 'Write your title here';
            this.removeEventListener('focus', removeError);
        });
    }
    
    if (!editContentInput.value.trim()) {
        editContentInput.classList.add('error');
        editContentInput.placeholder = 'Write your content here';

        editContentInput.addEventListener('focus', function removeError() {
            this.classList.remove('error');
            this.placeholder = 'Write your content here';
            this.removeEventListener('focus', removeError);
        });
    }
}
