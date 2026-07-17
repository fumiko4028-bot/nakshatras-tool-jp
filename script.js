// 27の宿の定義
const nakshatras = [
    {
        name: "アシュヴィニー",
        english: "Ashwini",
        number: 1,
        element: "火",
        ruling_planet: "ケートゥ",
        description: "始まりの宿。新しい道を切り開き、冒険心に満ちた性格。",
        traits: ["勇敢", "行動的", "独立心強い"],
        color: "赤",
        animal: "馬"
    },
    {
        name: "バラニー",
        english: "Bharani",
        number: 2,
        element: "火",
        ruling_planet: "金星",
        description: "創造と変化の宿。情熱的で感情豊か。",
        traits: ["情熱的", "創造的", "自信満々"],
        color: "深紅",
        animal: "象"
    },
    {
        name: "クリッティカー",
        english: "Krittika",
        number: 3,
        element: "火",
        ruling_planet: "太陽",
        description: "知識と洞察の宿。明敏で分析的。",
        traits: ["賢明", "指導力", "正直"],
        color: "黄色",
        animal: "羊"
    },
    {
        name: "ロヒニー",
        english: "Rohini",
        number: 4,
        element: "地",
        ruling_planet: "月",
        description: "安定と繁栄の宿。実践的で信頼できる性格。",
        traits: ["安定的", "信頼できる", "実践的"],
        color: "白",
        animal: "蛇"
    },
    {
        name: "ムリガシーラー",
        english: "Mrigasirsha",
        number: 5,
        element: "空気",
        ruling_planet: "火星",
        description: "探求と好奇心の宿。知識への渇望が強い。",
        traits: ["好奇心旺盛", "探求心", "愛想良い"],
        color: "緑",
        animal: "鹿"
    },
    {
        name: "アールドラー",
        english: "Ardra",
        number: 6,
        element: "空気",
        ruling_planet: "ラーフ",
        description: "変化と変革の宿。深い思考力を持つ。",
        traits: ["知的", "変化好き", "鋭敏"],
        color: "深緑",
        animal: "犬"
    },
    {
        name: "プナルヴァスゥ",
        english: "Punarvasu",
        number: 7,
        element: "光",
        ruling_planet: "木星",
        description: "再生と成功の宿。楽観的で社交的。",
        traits: ["楽観的", "社交的", "寛大"],
        color: "黄緑",
        animal: "猫"
    },
    {
        name: "プシュヤ",
        english: "Pushya",
        number: 8,
        element: "水",
        ruling_planet: "土星",
        description: "成長と栄養の宿。養う力と指導力がある。",
        traits: ["支援的", "思慮深い", "責任感"],
        color: "青",
        animal: "牛"
    },
    {
        name: "アシュレーシャー",
        english: "Aslesha",
        number: 9,
        element: "水",
        ruling_planet: "水星",
        description: "深さと秘密の宿。直感と本能が発達している。",
        traits: ["直感的", "神秘的", "内向的"],
        color: "濃紺",
        animal: "蛇"
    },
    {
        name: "マガー",
        english: "Magha",
        number: 10,
        element: "火",
        ruling_planet: "ケートゥ",
        description: "栄光と権力の宿。カリスマと威厳がある。",
        traits: ["支配的", "尊敬される", "高潔"],
        color: "紫",
        animal: "ネズミ"
    },
    {
        name: "プールヴァ・パルグナー",
        english: "Purva Phalguni",
        number: 11,
        element: "火",
        ruling_planet: "金星",
        description: "喜びと創造性の宿。芸術的で社交的。",
        traits: ["創造的", "楽しみ好き", "魅力的"],
        color: "ピンク",
        animal: "ネズミ"
    },
    {
        name: "ウッタラ・パルグナー",
        english: "Uttara Phalguni",
        number: 12,
        element: "火",
        ruling_planet: "太陽",
        description: "成功と昇進の宿。野心的で勤勉。",
        traits: ["野心的", "勤勉", "忍耐強い"],
        color: "白金色",
        animal: "牛"
    },
    {
        name: "ハスタ",
        english: "Hasta",
        number: 13,
        element: "地",
        ruling_planet: "月",
        description: "巧みさと器用さの宿。多才で実務的。",
        traits: ["器用", "多才", "実務的"],
        color: "緑",
        animal: "水牛"
    },
    {
        name: "チトラー",
        english: "Chitra",
        number: 14,
        element: "空気",
        ruling_planet: "火星",
        description: "美しさと複雑さの宿。完璧主義で芸術的。",
        traits: ["完璧主義", "芸術的", "分析的"],
        color: "虹色",
        animal: "虎"
    },
    {
        name: "スヴァーティ",
        english: "Swati",
        number: 15,
        element: "空気",
        ruling_planet: "ラーフ",
        description: "独立と自由の宿。自分のペースを大切にする。",
        traits: ["独立的", "自由好き", "柔軟"],
        color: "黒",
        animal: "水牛"
    },
    {
        name: "ヴィシャーカー",
        english: "Vishakha",
        number: 16,
        element: "光",
        ruling_planet: "木星",
        description: "決定と達成の宿。決断力と実行力がある。",
        traits: ["決断力", "実行力", "目標志向"],
        color: "黄色",
        animal: "虎"
    },
    {
        name: "アヌラーダー",
        english: "Anuradha",
        number: 17,
        element: "水",
        ruling_planet: "土星",
        description: "献身と成功の宿。思慮深く忠実。",
        traits: ["献身的", "忠実", "思慮深い"],
        color: "青緑",
        animal: "鹿"
    },
    {
        name: "ジェーシュター",
        english: "Jyeshtha",
        number: 18,
        element: "水",
        ruling_planet: "水星",
        description: "老賢者の宿。経験と知恵を備えている。",
        traits: ["賢い", "経験豊富", "指導者"],
        color: "濃い青",
        animal: "猫"
    },
    {
        name: "ムーラー",
        english: "Mula",
        number: 19,
        element: "地",
        ruling_planet: "ケートゥ",
        description: "根と基礎の宿。秘密と深さを持つ。",
        traits: ["根気強い", "神秘的", "探究心"],
        color: "黒",
        animal: "犬"
    },
    {
        name: "プールヴァ・アシャーダ",
        english: "Purva Ashadha",
        number: 20,
        element: "火",
        ruling_planet: "金星",
        description: "勝利と繁栄の宿。楽観的で冒険的。",
        traits: ["楽観的", "冒険的", "勝利者"],
        color: "黄色",
        animal: "象"
    },
    {
        name: "ウッタラ・アシャーダ",
        english: "Uttara Ashadha",
        number: 21,
        element: "火",
        ruling_planet: "太陽",
        description: "最終的な勝利の宿。威厳と堅実さがある。",
        traits: ["堅実", "威厳", "勝者気質"],
        color: "赤",
        animal: "猫"
    },
    {
        name: "シュラヴァナ",
        english: "Shravana",
        number: 22,
        element: "空気",
        ruling_planet: "月",
        description: "聞き手と学習の宿。知識への欲求が強い。",
        traits: ["学習好き", "聞き手", "知識欲"],
        color: "銀",
        animal: "猿"
    },
    {
        name: "ダニシュター",
        english: "Dhanishta",
        number: 23,
        element: "空気",
        ruling_planet: "火星",
        description: "富と音楽の宿。リズミカルで音感がある。",
        traits: ["音感", "リズミカル", "活動的"],
        color: "黄色",
        animal: "ライオン"
    },
    {
        name: "シャタービシャジ",
        english: "Shatabhisha",
        number: 24,
        element: "空気",
        ruling_planet: "ラーフ",
        description: "秘密と医療の宿。謎めいて洞察力がある。",
        traits: ["神秘的", "洞察力", "医療的"],
        color: "紫",
        animal: "馬"
    },
    {
        name: "プールヴァ・ボードラパダ",
        english: "Purva Bhadrapada",
        number: 25,
        element: "水",
        ruling_planet: "木星",
        description: "激情と変化の宿。情熱と鋭さを持つ。",
        traits: ["情熱的", "鋭敏", "変化好き"],
        color: "緑",
        animal: "ライオン"
    },
    {
        name: "ウッタラ・ボードラパダ",
        english: "Uttara Bhadrapada",
        number: 26,
        element: "水",
        ruling_planet: "土星",
        description: "幸運と癒しの宿。穏やかで慈悲深い。",
        traits: ["穏やか", "慈悲深い", "幸運"],
        color: "黄色",
        animal: "牛"
    },
    {
        name: "レーヴァティー",
        english: "Revati",
        number: 27,
        element: "水",
        ruling_planet: "水星",
        description: "豊かさと成就の宿。思慮深く助言者質。",
        traits: ["思慮深い", "助言者", "豊か"],
        color: "青",
        animal: "象"
    }
];

