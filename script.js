// 27の宿の定義（完全版）
const nakshatras = [
    { name: "アシュヴィニー", english: "Ashwini", number: 1, element: "火", ruling_planet: "ケートゥ", description: "始まりの宿。新しい道を切り開き、冒険心に満ちた性格。", detailed_description: "アシュヴィニーは勇気と行動の象徴です。新しいチャレンジに恐れず立ち向かい、人生に常に新鮮さをもたらします。医療や治療に関する才能も高く、人々を癒すことができます。", traits: ["勇敢", "行動的", "独立心強い"], color: "赤", lucky_color: "赤", lucky_number: 1, animal: "馬", compatible_with: [4, 7, 10], incompatible_with: [3, 9, 15], career: "医療従事者、起業家、探検家", love_fortune: "情熱的で直感的なパートナーを求める", money_fortune: "新しいビジネスで大きく稼ぐ傾向", luck_advice: "赤い色のものを身につけると吉" },
    { name: "バラニー", english: "Bharani", number: 2, element: "火", ruling_planet: "金星", description: "創造と変化の宿。情熱的で感情豊か。", detailed_description: "バラニーは芸術的才能と創造性に恵まれた宿です。感情の深さと表現力が強く、人間関係では献身的です。変化を恐れず、困難を乗り越える強さを持っています。", traits: ["情熱的", "創造的", "自信満々"], color: "深紅", lucky_color: "ピンク", lucky_number: 2, animal: "象", compatible_with: [5, 8, 11], incompatible_with: [1, 10, 16], career: "芸術家、デザイナー、企画職", love_fortune: "深い感情表現を望む相手との相性が良い", money_fortune: "創造的な仕事からの収入が期待できる", luck_advice: "ピンク色で運気アップ" },
    { name: "クリッティカー", english: "Krittika", number: 3, element: "火", ruling_planet: "太陽", description: "知識と洞察の宿。明敏で分析的。", detailed_description: "クリッティカーは知識と権力の象徴です。リーダーシップ能力が高く、正義感に満ちています。批判的思考が強く、詳細に注意を払う傾向があります。指導者としての素質を備えています。", traits: ["賢明", "指導力", "正直"], color: "黄色", lucky_color: "黄色", lucky_number: 3, animal: "羊", compatible_with: [6, 9, 12], incompatible_with: [2, 11, 17], career: "教育者、指導者、管理職", love_fortune: "知的で正直な人との関係が円滑", money_fortune: "昇進による収入増が期待できる", luck_advice: "金色のアイテムが開運のカギ" },
    { name: "ロヒニー", english: "Rohini", number: 4, element: "地", ruling_planet: "月", description: "安定と繁栄の宿。実践的で信頼できる性格。", detailed_description: "ロヒニーは安定と物質的豊かさをもたらす宿です。実務的で信頼性が高く、人間関係を大切にします。感受性が豊かで、芸術的な感覚も持っています。", traits: ["安定的", "信頼できる", "実践的"], color: "白", lucky_color: "白", lucky_number: 4, animal: "蛇", compatible_with: [1, 7, 13], incompatible_with: [3, 12, 18], career: "農業、不動産、建築", love_fortune: "安定感のある人が相手だと幸福", money_fortune: "地道な努力で着実に貯蓄できる", luck_advice: "白い色のものが幸運をもたらす" },
    { name: "ムリガシーラー", english: "Mrigasirsha", number: 5, element: "空気", ruling_planet: "火星", description: "探求と好奇心の宿。知識への渇望が強い。", detailed_description: "ムリガシーラーは好奇心と探求心の象徴です。学問や知識を求める傾向が強く、多くの分野に興味を持ちます。社交性も高く、多くの人間関係を築きます。", traits: ["好奇心旺盛", "探求心", "愛想良い"], color: "緑", lucky_color: "緑", lucky_number: 5, animal: "鹿", compatible_with: [2, 8, 14], incompatible_with: [4, 13, 19], career: "ジャーナリスト、営業、通訳", love_fortune: "知的刺激を与えてくれる人と相性抜群", money_fortune: "多くの分野での収入機会がある", luck_advice: "変化を恐れず新しいことに挑戦" },
    { name: "アールドラー", english: "Ardra", number: 6, element: "空気", ruling_planet: "ラーフ", description: "変化と変革の宿。深い思考力を持つ。", detailed_description: "アールドラーは変化と再生を象徴します。深刻な思考と内省的な性質を持ち、人生の深い意味を求めます。困難な状況を切り抜ける能力があります。", traits: ["知的", "変化好き", "鋭敏"], color: "深緑", lucky_color: "紫", lucky_number: 6, animal: "犬", compatible_with: [3, 9, 15], incompatible_with: [5, 14, 20], career: "リサーチャー、カウンセラー、哲学者", love_fortune: "深い思考を共有できるパートナーと幸福", money_fortune: "内面的な成長が経済的安定をもたらす", luck_advice: "紫色が神秘性を高める" },
    { name: "プナルヴァスゥ", english: "Punarvasu", number: 7, element: "光", ruling_planet: "木星", description: "再生と成功の宿。楽観的で社交的。", detailed_description: "プナルヴァスゥは再生と希望の宿です。困難から立ち直る能力があり、常に前向きです。精神的な探求心が強く、高い理想を持ちます。", traits: ["楽観的", "社交的", "寛大"], color: "黄緑", lucky_color: "黄色", lucky_number: 7, animal: "猫", compatible_with: [1, 4, 10], incompatible_with: [6, 15, 21], career: "カウンセラー、宗教家、哲学者", love_fortune: "精神的な共鳴が最高の相性を作る", money_fortune: "直感的な判断で好機を掴む", luck_advice: "黄色が幸運を呼び込む" },
    { name: "プシュヤ", english: "Pushya", number: 8, element: "水", ruling_planet: "土星", description: "成長と栄養の宿。養う力と指導力がある。", detailed_description: "プシュヤは栄養と成長をもたらす宿です。人を支援し、育成することに喜びを感じます。責任感が強く、信頼できるパートナーです。", traits: ["支援的", "思慮深い", "責任感"], color: "青", lucky_color: "青", lucky_number: 8, animal: "牛", compatible_with: [2, 5, 11], incompatible_with: [7, 16, 22], career: "教師、看護師、カウンセラー", love_fortune: "相手を支援できる立場での幸福", money_fortune: "人を助ける仕事から安定収入", luck_advice: "青色が落ち着きと繁栄をもたらす" },
    { name: "アシュレーシャー", english: "Aslesha", number: 9, element: "水", ruling_planet: "水星", description: "深さと秘密の宿。直感と本能が発達している。", detailed_description: "アシュレーシャーは神秘性と深さの象徴です。直感が鋭く、表面的なものを見抜く力があります。隠された真実を探る才能があります。", traits: ["直感的", "神秘的", "内向的"], color: "濃紺", lucky_color: "黒", lucky_number: 9, animal: "蛇", compatible_with: [3, 6, 12], incompatible_with: [8, 17, 23], career: "セラピスト、カウンセラー、研究者", love_fortune: "相手の本質を見抜き深い絆を結ぶ", money_fortune: "直感的判断で大きなチャンスを掴む", luck_advice: "黒が保護と深い洞察をもたらす" },
    { name: "マガー", english: "Magha", number: 10, element: "火", ruling_planet: "ケートゥ", description: "栄光と権力の宿。カリスマと威厳がある。", detailed_description: "マガーは権力と栄光の象徴です。自然なリーダーシップを持ち、人から敬意を受けます。伝統を大切にし、先祖の遺産を尊重します。", traits: ["支配的", "尊敬される", "高潔"], color: "紫", lucky_color: "紫", lucky_number: 10, animal: "ネズミ", compatible_with: [1, 7, 13], incompatible_with: [2, 9, 18], career: "指導者、管理職、政治家", love_fortune: "自分の野心を理解できる人が最適", money_fortune: "権力と地位から大きな収入を得る", luck_advice: "紫色が権威と成功の象徴" },
    { name: "プールヴァ・パルグナー", english: "Purva Phalguni", number: 11, element: "火", ruling_planet: "金星", description: "喜びと創造性の宿。芸術的で社交的。", detailed_description: "プールヴァ・パルグナーは喜びと創造の宿です。人生を楽しむ能力が高く、周囲に幸福をもたらします。芸術的才能と社交スキルに恵まれています。", traits: ["創造的", "楽しみ好き", "魅力的"], color: "ピンク", lucky_color: "オレンジ", lucky_number: 11, animal: "ネズミ", compatible_with: [2, 8, 14], incompatible_with: [3, 10, 19], career: "娯楽業、デザイン、イベント企画", love_fortune: "楽しみを共有できるパートナーと幸福", money_fortune: "人気商売で大きく稼ぐチャンスあり", luck_advice: "オレンジ色が喜びと豊かさをもたらす" },
    { name: "ウッタラ・パルグナー", english: "Uttara Phalguni", number: 12, element: "火", ruling_planet: "太陽", description: "成功と昇進の宿。野心的で勤勉。", detailed_description: "ウッタラ・パルグナーは成功と昇進の宿です。野心的で目標達成に向けて努力し続けます。堅実で信頼でき、責任を果たします。", traits: ["野心的", "勤勉", "忍耐強い"], color: "白金色", lucky_color: "金色", lucky_number: 12, animal: "牛", compatible_with: [3, 9, 15], incompatible_with: [4, 11, 20], career: "経営者、政治家、管理職", love_fortune: "野心を共有できる人との最高の相性", money_fortune: "着実な昇進で安定した大きな収入", luck_advice: "金色が成功と繁栄の象徴" },
    { name: "ハスタ", english: "Hasta", number: 13, element: "地", ruling_planet: "月", description: "巧みさと器用さの宿。多才で実務的。", detailed_description: "ハスタは器用さと多才さの象徴です。手先が器用で、細かい作業に優れています。実務的で効率的に仕事をこなします。", traits: ["器用", "多才", "実務的"], color: "緑", lucky_color: "クリーム色", lucky_number: 13, animal: "水牛", compatible_with: [4, 10, 16], incompatible_with: [5, 12, 21], career: "職人、手工芸者、エンジニア", love_fortune: "実務的で信頼できる人と相性良好", money_fortune: "手に職をつけることで安定収入", luck_advice: "クリーム色が器用さを高める" },
    { name: "チトラー", english: "Chitra", number: 14, element: "空気", ruling_planet: "火星", description: "美しさと複雑さの宿。完璧主義で芸術的。", detailed_description: "チトラーは美と完璧を求める宿です。芸術的才能が高く、美しいものを作り出す能力があります。完璧主義で、細部にこだわります。", traits: ["完璧主義", "芸術的", "分析的"], color: "虹色", lucky_color: "赤と白", lucky_number: 14, animal: "虎", compatible_with: [5, 11, 17], incompatible_with: [6, 13, 22], career: "アーティスト、建築家、デザイナー", love_fortune: "完璧さを追求できるパートナーと幸福", money_fortune: "美しさを創造する仕事で高収入", luck_advice: "虹色が芸術性を高める" },
    { name: "スヴァーティ", english: "Swati", number: 15, element: "空気", ruling_planet: "ラーフ", description: "独立と自由の宿。自分のペースを大切にする。", detailed_description: "スヴァーティは自由と独立の象徴です。自分のペースで人生を歩む傾向があり、束縛を嫌います。柔軟性があり、様々な環境に適応できます。", traits: ["独立的", "自由好き", "柔軟"], color: "黒", lucky_color: "薄緑", lucky_number: 15, animal: "水牛", compatible_with: [6, 12, 18], incompatible_with: [1, 7, 14], career: "トレーダー、独立起業家、フリーランス", love_fortune: "自由と独立を尊重するパートナー最適", money_fortune: "自分のペースで稼げる仕事が向き", luck_advice: "薄緑が新たなスタートを応援" },
    { name: "ヴィシャーカー", english: "Vishakha", number: 16, element: "光", ruling_planet: "木星", description: "決定と達成の宿。決断力と実行力がある。", detailed_description: "ヴィシャーカーは決定と達成の宿です。決断力が強く、目標に向かって迷わずに進みます。成功への強い意志を持っています。", traits: ["決断力", "実行力", "目標志向"], color: "黄色", lucky_color: "黄色", lucky_number: 16, animal: "虎", compatible_with: [4, 13, 19], incompatible_with: [2, 8, 15], career: "起業家、投資家、指導者", love_fortune: "目標を共有できる人との相性最高", money_fortune: "決断力から大きな成功を手にする", luck_advice: "黄色が成功の決定的な運を呼ぶ" },
    { name: "アヌラーダー", english: "Anuradha", number: 17, element: "水", ruling_planet: "土星", description: "献身と成功の宿。思慮深く忠実。", detailed_description: "アヌラーダーは献身と成功の象徴です。友情を大切にし、忠実です。困難な状況でも忍耐強く、最終的には成功を手にします。", traits: ["献身的", "忠実", "思慮深い"], color: "青緑", lucky_color: "青", lucky_number: 17, animal: "鹿", compatible_with: [5, 14, 20], incompatible_with: [6, 9, 16], career: "寄付者、カウンセラー、看護師", love_fortune: "忠実さと献身を理解できる人と幸福", money_fortune: "人を支援する仕事から安定収入", luck_advice: "青色が深い信頼関係をもたらす" },
    { name: "ジェーシュター", english: "Jyeshtha", number: 18, element: "水", ruling_planet: "水星", description: "老賢者の宿。経験と知恵を備えている。", detailed_description: "ジェーシュターは知恵と経験の象徴です。人生経験が豊かで、物事を深く理解しています。指導者としての資質があり、人々の相談に乗ります。", traits: ["賢い", "経験豊富", "指導者"], color: "濃い青", lucky_color: "濃い青", lucky_number: 18, animal: "猫", compatible_with: [6, 15, 21], incompatible_with: [4, 10, 17], career: "顧問、メンター、研究者", love_fortune: "経験と知恵を尊重できる人と相性良", money_fortune: "経験と知識からの安定した収入", luck_advice: "濃い青が賢明さを象徴" },
    { name: "ムーラー", english: "Mula", number: 19, element: "地", ruling_planet: "ケートゥ", description: "根と基礎の宿。秘密と深さを持つ。", detailed_description: "ムーラーは根本と基礎の象徴です。物事の本質を理解し、深く掘り下げます。秘密を守る傾向があり、内面の世界が豊かです。", traits: ["根気強い", "神秘的", "探究心"], color: "黒", lucky_color: "紫", lucky_number: 19, animal: "犬", compatible_with: [7, 16, 22], incompatible_with: [5, 11, 18], career: "リサーチャー、神秘研究者、教育者", love_fortune: "秘密を守り深い理解ができる人と幸福", money_fortune: "内面の探究が経済的成功をもたらす", luck_advice: "紫色が神秘の扉を開く" },
    { name: "プールヴァ・アシャーダ", english: "Purva Ashadha", number: 20, element: "火", ruling_planet: "金星", description: "勝利と繁栄の宿。楽観的で冒険的。", detailed_description: "プールヴァ・アシャーダは勝利と繁栄の宿です。楽観的で冒険心があり、新しいことに挑戦します。カリスマがあり、多くの人を引き付けます。", traits: ["楽観的", "冒険的", "勝利者"], color: "黄色", lucky_color: "黄色", lucky_number: 20, animal: "象", compatible_with: [8, 17, 23], incompatible_with: [3, 12, 19], career: "営業、起業家、リーダー", love_fortune: "楽観的で冒険的なパートナー最適", money_fortune: "大胆な判断で大きく稼ぐ機会多し", luck_advice: "黄色が幸運と勝利をもたらす" },
    { name: "ウッタラ・アシャーダ", english: "Uttara Ashadha", number: 21, element: "火", ruling_planet: "太陽", description: "最終的な勝利の宿。威厳と堅実さがある。", detailed_description: "ウッタラ・アシャーダは最終的な勝利と成功の宿です。堅実で信頼できる人物です。長期的な視点で計画を立て、確実に目標を達成します。", traits: ["堅実", "威厳", "勝者気質"], color: "赤", lucky_color: "赤", lucky_number: 21, animal: "猫", compatible_with: [9, 18, 24], incompatible_with: [7, 12, 20], career: "管理職、公務員、教育者", love_fortune: "堅実で責任感のある人と幸福", money_fortune: "着実な昇進で安定した大きな収入", luck_advice: "赤色が最終的な成功をもたらす" },
    { name: "シュラヴァナ", english: "Shravana", number: 22, element: "空気", ruling_planet: "月", description: "聞き手と学習の宿。知識への欲求が強い。", detailed_description: "シュラヴァナは学習と知識の象徴です。聞く能力に優れ、他者から多くを学びます。好奇心が旺盛で、常に新しいことを吸収しようとします。", traits: ["学習好き", "聞き手", "知識欲"], color: "銀", lucky_color: "白", lucky_number: 22, animal: "猿", compatible_with: [1, 19, 25], incompatible_with: [8, 14, 21], career: "学者、教師、コンサルタント", love_fortune: "知識と学習を共有できる人と相性抜群", money_fortune: "学びから生まれるスキルで高収入", luck_advice: "白色が明確な思考をもたらす" },
    { name: "ダニシュター", english: "Dhanishta", number: 23, element: "空気", ruling_planet: "火星", description: "富と音楽の宿。リズミカルで音感がある。", detailed_description: "ダニシュターは富と音楽の象徴です。リズム感が良く、音楽や芸術に才能があります。富を得る能力も高く、物質的成功を手にしやすいです。", traits: ["音感", "リズミカル", "活動的"], color: "黄色", lucky_color: "黄色", lucky_number: 23, animal: "ライオン", compatible_with: [2, 20, 26], incompatible_with: [9, 15, 22], career: "ミュージシャン、リズムある仕事", love_fortune: "音感と感性を共有できる人と幸福", money_fortune: "創造的な仕事での豊かな収入", luck_advice: "黄色が富と成功を引き寄せる" },
    { name: "シャタービシャジ", english: "Shatabhisha", number: 24, element: "空気", ruling_planet: "ラーフ", description: "秘密と医療の宿。謎めいて洞察力がある。", detailed_description: "シャタービシャジは神秘性と洞察力の象徴です。隠れた真実を見抜く力があり、医療や治療に関する才能も高いです。秘密を守る傾向があります。", traits: ["神秘的", "洞察力", "医療的"], color: "紫", lucky_color: "紫", lucky_number: 24, animal: "馬", compatible_with: [3, 21, 27], incompatible_with: [1, 16, 23], career: "医者、セラピスト、神秘研究者", love_fortune: "隠れた真実を理解できる人と相性良", money_fortune: "治療的な仕事からの安定収入", luck_advice: "紫色が洞察力と成功をもたらす" },
    { name: "プールヴァ・ボードラパダ", english: "Purva Bhadrapada", number: 25, element: "水", ruling_planet: "木星", description: "激情と変化の宿。情熱と鋭さを持つ。", detailed_description: "プールヴァ・ボードラパダは激情と変化の象徴です。情熱的で、人生を強く生きます。精神的な深さがあり、人生の意味を求めます。", traits: ["情熱的", "鋭敏", "変化好き"], color: "緑", lucky_color: "オレンジ", lucky_number: 25, animal: "ライオン", compatible_with: [4, 22, 1], incompatible_with: [10, 17, 24], career: "精神的リーダー、カウンセラー", love_fortune: "情熱を理解し変化を受け入れる人と幸福", money_fortune: "精神的成長が経済的豊かさをもたらす", luck_advice: "オレンジ色が情熱を高める" },
    { name: "ウッタラ・ボードラパダ", english: "Uttara Bhadrapada", number: 26, element: "水", ruling_planet: "土星", description: "幸運と癒しの宿。穏やかで慈悲深い。", detailed_description: "ウッタラ・ボードラパダは幸運と癒しの象徴です。穏やかで他者に対して慈悲深いです。精神的な平穏を求め、人々を癒すことができます。", traits: ["穏やか", "慈悲深い", "幸運"], color: "黄色", lucky_color: "黄色", lucky_number: 26, animal: "牛", compatible_with: [5, 23, 2], incompatible_with: [11, 18, 25], career: "ヒーラー、カウンセラー、教育者", love_fortune: "穏やかさと慈悲心を理解できる人と幸福", money_fortune: "人を癒す仕事からの安定収入", luck_advice: "黄色が平穏と豊かさをもたらす" },
    { name: "レーヴァティー", english: "Revati", number: 27, element: "水", ruling_planet: "水星", description: "豊かさと成就の宿。思慮深く助言者質。", detailed_description: "レーヴァティーは豊かさと成就の最終宿です。思慮深く、人々の相談に乗る才能があります。優しく穏やかで、周囲に平穏をもたらします。", traits: ["思慮深い", "助言者", "豊か"], color: "青", lucky_color: "青", lucky_number: 27, animal: "象", compatible_with: [6, 24, 3], incompatible_with: [12, 19, 26], career: "アドバイザー、カウンセラー、研究者", love_fortune: "思慮深さが最高の絆を作る相手と幸福", money_fortune: "賢明な判断で長期的な繁栄実現", luck_advice: "青色が成就と豊かさの象徴" }
];

