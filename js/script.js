// 變數
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
const scale = 1.5;
const flipbookContainer = document.getElementById('flipbook');

// 獲取 PDF 文件
const url = 'https://raw.githubusercontent.com/aladar19900217/aladar19900217.github.io/blob/main/example.pdf'; // 替換為您的 PDF 文件路徑

// 加載 PDF
pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
    pdfDoc = pdfDoc_;
    renderPage(pageNum);
});

// 渲染指定頁面
function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(function(page) {
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };

        const renderTask = page.render(renderContext);

        // 等待渲染完成
        renderTask.promise.then(function() {
            const div = document.createElement('div');
            div.className = 'page';
            div.style.width = `${viewport.width}px`;
            div.style.height = `${viewport.height}px`;
            div.appendChild(canvas);
            flipbookContainer.appendChild(div);
            pageRendering = false;

            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });

    // 更新頁面計數器
    document.getElementById('page_num').textContent = pageNum;
}

// 前一頁
function goPrevious() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    flipbookContainer.innerHTML = ''; // 清除之前的頁面
    renderPage(pageNum);
}

// 下一頁
function goNext() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    flipbookContainer.innerHTML = ''; // 清除之前的頁面
    renderPage(pageNum);
}
