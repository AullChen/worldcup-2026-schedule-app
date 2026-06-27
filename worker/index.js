const FIFA_FIXTURES_URL =
  "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums";
const ESPN_SCOREBOARD_URL =
  "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260611-20260719&limit=200";

const groups = {
  A: ["Mexico", "South Africa", "Korea Republic", "Czechia"],
  B: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"],
  C: ["Brazil", "Morocco", "Haiti", "Scotland"],
  D: ["USA", "Paraguay", "Australia", "Turkiye"],
  E: ["Germany", "Curacao", "Cote d'Ivoire", "Ecuador"],
  F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
  G: ["Belgium", "Egypt", "IR Iran", "New Zealand"],
  H: ["Spain", "Cabo Verde", "Saudi Arabia", "Uruguay"],
  I: ["France", "Senegal", "Iraq", "Norway"],
  J: ["Argentina", "Algeria", "Austria", "Jordan"],
  K: ["Portugal", "Congo DR", "Uzbekistan", "Colombia"],
  L: ["England", "Croatia", "Ghana", "Panama"],
};

const fifaRanks = {
  Mexico: 15,
  "South Africa": 60,
  "Korea Republic": 25,
  Czechia: 41,
  Canada: 39,
  "Bosnia and Herzegovina": 65,
  Qatar: 55,
  Switzerland: 19,
  Brazil: 6,
  Morocco: 8,
  Haiti: 83,
  Scotland: 43,
  USA: 16,
  Paraguay: 40,
  Australia: 20,
  Turkiye: 22,
  Germany: 10,
  Curacao: 82,
  "Cote d'Ivoire": 34,
  Ecuador: 23,
  Netherlands: 7,
  Japan: 18,
  Sweden: 28,
  Tunisia: 46,
  Belgium: 11,
  Egypt: 32,
  "IR Iran": 21,
  "New Zealand": 89,
  Spain: 2,
  "Cabo Verde": 72,
  "Saudi Arabia": 58,
  Uruguay: 14,
  France: 3,
  Senegal: 17,
  Iraq: 59,
  Norway: 33,
  Argentina: 1,
  Algeria: 35,
  Austria: 24,
  Jordan: 64,
  Portugal: 5,
  "Congo DR": 67,
  Uzbekistan: 57,
  Colombia: 12,
  England: 4,
  Croatia: 13,
  Ghana: 47,
  Panama: 30,
};

const teamMeta = {
  Mexico: { flag: "🇲🇽", code: "MEX", names: { zh: "墨西哥", en: "Mexico", es: "México" } },
  "South Africa": { flag: "🇿🇦", code: "RSA", names: { zh: "南非", en: "South Africa", es: "Sudáfrica" } },
  "Korea Republic": { flag: "🇰🇷", code: "KOR", names: { zh: "韩国", en: "Korea Republic", es: "República de Corea" } },
  Czechia: { flag: "🇨🇿", code: "CZE", names: { zh: "捷克", en: "Czechia", es: "Chequia" } },
  Canada: { flag: "🇨🇦", code: "CAN", names: { zh: "加拿大", en: "Canada", es: "Canadá" } },
  "Bosnia and Herzegovina": { flag: "🇧🇦", code: "BIH", names: { zh: "波黑", en: "Bosnia and Herzegovina", es: "Bosnia y Herzegovina" } },
  Qatar: { flag: "🇶🇦", code: "QAT", names: { zh: "卡塔尔", en: "Qatar", es: "Catar" } },
  Switzerland: { flag: "🇨🇭", code: "SUI", names: { zh: "瑞士", en: "Switzerland", es: "Suiza" } },
  Brazil: { flag: "🇧🇷", code: "BRA", names: { zh: "巴西", en: "Brazil", es: "Brasil" } },
  Morocco: { flag: "🇲🇦", code: "MAR", names: { zh: "摩洛哥", en: "Morocco", es: "Marruecos" } },
  Haiti: { flag: "🇭🇹", code: "HAI", names: { zh: "海地", en: "Haiti", es: "Haití" } },
  Scotland: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", code: "SCO", names: { zh: "苏格兰", en: "Scotland", es: "Escocia" } },
  USA: { flag: "🇺🇸", code: "USA", names: { zh: "美国", en: "USA", es: "Estados Unidos" } },
  Paraguay: { flag: "🇵🇾", code: "PAR", names: { zh: "巴拉圭", en: "Paraguay", es: "Paraguay" } },
  Australia: { flag: "🇦🇺", code: "AUS", names: { zh: "澳大利亚", en: "Australia", es: "Australia" } },
  Turkiye: { flag: "🇹🇷", code: "TUR", names: { zh: "土耳其", en: "Türkiye", es: "Turquía" } },
  Germany: { flag: "🇩🇪", code: "GER", names: { zh: "德国", en: "Germany", es: "Alemania" } },
  Curacao: { flag: "🇨🇼", code: "CUW", names: { zh: "库拉索", en: "Curaçao", es: "Curazao" } },
  "Cote d'Ivoire": { flag: "🇨🇮", code: "CIV", names: { zh: "科特迪瓦", en: "Côte d'Ivoire", es: "Costa de Marfil" } },
  Ecuador: { flag: "🇪🇨", code: "ECU", names: { zh: "厄瓜多尔", en: "Ecuador", es: "Ecuador" } },
  Netherlands: { flag: "🇳🇱", code: "NED", names: { zh: "荷兰", en: "Netherlands", es: "Países Bajos" } },
  Japan: { flag: "🇯🇵", code: "JPN", names: { zh: "日本", en: "Japan", es: "Japón" } },
  Sweden: { flag: "🇸🇪", code: "SWE", names: { zh: "瑞典", en: "Sweden", es: "Suecia" } },
  Tunisia: { flag: "🇹🇳", code: "TUN", names: { zh: "突尼斯", en: "Tunisia", es: "Túnez" } },
  Belgium: { flag: "🇧🇪", code: "BEL", names: { zh: "比利时", en: "Belgium", es: "Bélgica" } },
  Egypt: { flag: "🇪🇬", code: "EGY", names: { zh: "埃及", en: "Egypt", es: "Egipto" } },
  "IR Iran": { flag: "🇮🇷", code: "IRN", names: { zh: "伊朗", en: "IR Iran", es: "Irán" } },
  "New Zealand": { flag: "🇳🇿", code: "NZL", names: { zh: "新西兰", en: "New Zealand", es: "Nueva Zelanda" } },
  Spain: { flag: "🇪🇸", code: "ESP", names: { zh: "西班牙", en: "Spain", es: "España" } },
  "Cabo Verde": { flag: "🇨🇻", code: "CPV", names: { zh: "佛得角", en: "Cabo Verde", es: "Cabo Verde" } },
  "Saudi Arabia": { flag: "🇸🇦", code: "KSA", names: { zh: "沙特阿拉伯", en: "Saudi Arabia", es: "Arabia Saudí" } },
  Uruguay: { flag: "🇺🇾", code: "URU", names: { zh: "乌拉圭", en: "Uruguay", es: "Uruguay" } },
  France: { flag: "🇫🇷", code: "FRA", names: { zh: "法国", en: "France", es: "Francia" } },
  Senegal: { flag: "🇸🇳", code: "SEN", names: { zh: "塞内加尔", en: "Senegal", es: "Senegal" } },
  Iraq: { flag: "🇮🇶", code: "IRQ", names: { zh: "伊拉克", en: "Iraq", es: "Irak" } },
  Norway: { flag: "🇳🇴", code: "NOR", names: { zh: "挪威", en: "Norway", es: "Noruega" } },
  Argentina: { flag: "🇦🇷", code: "ARG", names: { zh: "阿根廷", en: "Argentina", es: "Argentina" } },
  Algeria: { flag: "🇩🇿", code: "ALG", names: { zh: "阿尔及利亚", en: "Algeria", es: "Argelia" } },
  Austria: { flag: "🇦🇹", code: "AUT", names: { zh: "奥地利", en: "Austria", es: "Austria" } },
  Jordan: { flag: "🇯🇴", code: "JOR", names: { zh: "约旦", en: "Jordan", es: "Jordania" } },
  Portugal: { flag: "🇵🇹", code: "POR", names: { zh: "葡萄牙", en: "Portugal", es: "Portugal" } },
  "Congo DR": { flag: "🇨🇩", code: "COD", names: { zh: "刚果（金）", en: "Congo DR", es: "RD Congo" } },
  Uzbekistan: { flag: "🇺🇿", code: "UZB", names: { zh: "乌兹别克斯坦", en: "Uzbekistan", es: "Uzbekistán" } },
  Colombia: { flag: "🇨🇴", code: "COL", names: { zh: "哥伦比亚", en: "Colombia", es: "Colombia" } },
  England: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG", names: { zh: "英格兰", en: "England", es: "Inglaterra" } },
  Croatia: { flag: "🇭🇷", code: "CRO", names: { zh: "克罗地亚", en: "Croatia", es: "Croacia" } },
  Ghana: { flag: "🇬🇭", code: "GHA", names: { zh: "加纳", en: "Ghana", es: "Ghana" } },
  Panama: { flag: "🇵🇦", code: "PAN", names: { zh: "巴拿马", en: "Panama", es: "Panamá" } },
};

const kickoffUtcByMatchId = {
  67: "2026-06-27T21:00:00Z",
  68: "2026-06-27T21:00:00Z",
  69: "2026-06-27T23:30:00Z",
  70: "2026-06-27T23:30:00Z",
  71: "2026-06-28T02:00:00Z",
  72: "2026-06-28T02:00:00Z",
  73: "2026-06-28T19:00:00Z",
  74: "2026-06-29T20:30:00Z",
  75: "2026-06-30T01:00:00Z",
  76: "2026-06-29T17:00:00Z",
  77: "2026-06-30T21:00:00Z",
  78: "2026-06-30T17:00:00Z",
  79: "2026-07-01T01:00:00Z",
  80: "2026-07-01T16:00:00Z",
  81: "2026-07-02T00:00:00Z",
  82: "2026-07-01T20:00:00Z",
  83: "2026-07-02T23:00:00Z",
  84: "2026-07-02T19:00:00Z",
  85: "2026-07-03T03:00:00Z",
  86: "2026-07-03T22:00:00Z",
  87: "2026-07-04T01:30:00Z",
  88: "2026-07-03T18:00:00Z",
  89: "2026-07-04T21:00:00Z",
  90: "2026-07-04T17:00:00Z",
  91: "2026-07-05T20:00:00Z",
  92: "2026-07-06T00:00:00Z",
  93: "2026-07-06T19:00:00Z",
  94: "2026-07-07T00:00:00Z",
  95: "2026-07-07T16:00:00Z",
  96: "2026-07-07T20:00:00Z",
  97: "2026-07-09T20:00:00Z",
  98: "2026-07-10T19:00:00Z",
  99: "2026-07-11T21:00:00Z",
  100: "2026-07-12T01:00:00Z",
  101: "2026-07-14T19:00:00Z",
  102: "2026-07-15T19:00:00Z",
  103: "2026-07-18T21:00:00Z",
  104: "2026-07-19T19:00:00Z",
};

const officialSchedule = [
  ["1", "2026-06-11", "Group A", "Mexico City Stadium", "Mexico", "South Africa"],
  ["2", "2026-06-11", "Group A", "Estadio Guadalajara", "Korea Republic", "Czechia"],
  ["3", "2026-06-12", "Group B", "Toronto Stadium", "Canada", "Bosnia and Herzegovina"],
  ["4", "2026-06-12", "Group D", "Los Angeles Stadium", "USA", "Paraguay"],
  ["5", "2026-06-13", "Group C", "Boston Stadium", "Haiti", "Scotland"],
  ["6", "2026-06-13", "Group D", "BC Place Vancouver", "Australia", "Turkiye"],
  ["7", "2026-06-13", "Group C", "New York New Jersey Stadium", "Brazil", "Morocco"],
  ["8", "2026-06-13", "Group B", "San Francisco Bay Area Stadium", "Qatar", "Switzerland"],
  ["9", "2026-06-14", "Group E", "Philadelphia Stadium", "Cote d'Ivoire", "Ecuador"],
  ["10", "2026-06-14", "Group E", "Houston Stadium", "Germany", "Curacao"],
  ["11", "2026-06-14", "Group F", "Dallas Stadium", "Netherlands", "Japan"],
  ["12", "2026-06-14", "Group F", "Estadio Monterrey", "Sweden", "Tunisia"],
  ["13", "2026-06-15", "Group H", "Atlanta Stadium", "Spain", "Cabo Verde"],
  ["14", "2026-06-15", "Group G", "Seattle Stadium", "Belgium", "Egypt"],
  ["15", "2026-06-15", "Group H", "Miami Stadium", "Saudi Arabia", "Uruguay"],
  ["16", "2026-06-15", "Group G", "Los Angeles Stadium", "IR Iran", "New Zealand"],
  ["17", "2026-06-16", "Group I", "New York New Jersey Stadium", "France", "Senegal"],
  ["18", "2026-06-16", "Group I", "Boston Stadium", "Iraq", "Norway"],
  ["19", "2026-06-16", "Group J", "Kansas City Stadium", "Argentina", "Algeria"],
  ["20", "2026-06-16", "Group J", "San Francisco Bay Area Stadium", "Austria", "Jordan"],
  ["21", "2026-06-17", "Group K", "Houston Stadium", "Portugal", "Congo DR"],
  ["22", "2026-06-17", "Group L", "Dallas Stadium", "England", "Croatia"],
  ["23", "2026-06-17", "Group L", "Toronto Stadium", "Ghana", "Panama"],
  ["24", "2026-06-17", "Group K", "Mexico City Stadium", "Uzbekistan", "Colombia"],
  ["25", "2026-06-18", "Group A", "Atlanta Stadium", "Czechia", "South Africa"],
  ["26", "2026-06-18", "Group B", "Los Angeles Stadium", "Switzerland", "Bosnia and Herzegovina"],
  ["27", "2026-06-18", "Group B", "BC Place Vancouver", "Canada", "Qatar"],
  ["28", "2026-06-18", "Group A", "Estadio Guadalajara", "Mexico", "Korea Republic"],
  ["29", "2026-06-19", "Group D", "Seattle Stadium", "USA", "Australia"],
  ["30", "2026-06-19", "Group C", "Boston Stadium", "Scotland", "Morocco"],
  ["31", "2026-06-19", "Group C", "Philadelphia Stadium", "Brazil", "Haiti"],
  ["32", "2026-06-19", "Group D", "San Francisco Bay Area Stadium", "Turkiye", "Paraguay"],
  ["33", "2026-06-20", "Group F", "Houston Stadium", "Netherlands", "Sweden"],
  ["34", "2026-06-20", "Group E", "Toronto Stadium", "Germany", "Cote d'Ivoire"],
  ["35", "2026-06-20", "Group E", "Kansas City Stadium", "Ecuador", "Curacao"],
  ["36", "2026-06-20", "Group F", "Estadio Monterrey", "Tunisia", "Japan"],
  ["37", "2026-06-21", "Group H", "Atlanta Stadium", "Spain", "Saudi Arabia"],
  ["38", "2026-06-21", "Group G", "Los Angeles Stadium", "Belgium", "IR Iran"],
  ["39", "2026-06-21", "Group H", "Miami Stadium", "Uruguay", "Cabo Verde"],
  ["40", "2026-06-21", "Group G", "BC Place Vancouver", "New Zealand", "Egypt"],
  ["41", "2026-06-22", "Group J", "Dallas Stadium", "Argentina", "Austria"],
  ["42", "2026-06-22", "Group I", "Philadelphia Stadium", "France", "Iraq"],
  ["43", "2026-06-22", "Group I", "New York New Jersey Stadium", "Norway", "Senegal"],
  ["44", "2026-06-22", "Group J", "San Francisco Bay Area Stadium", "Jordan", "Algeria"],
  ["45", "2026-06-23", "Group K", "Houston Stadium", "Portugal", "Uzbekistan"],
  ["46", "2026-06-23", "Group L", "Boston Stadium", "England", "Ghana"],
  ["47", "2026-06-23", "Group L", "Toronto Stadium", "Panama", "Croatia"],
  ["48", "2026-06-23", "Group K", "Estadio Guadalajara", "Colombia", "Congo DR"],
  ["49", "2026-06-24", "Group B", "BC Place Vancouver", "Switzerland", "Canada"],
  ["50", "2026-06-24", "Group B", "Seattle Stadium", "Bosnia and Herzegovina", "Qatar"],
  ["51", "2026-06-24", "Group C", "Miami Stadium", "Brazil", "Scotland"],
  ["52", "2026-06-24", "Group C", "Atlanta Stadium", "Morocco", "Haiti"],
  ["53", "2026-06-24", "Group A", "Mexico City Stadium", "Czechia", "Mexico"],
  ["54", "2026-06-24", "Group A", "Estadio Monterrey", "South Africa", "Korea Republic"],
  ["55", "2026-06-25", "Group E", "Philadelphia Stadium", "Curacao", "Cote d'Ivoire"],
  ["56", "2026-06-25", "Group E", "New York New Jersey Stadium", "Ecuador", "Germany"],
  ["57", "2026-06-25", "Group F", "Dallas Stadium", "Japan", "Sweden"],
  ["58", "2026-06-25", "Group F", "Kansas City Stadium", "Tunisia", "Netherlands"],
  ["59", "2026-06-25", "Group D", "Los Angeles Stadium", "Turkiye", "USA"],
  ["60", "2026-06-25", "Group D", "San Francisco Bay Area Stadium", "Paraguay", "Australia"],
  ["61", "2026-06-26", "Group I", "Boston Stadium", "Norway", "France"],
  ["62", "2026-06-26", "Group I", "Toronto Stadium", "Senegal", "Iraq"],
  ["63", "2026-06-26", "Group H", "Houston Stadium", "Cabo Verde", "Saudi Arabia"],
  ["64", "2026-06-26", "Group H", "Estadio Guadalajara", "Uruguay", "Spain"],
  ["65", "2026-06-26", "Group G", "Seattle Stadium", "Egypt", "IR Iran"],
  ["66", "2026-06-26", "Group G", "BC Place Vancouver", "New Zealand", "Belgium"],
  ["67", "2026-06-27", "Group L", "New York New Jersey Stadium", "Panama", "England"],
  ["68", "2026-06-27", "Group L", "Philadelphia Stadium", "Croatia", "Ghana"],
  ["69", "2026-06-27", "Group K", "Miami Stadium", "Colombia", "Portugal"],
  ["70", "2026-06-27", "Group K", "Atlanta Stadium", "Congo DR", "Uzbekistan"],
  ["71", "2026-06-27", "Group J", "Kansas City Stadium", "Algeria", "Austria"],
  ["72", "2026-06-27", "Group J", "Dallas Stadium", "Jordan", "Argentina"],
].map(([id, date, stage, venue, home, away]) => ({
  id: Number(id),
  date,
  stage,
  venue,
  home,
  away,
  kickoffUtc: kickoffUtcByMatchId[Number(id)] || null,
  status: "scheduled",
  officialScore: null,
  events: [],
  source: "FIFA official schedule template",
}));