function calculateJulianDay(year, month, day) {
    if (month <= 2) { year--; month += 12; }
    const a = Math.floor(year / 100);
    const b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
}

function calculateMoonLongitude(jd) {
    const t = (jd - 2451545.0) / 36525.0;
    let moonLong = 218.3164477 + 481267.88123421 * t - 0.0015786 * t * t + t * t * t / 538841 - t * t * t * t / 65194000;
    const lprime = 134.9634664 + 477198.8676313 * t + 0.0089970 * t * t + t * t * t / 69699 - t * t * t * t / 14712000;
    const d = 297.8501921 + 445267.1114034 * t - 0.0018819 * t * t + t * t * t / 545868 - t * t * t * t / 113065000;
    const moonLongCorrection = 6.2887 * Math.sin(toRad(lprime)) + 1.2740 * Math.sin(toRad(2 * d - lprime)) - 0.6928 * Math.sin(toRad(2 * d));
    moonLong += moonLongCorrection;
    moonLong = moonLong % 360;
    if (moonLong < 0) moonLong += 360;
    return moonLong;
}

function toRad(deg) { return deg * Math.PI / 180; }

function calculateNakshatra(moonLongitude) {
    const nakshatraIndex = Math.floor((moonLongitude / 360) * 27);
    return nakshatraIndex >= 27 ? 26 : nakshatraIndex;
}