// ユリウス通日を計算
function calculateJulianDay(year, month, day) {
    if (month <= 2) {
        year--;
        month += 12;
    }
    const a = Math.floor(year / 100);
    const b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
}

// 月の黄経を計算（簡略版）
function calculateMoonLongitude(jd) {
    const t = (jd - 2451545.0) / 36525.0;

    // 月の平均黄経
    let moonLong = 218.3164477 + 481267.88123421 * t - 0.0015786 * t * t + t * t * t / 538841 - t * t * t * t / 65194000;

    // 補正項（簡略版）
    const lprime = 134.9634664 + 477198.8676313 * t + 0.0089970 * t * t + t * t * t / 69699 - t * t * t * t / 14712000;
    const d = 297.8501921 + 445267.1114034 * t - 0.0018819 * t * t + t * t * t / 545868 - t * t * t * t / 113065000;

    const moonLongCorrection = 6.2887 * Math.sin(toRad(lprime)) + 1.2740 * Math.sin(toRad(2 * d - lprime)) - 0.6928 * Math.sin(toRad(2 * d));

    moonLong += moonLongCorrection;

    // 0-360の範囲に正規化
    moonLong = moonLong % 360;
    if (moonLong < 0) moonLong += 360;

    return moonLong;
}

// ラジアン変換
function toRad(deg) {
    return deg * Math.PI / 180;
}