const knockoutSchedule = [
  [73, "2026-06-28", "Round of 32", "Los Angeles Stadium", "2A", "2B"],
  [74, "2026-06-29", "Round of 32", "Boston Stadium", "1E", "3:A/B/C/D/F"],
  [75, "2026-06-29", "Round of 32", "Estadio Monterrey", "1F", "2C"],
  [76, "2026-06-29", "Round of 32", "Houston Stadium", "1C", "2F"],
  [77, "2026-06-30", "Round of 32", "New York New Jersey Stadium", "1I", "3:C/D/F/G/H"],
  [78, "2026-06-30", "Round of 32", "Dallas Stadium", "2E", "2I"],
  [79, "2026-06-30", "Round of 32", "Mexico City Stadium", "1A", "3:C/E/F/H/I"],
  [80, "2026-07-01", "Round of 32", "Atlanta Stadium", "1L", "3:E/H/I/J/K"],
  [81, "2026-07-01", "Round of 32", "San Francisco Bay Area Stadium", "1D", "3:B/E/F/I/J"],
  [82, "2026-07-01", "Round of 32", "Seattle Stadium", "1G", "3:A/E/H/I/J"],
  [83, "2026-07-02", "Round of 32", "Toronto Stadium", "2K", "2L"],
  [84, "2026-07-02", "Round of 32", "Los Angeles Stadium", "1H", "2J"],
  [85, "2026-07-02", "Round of 32", "BC Place Vancouver", "1B", "3:E/F/G/I/J"],
  [86, "2026-07-03", "Round of 32", "Miami Stadium", "1J", "2H"],
  [87, "2026-07-03", "Round of 32", "Kansas City Stadium", "1K", "3:D/E/I/J/L"],
  [88, "2026-07-03", "Round of 32", "Dallas Stadium", "2D", "2G"],
  [89, "2026-07-04", "Round of 16", "Philadelphia Stadium", "W74", "W77"],
  [90, "2026-07-04", "Round of 16", "Houston Stadium", "W73", "W75"],
  [91, "2026-07-05", "Round of 16", "New York New Jersey Stadium", "W76", "W78"],
  [92, "2026-07-05", "Round of 16", "Mexico City Stadium", "W79", "W80"],
  [93, "2026-07-06", "Round of 16", "Dallas Stadium", "W83", "W84"],
  [94, "2026-07-06", "Round of 16", "Seattle Stadium", "W81", "W82"],
  [95, "2026-07-07", "Round of 16", "Atlanta Stadium", "W86", "W88"],
  [96, "2026-07-07", "Round of 16", "BC Place Vancouver", "W85", "W87"],
  [97, "2026-07-09", "Quarter-final", "Boston Stadium", "W89", "W90"],
  [98, "2026-07-10", "Quarter-final", "Los Angeles Stadium", "W93", "W94"],
  [99, "2026-07-11", "Quarter-final", "Miami Stadium", "W91", "W92"],
  [100, "2026-07-11", "Quarter-final", "Kansas City Stadium", "W95", "W96"],
  [101, "2026-07-14", "Semi-final", "Dallas Stadium", "W97", "W98"],
  [102, "2026-07-15", "Semi-final", "Atlanta Stadium", "W99", "W100"],
  [103, "2026-07-18", "Bronze final", "Miami Stadium", "L101", "L102"],
  [104, "2026-07-19", "Final", "New York New Jersey Stadium", "W101", "W102"],
].map(([id, date, stage, venue, homeSeed, awaySeed]) => ({
  id,
  date,
  stage,
  venue,
  homeSeed,
  awaySeed,
  home: seedLabel(homeSeed),
  away: seedLabel(awaySeed),
  kickoffUtc: kickoffUtcByMatchId[id] || null,
  status: "scheduled",
  officialScore: null,
  events: [],
  source: "FIFA official knockout bracket",
}));

const initialData = {
  generatedAt: new Date().toISOString(),
  source: "FIFA official schedule and regulations, seeded for first render",
  sources: [
    {
      label: "FIFA official fixtures and results",
      url: FIFA_FIXTURES_URL,
    },
    {
      label: "FIFA World Cup 26 Regulations, Articles 12-14 and Annexe C",
      url: "https://digitalhub.fifa.com/m/636f5c9c6f29771f/original/FWC2026_regulations_EN.pdf",
    },
  ],
  groups,
  fifaRanks,
  teamMeta,
  matches: [...officialSchedule, ...knockoutSchedule],
};