function divineNakshatra(birthDate) {
    const [year, month, day] = birthDate.split('-').map(Number);
    if (year < 1900 || year > new Date().getFullYear()) {
        throw new Error("1900年から今年の間で入力してください");
    }
    const jd = calculateJulianDay(year, month, day);
    const moonLong = calculateMoonLongitude(jd);
    const nakshatraIndex = calculateNakshatra(moonLong);
    const nakshatra = nakshatras[nakshatraIndex];
    return { nakshatra, moonLongitude: moonLong.toFixed(2) };
}

function calculateCompatibility(nakshatra1Num, nakshatra2Num) {
    const diff = Math.abs(nakshatra1Num - nakshatra2Num);
    const normalized = Math.min(diff, 27 - diff);
    if (normalized === 0) return 100;
    if (normalized <= 2) return 85;
    if (normalized <= 5) return 70;
    if (normalized <= 8) return 60;
    if (normalized <= 12) return 50;
    return 40;
}

function getCompatibilityAssessment(score) {
    if (score >= 90) return { level: '最高の相性', description: '運命の相手。二人は深く結ばれています。', color: '#00AA00' };
    if (score >= 75) return { level: '非常に良好', description: '相互理解が深く、素晴らしいパートナーシップが築けます。', color: '#00BB00' };
    if (score >= 60) return { level: '良好', description: '二人の基本的な関係は良好です。努力で更に深まります。', color: '#FFD700' };
    if (score >= 45) return { level: '普通', description: '違いはありますが、相互理解で乗り越えられます。', color: '#FFA500' };
    return { level: '要注意', description: '相性に課題がありますが、努力で解決できます。', color: '#FF6B6B' };
}

