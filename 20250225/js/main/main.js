const user = JSON.parse(localStorage.getItem("user")) || { uid: "zieun" };  

document.getElementById("add").addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/20250225/page/write/write.html";
});

const allContent = JSON.parse(localStorage.getItem("allContent")) || [];
const contentArea = document.getElementById("content_area");

function formatDate(dateString) {
    if (!dateString) {
        const now = new Date();
        return `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
    }
    
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
}

const render = (contentArray, clear = false, startIndex = 0) => {
    if (clear) contentArea.innerHTML = ""; 

    contentArray.forEach((element, index) => {
        const content = document.createElement("div");
        content.classList.add("content");
        
        // 애니메이션 딜레이 설정 ----
        content.style.animationDelay = `${0.1 * (index + 1)}s`;
        
        // 내용 미리보기
        const previewText = element.write?.length > 70 ? element.write.substring(0, 70) + '...' : (element.write || "내용 없음");
            
        const formattedDate = formatDate(element.date);

        content.innerHTML = `
            <div class="user_name">${user.uid}</div>
            <div class="content_title">${element.title || "제목 없음"}</div>
            <div class="content_body">${previewText}</div>
            <div class="content_footer">
                <div class="date">${formattedDate}</div>
            </div>
        `;

        content.addEventListener("click", () => {
            localStorage.setItem("selectedPostIndex", startIndex + index); 
            window.location.href = "http://127.0.0.1:5501/20250225/page/detail/detail.html"; 
        });

        contentArea.appendChild(content);
    });
};

// 페이지네이션 ---------------------------------------------------------------------------
const pagination = document.createElement("div");
pagination.id = "pagination";
document.getElementById("content_box").appendChild(pagination);

let pageIndex = 1; // 현재 페이지
const PAGENUM = 6; // 페이지당 콘텐츠 개수
const PAGE_GROUP = 5; // 5페이지씩 묶어서 화살표 이동

const paginationContent = (index) => {
    const startIndex = (index - 1) * PAGENUM;
    const pagingContent = allContent.slice(startIndex, startIndex + PAGENUM);
    render(pagingContent, true, startIndex);
};

const paginationCreate = () => {
    pagination.innerHTML = ""; // 기존 페이지네이션 삭제

    const total = allContent.length;
    const pages = Math.max(1, Math.ceil(total / PAGENUM)); // 최소 1페이지 이상
    const currentGroup = Math.ceil(pageIndex / PAGE_GROUP);
    const startPage = (currentGroup - 1) * PAGE_GROUP + 1;
    const endPage = Math.min(startPage + PAGE_GROUP - 1, pages);

    if (currentGroup > 1) {
        const prevArrow = document.createElement("span");
        prevArrow.textContent = "⬅";
        prevArrow.classList.add("pagination-arrow");
        prevArrow.onclick = () => {
            pageIndex = startPage - 1;
            paginationContent(pageIndex);
            paginationCreate();
        };
        pagination.append(prevArrow);
    }

    for (let i = startPage; i <= endPage; i++) {
        const span = document.createElement("span");
        span.innerHTML = i;
        span.classList.add("pagination-btn");
        if (i === pageIndex) span.classList.add("active");

        span.onclick = () => {
            pageIndex = i;
            paginationContent(pageIndex);
            paginationCreate();
        };
        pagination.append(span);
    }

    if (endPage < pages) {
        const nextArrow = document.createElement("span");
        nextArrow.textContent = "➡";
        nextArrow.classList.add("pagination-arrow");
        nextArrow.onclick = () => {
            pageIndex = endPage + 1;
            paginationContent(pageIndex);
            paginationCreate();
        };
        pagination.append(nextArrow);
    }
};
paginationCreate();
paginationContent(pageIndex);