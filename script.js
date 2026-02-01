// TTO Strategy Engine (Built-in Logic)
const BuzzKnowledge = {
    score: {
        name: "点数診断系 (Gamification)",
        analysis: "損失回避性とツァイガルニク効果を利用。10点超えたらやばいという強いフックで最後まで見せ、コメント欄で計算結果を競わせる構成。",
        getSlides: (product) => [
            { num: 1, role: '指止め', title: `10点超えたらアウト ${product}が必要な男の習慣`, reason: "『03_画像選定の考え方』を適用。美女画像＋強い言葉で指を止める。", img: "美女画像（呆れ顔）" },
            { num: 2, role: '洗顔', title: "洗顔の温度", options: [{ pt: "0点", name: "32度", desc: "美肌の黄金温度" }, { pt: "1点", name: "冷水", desc: "汚れ固まる" }, { pt: "2点", name: "熱いシャワー", desc: "肌への暴力" }], reason: "常識破壊。一番やりがちなシャワーを2点にする。", img: "洗顔シーン" },
            { num: 3, role: '水分', title: "飲み物", options: [{ pt: "0点", name: "常温水", desc: "美顔の基本" }, { pt: "1点", name: "お茶", desc: "悪くないが普通" }, { pt: "2点", name: "エナドリ", desc: "肌の老化毒" }], reason: "ターゲットの使用率が高いものを叩く。", img: "飲み物比較" },
            { num: 4, role: '趣味', title: "趣味", options: [{ pt: "0点", name: "筋トレ", desc: "若返りホルモン" }, { pt: "1点", name: "サウナ", desc: "皮脂過剰注意" }, { pt: "2点", name: "喫煙", desc: "土色肌＋悪臭" }], reason: "人気のサウナをあえて1点にして滞在時間を稼ぐ。", img: "趣味素材" },
            { num: 5, role: '拡散', title: "共有→LINE2番目", reason: "LINE共有を促すギミック。アルゴリズムの拡散スコアを獲得。", img: "共有画面" },
            { num: 6, role: '解決策', title: "汚れ落とし", options: [{ pt: "0点", name: product, desc: "角質を分解。1択" }, { pt: "1点", name: "水洗顔", desc: "皮脂残る" }, { pt: "2点", name: "放置", desc: "一生ニキビ" }], reason: "商品を0点の正解として配置。", img: "商品テクスチャ" },
            { num: 7, role: '要約', title: "垢抜けの鉄則", reason: "結局、落とすケアが9割であると結論づける。", img: "美肌男性画像" },
            { num: 8, role: '行動', title: "合計何点だった？👇", reason: "『00_バズとは』のコメント重視。点数を書かせる。", img: "美女の微笑み" }
        ]
    },
    binary: {
        name: "二項対立 (神vsゴミ)",
        analysis: "A or Bの極端な選択を迫ることで、ユーザーの当事者意識を最大化。視覚的に左右で比較するため脳死状態でも理解可能な構成。",
        getSlides: (product) => [
            { num: 1, role: '指止め', title: "モテる男 vs モテない男", reason: "左右に神とゴミの対比。0.5秒で内容を理解させる。", img: "美女が○×札を持つ" },
            { num: 2, role: '洗顔', title: "洗顔のやり方", options: [{ type: "ゴミ", name: "ゴシゴシ", desc: "摩擦で肌死ぬ" }, { type: "神", name: "泡パック", desc: "摩擦ゼロで美肌" }], reason: "やりがちなNGを叩く。", img: "洗顔対比" },
            { num: 3, role: 'タオル', title: "タオルの使用", options: [{ type: "ゴミ", name: "共用タオル", desc: "雑菌の温床" }, { type: "神", name: "洗顔紙", desc: "常に清潔 垢抜け" }], reason: "衛生観念で危機感を煽る。", img: "タオル対比" },
            { num: 4, role: 'ケア', title: "角質ケア", options: [{ type: "ゴミ", name: "放置", desc: "毛穴詰まりの原因" }, { type: "神", name: product, desc: "角質分解 卵肌" }], reason: "商品を神ツールとして紹介。", img: "商品対比" },
            { num: 5, role: '拡散', title: "共有→LINE2番目こそ...", reason: "共有を促す。", img: "共有アイコン" },
            { num: 6, role: '具体的理由', title: "なぜこれが神か？", reason: "プロの視点でロジカルに解説（信憑性）。", img: "成分イメージ" },
            { num: 7, role: '効果', title: "30日後の変化", reason: "未来の期待感を持たせる。", img: "BeforeAfter" },
            { num: 8, role: '行動', title: "君はどっち派？👇", reason: "意見をコメントさせる。", img: "美女の手招き" }
        ]
    },
    ranking: {
        name: "ランキング形式 (5選)",
        analysis: "『知って得する』有益性を前面に出し、保存率を高める構成。上位に行くほど意外性を高めることで視聴維持に繋げる。",
        getSlides: (product) => [
            { num: 1, role: '指止め', title: `女子が引く...清潔感終了の男 5選`, reason: "負のランキングで不安を煽り指を止める。", img: "美女の冷ややかな目" },
            { num: 2, role: '5位', title: "5位：首元のヨレ", mainContent: { name: "服の劣化", desc: "意外と見られてる。一気に貧乏臭く見える。" }, reason: "当たり前から開始。", img: "ヨレたTシャツ" },
            { num: 3, role: '4位', title: "4位：鼻毛のチラ見え", mainContent: { name: "ハナゲ", desc: "どんなイケメンでもこれで終了。週2でケア。" }, reason: "共感を狙う。", img: "鼻のアップ" },
            { num: 4, role: '3位', title: "3位：唇のガサガサ", mainContent: { name: "砂漠化", desc: "清潔感の天敵。リップは常に携帯しろ。" }, reason: "細かい部分への指摘。", img: "唇イメージ" },
            { num: 5, role: '2位', title: "2位：ドロドロの肌", mainContent: { name: "油田顔", desc: "皮脂汚れは女子が一番嫌う。対策必須。" }, reason: "商品へのブリッジ。", img: "テカった顔" },
            { num: 6, role: '1位', title: "1位：角質の詰まり", mainContent: { name: "汚肌の根源", desc: "これが全ての肌トラブルの元。対策はただ一つ。" }, reason: "最大の原因を提示。", img: "毛穴汚れ" },
            { num: 7, role: '解決', title: `救世主：${product}`, reason: "ランキングの全ての不満を解消する存在として紹介。", img: "商品画像" },
            { num: 8, role: '行動', title: "あてはまる人いた？👇", reason: "保存とコメントを促す。", img: "美女が優しく指差す" }
        ]
    }
};