function getCommonTraits(n1, n2) {
    const n1obj = nakshatras[n1 - 1];
    const n2obj = nakshatras[n2 - 1];
    const common = [];
    n1obj.traits.forEach(trait => { if (n2obj.traits.includes(trait)) common.push(trait); });
    return common.length > 0 ? common : ['理解力', '成長志向'];
}

function analyzeElementCompatibility(elem1, elem2) {
    const elementRelations = {
        '火': { '火': 'バランス', '地': '調和', '空気': '促進', '水': '対立', '光': '一致' },
        '地': { '地': 'バランス', '火': '調和', '空気': '対立', '水': '促進', '光': '一致' },
        '空気': { '空気': 'バランス', '火': '促進', '地': '対立', '水': '調和', '光': '一致' },
        '水': { '水': 'バランス', '火': '対立', '地': '促進', '空気': '調和', '光': '一致' },
        '光': { '火': '一致', '地': '一致', '空気': '一致', '水': '一致', '光': '完璧' }
    };
    const relation = elementRelations[elem1]?.[elem2] || '不明';
    const descriptions = {
        'バランス': `同じ「${elem1}」の要素により、基本的な価値観や人生観が一致しやすいです。`,
        '促進': `${elem1}は${elem2}を高め、${elem2}は${elem1}を安定させます。相互成長が期待できます。`,
        '調和': `基本的に相性が良く、自然な相互理解が生まれます。`,
        '対立': `基本的な価値観や方法論が異なり、理解に努力が必要です。`,
        '一致': `光の要素が他の要素を包み込み、どのような相性でも最高の結果をもたらします。`,
        '完璧': `二人の光が一つになり、最高の調和と成就が期待できます。`
    };
    return { relation, description: descriptions[relation] || '特別な相性があります。' };
}

