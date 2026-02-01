// data.js が読み込まれている前提
document.addEventListener('DOMContentLoaded', () => {
    if (typeof latestGeneratedData !== 'undefined') {
        renderData(latestGeneratedData);
    }
});

document.getElementById('generate-btn').addEventListener('click', function () {
    this.innerText = 'Analyzing Video FMT...';
    // プロトタイプではリロードして最新のdata.jsを読み込む
    setTimeout(() => {
        location.reload();
    }, 500);
});

function renderData(data) {
    const resultSection = document.getElementById('result-section');
    const slidesContainer = document.getElementById('slides-container');
    const analysisText = document.getElementById('analysis-text');
    const captionContent = document.getElementById('caption-content');
    const badge = document.querySelector('.badge');

    resultSection.classList.remove('hidden');
    slidesContainer.innerHTML = '';

    // 基本情報の反映
    badge.innerText = data.format;
    analysisText.innerHTML = data.analysis;
    captionContent.innerText = data.caption;

    // スライド案の生成
    data.slides.forEach(slide => {
        const card = document.createElement('div');
        card.className = 'slide-card';

        let contentHTML = '';
        if (slide.options && slide.options.length > 0) {
            // 対立/診断型 (2カラム or 3カラム)
            const colCount = slide.options.length;
            contentHTML = `<div class="options-container" style="display: grid; grid-template-columns: repeat(${colCount}, 1fr); gap: 10px; margin-top: 15px;">
                ${slide.options.map(opt => `
                    <div class="option-item" style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px; font-size: 0.75rem; border: 1px solid ${opt.type === '神' || opt.pt === '0点' ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)'}">
                        <div style="font-weight: bold; color: ${opt.type === '神' || opt.pt === '0点' ? 'var(--accent-color)' : '#ff4d4d'}; margin-bottom: 5px; font-size: 0.8rem;">
                            ${opt.type || opt.pt}
                        </div>
                        <div style="font-weight: bold; margin-bottom: 5px; font-size: 0.9rem;">${opt.name}</div>
                        <div style="color: #a0aec0; line-height: 1.4;">${opt.desc}</div>
                    </div>
                `).join('')}
            </div>`;
        } else if (slide.mainContent) {
            // ランキング/1テーマ型
            contentHTML = `<div class="main-content" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin-top: 15px;">
                <div style="font-weight: bold; font-size: 1rem; color: var(--accent-color); margin-bottom: 8px;">${slide.mainContent.tag || ''}</div>
                <div style="font-weight: bold; font-size: 1.1rem; margin-bottom: 8px;">${slide.mainContent.name}</div>
                <div style="color: #a0aec0; line-height: 1.5; font-size: 0.85rem;">${slide.mainContent.desc}</div>
            </div>`;
        }

        card.innerHTML = `
            <div class="slide-num">PAGE.0${slide.num} <span class="slide-tag">${slide.role}</span></div>
            <h4 style="font-size: 1.1rem; border-left: 3px solid var(--accent-color); padding-left: 10px;">${slide.title}</h4>
            ${contentHTML}
            <div style="margin-top: 15px; font-size: 0.75rem; color: #a0aec0; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px;">
                <strong>💡 制作指示:</strong> ${slide.reason}
            </div>
            <span class="slide-desc" style="border-top: 1px solid rgba(255,255,255,0.1); display:block; padding-top:10px; margin-top:10px; font-size: 0.7rem;">📸 ${slide.img}</span>
        `;
        slidesContainer.appendChild(card);
    });
}
