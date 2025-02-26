
const selectedIndex = localStorage.getItem("selectedPostIndex");
const allContent = JSON.parse(localStorage.getItem("allContent")) || [];
const user = JSON.parse(localStorage.getItem("user")) || { uid: "zieun" };

const titleElement = document.getElementById("detail_title");
const contentElement = document.getElementById("detail_content");
const dateElement = document.getElementById("post_date");
const authorElement = document.getElementById("post_author");
const editBtn = document.getElementById("edit_btn");
const deleteBtn = document.getElementById("delete_btn");
const backBtn = document.getElementById("back_btn");

if (selectedIndex !== null && allContent[selectedIndex]) {
    const selectedPost = allContent[selectedIndex];
    loadPostContent(selectedPost);
} else {
    showErrorState();
}
function loadPostContent(post) {
    titleElement.textContent = post.title || "No title";
    contentElement.textContent = post.write || "No content";
    dateElement.textContent = formatDate(post.date || post.lastEdited);
    authorElement.textContent = post.author || user.uid;

    if (post.lastEdited && post.date && post.date !== post.lastEdited) {
        dateElement.textContent += ` (Updated: ${formatDate(post.lastEdited)})`;
    }
    
    setTimeout(() => {
        titleElement.classList.add('loaded');
        contentElement.classList.add('loaded');
    }, 100);
}

function showErrorState() {
    titleElement.textContent = "Cannot found contnet";
    titleElement.classList.add('error-title');
    
    contentElement.textContent = "The requested post has been deleted or does not exist.";
    contentElement.classList.add('error-content');
    
    dateElement.style.display = 'none';
    authorElement.style.display = 'none';
    
    editBtn.disabled = true;
    editBtn.style.opacity = '0.5';
    editBtn.style.cursor = 'not-allowed';
    deleteBtn.disabled = true;
    deleteBtn.style.opacity = '0.5';
    deleteBtn.style.cursor = 'not-allowed';
    
    setTimeout(() => {
        showNotification('Redirect to main', 'info');
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5501/20250225/page/main/main.html";
        }, 1000);
    }, 2000);
}

function formatDate(dateString) {
    if (!dateString) {
        return 'No date information';
    }
    let date;
    try {
        date = new Date(dateString);
    } catch (e) {
        return dateString; // 파싱 실패 시 원본 반환
    }
    
    if (isNaN(date.getTime())) {
        return dateString;
    }
    
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
}

deleteBtn.addEventListener("click", () => {
    showConfirmDialog("Are you sure you want to delete it?", () => {
        allContent.splice(selectedIndex, 1);
        localStorage.setItem("allContent", JSON.stringify(allContent));
        
        showNotification('Complete to delete!', 'success');
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5501/20250225/page/main/main.html";
        }, 800);
    });
});

editBtn.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/20250225/page/edit/edit.html";
});

backBtn.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/20250225/page/main/main.html";
});

function showConfirmDialog(message, callback) {
    const modalContainer = document.createElement('div');
    modalContainer.className = 'confirm-modal';

    modalContainer.style.position = 'fixed';
    modalContainer.style.top = '0';
    modalContainer.style.left = '0';
    modalContainer.style.width = '100%';
    modalContainer.style.height = '100%';
    modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modalContainer.style.display = 'flex';
    modalContainer.style.justifyContent = 'center';
    modalContainer.style.alignItems = 'center';
    modalContainer.style.zIndex = '1000';
    modalContainer.style.opacity = '0';
    modalContainer.style.transition = 'opacity 0.3s ease';
    
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '25px';
    modalContent.style.borderRadius = '15px';
    modalContent.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    modalContent.style.width = '320px';
    modalContent.style.textAlign = 'center';
    modalContent.style.transform = 'translateY(20px)';
    modalContent.style.transition = 'transform 0.3s ease';
    
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.marginBottom = '20px';
    messageElement.style.fontSize = '1.1rem';
    messageElement.style.color = '#333';
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    
    const cancelButton = document.createElement('button');
    cancelButton.textContent = '취소';
    cancelButton.style.padding = '8px 20px';
    cancelButton.style.backgroundColor = '#aaa';
    cancelButton.style.color = 'white';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '20px';
    cancelButton.style.cursor = 'pointer';
    cancelButton.style.transition = 'all 0.3s ease';
    cancelButton.style.flex = '1';
    cancelButton.style.marginRight = '10px';
    
    const confirmButton = document.createElement('button');
    confirmButton.textContent = '확인';
    confirmButton.style.padding = '8px 20px';
    confirmButton.style.backgroundColor = '#b66';
    confirmButton.style.color = 'white';
    confirmButton.style.border = 'none';
    confirmButton.style.borderRadius = '20px';
    confirmButton.style.cursor = 'pointer';
    confirmButton.style.transition = 'all 0.3s ease';
    confirmButton.style.flex = '1';
    
    // 호버 효과
    cancelButton.onmouseover = () => { cancelButton.style.backgroundColor = '#999'; };
    cancelButton.onmouseout = () => { cancelButton.style.backgroundColor = '#aaa'; };
    confirmButton.onmouseover = () => { confirmButton.style.backgroundColor = '#a55'; };
    confirmButton.onmouseout = () => { confirmButton.style.backgroundColor = '#b66'; };
    
    cancelButton.onclick = () => {
        modalContent.style.transform = 'translateY(20px)';
        modalContainer.style.opacity = '0';
        setTimeout(() => document.body.removeChild(modalContainer), 300);
    };
    
    confirmButton.onclick = () => {
        modalContent.style.transform = 'translateY(20px)';
        modalContainer.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modalContainer);
            callback();
        }, 300);
    };
    
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(confirmButton);
    modalContent.appendChild(messageElement);
    modalContent.appendChild(buttonContainer);
    modalContainer.appendChild(modalContent);
    
    document.body.appendChild(modalContainer);
    setTimeout(() => {
        modalContainer.style.opacity = '1';
        modalContent.style.transform = 'translateY(0)';
    }, 10);
}

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