function analyzePlanetCompatibility(planet1, planet2) {
    const planetAnalysis = {
        'ケートゥ': '秘密と変化をもたらす',
        '金星': '愛情と調和をもたらす',
        '太陽': '力と自信をもたらす',
        '月': '感情と直感をもたらす',
        '火星': '情熱と行動力をもたらす',
        '木星': '成長と幸運をもたらす',
        '土星': '忍耐と責任をもたらす',
        '水星': '知性とコミュニケーションをもたらす',
        'ラーフ': '変化と執着をもたらす'
    };
    return { planet1_effect: planetAnalysis[planet1] || '個性をもたらす', planet2_effect: planetAnalysis[planet2] || '個性をもたらす' };
}

function analyzeLoveCompatibility(n1, n2, score) {
    if (score >= 80) return '二人は深い精神的な絆で結ばれやすく、真の愛情を育むことができます。長期的な関係に最適です。';
    if (score >= 65) return 'ロマンティックな感情と実践的なパートナーシップの両立が可能です。コミュニケーションで関係は深まります。';
    if (score >= 50) return '異なる視点が関係を豊かにしますが、相手を理解しようとする積極的な努力が必要です。';
    return '恋愛には課題がありますが、相手の違いを受け入れることで、ユニークな関係が築けます。';
}