const legacyPage = `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>2026 世界杯赛程与预测</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #152128;
        --muted: #5f6e77;
        --line: #d9e2e7;
        --panel: #ffffff;
        --soft: #f3f7f9;
        --grass: #0c6b55;
        --grass-2: #084c3e;
        --gold: #d89a27;
        --blue: #1f73b7;
        --red: #be3b3b;
        --shadow: 0 18px 50px rgba(13, 44, 56, .12);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        color: var(--ink);
        background: linear-gradient(180deg, #eef6f4 0, #f7fafb 26rem, #f7fafb 100%);
      }
      button, input, select { font: inherit; }
      button { cursor: pointer; }
      .hero {
        padding: 28px clamp(16px, 4vw, 48px) 20px;
        color: #fff;
        background:
          linear-gradient(135deg, rgba(6, 70, 56, .98), rgba(12, 107, 85, .92)),
          radial-gradient(circle at 90% 20%, rgba(216,154,39,.34), transparent 30%);
      }
      .hero-inner {
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: minmax(0, 1.4fr) minmax(280px, .8fr);
        gap: 28px;
        align-items: end;
      }
      h1 {
        margin: 0 0 10px;
        font-size: clamp(30px, 4vw, 56px);
        line-height: 1.02;
        letter-spacing: 0;
      }
      .hero p {
        margin: 0;
        max-width: 760px;
        color: rgba(255,255,255,.84);
        line-height: 1.7;
      }
      .hero-card {
        border: 1px solid rgba(255,255,255,.24);
        border-radius: 8px;
        padding: 16px;
        background: rgba(255,255,255,.12);
        backdrop-filter: blur(14px);
      }
      .hero-card strong { display: block; font-size: 24px; margin-bottom: 6px; }
      .source-links { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
      .source-links a {
        color: #fff;
        text-decoration: none;
        border: 1px solid rgba(255,255,255,.28);
        border-radius: 999px;
        padding: 7px 10px;
        font-size: 13px;
      }
      .shell {
        max-width: 1440px;
        margin: 0 auto;
        padding: 20px clamp(14px, 3vw, 40px) 48px;
      }
      .toolbar {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        align-items: center;
        margin-bottom: 18px;
      }
      .tabs, .filters {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .tab, .chip, .sync {
        border: 1px solid var(--line);
        border-radius: 999px;
        background: var(--panel);
        color: var(--ink);
        padding: 9px 13px;
        box-shadow: 0 1px 0 rgba(16, 35, 42, .04);
      }
      .tab.active, .chip.active {
        color: #fff;
        background: var(--grass);
        border-color: var(--grass);
      }
      .sync {
        border-radius: 8px;
        color: #fff;
        background: var(--grass);
        border-color: var(--grass);
        min-width: 136px;
      }
      .sync[disabled] { opacity: .7; cursor: wait; }
      .meta-row {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        color: var(--muted);
        font-size: 14px;
        margin-bottom: 16px;
      }
      .layout {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 360px;
        gap: 18px;
        align-items: start;
      }
      .matches {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
        gap: 12px;
      }
      .match {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--panel);
        padding: 14px;
        box-shadow: 0 1px 0 rgba(16, 35, 42, .04);
      }
      .match.opening {
        border-color: rgba(216,154,39,.8);
        box-shadow: 0 0 0 2px rgba(216,154,39,.12);
      }
      .match-head, .teams, .score-row, .predict-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }
      .match-head {
        color: var(--muted);
        font-size: 13px;
        margin-bottom: 12px;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border-radius: 999px;
        padding: 4px 8px;
        font-size: 12px;
        border: 1px solid var(--line);
        background: var(--soft);
        white-space: nowrap;
      }
      .badge.scheduled { color: #52636d; }
      .badge.live { color: #fff; background: var(--red); border-color: var(--red); }
      .badge.finished { color: #fff; background: var(--blue); border-color: var(--blue); }
      .team {
        min-width: 0;
        font-weight: 750;
        font-size: 17px;
        line-height: 1.25;
      }
      .team.away { text-align: right; }
      .score {
        min-width: 72px;
        text-align: center;
        border-radius: 8px;
        padding: 9px 8px;
        font-size: 22px;
        font-weight: 850;
        background: #eef5f2;
        color: var(--grass-2);
      }
      .venue {
        color: var(--muted);
        margin: 10px 0 12px;
        font-size: 13px;
      }
      .predict {
        border-top: 1px solid var(--line);
        padding-top: 12px;
      }
      .predict label {
        color: var(--muted);
        font-size: 13px;
      }
      .predict input {
        width: 54px;
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 8px;
        text-align: center;
        background: #fff;
      }
      .predict select {
        max-width: 100%;
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 8px;
        background: #fff;
      }
      .details {
        width: 100%;
        margin-top: 12px;
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 8px 10px;
        background: #fff;
      }
      .side {
        position: sticky;
        top: 12px;
        display: grid;
        gap: 12px;
      }
      .panel {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--panel);
        padding: 14px;
        box-shadow: 0 1px 0 rgba(16, 35, 42, .04);
      }
      .panel h2 {
        margin: 0 0 12px;
        font-size: 18px;
      }
      .standings {
        display: grid;
        gap: 12px;
        max-height: 58vh;
        overflow: auto;
        padding-right: 4px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
      }
      th, td {
        padding: 6px 5px;
        border-bottom: 1px solid #e9eef1;
        text-align: right;
      }
      th:first-child, td:first-child { text-align: left; }
      th { color: var(--muted); font-weight: 650; }
      .qual { color: var(--grass); font-weight: 750; }
      .thirds {
        display: grid;
        gap: 6px;
        font-size: 13px;
      }
      .third-line {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        padding: 7px 9px;
        border-radius: 8px;
        background: var(--soft);
      }
      .notice {
        border-left: 4px solid var(--gold);
        padding: 10px 12px;
        background: #fff8ea;
        color: #6d4a0f;
        font-size: 13px;
        line-height: 1.55;
        border-radius: 6px;
      }
      dialog {
        width: min(720px, calc(100vw - 28px));
        border: 0;
        border-radius: 8px;
        padding: 0;
        box-shadow: var(--shadow);
      }
      dialog::backdrop { background: rgba(8, 22, 28, .5); }
      .modal-head {
        padding: 18px;
        color: #fff;
        background: var(--grass);
      }
      .modal-body { padding: 18px; }
      .modal-actions { padding: 0 18px 18px; text-align: right; }
      .close {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
        padding: 8px 12px;
      }
      .empty {
        padding: 26px;
        border: 1px dashed var(--line);
        border-radius: 8px;
        color: var(--muted);
        background: rgba(255,255,255,.7);
        text-align: center;
      }
      @media (max-width: 980px) {
        .hero-inner, .layout, .toolbar { grid-template-columns: 1fr; }
        .side { position: static; }
      }
      @media (max-width: 560px) {
        .matches { grid-template-columns: 1fr; }
        .team { font-size: 15px; }
        .score { min-width: 58px; font-size: 18px; }
        .predict-row { align-items: stretch; flex-direction: column; }
      }
    </style>
  </head>
  <body>
    <header class="hero">
      <div class="hero-inner">
        <div>
          <h1>2026 世界杯赛程与预测</h1>
          <p>从开幕战到决赛的 104 场比赛。默认全部为“未开始”，点击同步后从官方赛程页尝试获取真实比分；未开始比赛可以输入预测比分，实时计算小组出线、最佳第三名和后续赛程。</p>
          <div class="source-links">
            <a href="${FIFA_FIXTURES_URL}" target="_blank" rel="noreferrer">FIFA 官方赛程</a>
            <a href="https://digitalhub.fifa.com/m/636f5c9c6f29771f/original/FWC2026_regulations_EN.pdf" target="_blank" rel="noreferrer">FIFA 规则 PDF</a>
          </div>
        </div>
        <div class="hero-card">
          <strong id="heroCount">104 场</strong>
          <span id="heroSummary">小组赛 72 场，淘汰赛 32 场</span>
        </div>
      </div>
    </header>
    <main class="shell">
      <section class="toolbar">
        <div>
          <div class="tabs" id="stageTabs"></div>
        </div>
        <button class="sync" id="syncButton" type="button">联网更新</button>
      </section>
      <div class="filters" id="statusFilters"></div>
      <div class="meta-row">
        <span id="lastUpdated">最后更新时间：尚未同步</span>
        <span id="syncStatus">数据源：内置官方赛程模板</span>
      </div>
      <section class="layout">
        <div>
          <div class="matches" id="matches"></div>
        </div>
        <aside class="side">
          <div class="panel">
            <h2>小组排名</h2>
            <div class="standings" id="standings"></div>
          </div>
          <div class="panel">
            <h2>最佳第三名</h2>
            <div class="thirds" id="thirds"></div>
          </div>
          <div class="notice">
            规则提示：小组排名按 FIFA 规则计算。公平竞赛分和 FIFA 排名只有在比分无法区分时才介入；若没有联网事件数据，公平竞赛分默认为 0。第三名进入具体对阵需要 FIFA 附件 C 的组合矩阵，当前程序会在可确定时自动填入，不可唯一时保留候选组提示。
          </div>
        </aside>
      </section>
    </main>
    <dialog id="detailDialog">
      <div class="modal-head" id="detailTitle"></div>
      <div class="modal-body" id="detailBody"></div>
      <div class="modal-actions"><button class="close" id="closeDialog" type="button">关闭</button></div>
    </dialog>
    <script>
      const seedData = ${JSON.stringify(initialData)};
      const stageNames = ["全部", "小组赛", "Round of 32", "Round of 16", "Quarter-final", "Semi-final", "Bronze final", "Final"];
      const statusNames = [
        ["all", "全部状态"],
        ["scheduled", "未开始"],
        ["live", "比赛中"],
        ["finished", "已结束"],
      ];
      const statusText = { scheduled: "未开始", live: "比赛中", finished: "已结束" };
      const state = {
        data: structuredClone(seedData),
        predictions: {},
        activeStage: "全部",
        activeStatus: "all",
        lastUpdated: null,
        syncMessage: "数据源：内置官方赛程模板",
      };

      const thirdSlots = {
        74: ["A", "B", "C", "D", "F"],
        77: ["C", "D", "F", "G", "H"],
        79: ["C", "E", "F", "H", "I"],
        80: ["E", "H", "I", "J", "K"],
        81: ["B", "E", "F", "I", "J"],
        82: ["A", "E", "H", "I", "J"],
        85: ["E", "F", "G", "I", "J"],
        87: ["D", "E", "I", "J", "L"],
      };

      function normaliseName(name) {
        return String(name)
          .replace(/Türkiye/g, "Turkiye")
          .replace(/Curaçao/g, "Curacao")
          .replace(/Côte d'Ivoire/g, "Cote d'Ivoire")
          .replace(/Korea Republic/g, "Korea Republic")
          .replace(/Cabo Verde/g, "Cabo Verde")
          .replace(/&/g, "and");
      }

      function stageBucket(match) {
        return match.stage.startsWith("Group") ? "小组赛" : match.stage;
      }

      function displaySeed(seed) {
        if (!seed) return "待定";
        if (/^1[A-L]$/.test(seed)) return "小组 " + seed[1] + " 第一";
        if (/^2[A-L]$/.test(seed)) return "小组 " + seed[1] + " 第二";
        if (/^3:/.test(seed)) return "最佳第三名 " + seed.slice(2);
        if (/^W\\d+/.test(seed)) return "胜者 M" + seed.slice(1);
        if (/^L\\d+/.test(seed)) return "负者 M" + seed.slice(1);
        return seed;
      }

      function getScore(match) {
        if (match.officialScore) return { ...match.officialScore, official: true };
        const prediction = state.predictions[match.id];
        if (prediction && Number.isInteger(prediction.home) && Number.isInteger(prediction.away)) {
          return { home: prediction.home, away: prediction.away, official: false, winner: prediction.winner || "" };
        }
        return null;
      }

      function matchWinner(match) {
        const score = getScore(match);
        if (!score) return null;
        if (score.home > score.away) return match.home;
        if (score.away > score.home) return match.away;
        return score.winner || null;
      }

      function matchLoser(match) {
        const score = getScore(match);
        if (!score) return null;
        const winner = matchWinner(match);
        if (!winner) return null;
        return winner === match.home ? match.away : match.home;
      }

      function groupLetter(stage) {
        const found = /Group ([A-L])/.exec(stage);
        return found ? found[1] : null;
      }

      function buildStandings() {
        const tables = {};
        Object.entries(state.data.groups).forEach(([group, teams]) => {
          tables[group] = teams.map((team) => ({
            group,
            team,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            gf: 0,
            ga: 0,
            gd: 0,
            points: 0,
            fairPlay: 0,
            rank: state.data.fifaRanks[team] || 999,
          }));
        });
        const byTeam = new Map();
        Object.values(tables).flat().forEach((row) => byTeam.set(row.team, row));
        state.data.matches.filter((match) => match.id <= 72).forEach((match) => {
          const score = getScore(match);
          if (!score) return;
          const home = byTeam.get(match.home);
          const away = byTeam.get(match.away);
          if (!home || !away) return;
          home.played += 1;
          away.played += 1;
          home.gf += score.home;
          home.ga += score.away;
          away.gf += score.away;
          away.ga += score.home;
          if (score.home > score.away) {
            home.won += 1; home.points += 3; away.lost += 1;
          } else if (score.home < score.away) {
            away.won += 1; away.points += 3; home.lost += 1;
          } else {
            home.drawn += 1; away.drawn += 1; home.points += 1; away.points += 1;
          }
        });
        Object.values(tables).flat().forEach((row) => {
          row.gd = row.gf - row.ga;
        });
        Object.keys(tables).forEach((group) => {
          tables[group].sort(compareRows);
        });
        return tables;
      }

      function compareRows(a, b) {
        return (
          b.points - a.points ||
          b.gd - a.gd ||
          b.gf - a.gf ||
          b.fairPlay - a.fairPlay ||
          a.rank - b.rank ||
          a.team.localeCompare(b.team)
        );
      }

      function bestThirds(tables) {
        return Object.values(tables)
          .map((rows) => rows[2])
          .filter(Boolean)
          .sort(compareRows)
          .map((row, index) => ({ ...row, qualified: index < 8 }));
      }

      function resolveThirdAssignments(qualifiedThirdGroups) {
        const groups = new Set(qualifiedThirdGroups);
        const slots = Object.keys(thirdSlots).map(Number);
        const domains = slots.map((slot) => thirdSlots[slot].filter((group) => groups.has(group)));
        if (domains.some((domain) => domain.length === 0)) return {};
        const solutions = [];
        function walk(index, used, current) {
          if (solutions.length > 2) return;
          if (index === slots.length) {
            solutions.push({ ...current });
            return;
          }
          const slot = slots[index];
          domains[index].forEach((group) => {
            if (used.has(group)) return;
            used.add(group);
            current[slot] = group;
            walk(index + 1, used, current);
            used.delete(group);
            delete current[slot];
          });
        }
        walk(0, new Set(), {});
        return solutions.length === 1 ? solutions[0] : {};
      }

      function hydrateKnockouts() {
        const tables = buildStandings();
        const thirdRows = bestThirds(tables);
        const thirdGroupToTeam = Object.fromEntries(thirdRows.filter((row) => row.qualified).map((row) => [row.group, row.team]));
        const thirdAssignment = resolveThirdAssignments(Object.keys(thirdGroupToTeam));
        const byId = new Map(state.data.matches.map((match) => [match.id, match]));

        state.data.matches.forEach((match) => {
          if (match.id < 73) return;
          match.home = resolveSeed(match.homeSeed, tables, thirdGroupToTeam, thirdAssignment, byId);
          match.away = resolveSeed(match.awaySeed, tables, thirdGroupToTeam, thirdAssignment, byId);
        });
      }

      function resolveSeed(seed, tables, thirdGroupToTeam, thirdAssignment, byId) {
        if (/^1[A-L]$/.test(seed)) return tables[seed[1]]?.[0]?.team || displaySeed(seed);
        if (/^2[A-L]$/.test(seed)) return tables[seed[1]]?.[1]?.team || displaySeed(seed);
        if (/^3:/.test(seed)) {
          const host = [...Object.entries(thirdSlots)].find(([, groups]) => groups.join("/") === seed.slice(2))?.[0];
          const group = thirdAssignment[host];
          return group && thirdGroupToTeam[group] ? thirdGroupToTeam[group] : displaySeed(seed);
        }
        if (/^W\\d+$/.test(seed)) return matchWinner(byId.get(Number(seed.slice(1)))) || displaySeed(seed);
        if (/^L\\d+$/.test(seed)) return matchLoser(byId.get(Number(seed.slice(1)))) || displaySeed(seed);
        return seed;
      }

      function renderTabs() {
        const box = document.querySelector("#stageTabs");
        box.innerHTML = stageNames.map((stage) => (
          '<button class="tab ' + (state.activeStage === stage ? 'active' : '') + '" data-stage="' + stage + '" type="button">' + stage + '</button>'
        )).join("");
        box.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
          state.activeStage = button.dataset.stage;
          render();
        }));

        const filter = document.querySelector("#statusFilters");
        filter.innerHTML = statusNames.map(([value, label]) => (
          '<button class="chip ' + (state.activeStatus === value ? 'active' : '') + '" data-status="' + value + '" type="button">' + label + '</button>'
        )).join("");
        filter.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
          state.activeStatus = button.dataset.status;
          render();
        }));
      }

      function renderMatches() {
        hydrateKnockouts();
        const list = document.querySelector("#matches");
        const matches = state.data.matches.filter((match) => {
          const stageOk = state.activeStage === "全部" || stageBucket(match) === state.activeStage;
          const statusOk = state.activeStatus === "all" || match.status === state.activeStatus;
          return stageOk && statusOk;
        });
        list.innerHTML = matches.map(renderMatch).join("") || '<div class="empty">当前筛选没有比赛。</div>';
        list.querySelectorAll("[data-detail]").forEach((button) => {
          button.addEventListener("click", () => openDetail(Number(button.dataset.detail)));
        });
        list.querySelectorAll("[data-predict]").forEach((input) => {
          input.addEventListener("input", onPredictionInput);
        });
        list.querySelectorAll("[data-winner]").forEach((select) => {
          select.addEventListener("change", onWinnerSelect);
        });
      }

      function renderMatch(match) {
        const score = getScore(match);
        const prediction = state.predictions[match.id] || {};
        const canPredict = match.status !== "finished";
        const scoreText = score ? score.home + " - " + score.away : "v";
        const scoreTitle = score ? (score.official ? "官方比分" : "预测比分") : "未开赛";
        const draw = score && score.home === score.away && match.id > 72;
        const className = "match" + (match.id === 1 ? " opening" : "");
        return '<article class="' + className + '">' +
          '<div class="match-head"><span>M' + match.id + ' · ' + match.date + '</span><span class="badge ' + match.status + '">' + statusText[match.status] + '</span></div>' +
          '<div class="teams"><div class="team">' + escapeHtml(match.home) + '</div><div class="score" title="' + scoreTitle + '">' + scoreText + '</div><div class="team away">' + escapeHtml(match.away) + '</div></div>' +
          '<div class="venue">' + escapeHtml(stageBucket(match)) + ' · ' + escapeHtml(match.venue) + (match.id === 1 ? ' · 开幕战' : '') + '</div>' +
          (canPredict ? '<div class="predict"><div class="predict-row"><label>预测比分</label><span><input data-predict="' + match.id + '" data-side="home" type="number" min="0" max="30" value="' + valueOrEmpty(prediction.home) + '"> - <input data-predict="' + match.id + '" data-side="away" type="number" min="0" max="30" value="' + valueOrEmpty(prediction.away) + '"></span></div>' +
          (draw ? '<div class="predict-row" style="margin-top:8px"><label>点球/加时胜者</label><select data-winner="' + match.id + '">' + winnerOptions(match, prediction.winner) + '</select></div>' : '') + '</div>' : '') +
          '<button class="details" data-detail="' + match.id + '" type="button">查看详细内容</button>' +
          '</article>';
      }

      function valueOrEmpty(value) {
        return Number.isInteger(value) ? String(value) : "";
      }

      function winnerOptions(match, winner) {
        const options = ["", match.home, match.away];
        return options.map((option) => '<option value="' + escapeHtml(option) + '"' + (option === winner ? " selected" : "") + '>' + (option || "请选择胜者") + '</option>').join("");
      }

      function onPredictionInput(event) {
        const id = Number(event.target.dataset.predict);
        const side = event.target.dataset.side;
        const value = event.target.value === "" ? null : Number(event.target.value);
        state.predictions[id] = state.predictions[id] || {};
        if (value === null || Number.isNaN(value)) delete state.predictions[id][side];
        else state.predictions[id][side] = Math.max(0, Math.min(30, Math.floor(value)));
        render();
      }

      function onWinnerSelect(event) {
        const id = Number(event.target.dataset.winner);
        state.predictions[id] = state.predictions[id] || {};
        state.predictions[id].winner = event.target.value;
        render();
      }

      function renderStandings() {
        const tables = buildStandings();
        const box = document.querySelector("#standings");
        box.innerHTML = Object.entries(tables).map(([group, rows]) => (
          '<div><strong>Group ' + group + '</strong><table><thead><tr><th>球队</th><th>赛</th><th>分</th><th>净</th><th>进</th></tr></thead><tbody>' +
          rows.map((row, index) => '<tr><td class="' + (index < 2 ? 'qual' : '') + '">' + escapeHtml(row.team) + '</td><td>' + row.played + '</td><td>' + row.points + '</td><td>' + row.gd + '</td><td>' + row.gf + '</td></tr>').join("") +
          '</tbody></table></div>'
        )).join("");

        const thirds = bestThirds(tables);
        document.querySelector("#thirds").innerHTML = thirds.map((row, index) => (
          '<div class="third-line"><span>' + (index + 1) + '. Group ' + row.group + ' · ' + escapeHtml(row.team) + '</span><strong class="' + (row.qualified ? 'qual' : '') + '">' + row.points + ' 分</strong></div>'
        )).join("");
      }

      function openDetail(id) {
        const match = state.data.matches.find((item) => item.id === id);
        if (!match) return;
        const score = getScore(match);
        const events = Array.isArray(match.events) ? match.events : [];
        document.querySelector("#detailTitle").innerHTML = '<strong>M' + match.id + '</strong> · ' + escapeHtml(match.home) + ' vs ' + escapeHtml(match.away);
        document.querySelector("#detailBody").innerHTML =
          '<p><strong>状态：</strong>' + statusText[match.status] + '</p>' +
          '<p><strong>比分：</strong>' + (score ? score.home + ' - ' + score.away + (score.official ? '（官方）' : '（预测）') : '未开始') + '</p>' +
          '<p><strong>阶段：</strong>' + escapeHtml(stageBucket(match)) + '</p>' +
          '<p><strong>日期/场馆：</strong>' + escapeHtml(match.date) + ' · ' + escapeHtml(match.venue) + '</p>' +
          '<p><strong>来源：</strong>' + escapeHtml(match.source || state.data.source) + '</p>' +
          '<h3>比赛事件</h3>' +
          (events.length ? '<ul>' + events.map((event) => '<li>' + escapeHtml(event.minute || "") + ' ' + escapeHtml(event.type || "") + ' · ' + escapeHtml(event.player || "") + ' ' + escapeHtml(event.team || "") + '</li>').join("") + '</ul>' : '<p class="notice">当前公开同步源未提供完整进球、换人、红黄牌逐事件数据。可在 Worker 中配置授权体育数据 API 后显示这些细节；程序不会自行编造事件。</p>');
        document.querySelector("#detailDialog").showModal();
      }

      function renderMeta() {
        document.querySelector("#lastUpdated").textContent = "最后更新时间：" + (state.lastUpdated ? new Date(state.lastUpdated).toLocaleString("zh-CN") : "尚未同步");
        document.querySelector("#syncStatus").textContent = currentSyncMessage();
        const counts = state.data.matches.reduce((acc, match) => {
          acc[match.status] = (acc[match.status] || 0) + 1;
          return acc;
        }, {});
        document.querySelector("#heroCount").textContent = state.data.matches.length + " 场";
        document.querySelector("#heroSummary").textContent = "未开始 " + (counts.scheduled || 0) + " · 比赛中 " + (counts.live || 0) + " · 已结束 " + (counts.finished || 0);
      }

      function currentSyncMessage() {
        if (!state.syncMessageKey) return state.syncMessage;
        if (state.syncMessageKey === "cachedAt") {
          return t("cachedAt", { time: state.lastUpdated ? new Date(state.lastUpdated).toLocaleString(state.language === "zh" ? "zh-CN" : state.language) : t("neverSynced") });
        }
        return t(state.syncMessageKey, state.syncMessageParams || {});
      }

      function render() {
        renderTabs();
        renderMatches();
        renderStandings();
        renderMeta();
      }

      async function syncData() {
        const button = document.querySelector("#syncButton");
        button.disabled = true;
        button.textContent = "同步中...";
        state.syncMessage = "正在从互联网上获取官方数据";
        renderMeta();
        try {
          const response = await fetch("/api/sync", { cache: "no-store" });
          const payload = await response.json();
          if (!response.ok) throw new Error(payload.error || "同步失败");
          mergeUpdates(payload);
          state.lastUpdated = payload.fetchedAt;
          state.syncMessage = "数据源：" + payload.source + "；更新 " + payload.updatedMatches + " 场";
        } catch (error) {
          state.syncMessage = "同步失败：" + error.message;
        } finally {
          button.disabled = false;
          button.textContent = "联网更新";
          render();
        }
      }

      function mergeUpdates(payload) {
        const byId = new Map(state.data.matches.map((match) => [match.id, match]));
        (payload.matches || []).forEach((update) => {
          const match = byId.get(update.id);
          if (!match) return;
          Object.assign(match, update);
        });
      }

      function escapeHtml(value) {
        return String(value)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      }

      document.querySelector("#syncButton").addEventListener("click", syncData);
      document.querySelector("#closeDialog").addEventListener("click", () => document.querySelector("#detailDialog").close());
      normaliseKnockoutState();
      render();
    </script>
  </body>
</html>`;