// 月の黄経から宿を計算
function calculateNakshatra(moonLongitude) {
    const nakshatraIndex = Math.floor((moonLongitude / 360) * 27);
    return nakshatraIndex >= 27 ? 26 : nakshatraIndex;
}

// 占いを実行
function divineNakshatra(birthDate) {
    const [year, month, day] = birthDate.split('-').map(Number);

    // 生年月日の検証
    if (year < 1900 || year > new Date().getFullYear()) {
        throw new Error("1900年から今年の間で入力してください");
    }

    const jd = calculateJulianDay(year, month, day);
    const moonLong = calculateMoonLongitude(jd);
    const nakshatraIndex = calculateNakshatra(moonLong);
    const nakshatra = nakshatras[nakshatraIndex];

    return {
        nakshatra,
        moonLongitude: moonLong.toFixed(2)
    };
}

// フォーム送信処理
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const birthdate = document.getElementById('birthdate').value;
    const errorEl = document.getElementById('error');
    const resultEl = document.getElementById('result');

    try {
        errorEl.classList.remove('show');
        const result = divineNakshatra(birthdate);

        // 結果を表示
        document.getElementById('resultTitle').textContent = `${result.nakshatra.name}（${result.nakshatra.english}）`;
        document.getElementById('resultDescription').textContent = result.nakshatra.description;

        const propertiesHtml = `
            <div class="property">
                <div class="property-label">番号</div>
                <div class="property-value">${result.nakshatra.number}</div>
            </div>
            <div class="property">
                <div class="property-label">支配惑星</div>
                <div class="property-value">${result.nakshatra.ruling_planet}</div>
            </div>
            <div class="property">
                <div class="property-label">五大元素</div>
                <div class="property-value">${result.nakshatra.element}</div>
            </div>
            <div class="property">
                <div class="property-label">シンボル</div>
                <div class="property-value">${result.nakshatra.animal}</div>
            </div>
        `;

        document.getElementById('resultProperties').innerHTML = propertiesHtml;
        resultEl.classList.add('show');
    } catch (error) {
        errorEl.textContent = `エラー: ${error.message}`;
        errorEl.classList.add('show');
        resultEl.classList.remove('show');
    }
});

// ページ読み込み時にデフォルト日付を設定
window.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    document.getElementById('birthdate').value = `${year}-${month}-${day}`;
});