function analyzeWorkCompatibility(n1, n2, score) {
    if (score >= 75) return 'ビジネスパートナーとしての相性が優れています。共有の目標達成に向けて協力しやすいです。';
    if (score >= 60) return '異なるスキルが補完し合い、プロジェクトの成功率が高まります。役割分担が重要です。';
    if (score >= 45) return '協力は可能ですが、明確なコミュニケーションと役割定義が成功の鍵です。';
    return '直接の協力より、異なる部門での活動が効果的かもしれません。';
}

function generateCompatibilityDetails(n1, n2, score) {
    const n1obj = nakshatras[n1 - 1];
    const n2obj = nakshatras[n2 - 1];
    const assessment = getCompatibilityAssessment(score);
    const commonTraits = getCommonTraits(n1, n2);
    const elementComp = analyzeElementCompatibility(n1obj.element, n2obj.element);
    const planetComp = analyzePlanetCompatibility(n1obj.ruling_planet, n2obj.ruling_planet);
    const loveComp = analyzeLoveCompatibility(n1, n2, score);
    const workComp = analyzeWorkCompatibility(n1, n2, score);

    const traits1 = n1obj.traits.join('、');
    const traits2 = n2obj.traits.join('、');

    let details = {
        assessment: assessment,
        description: `${n1obj.name}（${traits1}）と${n2obj.name}（${traits2}）の相性です。`,
        commonPoints: `共通点：二人とも${commonTraits.join('と')}の特性を持っています。`,
        strengths: [],
        challenges: [],
        loveAdvice: loveComp,
        workAdvice: workComp,
        advice: ''
    };

    details.strengths.push(`【要素の相性】${elementComp.description}`);
    details.strengths.push(`${n1obj.name}は${planetComp.planet1_effect}、${n2obj.name}は${planetComp.planet2_effect}`);

    if (n1obj.element === n2obj.element) {
        details.strengths.push(`同じ「${n1obj.element}」要素の宿同士で、生き方や価値観が自然に合致します。`);
    } else {
        const elementDesc = elementComp.relation;
        if (elementDesc === '調和' || elementDesc === '促進') {
            details.strengths.push(`${n1obj.element}と${n2obj.element}は${elementDesc}の関係にあり、相互補完が期待できます。`);
        } else if (elementDesc === '対立') {
            details.challenges.push(`${n1obj.element}と${n2obj.element}は対立関係にあり、理解に努力が必要です。`);
        }
    }

    if (score >= 75) {
        details.strengths.push('相互の理解と尊重が自然に生まれやすく、安定した関係を築けます。');
        details.advice = '現在の関係を大切にし、定期的に感謝の気持ちを伝えることで、さらに絆が深まります。毎日の小さな親切が大きな愛情へと変わります。';
    } else if (score >= 60) {
        details.strengths.push('異なる視点が相互成長を促します。');
        details.challenges.push('コミュニケーションを意識的に取ることが大切です。');
        details.advice = '相手の視点を理解しようとする姿勢が、関係を良好に保つ鍵となります。月に一度は心を開いて話し合う時間を持つと効果的です。';
    } else if (score >= 45) {
        details.challenges.push('性格や価値観の違いが時々対立になる可能性があります。');
        details.challenges.push('相手を変えようとせず、相互尊重が重要です。');
        details.advice = '違いを個性として受け入れ、その人ならではの良さを引き出す工夫をしましょう。努力を続けることで、ユニークで強固な関係が築けます。';
    } else {
        details.challenges.push('基本的な価値観や人生観が大きく異なります。');
        details.challenges.push('相手を理解しようとする強い意志が必要です。');
        details.advice = '相手の本質を理解し、尊重することが最優先です。違いを認めることで、予想外の素晴らしい関係が生まれる可能性があります。';
    }

    return details;
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const birthdate = document.getElementById('birthdate').value;
    const errorEl = document.getElementById('error');
    const resultEl = document.getElementById('result');

    try {
        errorEl.classList.remove('show');
        const result = divineNakshatra(birthdate);
        const compatibleNakshatras = result.nakshatra.compatible_with.map(n => nakshatras[n - 1].name).join('、');

        document.getElementById('resultTitle').textContent = `${result.nakshatra.name}（${result.nakshatra.english}）`;
        document.getElementById('resultDescription').textContent = result.nakshatra.description;
        document.getElementById('detailedDescription').textContent = result.nakshatra.detailed_description;

        const propertiesHtml = `
            <div class="property"><div class="property-label">番号</div><div class="property-value">${result.nakshatra.number}</div></div>
            <div class="property"><div class="property-label">支配惑星</div><div class="property-value">${result.nakshatra.ruling_planet}</div></div>
            <div class="property"><div class="property-label">五大元素</div><div class="property-value">${result.nakshatra.element}</div></div>
            <div class="property"><div class="property-label">シンボル</div><div class="property-value">${result.nakshatra.animal}</div></div>
        `;
        document.getElementById('resultProperties').innerHTML = propertiesHtml;

        const luckyHtml = `
            <div class="lucky-item"><span class="lucky-label">ラッキーカラー:</span><span class="lucky-value" style="background-color: ${getLuckyColorHex(result.nakshatra.lucky_color)}; padding: 5px 10px; border-radius: 4px; color: white; font-weight: bold;">${result.nakshatra.lucky_color}</span></div>
            <div class="lucky-item"><span class="lucky-label">ラッキーナンバー:</span><span class="lucky-value">${result.nakshatra.lucky_number}</span></div>
        `;
        document.getElementById('luckyInfo').innerHTML = luckyHtml;

        const analysisHtml = `
            <div class="analysis-section"><h3>💼 適職</h3><p>${result.nakshatra.career}</p></div>
            <div class="analysis-section"><h3>💕 恋愛運</h3><p>${result.nakshatra.love_fortune}</p></div>
            <div class="analysis-section"><h3>💰 金運</h3><p>${result.nakshatra.money_fortune}</p></div>
            <div class="analysis-section"><h3>🌟 開運アドバイス</h3><p>${result.nakshatra.luck_advice}</p></div>
            <div class="analysis-section"><h3>🤝 相性の良い宿</h3><p>${compatibleNakshatras}</p></div>
        `;
        if (document.getElementById('analysisContainer')) {
            document.getElementById('analysisContainer').innerHTML = analysisHtml;
        }

        resultEl.classList.add('show');
        setTimeout(() => resultEl.scrollIntoView({ behavior: 'smooth' }), 100);
    } catch (error) {
        errorEl.textContent = `エラー: ${error.message}`;
        errorEl.classList.add('show');
        resultEl.classList.remove('show');
    }
});