function renderPage() {
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>2026 世界杯赛程与预测</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #17212b;
        --muted: #5e6874;
        --line: #d9e1ea;
        --panel: #ffffff;
        --soft: #f4f8fb;
        --pitch: #0b8f6b;
        --pitch-dark: #07563f;
        --turquoise: #00a3e0;
        --sun: #ffd447;
        --magenta: #e83e8c;
        --blue: #1457d9;
        --red: #e0303a;
        --shadow: 0 18px 46px rgba(18, 42, 79, .13);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif;
      }
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        color: var(--ink);
        background:
          radial-gradient(circle at 8% 0, rgba(255, 212, 71, .24), transparent 24rem),
          radial-gradient(circle at 92% 4rem, rgba(232, 62, 140, .18), transparent 26rem),
          linear-gradient(180deg, #ecf7ff 0, #fbfcff 29rem, #fbfcff 100%);
      }
      button, input, select { font: inherit; }
      button { cursor: pointer; }
      button:focus-visible, input:focus-visible, select:focus-visible {
        outline: 3px solid rgba(197, 217, 50, .65);
        outline-offset: 2px;
      }
      .hero {
        position: relative;
        overflow: hidden;
        color: #fff;
        background:
          radial-gradient(circle at 84% 14%, rgba(255,212,71,.42), transparent 16rem),
          linear-gradient(120deg, rgba(0,96,160,.98), rgba(0,142,105,.95) 50%, rgba(219,33,64,.9)),
          repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 88px);
      }
      .hero::before {
        content: "";
        position: absolute;
        inset: -18% -10% auto auto;
        width: 38rem;
        height: 38rem;
        border-radius: 50%;
        background:
          radial-gradient(circle, rgba(255,255,255,.22) 0 2px, transparent 3px),
          conic-gradient(from 20deg, rgba(255,255,255,.18), transparent 22%, rgba(255,212,71,.2), transparent 45%, rgba(0,163,224,.18), transparent 70%, rgba(232,62,140,.18));
        background-size: 24px 24px, auto;
        transform: rotate(-12deg);
        pointer-events: none;
      }
      .hero::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 8px;
        background: linear-gradient(90deg, #00a3e0, #ffd447, #e0303a, #0b8f6b);
      }
      .hero-inner {
        position: relative;
        z-index: 1;
        max-width: 1460px;
        margin: 0 auto;
        padding: 30px clamp(16px, 4vw, 48px) 22px;
        display: grid;
        grid-template-columns: minmax(0, 1.4fr) minmax(280px, .7fr);
        gap: 28px;
        align-items: end;
      }
      h1 {
        margin: 0 0 10px;
        font-size: clamp(30px, 4vw, 56px);
        line-height: 1.02;
        letter-spacing: 0;
      }
      .hero p {
        margin: 0;
        max-width: 820px;
        color: rgba(255,255,255,.84);
        line-height: 1.68;
      }
      .hero-card {
        border: 1px solid rgba(255,255,255,.25);
        border-radius: 8px;
        padding: 16px;
        background: rgba(255,255,255,.12);
        backdrop-filter: blur(14px);
      }
      .hero-card strong { display: block; font-size: 24px; margin-bottom: 6px; }
      .source-links { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
      .source-links a {
        color: #fff;
        text-decoration: none;
        border: 1px solid rgba(255,255,255,.28);
        border-radius: 999px;
        padding: 7px 10px;
        font-size: 13px;
      }
      .shell {
        max-width: 1460px;
        margin: 0 auto;
        padding: 20px clamp(14px, 3vw, 40px) 48px;
      }
      .toolbar {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 14px;
        align-items: center;
        margin-bottom: 12px;
      }
      .tabs, .filters, .view-controls, .toolbar-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        align-items: center;
      }
      .toolbar-actions { justify-content: flex-end; }
      .tab, .chip, .sync, .mini-button {
        border: 1px solid var(--line);
        border-radius: 999px;
        background: var(--panel);
        color: var(--ink);
        padding: 9px 13px;
        box-shadow: 0 1px 0 rgba(16, 35, 42, .04);
      }
      .tab.active, .chip.active, .mini-button.active {
        color: #fff;
        background: linear-gradient(135deg, var(--blue), var(--pitch));
        border-color: transparent;
      }
      .sync {
        border-radius: 8px;
        color: #fff;
        background: linear-gradient(135deg, var(--red), var(--magenta));
        border-color: transparent;
        min-width: 124px;
      }
      .sync[disabled] { opacity: .7; cursor: wait; }
      .select-label, .compact-control {
        display: inline-flex;
        gap: 7px;
        align-items: center;
        color: var(--muted);
        font-size: 13px;
      }
      .select-label select, .slot-select, .compact-control select {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
        color: var(--ink);
        padding: 8px 9px;
      }
      .slot-select {
        min-width: 0;
        width: 100%;
      }
      .view-controls {
        min-height: 34px;
        margin-top: 8px;
      }
      .compact-bar {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 5px 8px;
        border: 1px solid rgba(20, 87, 217, .16);
        border-radius: 999px;
        background: rgba(255,255,255,.72);
        box-shadow: 0 8px 22px rgba(20, 87, 217, .08);
      }
      .zoom-control {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px;
        border: 1px solid rgba(20, 87, 217, .18);
        border-radius: 999px;
        background: rgba(255,255,255,.82);
      }
      .zoom-button {
        width: 32px;
        height: 32px;
        border: 0;
        border-radius: 50%;
        color: #fff;
        background: linear-gradient(135deg, var(--blue), var(--turquoise));
        font-size: 20px;
        line-height: 1;
      }
      .zoom-value {
        min-width: 54px;
        text-align: center;
        color: var(--ink);
        font-size: 13px;
        font-weight: 800;
      }
      .meta-row {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        color: var(--muted);
        font-size: 14px;
        margin: 12px 0 16px;
      }
      .layout {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 360px;
        gap: 18px;
        align-items: start;
      }
      .matches {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
        gap: 12px;
      }
      .grouped-matches {
        display: grid;
        gap: 18px;
      }
      .group-section {
        display: grid;
        gap: 10px;
      }
      .group-section h2 {
        margin: 0;
        font-size: 19px;
      }
      .group-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
        gap: 12px;
      }
      .match, .bracket-card, .leader-card {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--panel);
        box-shadow: 0 10px 24px rgba(17, 43, 86, .06);
        min-width: 0;
      }
      .match {
        padding: 14px;
      }
      .match.opening {
        border-color: rgba(215,152,43,.85);
        box-shadow: 0 0 0 2px rgba(215,152,43,.13);
      }
      .match-head, .score-row, .predict-row, .fact-row, .slot-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }
      .match-head {
        color: var(--muted);
        font-size: 13px;
        margin-bottom: 12px;
        min-width: 0;
      }
      .match-head span:first-child {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border-radius: 999px;
        padding: 4px 8px;
        font-size: 12px;
        border: 1px solid var(--line);
        background: var(--soft);
        white-space: nowrap;
      }
      .badge.live { color: #fff; background: var(--red); border-color: var(--red); }
      .badge.finished { color: #fff; background: var(--blue); border-color: var(--blue); }
      .teams {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 76px minmax(0, 1fr);
        gap: 10px;
        align-items: center;
      }
      .team-slot {
        min-width: 0;
        display: grid;
        gap: 7px;
      }
      .team-slot.away { text-align: right; }
      .team-line {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        overflow: hidden;
      }
      .team-slot.away .team-line { justify-content: flex-end; }
      .flag {
        flex: 0 0 auto;
        width: 28px;
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #edf3f1;
        font-size: 20px;
      }
      .team-name {
        min-width: 0;
        display: block;
        font-weight: 800;
        font-size: clamp(14px, 1.2vw, 17px);
        line-height: 1.22;
        overflow-wrap: anywhere;
        word-break: normal;
      }
      .team-alt {
        display: block;
        color: var(--muted);
        font-size: 12px;
        font-weight: 550;
      }
      .team-code {
        color: var(--muted);
        font-size: 11px;
        letter-spacing: .08em;
        text-transform: uppercase;
      }
      .score {
        min-width: 72px;
        text-align: center;
        border-radius: 8px;
        padding: 9px 8px;
        font-size: 22px;
        font-weight: 850;
        background: #eef5f2;
        color: var(--pitch-dark);
      }
      .facts {
        display: grid;
        gap: 5px;
        color: var(--muted);
        margin: 11px 0 12px;
        font-size: 13px;
      }
      .fact-row span:first-child { color: #47545c; font-weight: 650; }
      .fact-row span:last-child {
        min-width: 0;
        text-align: right;
        overflow-wrap: anywhere;
      }
      .event-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 8px 0 0;
      }
      .event-pill {
        border-radius: 999px;
        background: #edf5f2;
        color: var(--pitch-dark);
        padding: 4px 8px;
        font-size: 12px;
      }
      .predict {
        border-top: 1px solid var(--line);
        padding-top: 12px;
      }
      .predict label {
        color: var(--muted);
        font-size: 13px;
      }
      .predict input {
        width: 54px;
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 8px;
        text-align: center;
        background: #fff;
      }
      .predict select {
        max-width: 100%;
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 8px;
        background: #fff;
      }
      .details {
        width: 100%;
        margin-top: 12px;
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 8px 10px;
        background: #fff;
      }
      .candidate-row {
        color: var(--muted);
        font-size: 12px;
        line-height: 1.45;
        overflow-wrap: anywhere;
      }
      .candidate-row strong { color: #3d4a51; }
      .side {
        position: sticky;
        top: 12px;
        display: grid;
        gap: 12px;
      }
      .panel {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--panel);
        padding: 14px;
        box-shadow: 0 1px 0 rgba(16, 35, 42, .04);
      }
      .panel h2 {
        margin: 0 0 12px;
        font-size: 18px;
      }
      .standings {
        display: grid;
        gap: 12px;
        max-height: 58vh;
        overflow: auto;
        padding-right: 4px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
      }
      th, td {
        padding: 6px 5px;
        border-bottom: 1px solid #e9eef1;
        text-align: right;
      }
      th:first-child, td:first-child { text-align: left; }
      th { color: var(--muted); font-weight: 650; }
      .qual { color: var(--pitch); font-weight: 750; }
      .thirds {
        display: grid;
        gap: 6px;
        font-size: 13px;
      }
      .third-line {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        padding: 7px 9px;
        border-radius: 8px;
        background: var(--soft);
      }
      .notice {
        border-left: 4px solid var(--gold);
        padding: 10px 12px;
        background: #fff8ea;
        color: #6d4a0f;
        font-size: 13px;
        line-height: 1.55;
        border-radius: 6px;
      }
      .bracket-shell {
        min-width: 0;
      }
      .bracket-viewport {
        overflow: auto;
        border: 1px solid var(--line);
        border-radius: 8px;
        background:
          radial-gradient(circle at 50% 0, rgba(255,212,71,.2), transparent 22rem),
          linear-gradient(90deg, rgba(20,87,217,.06) 1px, transparent 1px),
          linear-gradient(180deg, rgba(11,143,107,.04) 1px, transparent 1px),
          #fff;
        background-size: 84px 84px;
        padding: 18px;
        min-height: 680px;
        cursor: grab;
        user-select: none;
        touch-action: pan-x pan-y;
      }
      .bracket-viewport.dragging {
        cursor: grabbing;
      }
      .bracket-track {
        display: grid;
        grid-template-columns: 280px 280px 270px 260px 290px;
        gap: 22px;
        transform-origin: top left;
        width: max-content;
      }
      .bracket-round {
        display: grid;
        align-content: start;
        gap: 12px;
        position: relative;
      }
      .bracket-round h2 {
        position: sticky;
        top: 0;
        z-index: 1;
        margin: 0;
        padding: 6px 0 8px;
        background: rgba(255,255,255,.92);
        font-size: 15px;
      }
      .bracket-round:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 48px;
        right: -12px;
        bottom: 10px;
        width: 1px;
        background: linear-gradient(180deg, transparent, rgba(20,87,217,.24), transparent);
      }
      .bracket-card {
        padding: 10px;
        position: relative;
      }
      .bracket-card.final {
        border-color: rgba(255,212,71,.8);
        box-shadow: 0 0 0 2px rgba(255,212,71,.18), 0 18px 38px rgba(20,87,217,.14);
      }
      .bracket-card .teams {
        grid-template-columns: minmax(0, 1fr) 42px;
        gap: 7px;
      }
      .bracket-score {
        justify-self: end;
        min-width: 34px;
        border-radius: 6px;
        background: #eef5f2;
        color: var(--pitch-dark);
        text-align: center;
        padding: 5px 4px;
        font-weight: 800;
      }
      .bracket-team {
        display: grid;
        gap: 6px;
        border-top: 1px solid #edf1f2;
        padding-top: 7px;
      }
      .bracket-team:first-of-type {
        border-top: 0;
        padding-top: 0;
      }
      .leader-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 12px;
      }
      .leader-card {
        padding: 14px;
      }
      .leader-card h2 {
        margin: 0 0 10px;
        font-size: 18px;
      }
      .leader-list {
        display: grid;
        gap: 6px;
      }
      .leader-line {
        display: grid;
        grid-template-columns: 28px minmax(0, 1fr) auto;
        gap: 8px;
        align-items: center;
        padding: 7px 9px;
        border-radius: 8px;
        background: var(--soft);
        font-size: 13px;
      }
      .empty {
        padding: 26px;
        border: 1px dashed var(--line);
        border-radius: 8px;
        color: var(--muted);
        background: rgba(255,255,255,.7);
        text-align: center;
      }
      dialog {
        width: min(760px, calc(100vw - 28px));
        border: 0;
        border-radius: 8px;
        padding: 0;
        box-shadow: var(--shadow);
      }
      dialog::backdrop { background: rgba(8, 22, 28, .5); }
      .modal-head {
        padding: 18px;
        color: #fff;
        background: var(--pitch);
      }
      .modal-body { padding: 18px; }
      .modal-body h3 { margin-bottom: 8px; }
      .modal-actions { padding: 0 18px 18px; text-align: right; }
      .close {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
        padding: 8px 12px;
      }
      @media (max-width: 980px) {
        .hero-inner, .layout, .toolbar { grid-template-columns: 1fr; }
        .toolbar-actions { justify-content: flex-start; }
        .side { position: static; }
      }
      @media (max-width: 560px) {
        .matches, .group-grid { grid-template-columns: 1fr; }
        .teams { grid-template-columns: minmax(0, 1fr); }
        .team-slot.away { text-align: left; }
        .team-slot.away .team-line { justify-content: flex-start; }
        .score { width: 100%; }
        .predict-row { align-items: stretch; flex-direction: column; }
        .bracket-track { grid-template-columns: repeat(5, 245px); }
      }
    </style>
  </head>
  <body>
    <header class="hero">
      <div class="hero-inner">
        <div>
          <h1 id="appTitle">2026 世界杯赛程与预测</h1>
          <p id="heroIntro">查看 104 场比赛、模拟比分和晋级路线。同步结果会缓存在本机，二次打开优先读取缓存；淘汰赛会根据已有结果推导候选球队，并支持树状缩放查看。</p>
          <div class="source-links">
            <a id="fixturesLink" href="${FIFA_FIXTURES_URL}" target="_blank" rel="noreferrer">FIFA 官方赛程</a>
            <a id="rulesLink" href="https://digitalhub.fifa.com/m/636f5c9c6f29771f/original/FWC2026_regulations_EN.pdf" target="_blank" rel="noreferrer">FIFA 规则 PDF</a>
          </div>
        </div>
        <div class="hero-card">
          <strong id="heroCount">104 场</strong>
          <span id="heroSummary">小组赛 72 场，淘汰赛 32 场</span>
        </div>
      </div>
    </header>
    <main class="shell">
      <section class="toolbar">
        <div class="tabs" id="stageTabs"></div>
        <div class="toolbar-actions">
          <label class="select-label" for="languageSelect"><span id="languageLabel">语言</span>
            <select id="languageSelect">
              <option value="zh">中文</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </label>
          <button class="sync" id="syncButton" type="button">联网更新</button>
        </div>
      </section>
      <div class="filters" id="statusFilters"></div>
      <div class="view-controls" id="viewControls"></div>
      <div class="meta-row">
        <span id="lastUpdated">最后更新时间：尚未同步</span>
        <span id="syncStatus">数据源：内置官方赛程模板</span>
      </div>
      <section class="layout">
        <div id="mainView">
          <div class="matches" id="matches"></div>
        </div>
        <aside class="side">
          <div class="panel">
            <h2 id="standingsTitle">小组排名</h2>
            <div class="standings" id="standings"></div>
          </div>
          <div class="panel">
            <h2 id="thirdsTitle">最佳第三名</h2>
            <div class="thirds" id="thirds"></div>
          </div>
          <div class="notice" id="sideNotice">
            同步源只展示已公开的真实数据；进球、助攻、红黄牌等逐事件信息只有数据源提供时才会出现。未确定的淘汰赛席位会显示候选球队，选择候选队后可继续模拟比分。
          </div>
        </aside>
      </section>
    </main>
    <dialog id="detailDialog">
      <div class="modal-head" id="detailTitle"></div>
      <div class="modal-body" id="detailBody"></div>
      <div class="modal-actions"><button class="close" id="closeDialog" type="button">关闭</button></div>
    </dialog>
    <script>
      const seedData = ${JSON.stringify(initialData)};
      const cacheKey = "wc2026.schedule.cache.v2";
      const stageNames = ["全部", "小组赛", "淘汰赛", "数据榜单"];
      const statusNames = [
        ["all", "statusAll"],
        ["scheduled", "scheduled"],
        ["live", "live"],
        ["finished", "finished"],
      ];
      const stageText = {
        zh: { "全部": "全部", "小组赛": "小组赛", "淘汰赛": "淘汰赛", "数据榜单": "数据榜单", "Round of 32": "32 强", "Round of 16": "16 强", "Quarter-final": "1/4 决赛", "Semi-final": "半决赛", "Bronze final": "季军赛", "Final": "决赛" },
        en: { "全部": "All", "小组赛": "Groups", "淘汰赛": "Knockout", "数据榜单": "Stats", "Round of 32": "Round of 32", "Round of 16": "Round of 16", "Quarter-final": "Quarter-final", "Semi-final": "Semi-final", "Bronze final": "Bronze final", "Final": "Final" },
        es: { "全部": "Todo", "小组赛": "Grupos", "淘汰赛": "Eliminatorias", "数据榜单": "Datos", "Round of 32": "Dieciseisavos", "Round of 16": "Octavos", "Quarter-final": "Cuartos", "Semi-final": "Semifinal", "Bronze final": "Tercer puesto", "Final": "Final" },
      };
      const copy = {
        zh: {
          appTitle: "2026 世界杯赛程与预测",
          heroIntro: "查看 104 场比赛、模拟比分和晋级路线。同步结果会缓存在本机，二次打开优先读取缓存；淘汰赛会根据已有结果推导候选球队，并支持经典双侧树形查看。",
          fixturesLink: "FIFA 官方赛程",
          rulesLink: "FIFA 规则 PDF",
          languageLabel: "语言",
          syncButton: "联网更新",
          syncing: "同步中...",
          standingsTitle: "小组排名",
          thirdsTitle: "最佳第三名",
          sideNotice: "同步源只展示已公开的真实数据；进球、助攻、红黄牌、换人和点球等事件只有数据源提供时才会出现。未确定的淘汰赛席位会显示候选球队，前序结果变化后会自动清理不再可能的预测。",
          statusAll: "全部状态",
          scheduled: "未开始",
          live: "比赛中",
          finished: "已结束",
          groupSort: "排序",
          sortTime: "按时间",
          sortGroup: "按分组",
          emptyFilter: "当前筛选没有比赛。",
          emptyGroup: "该分组暂无匹配场次。",
          chooseTeam: "选择模拟球队",
          candidates: "可能：",
          candidateTeams: "候选球队",
          moreTeams: "等 {count} 队",
          stage: "阶段",
          venue: "场馆",
          source: "来源",
          goal: "进球",
          cardsShort: "{count} 张牌",
          eventsShort: "{count} 个事件",
          predictScore: "预测比分",
          tieWinner: "点球/加时胜者",
          chooseWinner: "请选择胜者",
          details: "详情",
          viewDetails: "查看详细内容",
          round32: "32 强",
          round16: "16 强",
          quarter: "1/4 决赛",
          semi: "半决赛",
          finalWeekend: "决赛周末",
          final: "决赛",
          bronze: "季军赛",
          playerGoals: "进球球员",
          assists: "助攻球员",
          yellowCards: "黄牌",
          redCards: "红牌",
          substitutions: "换人",
          penalties: "点球",
          teamGoals: "球队进球",
          teamCards: "球队牌数",
          emptyGoals: "暂无公开进球球员数据",
          emptyAssists: "暂无公开助攻数据",
          emptyCards: "暂无公开牌类事件数据",
          emptySubs: "暂无公开换人数据",
          emptyPenalties: "暂无公开点球事件数据",
          emptyScores: "暂无比分数据",
          standingsTeam: "球队",
          standingsPlayed: "赛",
          standingsPoints: "分",
          standingsGd: "净",
          standingsGf: "进",
          points: "{points} 分",
          lastUpdated: "最后更新时间：{time}",
          neverSynced: "尚未同步",
          cachedAt: "已读取本地缓存：{time}",
          sourceBuiltIn: "数据源：内置官方赛程模板",
          syncingMessage: "正在获取最新公开数据",
          syncDone: "数据源：{source}；更新 {count} 场",
          syncFailed: "同步失败：{message}",
          serverSyncFailed: "服务端同步失败",
          staticCacheUnavailable: "静态缓存不可用",
          staticCacheAlsoFailed: "静态缓存也不可用：{message}",
          heroCount: "{count} 场",
          heroSummary: "未开始 {scheduled} · 比赛中 {live} · 已结束 {finished}",
          detailStatus: "状态",
          detailScore: "比分",
          detailDateVenue: "日期/场馆",
          detailTeams: "球队",
          detailEvents: "比赛事件",
          detailCandidates: "候选球队",
          detailNoEvents: "当前同步源未提供完整进球、助攻、换人、红黄牌、点球等逐事件数据。可在 Worker 中配置授权体育数据 API 后显示这些细节；程序不会自行编造事件。",
          predicted: "预测",
          official: "官方",
          notStarted: "未开始",
          homeSlot: "主队席位",
          awaySlot: "客队席位",
          slotDecided: "当前席位已确定。",
          close: "关闭",
          fifaRank: "FIFA 排名",
        },
        en: {
          appTitle: "2026 World Cup Schedule and Predictor",
          heroIntro: "Follow all 104 matches, simulate scores, and trace qualification paths. Synced data is cached locally for the next launch; knockout slots show derived candidates in a classic two-sided bracket.",
          fixturesLink: "FIFA fixtures",
          rulesLink: "FIFA regulations PDF",
          languageLabel: "Language",
          syncButton: "Sync",
          syncing: "Syncing...",
          standingsTitle: "Group standings",
          thirdsTitle: "Best third-place teams",
          sideNotice: "The app only shows public data returned by the sync sources. Goals, assists, cards, substitutions and penalties appear when the provider includes them. Impossible knockout picks are cleared when upstream results change.",
          statusAll: "All statuses",
          scheduled: "Scheduled",
          live: "Live",
          finished: "Finished",
          groupSort: "Sort",
          sortTime: "By time",
          sortGroup: "By group",
          emptyFilter: "No matches for this filter.",
          emptyGroup: "No matches in this group for the current filter.",
          chooseTeam: "Choose simulation team",
          candidates: "Possible:",
          candidateTeams: "Candidate teams",
          moreTeams: "{count} more",
          stage: "Stage",
          venue: "Venue",
          source: "Source",
          goal: "Goal",
          cardsShort: "{count} cards",
          eventsShort: "{count} events",
          predictScore: "Predicted score",
          tieWinner: "Extra-time / penalty winner",
          chooseWinner: "Choose winner",
          details: "Details",
          viewDetails: "View details",
          round32: "Round of 32",
          round16: "Round of 16",
          quarter: "Quarter-final",
          semi: "Semi-final",
          finalWeekend: "Final weekend",
          final: "Final",
          bronze: "Bronze final",
          playerGoals: "Player goals",
          assists: "Assists",
          yellowCards: "Yellow cards",
          redCards: "Red cards",
          substitutions: "Substitutions",
          penalties: "Penalties",
          teamGoals: "Team goals",
          teamCards: "Team cards",
          emptyGoals: "No public scorer data yet",
          emptyAssists: "No public assist data yet",
          emptyCards: "No public card data yet",
          emptySubs: "No public substitution data yet",
          emptyPenalties: "No public penalty event data yet",
          emptyScores: "No score data yet",
          standingsTeam: "Team",
          standingsPlayed: "P",
          standingsPoints: "Pts",
          standingsGd: "GD",
          standingsGf: "GF",
          points: "{points} pts",
          lastUpdated: "Last updated: {time}",
          neverSynced: "never synced",
          cachedAt: "Loaded local cache: {time}",
          sourceBuiltIn: "Source: built-in official schedule template",
          syncingMessage: "Fetching the latest public data",
          syncDone: "Source: {source}; updated {count} matches",
          syncFailed: "Sync failed: {message}",
          serverSyncFailed: "server sync failed",
          staticCacheUnavailable: "static cache unavailable",
          staticCacheAlsoFailed: "static cache also failed: {message}",
          heroCount: "{count} matches",
          heroSummary: "Scheduled {scheduled} · Live {live} · Finished {finished}",
          detailStatus: "Status",
          detailScore: "Score",
          detailDateVenue: "Date / venue",
          detailTeams: "Teams",
          detailEvents: "Match events",
          detailCandidates: "Candidate teams",
          detailNoEvents: "The current sync source did not provide complete goal, assist, substitution, card or penalty event data. Configure an authorised sports data API in the Worker to show those details; the app will not invent events.",
          predicted: "predicted",
          official: "official",
          notStarted: "not started",
          homeSlot: "Home slot",
          awaySlot: "Away slot",
          slotDecided: "This slot is already decided.",
          close: "Close",
          fifaRank: "FIFA rank",
        },
        es: {
          appTitle: "Calendario y predictor del Mundial 2026",
          heroIntro: "Sigue los 104 partidos, simula marcadores y revisa las rutas de clasificación. Los datos sincronizados se guardan localmente; las eliminatorias muestran candidatos en un cuadro clásico de dos lados.",
          fixturesLink: "Calendario FIFA",
          rulesLink: "Reglamento FIFA PDF",
          languageLabel: "Idioma",
          syncButton: "Sincronizar",
          syncing: "Sincronizando...",
          standingsTitle: "Clasificación de grupos",
          thirdsTitle: "Mejores terceros",
          sideNotice: "La app solo muestra datos públicos devueltos por las fuentes. Goles, asistencias, tarjetas, cambios y penales aparecen cuando el proveedor los incluye. Las predicciones imposibles se limpian al cambiar resultados previos.",
          statusAll: "Todos los estados",
          scheduled: "Programado",
          live: "En vivo",
          finished: "Finalizado",
          groupSort: "Orden",
          sortTime: "Por hora",
          sortGroup: "Por grupo",
          emptyFilter: "No hay partidos con este filtro.",
          emptyGroup: "No hay partidos en este grupo con el filtro actual.",
          chooseTeam: "Elegir equipo simulado",
          candidates: "Posibles:",
          candidateTeams: "Equipos candidatos",
          moreTeams: "{count} más",
          stage: "Fase",
          venue: "Sede",
          source: "Fuente",
          goal: "Gol",
          cardsShort: "{count} tarjetas",
          eventsShort: "{count} eventos",
          predictScore: "Marcador previsto",
          tieWinner: "Ganador en prórroga / penales",
          chooseWinner: "Elegir ganador",
          details: "Detalles",
          viewDetails: "Ver detalles",
          round32: "Dieciseisavos",
          round16: "Octavos",
          quarter: "Cuartos",
          semi: "Semifinal",
          finalWeekend: "Fin de semana final",
          final: "Final",
          bronze: "Tercer puesto",
          playerGoals: "Goles",
          assists: "Asistencias",
          yellowCards: "Tarjetas amarillas",
          redCards: "Tarjetas rojas",
          substitutions: "Cambios",
          penalties: "Penales",
          teamGoals: "Goles por equipo",
          teamCards: "Tarjetas por equipo",
          emptyGoals: "Sin datos públicos de goleadores",
          emptyAssists: "Sin datos públicos de asistencias",
          emptyCards: "Sin datos públicos de tarjetas",
          emptySubs: "Sin datos públicos de cambios",
          emptyPenalties: "Sin datos públicos de penales",
          emptyScores: "Sin marcadores",
          standingsTeam: "Equipo",
          standingsPlayed: "PJ",
          standingsPoints: "Pts",
          standingsGd: "DG",
          standingsGf: "GF",
          points: "{points} pts",
          lastUpdated: "Última actualización: {time}",
          neverSynced: "sin sincronizar",
          cachedAt: "Caché local cargada: {time}",
          sourceBuiltIn: "Fuente: plantilla oficial integrada",
          syncingMessage: "Buscando datos públicos recientes",
          syncDone: "Fuente: {source}; {count} partidos actualizados",
          syncFailed: "Falló la sincronización: {message}",
          serverSyncFailed: "falló la sincronización del servidor",
          staticCacheUnavailable: "caché estática no disponible",
          staticCacheAlsoFailed: "también falló la caché estática: {message}",
          heroCount: "{count} partidos",
          heroSummary: "Programados {scheduled} · En vivo {live} · Finalizados {finished}",
          detailStatus: "Estado",
          detailScore: "Marcador",
          detailDateVenue: "Fecha / sede",
          detailTeams: "Equipos",
          detailEvents: "Eventos del partido",
          detailCandidates: "Equipos candidatos",
          detailNoEvents: "La fuente actual no proporcionó datos completos de goles, asistencias, cambios, tarjetas o penales. Configura una API deportiva autorizada en el Worker para mostrar esos detalles; la app no inventará eventos.",
          predicted: "previsto",
          official: "oficial",
          notStarted: "no iniciado",
          homeSlot: "Plaza local",
          awaySlot: "Plaza visitante",
          slotDecided: "Esta plaza ya está decidida.",
          close: "Cerrar",
          fifaRank: "Ranking FIFA",
        },
      };
      const state = {
        data: structuredClone(seedData),
        predictions: {},
        seedSelections: {},
        syncedMatches: {},
        activeStage: "全部",
        activeStatus: "all",
        groupLayout: "time",
        language: "zh",
        knockoutZoom: 1,
        lastUpdated: null,
        syncMessage: "",
        syncMessageKey: "sourceBuiltIn",
        syncMessageParams: {},
        knockoutContext: null,
      };
      const thirdSlots = {
        74: ["A", "B", "C", "D", "F"],
        77: ["C", "D", "F", "G", "H"],
        79: ["C", "E", "F", "H", "I"],
        80: ["E", "H", "I", "J", "K"],
        81: ["B", "E", "F", "I", "J"],
        82: ["A", "E", "H", "I", "J"],
        85: ["E", "F", "G", "I", "J"],
        87: ["D", "E", "I", "J", "L"],
      };

      function t(key, params = {}) {
        const table = copy[state.language] || copy.zh;
        let value = table[key] || copy.zh[key] || key;
        Object.entries(params).forEach(([name, replacement]) => {
          value = value.replace(new RegExp("\\\\{" + name + "\\\\}", "g"), String(replacement));
        });
        return value;
      }

      function statusLabel(status) {
        return t(status || "scheduled");
      }

      function stageBucket(match) {
        return match.stage.startsWith("Group") ? "小组赛" : match.stage;
      }

      function labelStage(stage) {
        return (stageText[state.language] && stageText[state.language][stage]) || stageText.zh[stage] || stage;
      }

      function groupLetter(stage) {
        const found = /Group ([A-L])/.exec(stage);
        return found ? found[1] : null;
      }

      function isTeam(name) {
        return Boolean(state.data.teamMeta[name]);
      }

      function teamMeta(name) {
        return state.data.teamMeta[name] || null;
      }

      function displayTeamName(name) {
        const meta = teamMeta(name);
        if (!meta) return name;
        return meta.names[state.language] || meta.names.zh || meta.names.en || name;
      }

      function displayMaybeTeamName(name) {
        return displayTeamName(canonicalTeamName(name) || name);
      }

      function canonicalTeamName(name) {
        const target = canonicalName(name);
        return Object.keys(state.data.teamMeta).find((team) => canonicalName(team) === target) || "";
      }

      function renderTeamIdentity(name, side) {
        const meta = teamMeta(name);
        const isKnown = Boolean(meta);
        const primary = isKnown ? displayTeamName(name) : name;
        const secondary = isKnown && state.language !== "en" ? meta.names.en : "";
        const code = isKnown ? meta.code : "";
        return '<div class="team-line">' +
          '<span class="flag">' + (isKnown ? meta.flag : "TBD") + '</span>' +
          '<span class="team-name">' + escapeHtml(primary) + (secondary ? '<span class="team-alt"> / ' + escapeHtml(secondary) + '</span>' : '') + (code ? '<span class="team-code"> ' + escapeHtml(code) + '</span>' : '') + '</span>' +
          '</div>';
      }

      function displaySeed(seed) {
        if (!seed) return "TBD";
        if (/^1[A-L]$/.test(seed)) return state.language === "zh" ? "小组 " + seed[1] + " 第一" : "Group " + seed[1] + " winner";
        if (/^2[A-L]$/.test(seed)) return state.language === "zh" ? "小组 " + seed[1] + " 第二" : "Group " + seed[1] + " runner-up";
        if (/^3:/.test(seed)) return state.language === "zh" ? "最佳第三名 " + seed.slice(2) : "Third place " + seed.slice(2);
        if (/^W\\d+/.test(seed)) return state.language === "zh" ? "胜者 M" + seed.slice(1) : "Winner M" + seed.slice(1);
        if (/^L\\d+/.test(seed)) return state.language === "zh" ? "负者 M" + seed.slice(1) : "Loser M" + seed.slice(1);
        return seed;
      }

      function getScore(match) {
        if (match.officialScore) return { ...match.officialScore, official: true };
        const prediction = state.predictions[match.id];
        if (prediction && Number.isInteger(prediction.home) && Number.isInteger(prediction.away)) {
          return { home: prediction.home, away: prediction.away, official: false, winner: prediction.winner || "" };
        }
        return null;
      }

      function getTeam(match, side) {
        const current = match[side];
        if (isTeam(current)) return current;
        const candidates = slotCandidates(match, side);
        const picked = state.seedSelections[match.id] && state.seedSelections[match.id][side];
        if (picked && candidates.includes(picked)) return picked;
        return current;
      }

      function matchWinner(match) {
        if (!match) return null;
        const score = getScore(match);
        if (!score) return null;
        const home = getTeam(match, "home");
        const away = getTeam(match, "away");
        if (score.home > score.away) return home;
        if (score.away > score.home) return away;
        return score.winner || null;
      }

      function matchLoser(match) {
        if (!match) return null;
        const score = getScore(match);
        if (!score) return null;
        const winner = matchWinner(match);
        if (!winner) return null;
        const home = getTeam(match, "home");
        const away = getTeam(match, "away");
        return winner === home ? away : home;
      }

      function buildStandings() {
        const tables = {};
        Object.entries(state.data.groups).forEach(([group, teams]) => {
          tables[group] = teams.map((team) => ({
            group,
            team,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            gf: 0,
            ga: 0,
            gd: 0,
            points: 0,
            fairPlay: 0,
            rank: state.data.fifaRanks[team] || 999,
          }));
        });
        const byTeam = new Map();
        Object.values(tables).flat().forEach((row) => byTeam.set(row.team, row));
        state.data.matches.filter((match) => match.id <= 72).forEach((match) => {
          const score = getScore(match);
          if (!score) return;
          const home = byTeam.get(match.home);
          const away = byTeam.get(match.away);
          if (!home || !away) return;
          home.played += 1;
          away.played += 1;
          home.gf += score.home;
          home.ga += score.away;
          away.gf += score.away;
          away.ga += score.home;
          if (score.home > score.away) {
            home.won += 1; home.points += 3; away.lost += 1;
          } else if (score.home < score.away) {
            away.won += 1; away.points += 3; home.lost += 1;
          } else {
            home.drawn += 1; away.drawn += 1; home.points += 1; away.points += 1;
          }
        });
        Object.values(tables).flat().forEach((row) => {
          row.gd = row.gf - row.ga;
        });
        Object.keys(tables).forEach((group) => {
          tables[group].sort(compareRows);
        });
        return tables;
      }

      function compareRows(a, b) {
        return (
          b.points - a.points ||
          b.gd - a.gd ||
          b.gf - a.gf ||
          b.fairPlay - a.fairPlay ||
          a.rank - b.rank ||
          a.team.localeCompare(b.team)
        );
      }

      function bestThirds(tables) {
        return Object.values(tables)
          .map((rows) => rows[2])
          .filter(Boolean)
          .sort(compareRows)
          .map((row, index) => ({ ...row, qualified: index < 8 }));
      }

      function groupComplete(group) {
        const groupMatches = state.data.matches.filter((match) => match.id <= 72 && groupLetter(match.stage) === group);
        return groupMatches.length === 6 && groupMatches.every((match) => Boolean(getScore(match)));
      }

      function buildKnockoutContext() {
        const tables = buildStandings();
        const thirdRows = bestThirds(tables);
        const thirdGroupToTeam = Object.fromEntries(thirdRows.filter((row) => row.qualified).map((row) => [row.group, row.team]));
        const completeGroups = new Set(Object.keys(state.data.groups).filter(groupComplete));
        const thirdAssignment = completeGroups.size === Object.keys(state.data.groups).length ? resolveThirdAssignments(Object.keys(thirdGroupToTeam)) : {};
        const byId = new Map(state.data.matches.map((match) => [match.id, match]));
        return { tables, thirdRows, thirdGroupToTeam, thirdAssignment, byId, completeGroups };
      }

      function resolveThirdAssignments(qualifiedThirdGroups) {
        const groups = new Set(qualifiedThirdGroups);
        const slots = Object.keys(thirdSlots).map(Number);
        const domains = slots.map((slot) => thirdSlots[slot].filter((group) => groups.has(group)));
        if (domains.some((domain) => domain.length === 0)) return {};
        const solutions = [];
        function walk(index, used, current) {
          if (solutions.length > 2) return;
          if (index === slots.length) {
            solutions.push({ ...current });
            return;
          }
          const slot = slots[index];
          domains[index].forEach((group) => {
            if (used.has(group)) return;
            used.add(group);
            current[slot] = group;
            walk(index + 1, used, current);
            used.delete(group);
            delete current[slot];
          });
        }
        walk(0, new Set(), {});
        return solutions.length === 1 ? solutions[0] : {};
      }

      function hydrateKnockouts() {
        const context = buildKnockoutContext();
        state.knockoutContext = context;
        state.data.matches.forEach((match) => {
          if (match.id < 73) return;
          match.home = resolveSeed(match.homeSeed, context);
          match.away = resolveSeed(match.awaySeed, context);
        });
      }

      function resolveSeed(seed, context) {
        if (/^1[A-L]$/.test(seed)) {
          return context.completeGroups.has(seed[1]) ? context.tables[seed[1]]?.[0]?.team || displaySeed(seed) : displaySeed(seed);
        }
        if (/^2[A-L]$/.test(seed)) {
          return context.completeGroups.has(seed[1]) ? context.tables[seed[1]]?.[1]?.team || displaySeed(seed) : displaySeed(seed);
        }
        if (/^3:/.test(seed)) {
          const host = [...Object.entries(thirdSlots)].find(([, groups]) => groups.join("/") === seed.slice(2))?.[0];
          const group = context.thirdAssignment[host];
          return group && context.thirdGroupToTeam[group] ? context.thirdGroupToTeam[group] : displaySeed(seed);
        }
        if (/^W\\d+$/.test(seed)) return matchWinner(context.byId.get(Number(seed.slice(1)))) || displaySeed(seed);
        if (/^L\\d+$/.test(seed)) return matchLoser(context.byId.get(Number(seed.slice(1)))) || displaySeed(seed);
        return seed;
      }

      function slotCandidates(match, side) {
        if (match.id <= 72) return [];
        const seed = side === "home" ? match.homeSeed : match.awaySeed;
        const eliminated = seedNeedsActiveTeam(seed) ? eliminatedTeams() : new Set();
        return unique(seedCandidates(seed, state.knockoutContext || buildKnockoutContext(), 0))
          .filter(isTeam)
          .filter((team) => !eliminated.has(team));
      }

      function seedNeedsActiveTeam(seed) {
        return /^W\\d+$/.test(seed || "");
      }

      function selectedOrResolvedTeam(match, side) {
        const current = match?.[side];
        if (isTeam(current)) return current;
        const picked = state.seedSelections[match?.id] && state.seedSelections[match.id][side];
        return isTeam(picked) ? picked : "";
      }

      function eliminatedTeams() {
        const eliminated = new Set();
        state.data.matches.filter((match) => match.id > 72).forEach((match) => {
          const score = getScore(match);
          if (!score) return;
          const home = selectedOrResolvedTeam(match, "home");
          const away = selectedOrResolvedTeam(match, "away");
          if (score.home < score.away && home) eliminated.add(home);
          if (score.away < score.home && away) eliminated.add(away);
          if (score.home === score.away && score.winner) {
            if (score.winner === home && away) eliminated.add(away);
            if (score.winner === away && home) eliminated.add(home);
          }
        });
        return eliminated;
      }

      function seedCandidates(seed, context, depth) {
        if (!seed || depth > 4) return [];
        if (/^1[A-L]$/.test(seed)) {
          const group = seed[1];
          return context.completeGroups.has(group) ? [context.tables[group]?.[0]?.team].filter(Boolean) : state.data.groups[group] || [];
        }
        if (/^2[A-L]$/.test(seed)) {
          const group = seed[1];
          return context.completeGroups.has(group) ? [context.tables[group]?.[1]?.team].filter(Boolean) : state.data.groups[group] || [];
        }
        if (/^3:/.test(seed)) {
          const host = [...Object.entries(thirdSlots)].find(([, groups]) => groups.join("/") === seed.slice(2))?.[0];
          const group = context.thirdAssignment[host];
          if (group && context.thirdGroupToTeam[group]) return [context.thirdGroupToTeam[group]];
          return seed.slice(2).split("/").flatMap((groupId) => (
            context.completeGroups.has(groupId) ? [context.tables[groupId]?.[2]?.team].filter(Boolean) : state.data.groups[groupId] || []
          ));
        }
        if (/^[WL]\\d+$/.test(seed)) {
          const previous = context.byId.get(Number(seed.slice(1)));
          const score = getScore(previous);
          if (previous && score) {
            let side = "";
            if (score.home > score.away) side = seed[0] === "W" ? "home" : "away";
            if (score.away > score.home) side = seed[0] === "W" ? "away" : "home";
            if (!side && score.winner) {
              const home = getTeam(previous, "home");
              const away = getTeam(previous, "away");
              if (score.winner === home) side = seed[0] === "W" ? "home" : "away";
              if (score.winner === away) side = seed[0] === "W" ? "away" : "home";
            }
            if (side) return seedCandidates(side === "home" ? previous.homeSeed : previous.awaySeed, context, depth + 1);
          }
          const decided = seed[0] === "W" ? matchWinner(previous) : matchLoser(previous);
          if (decided && isTeam(decided)) return [decided];
          if (!previous) return [];
          return [
            ...seedCandidates(previous.homeSeed, context, depth + 1),
            ...seedCandidates(previous.awaySeed, context, depth + 1),
          ];
        }
        return isTeam(seed) ? [seed] : [];
      }

      function unique(items) {
        return [...new Set(items.filter(Boolean))];
      }

      function renderTabs() {
        const box = document.querySelector("#stageTabs");
        box.innerHTML = stageNames.map((stage) => (
          '<button class="tab ' + (state.activeStage === stage ? 'active' : '') + '" data-stage="' + stage + '" type="button">' + labelStage(stage) + '</button>'
        )).join("");
        box.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
          state.activeStage = button.dataset.stage;
          saveCache();
          render();
        }));

        const filter = document.querySelector("#statusFilters");
        filter.innerHTML = statusNames.map(([value, key]) => (
          '<button class="chip ' + (state.activeStatus === value ? 'active' : '') + '" data-status="' + value + '" type="button">' + t(key) + '</button>'
        )).join("");
        filter.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
          state.activeStatus = button.dataset.status;
          saveCache();
          render();
        }));
      }

      function renderViewControls() {
        const box = document.querySelector("#viewControls");
        if (state.activeStage === "小组赛") {
          box.innerHTML =
            '<div class="compact-bar"><label class="compact-control" for="groupLayoutSelect">' + t("groupSort") +
            '<select id="groupLayoutSelect">' +
            '<option value="time"' + (state.groupLayout === "time" ? " selected" : "") + '>' + t("sortTime") + '</option>' +
            '<option value="group"' + (state.groupLayout === "group" ? " selected" : "") + '>' + t("sortGroup") + '</option>' +
            '</select></label></div>';
          box.querySelector("#groupLayoutSelect").addEventListener("change", (event) => {
            state.groupLayout = event.target.value;
            saveCache();
            render();
          });
          return;
        }
        if (state.activeStage === "淘汰赛") {
          box.innerHTML =
            '<div class="zoom-control">' +
            '<button class="zoom-button" data-zoom="-0.1" type="button" aria-label="Zoom out">-</button>' +
            '<span class="zoom-value">' + Math.round(state.knockoutZoom * 100) + '%</span>' +
            '<button class="zoom-button" data-zoom="0.1" type="button" aria-label="Zoom in">+</button>' +
            '</div>';
          box.querySelectorAll("[data-zoom]").forEach((button) => button.addEventListener("click", () => {
            const delta = Number(button.dataset.zoom);
            state.knockoutZoom = Math.max(.55, Math.min(1.4, Number((state.knockoutZoom + delta).toFixed(2))));
            render();
          }));
          return;
        }
        box.innerHTML = "";
      }

      function renderMatches() {
        hydrateKnockouts();
        const list = document.querySelector("#matches");
        if (state.activeStage === "数据榜单") {
          list.className = "leader-grid";
          list.innerHTML = renderLeaderboards();
          return;
        }
        if (state.activeStage === "淘汰赛") {
          list.className = "bracket-shell";
          list.innerHTML = renderBracket();
          bindMatchEvents(list);
          bindBracketDrag(list);
          return;
        }

        const matches = filteredMatches();
        if (state.activeStage === "小组赛" && state.groupLayout === "group") {
          list.className = "grouped-matches";
          list.innerHTML = renderGroupedMatches(matches);
        } else {
          list.className = "matches";
          list.innerHTML = matches.map(renderMatch).join("") || '<div class="empty">' + t("emptyFilter") + '</div>';
        }
        bindMatchEvents(list);
      }

      function filteredMatches() {
        return state.data.matches.filter((match) => {
          const bucket = stageBucket(match);
          const stageOk =
            state.activeStage === "全部" ||
            state.activeStage === bucket ||
            (state.activeStage === "淘汰赛" && match.id > 72);
          const statusOk = state.activeStatus === "all" || match.status === state.activeStatus;
          return stageOk && statusOk;
        }).sort((a, b) => a.date.localeCompare(b.date) || a.id - b.id);
      }

      function renderGroupedMatches(matches) {
        const byGroup = Object.fromEntries(Object.keys(state.data.groups).map((group) => [group, []]));
        matches.forEach((match) => {
          const group = groupLetter(match.stage);
          if (group && byGroup[group]) byGroup[group].push(match);
        });
        return Object.entries(byGroup).map(([group, items]) => (
          '<section class="group-section"><h2>Group ' + group + '</h2><div class="group-grid">' +
          (items.map(renderMatch).join("") || '<div class="empty">' + t("emptyGroup") + '</div>') +
          '</div></section>'
        )).join("");
      }

      function renderMatch(match) {
        const score = getScore(match);
        const prediction = state.predictions[match.id] || {};
        const canPredict = match.status !== "finished";
        const scoreText = score ? score.home + " - " + score.away : "v";
        const scoreTitle = score ? (score.official ? t("official") : t("predicted")) : t("notStarted");
        const draw = score && score.home === score.away && match.id > 72;
        const className = "match" + (match.id === 1 ? " opening" : "");
        return '<article class="' + className + '">' +
          '<div class="match-head"><span>M' + match.id + ' · ' + escapeHtml(match.date) + '</span><span class="badge ' + match.status + '">' + statusLabel(match.status) + '</span></div>' +
          '<div class="teams">' + renderTeamSlot(match, "home") + '<div class="score" title="' + scoreTitle + '">' + scoreText + '</div>' + renderTeamSlot(match, "away") + '</div>' +
          renderFacts(match) +
          renderEventPills(match) +
          (canPredict ? renderPredictionControls(match, prediction, draw) : '') +
          '<button class="details" data-detail="' + match.id + '" type="button">' + t("viewDetails") + '</button>' +
          '</article>';
      }

      function renderTeamSlot(match, side) {
        const team = getTeam(match, side);
        const candidates = slotCandidates(match, side);
        const unresolved = match.id > 72 && !isTeam(match[side]) && candidates.length > 1;
        const picked = state.seedSelections[match.id] && state.seedSelections[match.id][side] || "";
        return '<div class="team-slot ' + side + '">' +
          renderTeamIdentity(team, side) +
          (unresolved ? '<select class="slot-select" data-team-pick="' + match.id + '" data-side="' + side + '">' +
            '<option value="">' + t("chooseTeam") + '</option>' +
            candidates.map((candidate) => '<option value="' + escapeHtml(candidate) + '"' + (candidate === picked ? " selected" : "") + '>' + escapeHtml(displayTeamName(candidate)) + '</option>').join("") +
          '</select>' : '') +
          (unresolved ? '<div class="candidate-row"><strong>' + t("candidates") + '</strong>' + escapeHtml(shortCandidateList(candidates)) + '</div>' : '') +
          '</div>';
      }

      function shortCandidateList(candidates) {
        const names = candidates.slice(0, 5).map(displayTeamName);
        return names.join(" / ") + (candidates.length > 5 ? " " + t("moreTeams", { count: candidates.length }) : "");
      }

      function renderFacts(match) {
        const group = groupLetter(match.stage);
        const source = match.source || state.data.source;
        return '<div class="facts">' +
          '<div class="fact-row"><span>' + t("stage") + '</span><span>' + escapeHtml(group ? "Group " + group : labelStage(match.stage)) + '</span></div>' +
          '<div class="fact-row"><span>' + t("venue") + '</span><span>' + escapeHtml(match.venue) + '</span></div>' +
          '<div class="fact-row"><span>' + t("source") + '</span><span>' + escapeHtml(source) + '</span></div>' +
          '</div>';
      }

      function renderEventPills(match) {
        const events = Array.isArray(match.events) ? match.events : [];
        if (!events.length) return "";
        const goals = events.filter((event) => eventKind(event) === "goal").slice(0, 3);
        const cards = events.filter((event) => ["card", "yellow", "red"].includes(eventKind(event))).length;
        const pills = [];
        goals.forEach((event) => pills.push(t("goal") + " " + (event.player || event.team || "")));
        if (cards) pills.push(t("cardsShort", { count: cards }));
        if (!pills.length) pills.push(t("eventsShort", { count: events.length }));
        return '<div class="event-pills">' + pills.map((pill) => '<span class="event-pill">' + escapeHtml(pill) + '</span>').join("") + '</div>';
      }

      function renderPredictionControls(match, prediction, draw) {
        return '<div class="predict"><div class="predict-row"><label>' + t("predictScore") + '</label><span><input data-predict="' + match.id + '" data-side="home" type="number" min="0" max="30" value="' + valueOrEmpty(prediction.home) + '"> - <input data-predict="' + match.id + '" data-side="away" type="number" min="0" max="30" value="' + valueOrEmpty(prediction.away) + '"></span></div>' +
          (draw ? '<div class="predict-row" style="margin-top:8px"><label>' + t("tieWinner") + '</label><select data-winner="' + match.id + '">' + winnerOptions(match, prediction.winner) + '</select></div>' : '') + '</div>';
      }

      function renderBracket() {
        const rounds = [
          ["Round of 32", t("round32")],
          ["Round of 16", t("round16")],
          ["Quarter-final", t("quarter")],
          ["Semi-final", t("semi")],
          ["Finals", t("finalWeekend")],
        ];
        const byRound = new Map(rounds.map(([round]) => [round, []]));
        filteredMatches().filter((match) => match.id > 72).forEach((match) => {
          const round = match.stage === "Bronze final" || match.stage === "Final" ? "Finals" : match.stage;
          if (byRound.has(round)) byRound.get(round).push(match);
        });
        return '<div class="bracket-viewport"><div class="bracket-track" style="transform: scale(' + state.knockoutZoom + ')">' +
          rounds.map(([round, label]) => '<section class="bracket-round"><h2>' + escapeHtml(label) + '</h2>' +
            (byRound.get(round).map((match) => renderBracketMatch(match, round === "Finals")).join("") || '<div class="empty">' + t("emptyFilter") + '</div>') +
          '</section>').join("") +
          '</div></div>';
      }

      function renderBracketMatch(match, center = false) {
        const score = getScore(match);
        const prediction = state.predictions[match.id] || {};
        const draw = score && score.home === score.away;
        const finalClass = center && match.stage === "Final" ? " final" : "";
        return '<article class="bracket-card' + finalClass + '">' +
          '<div class="match-head"><span>M' + match.id + ' · ' + escapeHtml(match.date) + '</span><span class="badge ' + match.status + '">' + statusLabel(match.status) + '</span></div>' +
          '<div class="bracket-team"><div class="slot-row">' + renderTeamIdentity(getTeam(match, "home"), "home") + '<span class="bracket-score">' + (score ? score.home : "-") + '</span></div>' + renderBracketPicker(match, "home") + '</div>' +
          '<div class="bracket-team"><div class="slot-row">' + renderTeamIdentity(getTeam(match, "away"), "away") + '<span class="bracket-score">' + (score ? score.away : "-") + '</span></div>' + renderBracketPicker(match, "away") + '</div>' +
          '<div class="facts"><div class="fact-row"><span>' + t("venue") + '</span><span>' + escapeHtml(match.venue) + '</span></div></div>' +
          (match.status !== "finished" ? renderPredictionControls(match, prediction, draw) : '') +
          '<button class="details" data-detail="' + match.id + '" type="button">' + t("details") + '</button>' +
          '</article>';
      }

      function renderBracketPicker(match, side) {
        const candidates = slotCandidates(match, side);
        const unresolved = !isTeam(match[side]) && candidates.length > 1;
        const picked = state.seedSelections[match.id] && state.seedSelections[match.id][side] || "";
        if (!unresolved) return "";
        return '<select class="slot-select" data-team-pick="' + match.id + '" data-side="' + side + '">' +
          '<option value="">' + t("candidateTeams") + '</option>' +
          candidates.map((candidate) => '<option value="' + escapeHtml(candidate) + '"' + (candidate === picked ? " selected" : "") + '>' + escapeHtml(displayTeamName(candidate)) + '</option>').join("") +
          '</select><div class="candidate-row">' + escapeHtml(shortCandidateList(candidates)) + '</div>';
      }

      function renderLeaderboards() {
        const boards = buildLeaderboards();
        return renderLeaderCard(t("playerGoals"), boards.goals, t("emptyGoals")) +
          renderLeaderCard(t("assists"), boards.assists, t("emptyAssists")) +
          renderLeaderCard(t("yellowCards"), boards.yellowCards, t("emptyCards")) +
          renderLeaderCard(t("redCards"), boards.redCards, t("emptyCards")) +
          renderLeaderCard(t("substitutions"), boards.substitutions, t("emptySubs")) +
          renderLeaderCard(t("penalties"), boards.penalties, t("emptyPenalties")) +
          renderLeaderCard(t("teamGoals"), boards.teamGoals, t("emptyScores")) +
          renderLeaderCard(t("teamCards"), boards.teamCards, t("emptyCards"));
      }

      function renderLeaderCard(title, rows, emptyText) {
        return '<section class="leader-card"><h2>' + title + '</h2><div class="leader-list">' +
          (rows.length ? rows.slice(0, 10).map((row, index) => '<div class="leader-line"><strong>' + (index + 1) + '</strong><span>' + escapeHtml(row.label) + '</span><strong>' + row.value + '</strong></div>').join("") : '<div class="empty">' + emptyText + '</div>') +
          '</div></section>';
      }

      function buildLeaderboards() {
        const goals = new Map();
        const assists = new Map();
        const yellowCards = new Map();
        const redCards = new Map();
        const substitutions = new Map();
        const penalties = new Map();
        const teamGoals = new Map();
        const teamCards = new Map();
        state.data.matches.forEach((match) => {
          const score = getScore(match);
          if (score) {
            addCount(teamGoals, displayTeamName(getTeam(match, "home")), score.home);
            addCount(teamGoals, displayTeamName(getTeam(match, "away")), score.away);
          }
          (Array.isArray(match.events) ? match.events : []).forEach((event) => {
            const player = event.player || event.text || "";
            if (!player) return;
            const label = player + (event.team ? " · " + displayMaybeTeamName(event.team) : "");
            const kind = eventKind(event);
            const teamLabel = event.team ? displayMaybeTeamName(event.team) : "";
            if (kind === "goal") addCount(goals, label, 1);
            if (kind === "assist") addCount(assists, label, 1);
            if (kind === "yellow") {
              addCount(yellowCards, label, 1);
              addCount(teamCards, teamLabel, 1);
            }
            if (kind === "red") {
              addCount(redCards, label, 1);
              addCount(teamCards, teamLabel, 1);
            }
            if (kind === "card") {
              addCount(yellowCards, label, 1);
              addCount(teamCards, teamLabel, 1);
            }
            if (kind === "substitution") addCount(substitutions, label, 1);
            if (kind === "penalty") addCount(penalties, label, 1);
          });
        });
        return {
          goals: mapToRows(goals),
          assists: mapToRows(assists),
          yellowCards: mapToRows(yellowCards),
          redCards: mapToRows(redCards),
          substitutions: mapToRows(substitutions),
          penalties: mapToRows(penalties),
          teamGoals: mapToRows(teamGoals),
          teamCards: mapToRows(teamCards),
        };
      }

      function eventKind(event) {
        const text = String((event.type || "") + " " + (event.text || "")).toLowerCase();
        if (text.includes("assist")) return "assist";
        if (text.includes("penalty") || text.includes("penalties")) return "penalty";
        if (text.includes("substitution") || text.includes("substitute") || text.includes("sub")) return "substitution";
        if (text.includes("yellow")) return "yellow";
        if (text.includes("red")) return "red";
        if (text.includes("card")) return "card";
        if (text.includes("goal") || text.includes("score")) return "goal";
        return "event";
      }

      function addCount(map, key, amount) {
        if (!key || !amount) return;
        map.set(key, (map.get(key) || 0) + amount);
      }

      function mapToRows(map) {
        return [...map.entries()].map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
      }

      function bindMatchEvents(root) {
        root.querySelectorAll("[data-detail]").forEach((button) => {
          button.addEventListener("click", () => openDetail(Number(button.dataset.detail)));
        });
        root.querySelectorAll("[data-predict]").forEach((input) => {
          input.addEventListener("input", onPredictionInput);
        });
        root.querySelectorAll("[data-winner]").forEach((select) => {
          select.addEventListener("change", onWinnerSelect);
        });
        root.querySelectorAll("[data-team-pick]").forEach((select) => {
          select.addEventListener("change", onTeamPick);
        });
      }

      function bindBracketDrag(root) {
        const viewport = root.querySelector(".bracket-viewport");
        if (!viewport) return;
        let dragging = false;
        let startX = 0;
        let startY = 0;
        let startLeft = 0;
        let startTop = 0;
        let moved = false;
        viewport.addEventListener("pointerdown", (event) => {
          if (event.button !== undefined && event.button !== 0) return;
          if (event.target.closest("button, input, select, a, dialog")) return;
          dragging = true;
          moved = false;
          startX = event.clientX;
          startY = event.clientY;
          startLeft = viewport.scrollLeft;
          startTop = viewport.scrollTop;
          viewport.classList.add("dragging");
          viewport.setPointerCapture?.(event.pointerId);
        });
        viewport.addEventListener("pointermove", (event) => {
          if (!dragging) return;
          const dx = event.clientX - startX;
          const dy = event.clientY - startY;
          if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
          viewport.scrollLeft = startLeft - dx;
          viewport.scrollTop = startTop - dy;
          event.preventDefault();
        });
        const stopDrag = (event) => {
          if (!dragging) return;
          dragging = false;
          viewport.classList.remove("dragging");
          viewport.releasePointerCapture?.(event.pointerId);
        };
        viewport.addEventListener("pointerup", stopDrag);
        viewport.addEventListener("pointercancel", stopDrag);
        viewport.addEventListener("click", (event) => {
          if (!moved) return;
          event.preventDefault();
          event.stopPropagation();
          moved = false;
        }, true);
      }

      function valueOrEmpty(value) {
        return Number.isInteger(value) ? String(value) : "";
      }

      function winnerOptions(match, winner) {
        const options = unique(["", getTeam(match, "home"), getTeam(match, "away")]);
        return options.map((option) => '<option value="' + escapeHtml(option) + '"' + (option === winner ? " selected" : "") + '>' + (option ? escapeHtml(displayTeamName(option)) : t("chooseWinner")) + '</option>').join("");
      }

      function onPredictionInput(event) {
        const id = Number(event.target.dataset.predict);
        const side = event.target.dataset.side;
        const value = event.target.value === "" ? null : Number(event.target.value);
        state.predictions[id] = state.predictions[id] || {};
        if (value === null || Number.isNaN(value)) delete state.predictions[id][side];
        else state.predictions[id][side] = Math.max(0, Math.min(30, Math.floor(value)));
        normaliseKnockoutState();
        saveCache();
        render();
      }

      function onWinnerSelect(event) {
        const id = Number(event.target.dataset.winner);
        state.predictions[id] = state.predictions[id] || {};
        state.predictions[id].winner = event.target.value;
        normaliseKnockoutState();
        saveCache();
        render();
      }

      function onTeamPick(event) {
        const id = Number(event.target.dataset.teamPick);
        const side = event.target.dataset.side;
        state.seedSelections[id] = state.seedSelections[id] || {};
        if (event.target.value) {
          state.seedSelections[id][side] = event.target.value;
          const match = state.data.matches.find((item) => item.id === id);
          const seed = side === "home" ? match?.homeSeed : match?.awaySeed;
          propagateSelectionToSeed(seed, event.target.value, state.knockoutContext || buildKnockoutContext(), 0);
        } else {
          delete state.seedSelections[id][side];
        }
        normaliseKnockoutState();
        saveCache();
        render();
      }

      function propagateSelectionToSeed(seed, team, context, depth) {
        if (!seed || !team || depth > 5 || !/^[WL]\\d+$/.test(seed)) return;
        const path = findSeedPath(seed, team, context, depth);
        path.forEach((step) => {
          const match = context.byId.get(step.matchId);
          if (!match || isTeam(match[step.side])) return;
          state.seedSelections[match.id] = state.seedSelections[match.id] || {};
          state.seedSelections[match.id][step.side] = team;
        });
      }

      function findSeedPath(seed, team, context, depth) {
        if (!seed || depth > 5 || !/^[WL]\\d+$/.test(seed)) return [];
        const previous = context.byId.get(Number(seed.slice(1)));
        if (!previous) return [];
        for (const side of ["home", "away"]) {
          const candidates = unique(seedCandidates(side === "home" ? previous.homeSeed : previous.awaySeed, context, depth + 1)).filter(isTeam);
          if (!candidates.includes(team)) continue;
          return [{ matchId: previous.id, side }, ...findSeedPath(side === "home" ? previous.homeSeed : previous.awaySeed, team, context, depth + 1)];
        }
        return [];
      }

      function normaliseKnockoutState() {
        let changed = true;
        let guard = 0;
        while (changed && guard < 6) {
          changed = false;
          guard += 1;
          hydrateKnockouts();
          state.data.matches.filter((match) => match.id > 72).forEach((match) => {
            const selection = state.seedSelections[match.id];
            if (selection) {
              ["home", "away"].forEach((side) => {
                const picked = selection[side];
                if (!picked) return;
                const candidates = slotCandidates(match, side);
                if (!candidates.includes(picked)) {
                  delete selection[side];
                  changed = true;
                }
              });
              if (!selection.home && !selection.away) delete state.seedSelections[match.id];
            }
            const prediction = state.predictions[match.id];
            if (prediction && prediction.winner) {
              const legalWinners = [getTeam(match, "home"), getTeam(match, "away")].filter(isTeam);
              if (!legalWinners.includes(prediction.winner)) {
                delete prediction.winner;
                changed = true;
              }
            }
          });
        }
      }

      function renderStandings() {
        const tables = buildStandings();
        const box = document.querySelector("#standings");
        box.innerHTML = Object.entries(tables).map(([group, rows]) => (
          '<div><strong>Group ' + group + '</strong><table><thead><tr><th>' + t("standingsTeam") + '</th><th>' + t("standingsPlayed") + '</th><th>' + t("standingsPoints") + '</th><th>' + t("standingsGd") + '</th><th>' + t("standingsGf") + '</th></tr></thead><tbody>' +
          rows.map((row, index) => '<tr><td class="' + (index < 2 ? 'qual' : '') + '">' + escapeHtml(displayTeamName(row.team)) + '</td><td>' + row.played + '</td><td>' + row.points + '</td><td>' + row.gd + '</td><td>' + row.gf + '</td></tr>').join("") +
          '</tbody></table></div>'
        )).join("");

        const thirds = bestThirds(tables);
        document.querySelector("#thirds").innerHTML = thirds.map((row, index) => (
          '<div class="third-line"><span>' + (index + 1) + '. Group ' + row.group + ' · ' + escapeHtml(displayTeamName(row.team)) + '</span><strong class="' + (row.qualified ? 'qual' : '') + '">' + t("points", { points: row.points }) + '</strong></div>'
        )).join("");
      }

      function openDetail(id) {
        const match = state.data.matches.find((item) => item.id === id);
        if (!match) return;
        const score = getScore(match);
        const events = Array.isArray(match.events) ? match.events : [];
        const home = getTeam(match, "home");
        const away = getTeam(match, "away");
        document.querySelector("#detailTitle").innerHTML = '<strong>M' + match.id + '</strong> · ' + escapeHtml(displayTeamName(home)) + ' vs ' + escapeHtml(displayTeamName(away));
        document.querySelector("#detailBody").innerHTML =
          '<p><strong>' + t("detailStatus") + '：</strong>' + statusLabel(match.status) + '</p>' +
          '<p><strong>' + t("detailScore") + '：</strong>' + (score ? score.home + ' - ' + score.away + '（' + (score.official ? t("official") : t("predicted")) + '）' : t("notStarted")) + '</p>' +
          '<p><strong>' + t("stage") + '：</strong>' + escapeHtml(groupLetter(match.stage) ? "Group " + groupLetter(match.stage) : labelStage(match.stage)) + '</p>' +
          '<p><strong>' + t("detailDateVenue") + '：</strong>' + escapeHtml(match.date) + ' · ' + escapeHtml(match.venue) + '</p>' +
          '<p><strong>' + t("detailTeams") + '：</strong>' + escapeHtml(teamDetail(home)) + ' vs ' + escapeHtml(teamDetail(away)) + '</p>' +
          '<p><strong>' + t("source") + '：</strong>' + escapeHtml(match.source || state.data.source) + '</p>' +
          '<h3>' + t("detailEvents") + '</h3>' +
          (events.length ? '<ul>' + events.map(renderEventLine).join("") + '</ul>' : '<p class="notice">' + t("detailNoEvents") + '</p>') +
          (match.id > 72 ? '<h3>' + t("detailCandidates") + '</h3>' + renderDetailCandidates(match) : '');
        document.querySelector("#detailDialog").showModal();
      }

      function teamDetail(team) {
        const meta = teamMeta(team);
        if (!meta) return team;
        return meta.flag + " " + displayTeamName(team) + " / " + meta.names.en + " · " + t("fifaRank") + " " + (state.data.fifaRanks[team] || "N/A");
      }

      function renderEventLine(event) {
        return '<li>' + escapeHtml(event.minute || "") + ' ' + escapeHtml(event.type || "Event") + ' · ' + escapeHtml(event.player || event.text || "") + (event.team ? ' · ' + escapeHtml(displayMaybeTeamName(event.team)) : '') + '</li>';
      }

      function renderDetailCandidates(match) {
        return ["home", "away"].map((side) => {
          const candidates = slotCandidates(match, side);
          if (!candidates.length || isTeam(match[side])) return "";
          return '<p><strong>' + (side === "home" ? t("homeSlot") : t("awaySlot")) + '：</strong>' + escapeHtml(candidates.map(displayTeamName).join(" / ")) + '</p>';
        }).join("") || '<p>' + t("slotDecided") + '</p>';
      }

      function renderMeta() {
        document.documentElement.lang = state.language === "zh" ? "zh-CN" : state.language;
        document.title = t("appTitle");
        document.querySelector("#appTitle").textContent = t("appTitle");
        document.querySelector("#heroIntro").textContent = t("heroIntro");
        document.querySelector("#fixturesLink").textContent = t("fixturesLink");
        document.querySelector("#rulesLink").textContent = t("rulesLink");
        document.querySelector("#languageLabel").textContent = t("languageLabel");
        document.querySelector("#syncButton").textContent = document.querySelector("#syncButton").disabled ? t("syncing") : t("syncButton");
        document.querySelector("#standingsTitle").textContent = t("standingsTitle");
        document.querySelector("#thirdsTitle").textContent = t("thirdsTitle");
        document.querySelector("#sideNotice").textContent = t("sideNotice");
        document.querySelector("#closeDialog").textContent = t("close");
        document.querySelector("#languageSelect").value = state.language;
        document.querySelector("#lastUpdated").textContent = t("lastUpdated", { time: state.lastUpdated ? new Date(state.lastUpdated).toLocaleString(state.language === "zh" ? "zh-CN" : state.language) : t("neverSynced") });
        document.querySelector("#syncStatus").textContent = state.syncMessage;
        const counts = state.data.matches.reduce((acc, match) => {
          acc[match.status] = (acc[match.status] || 0) + 1;
          return acc;
        }, {});
        document.querySelector("#heroCount").textContent = t("heroCount", { count: state.data.matches.length });
        document.querySelector("#heroSummary").textContent = t("heroSummary", { scheduled: counts.scheduled || 0, live: counts.live || 0, finished: counts.finished || 0 });
      }

      function render() {
        const scrollState = captureScrollState();
        renderTabs();
        renderViewControls();
        renderMatches();
        renderStandings();
        renderMeta();
        restoreScrollState(scrollState);
      }

      function captureScrollState() {
        const bracket = document.querySelector(".bracket-viewport");
        return {
          x: window.scrollX,
          y: window.scrollY,
          bracketLeft: bracket ? bracket.scrollLeft : 0,
          bracketTop: bracket ? bracket.scrollTop : 0,
        };
      }

      function restoreScrollState(scrollState) {
        requestAnimationFrame(() => {
          window.scrollTo(scrollState.x, scrollState.y);
          const bracket = document.querySelector(".bracket-viewport");
          if (bracket) {
            bracket.scrollLeft = scrollState.bracketLeft;
            bracket.scrollTop = scrollState.bracketTop;
          }
        });
      }

      async function syncData() {
        const button = document.querySelector("#syncButton");
        button.disabled = true;
        button.textContent = t("syncing");
        state.syncMessageKey = "syncingMessage";
        state.syncMessageParams = {};
        renderMeta();
        try {
          const payload = await requestSyncPayload();
          mergeUpdates(payload, true);
          state.lastUpdated = payload.fetchedAt || new Date().toISOString();
          state.syncMessageKey = "syncDone";
          state.syncMessageParams = { source: payload.source, count: payload.updatedMatches || 0 };
          saveCache();
        } catch (error) {
          state.syncMessageKey = "syncFailed";
          state.syncMessageParams = { message: error.message };
        } finally {
          button.disabled = false;
          button.textContent = t("syncButton");
          render();
        }
      }

      async function requestSyncPayload() {
        let apiError = null;
        try {
          const response = await fetch("/api/sync", { cache: "no-store" });
          const payload = await response.json();
          if (!response.ok) throw new Error(payload.error || t("serverSyncFailed"));
          return payload;
        } catch (error) {
          apiError = error;
        }
        try {
          const response = await fetch("data/sync-cache.json?ts=" + Date.now(), { cache: "no-store" });
          const payload = await response.json();
          if (!response.ok) throw new Error(payload.error || t("staticCacheUnavailable"));
          return payload;
        } catch (staticError) {
          throw new Error(apiError.message + "；" + t("staticCacheAlsoFailed", { message: staticError.message }));
        }
      }

      function mergeUpdates(payload, remember) {
        const byId = new Map(state.data.matches.map((match) => [match.id, match]));
        (payload.matches || []).forEach((update) => {
          const match = byId.get(update.id);
          if (!match) return;
          const next = { ...update };
          if (!next.kickoffUtc) delete next.kickoffUtc;
          Object.assign(match, next);
          if (remember) state.syncedMatches[update.id] = sanitiseUpdate(update);
        });
      }

      function sanitiseUpdate(update) {
        const clean = {
          id: update.id,
          status: update.status,
          officialScore: update.officialScore || null,
          events: Array.isArray(update.events) ? update.events : [],
          source: update.source || "",
        };
        if (update.kickoffUtc) clean.kickoffUtc = update.kickoffUtc;
        return clean;
      }

      function saveCache() {
        try {
          localStorage.setItem(cacheKey, JSON.stringify({
            version: 2,
            lastUpdated: state.lastUpdated,
            syncMessage: state.syncMessage,
            syncMessageKey: state.syncMessageKey,
            syncMessageParams: state.syncMessageParams,
            matches: Object.values(state.syncedMatches),
            predictions: state.predictions,
            seedSelections: state.seedSelections,
            settings: {
              activeStage: state.activeStage,
              activeStatus: state.activeStatus,
              groupLayout: state.groupLayout,
              language: state.language,
            },
          }));
        } catch (error) {
          console.warn("Unable to save cache", error);
        }
      }

      function loadCache() {
        try {
          const raw = localStorage.getItem(cacheKey);
          if (!raw) return;
          const cached = JSON.parse(raw);
          if (!cached || cached.version !== 2) return;
          state.syncedMatches = Object.fromEntries((cached.matches || []).map((match) => [match.id, match]));
          mergeUpdates({ matches: cached.matches || [] }, false);
          state.predictions = cached.predictions || {};
          state.seedSelections = cached.seedSelections || {};
          state.lastUpdated = cached.lastUpdated || null;
          state.syncMessage = cached.syncMessage || "";
          state.syncMessageKey = cached.lastUpdated ? "cachedAt" : cached.syncMessageKey || "sourceBuiltIn";
          state.syncMessageParams = cached.syncMessageParams || {};
          if (cached.settings) {
            state.activeStage = stageNames.includes(cached.settings.activeStage) ? cached.settings.activeStage : state.activeStage;
            state.activeStatus = statusNames.some(([value]) => value === cached.settings.activeStatus) ? cached.settings.activeStatus : state.activeStatus;
            state.groupLayout = ["time", "group"].includes(cached.settings.groupLayout) ? cached.settings.groupLayout : state.groupLayout;
            state.language = ["zh", "en", "es"].includes(cached.settings.language) ? cached.settings.language : state.language;
          }
        } catch (error) {
          console.warn("Unable to load cache", error);
        }
      }

      function canonicalName(name) {
        const cleaned = String(name || "")
          .normalize("NFD")
          .replace(/[\\u0300-\\u036f]/g, "")
          .replace(/&/g, "and")
          .replace(/[^a-zA-Z ]/g, " ")
          .replace(/\\s+/g, " ")
          .trim()
          .toLowerCase();
        const aliases = {
          "united states": "usa",
          usmnt: "usa",
          turkey: "turkiye",
          turkiye: "turkiye",
          "south korea": "korea republic",
          "bosnia herzogovina": "bosnia and herzegovina",
          "bosnia herzegovina": "bosnia and herzegovina",
          "ivory coast": "cote d ivoire",
          iran: "ir iran",
          "cape verde": "cabo verde",
          "dr congo": "congo dr",
          "democratic republic of congo": "congo dr",
        };
        return aliases[cleaned] || cleaned;
      }

      function escapeHtml(value) {
        return String(value)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      }

      loadCache();
      document.querySelector("#syncButton").addEventListener("click", syncData);
      document.querySelector("#languageSelect").addEventListener("change", (event) => {
        state.language = event.target.value;
        saveCache();
        render();
      });
      document.querySelector("#closeDialog").addEventListener("click", () => document.querySelector("#detailDialog").close());
      render();
    </script>
  </body>