document.getElementById('generate-btn').addEventListener('click', function () {
    const url = document.getElementById('tiktok-url').value;
    const product = document.getElementById('product-name').value;
    const fmt = document.getElementById('fmt-select').value;

    if (!product) { alert('商品名を入力してください！'); return; }

    this.innerText = 'Analyzing Content & Brain...';
    this.disabled = true;

    // AI解析とナレッジ注入をブラウザ内で完結
    setTimeout(() => {
        const strategy = JSON.parse(JSON.stringify(BuzzKnowledge[fmt]));
        const generatedData = {
            format: strategy.name,
            analysis: strategy.analysis,
            caption: `【保存版】${product}を使った最強の垢抜け術。これ知らないと一生損するよ...😭 #男磨き #垢抜け #清潔感 #${product} #おすすめ`,
            slides: strategy.getSlides(product)
        };
        renderData(generatedData);
        this.innerText = '構成案を自動生成する';
        this.disabled = false;
        document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
});

function renderData(data) {
    const resultSection = document.getElementById('result-section');
    const slidesContainer = document.getElementById('slides-container');
    const analysisText = document.getElementById('analysis-text');
    const captionContent = document.getElementById('caption-content');
    const badge = document.querySelector('.badge');

    resultSection.classList.remove('hidden');
    slidesContainer.innerHTML = '';
    badge.innerText = data.format;
    analysisText.innerHTML = data.analysis;
    captionContent.innerText = data.caption;

    data.slides.forEach(slide => {
        const card = document.createElement('div');
        card.className = 'slide-card';
        let contentHTML = '';
        if (slide.options) {
            const colCount = slide.options.length;
            contentHTML = `<div style="display: grid; grid-template-columns: repeat(${colCount}, 1fr); gap: 10px; margin-top: 15px;">
                ${slide.options.map(opt => `
                    <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px; font-size: 0.75rem; border: 1px solid ${opt.pt === '0点' || opt.type === '神' ? '#00f2ea' : 'rgba(255,255,255,0.1)'}">
                        <div style="font-weight:bold; color: ${opt.pt === '0点' || opt.type === '神' ? '#00f2ea' : '#ff4d4d'};">${opt.pt || opt.type}</div>
                        <div style="font-weight:bold; margin: 4px 0;">${opt.name}</div>
                        <div style="color:#a0aec0;">${opt.desc}</div>
                    </div>
                `).join('')}
            </div>`;
        } else if (slide.mainContent) {
            contentHTML = `<div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin-top: 15px;">
                <div style="font-weight:bold; color:#00f2ea; margin-bottom:5px;">${slide.mainContent.name}</div>
                <div style="color:#a0aec0; font-size:0.8rem;">${slide.mainContent.desc}</div>
            </div>`;
        }
        card.innerHTML = `
            <div class="slide-num">PAGE.0${slide.num} <span class="slide-tag">${slide.role}</span></div>
            <h4>${slide.title}</h4>
            ${contentHTML}
            <div style="margin-top:15px; font-size:0.75rem; color:#a0aec0; background:rgba(0,0,0,0.2); padding:10px; border-radius:6px;">
                <strong>💡 制作指示:</strong> ${slide.reason}
            </div>
            <span class="slide-desc" style="border-top:1px solid rgba(255,255,255,0.1); display:block; padding-top:10px; margin-top:10px;">📸 ${slide.img}</span>
        `;
        slidesContainer.appendChild(card);
    });
}