document.getElementById('compatibilityForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const date1 = document.getElementById('birthdate1').value;
    const date2 = document.getElementById('birthdate2').value;
    const compatibilityResultEl = document.getElementById('compatibilityResult');

    try {
        const result1 = divineNakshatra(date1);
        const result2 = divineNakshatra(date2);
        const compatibility = calculateCompatibility(result1.nakshatra.number, result2.nakshatra.number);
        const details = generateCompatibilityDetails(result1.nakshatra.number, result2.nakshatra.number, compatibility);

        let challengesHtml = '';
        if (details.challenges.length > 0) {
            challengesHtml = `<div class="detail-section"><h4>⚠️ 相性の課題</h4><ul>${details.challenges.map(c => `<li>${c}</li>`).join('')}</ul></div>`;
        }

        const compatibilityHtml = `
            <div class="compatibility-display">
                <div class="person"><h3>${result1.nakshatra.name}</h3><p>${result1.nakshatra.english}</p></div>
                <div class="compatibility-score">
                    <div class="score-circle" style="--score: ${compatibility}%"><span class="score-text">${compatibility}%</span></div>
                    <p style="color: ${details.assessment.color}; font-weight: bold;">${details.assessment.level}</p>
                </div>
                <div class="person"><h3>${result2.nakshatra.name}</h3><p>${result2.nakshatra.english}</p></div>
            </div>

            <div class="compatibility-details">
                <div class="detail-section"><h4>📋 相性評価</h4><p><strong style="color: ${details.assessment.color};">${details.assessment.level}</strong></p><p>${details.assessment.description}</p></div>
                <div class="detail-section"><h4>💡 二人について</h4><p>${details.description}</p><p><strong>${details.commonPoints}</strong></p></div>
                <div class="detail-section"><h4>✨ 相性の強み</h4><ul>${details.strengths.map(s => `<li>${s}</li>`).join('')}</ul></div>
                ${challengesHtml}
                <div class="detail-section"><h4>💕 恋愛面での相性</h4><p>${details.loveAdvice}</p></div>
                <div class="detail-section"><h4>💼 仕事面での相性</h4><p>${details.workAdvice}</p></div>
                <div class="detail-section advice-section"><h4>💑 二人へのアドバイス</h4><p>${details.advice}</p></div>
            </div>
        `;
        document.getElementById('compatibilityResultContent').innerHTML = compatibilityHtml;
        compatibilityResultEl.classList.add('show');
        setTimeout(() => compatibilityResultEl.scrollIntoView({ behavior: 'smooth' }), 100);
    } catch (error) {
        alert('エラー: ' + error.message);
    }
});

function getLuckyColorHex(colorName) {
    const colorMap = {
        '赤': '#FF0000', 'ピンク': '#FFC0CB', '黄色': '#FFD700', '白': '#FFFFFF', '緑': '#00AA00', '紫': '#800080',
        '黄緑': '#ADFF2F', '青': '#0000FF', '黒': '#333333', 'オレンジ': '#FFA500', 'クリーム色': '#FFFDD0',
        '赤と白': '#FF00FF', '薄緑': '#90EE90', '金色': '#FFD700', '濃い青': '#00008B', '濃紺': '#00008B'
    };
    return colorMap[colorName] || '#666666';
}

window.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    document.getElementById('birthdate').value = `${year}-${month}-${day}`;
    if (document.getElementById('birthdate1')) {
        document.getElementById('birthdate1').value = `${year}-${month}-${day}`;
        document.getElementById('birthdate2').value = `${year}-${month}-${day}`;
    }
});