</html>`;
}

function seedLabel(seed) {
  if (!seed) return "TBD";
  if (/^1[A-L]$/.test(seed)) return `Group ${seed[1]} winners`;
  if (/^2[A-L]$/.test(seed)) return `Group ${seed[1]} runners-up`;
  if (/^3:/.test(seed)) return `Third place ${seed.slice(2)}`;
  if (/^W\d+/.test(seed)) return `Winner match ${seed.slice(1)}`;
  if (/^L\d+/.test(seed)) return `Runner-up match ${seed.slice(1)}`;
  return seed;
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const nameAliases = {
  USA: ["USA", "United States", "USMNT"],
  Turkiye: ["Turkiye", "Turkey"],
  "Korea Republic": ["Korea Republic", "South Korea"],
  "Bosnia and Herzegovina": ["Bosnia and Herzegovina", "Bosnia & Herzegovina"],
  "Cote d'Ivoire": ["Cote d'Ivoire", "Ivory Coast"],
  "IR Iran": ["IR Iran", "Iran"],
  "Cabo Verde": ["Cabo Verde", "Cape Verde"],
  "Congo DR": ["Congo DR", "DR Congo", "Democratic Republic of Congo"],
};

function looseName(name) {
  const names = nameAliases[name] || [name];
  return `(?:${names.map((item) => String(item).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`;
}

function parseFifaText(text) {
  const updates = [];
  for (const match of officialSchedule) {
    const home = looseName(match.home);
    const away = looseName(match.away);
    const result = new RegExp(`${home}\\s+(\\d{1,2})\\s*[-–]\\s*(\\d{1,2})\\s+${away}`, "i").exec(text);
    if (result) {
      updates.push({
        id: match.id,
        status: "finished",
        officialScore: { home: Number(result[1]), away: Number(result[2]) },
        source: "FIFA official fixtures page",
      });
      continue;
    }
    const reverse = new RegExp(`${away}\\s+(\\d{1,2})\\s*[-–]\\s*(\\d{1,2})\\s+${home}`, "i").exec(text);
    if (reverse) {
      updates.push({
        id: match.id,
        status: "finished",
        officialScore: { home: Number(reverse[2]), away: Number(reverse[1]) },
        source: "FIFA official fixtures page",
      });
      continue;
    }
    const live = new RegExp(`${home}\\s+(\\d{1,2})\\s*[-–]\\s*(\\d{1,2})\\s+${away}\\s+(?:Live|HT|FT)?`, "i").exec(text);
    if (live) {
      updates.push({
        id: match.id,
        status: "live",
        officialScore: { home: Number(live[1]), away: Number(live[2]) },
        source: "FIFA official fixtures page",
      });
    }
  }
  return updates;
}

function canonicalName(name) {
  const cleaned = String(name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-zA-Z ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  const aliases = {
    "united states": "usa",
    usmnt: "usa",
    turkey: "turkiye",
    "south korea": "korea republic",
    "bosnia herzogovina": "bosnia and herzegovina",
    "bosnia herzegovina": "bosnia and herzegovina",
    "ivory coast": "cote d ivoire",
    iran: "ir iran",
    "cape verde": "cabo verde",
    "dr congo": "congo dr",
    "democratic republic of congo": "congo dr",
  };
  return aliases[cleaned] || cleaned;
}

function findMatchByTeams(homeName, awayName) {
  const home = canonicalName(homeName);
  const away = canonicalName(awayName);
  return initialData.matches.find((match) => {
    const mh = canonicalName(match.home);
    const ma = canonicalName(match.away);
    return (mh === home && ma === away) || (mh === away && ma === home);
  });
}

function mapEspnState(state) {
  if (state === "in") return "live";
  if (state === "post") return "finished";
  return "scheduled";
}

function parseEspnEvent(event) {
  const competition = event?.competitions?.[0];
  const competitors = competition?.competitors || [];
  const home = competitors.find((item) => item.homeAway === "home") || competitors[0];
  const away = competitors.find((item) => item.homeAway === "away") || competitors[1];
  if (!home || !away) return null;
  const homeName = home.team?.displayName || home.team?.shortDisplayName || home.team?.name;
  const awayName = away.team?.displayName || away.team?.shortDisplayName || away.team?.name;
  const match = findMatchByTeams(homeName, awayName);
  if (!match) return null;
  const status = mapEspnState(event.status?.type?.state);
  const score = {
    home: Number(home.score || 0),
    away: Number(away.score || 0),
  };
  const reversed = canonicalName(match.home) === canonicalName(awayName);
  const details = Array.isArray(competition.details) ? competition.details : [];
  return {
    id: match.id,
    status,
    kickoffUtc: event.date || match.kickoffUtc || null,
    officialScore: status === "scheduled" ? null : reversed ? { home: score.away, away: score.home } : score,
    events: details.map((detail) => ({
      minute: detail.clock?.displayValue || detail.timeElapsed || "",
      type: detail.type?.text || detail.type || "Event",
      player: detail.athletes?.[0]?.displayName || detail.text || "",
      team: detail.team?.displayName || "",
    })),
    source: "ESPN public scoreboard API",
  };
}

async function fetchEspnUpdates(signal) {
  const response = await fetch(ESPN_SCOREBOARD_URL, {
    headers: { accept: "application/json" },
    signal,
  });
  if (!response.ok) throw new Error(`ESPN returned HTTP ${response.status}`);
  const data = await response.json();
  return (data.events || []).map(parseEspnEvent).filter(Boolean);
}

async function handleSync(request, env) {
  void request;
  void env;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(FIFA_FIXTURES_URL, {
      headers: {
        "accept": "text/html,application/xhtml+xml",
        "user-agent": "Mozilla/5.0 WorldCupScheduleApp/1.0",
      },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`FIFA returned HTTP ${response.status}`);
    const html = await response.text();
    const text = stripHtml(html);
    const updates = parseFifaText(text);
    if (updates.length === 0) {
      const espn = await fetchEspnUpdates(controller.signal);
      if (espn.length > 0) {
        return json({
          fetchedAt: new Date().toISOString(),
          source: "ESPN public scoreboard API",
          updatedMatches: espn.length,
          matches: espn,
          note:
            "FIFA page was reachable but no scores were parsed, so the keyless ESPN scoreboard was used as a real-data fallback.",
        });
      }
    }
    return json({
      fetchedAt: new Date().toISOString(),
      source: "FIFA official fixtures page",
      updatedMatches: updates.length,
      matches: updates,
      note:
        "Only published scores visible on the official fixtures page are merged. Detailed events require an authorised event-data provider.",
    });
  } catch (error) {
    try {
      const espn = await fetchEspnUpdates(controller.signal);
      return json({
        fetchedAt: new Date().toISOString(),
        source: "ESPN public scoreboard API",
        updatedMatches: espn.length,
        matches: espn,
        note:
          "FIFA official fixtures fetch failed in this runtime, so the keyless ESPN scoreboard was used as a real-data fallback.",
      });
    } catch (fallbackError) {
      return json(
        {
          fetchedAt: new Date().toISOString(),
          source: "FIFA official fixtures page + ESPN public scoreboard API",
          updatedMatches: 0,
          matches: [],
          error: `${error.message}; ESPN fallback failed: ${fallbackError.message}`,
        },
        502,
      );
    }
  } finally {
    clearTimeout(timer);
  }
}

function json(value, status = 200) {
  return new Response(JSON.stringify(value), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export { handleSync, initialData };

export default {
  async fetch(request, env, ctx) {
    void ctx;
    const url = new URL(request.url);
    if (url.pathname === "/api/schedule") {
      return json(initialData);
    }
    if (url.pathname === "/api/sync") {
      return handleSync(request, env);
    }
    if (url.pathname !== "/") {
      return new Response("Not found", { status: 404 });
    }
    return new Response(renderPage(), {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  },
};
