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

// Kick-off times are stored in UTC; the UI formats them in the visitor's locale.
const kickoffUtcByMatchId = {
  1: "2026-06-11T19:00:00Z",
  2: "2026-06-12T02:00:00Z",
  3: "2026-06-12T19:00:00Z",
  4: "2026-06-13T01:00:00Z",
  5: "2026-06-14T01:00:00Z",
  6: "2026-06-14T04:00:00Z",
  7: "2026-06-13T22:00:00Z",
  8: "2026-06-13T19:00:00Z",
  9: "2026-06-14T23:00:00Z",
  10: "2026-06-14T17:00:00Z",
  11: "2026-06-14T20:00:00Z",
  12: "2026-06-15T02:00:00Z",
  13: "2026-06-15T16:00:00Z",
  14: "2026-06-15T19:00:00Z",
  15: "2026-06-15T22:00:00Z",
  16: "2026-06-16T01:00:00Z",
  17: "2026-06-16T19:00:00Z",
  18: "2026-06-16T22:00:00Z",
  19: "2026-06-17T01:00:00Z",
  20: "2026-06-17T04:00:00Z",
  21: "2026-06-17T17:00:00Z",
  22: "2026-06-17T20:00:00Z",
  23: "2026-06-17T23:00:00Z",
  24: "2026-06-18T02:00:00Z",
  25: "2026-06-18T16:00:00Z",
  26: "2026-06-18T19:00:00Z",
  27: "2026-06-18T22:00:00Z",
  28: "2026-06-19T01:00:00Z",
  29: "2026-06-19T19:00:00Z",
  30: "2026-06-19T22:00:00Z",
  31: "2026-06-20T00:30:00Z",
  32: "2026-06-20T03:00:00Z",
  33: "2026-06-20T17:00:00Z",
  34: "2026-06-20T20:00:00Z",
  35: "2026-06-21T00:00:00Z",
  36: "2026-06-21T04:00:00Z",
  37: "2026-06-21T16:00:00Z",
  38: "2026-06-21T19:00:00Z",
  39: "2026-06-21T22:00:00Z",
  40: "2026-06-22T01:00:00Z",
  41: "2026-06-22T17:00:00Z",
  42: "2026-06-22T21:00:00Z",
  43: "2026-06-23T00:00:00Z",
  44: "2026-06-23T03:00:00Z",
  45: "2026-06-23T17:00:00Z",
  46: "2026-06-23T20:00:00Z",
  47: "2026-06-23T23:00:00Z",
  48: "2026-06-24T02:00:00Z",
  49: "2026-06-24T19:00:00Z",
  50: "2026-06-24T19:00:00Z",
  51: "2026-06-24T22:00:00Z",
  52: "2026-06-24T22:00:00Z",
  53: "2026-06-25T01:00:00Z",
  54: "2026-06-25T01:00:00Z",
  55: "2026-06-25T20:00:00Z",
  56: "2026-06-25T20:00:00Z",
  57: "2026-06-25T23:00:00Z",
  58: "2026-06-25T23:00:00Z",
  59: "2026-06-26T02:00:00Z",
  60: "2026-06-26T02:00:00Z",
  61: "2026-06-26T19:00:00Z",
  62: "2026-06-26T19:00:00Z",
  63: "2026-06-27T00:00:00Z",
  64: "2026-06-27T00:00:00Z",
  65: "2026-06-27T03:00:00Z",
  66: "2026-06-27T03:00:00Z",
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

const championJourney = [
  {
    id: "ESP-1",
    stage: "Group H",
    date: "2026-06-15",
    venue: "Atlanta Stadium",
    home: "Spain",
    away: "Cabo Verde",
    score: [0, 0],
    goals: [],
    summary: {
      zh: "首战并不顺利。西班牙掌控球权，却始终没能拆开佛得角的低位防线；这场闷平也成为后来调整锋线节奏的起点。",
      en: "The opener was frustrating. Spain controlled the ball but could not break Cabo Verde's deep block, prompting the attacking adjustments that shaped the rest of the run.",
      es: "El debut fue frustrante. España dominó el balón, pero no rompió el bloque bajo de Cabo Verde; aquel empate impulsó los ajustes ofensivos posteriores.",
    },
  },
  {
    id: "ESP-2",
    stage: "Group H",
    date: "2026-06-21",
    venue: "Atlanta Stadium",
    home: "Spain",
    away: "Saudi Arabia",
    score: [4, 0],
    goals: ["10' Lamine Yamal", "21' Mikel Oyarzabal", "24' Mikel Oyarzabal", "49' Hassan Al-Tambakti (OG)"],
    summary: {
      zh: "亚马尔在第 10 分钟打开局面，奥亚萨瓦尔三分钟内梅开二度。西班牙用高压和快速回收完成本届赛事第一次全面展示。",
      en: "Yamal opened the scoring after ten minutes and Oyarzabal struck twice in three minutes. Spain's press and quick recoveries produced their first complete performance.",
      es: "Yamal abrió el marcador al minuto diez y Oyarzabal firmó dos goles en tres minutos. La presión y las recuperaciones rápidas ofrecieron la primera gran exhibición.",
    },
  },
  {
    id: "ESP-3",
    stage: "Group H",
    date: "2026-06-26",
    venue: "Guadalajara Stadium",
    home: "Uruguay",
    away: "Spain",
    score: [0, 1],
    goals: ["42' Alex Baena"],
    summary: {
      zh: "巴埃纳在半场前打入唯一进球。面对乌拉圭的强对抗，西班牙守住零封并以小组头名进入淘汰赛。",
      en: "Baena scored the only goal before half-time. Spain absorbed Uruguay's physical challenge, kept another clean sheet and advanced as group winners.",
      es: "Baena marcó el único gol antes del descanso. España resistió la intensidad uruguaya, mantuvo la portería a cero y avanzó como primera de grupo.",
    },
  },
  {
    id: "ESP-4",
    stage: "Round of 32",
    date: "2026-07-02",
    venue: "Los Angeles Stadium",
    home: "Spain",
    away: "Austria",
    score: [3, 0],
    goals: ["36' Mikel Oyarzabal", "65' Pedro Porro", "89' Mikel Oyarzabal"],
    summary: {
      zh: "奥亚萨瓦尔两度终结进攻，波罗头球扩大优势。这是西班牙自 2010 年决赛后首次赢得世界杯淘汰赛。",
      en: "Oyarzabal finished twice and Porro added a header. It was Spain's first men's World Cup knockout victory since the 2010 final.",
      es: "Oyarzabal marcó dos veces y Porro añadió un cabezazo. Fue la primera victoria española en una eliminatoria mundialista desde la final de 2010.",
    },
  },
  {
    id: "ESP-5",
    stage: "Round of 16",
    date: "2026-07-06",
    venue: "Dallas Stadium",
    home: "Portugal",
    away: "Spain",
    score: [0, 1],
    goals: ["90+1' Mikel Merino"],
    summary: {
      zh: "比赛几乎被拖入加时，替补登场的梅里诺在第 91 分钟接费兰直塞完成绝杀，结束葡萄牙的最后抵抗。",
      en: "Extra time was seconds away when substitute Merino converted Ferran's through-ball in the 91st minute to settle the Iberian contest.",
      es: "La prórroga parecía inevitable hasta que el suplente Merino convirtió el pase de Ferran en el minuto 91 y decidió el duelo ibérico.",
    },
  },
  {
    id: "ESP-6",
    stage: "Quarter-final",
    date: "2026-07-10",
    venue: "Los Angeles Stadium",
    home: "Spain",
    away: "Belgium",
    score: [2, 1],
    goals: ["30' Fabian Ruiz", "41' Charles De Ketelaere", "88' Mikel Merino"],
    summary: {
      zh: "法比安首开纪录，德凯特拉雷扳平并终结西班牙 650 分钟不失球纪录。第 88 分钟，梅里诺抓住门将脱手打入制胜球。",
      en: "Fabian opened the scoring before De Ketelaere ended Spain's 650-minute shutout run. Merino punished a late spill in the 88th minute.",
      es: "Fabián abrió el marcador y De Ketelaere puso fin a 650 minutos sin encajar. Merino castigó un rechace en el minuto 88.",
    },
  },
  {
    id: "ESP-7",
    stage: "Semi-final",
    date: "2026-07-14",
    venue: "Dallas Stadium",
    home: "France",
    away: "Spain",
    score: [0, 2],
    goals: ["22' Mikel Oyarzabal (P)", "58' Pedro Porro"],
    summary: {
      zh: "奥亚萨瓦尔罚入点球，波罗在下半场完成团队配合。西班牙限制住此前全胜的法国，时隔 16 年重返决赛。",
      en: "Oyarzabal converted a penalty and Porro finished a flowing team move. Spain contained previously unbeaten France to return to the final after 16 years.",
      es: "Oyarzabal convirtió un penalti y Porro culminó una jugada colectiva. España frenó a una Francia invicta y volvió a la final tras 16 años.",
    },
  },
  {
    id: "ESP-8",
    stage: "Final",
    date: "2026-07-19",
    venue: "New York New Jersey Stadium",
    home: "Spain",
    away: "Argentina",
    score: [1, 0],
    goals: ["106' Ferran Torres"],
    summary: {
      zh: "西班牙在常规时间持续压制，但直到加时第 106 分钟才由费兰·托雷斯接尼科·威廉姆斯助攻破门。第二颗冠军星就此落定。",
      en: "Spain controlled the final but had to wait until the 106th minute, when Ferran Torres finished Nico Williams' assist to secure the second star.",
      es: "España controló la final, pero esperó hasta el minuto 106: Ferran Torres remató la asistencia de Nico Williams y aseguró la segunda estrella.",
    },
  },
];

const whatIfConfig = {
  regions: [
    { id: "UEFA", format: "pairs", slots: 16, teams: ["ES", "FR", "ENG", "DE", "PT", "NL", "BE", "HR", "IT", "NO", "AT", "CH", "DK", "SE", "CZ", "TR", "SCO", "RS", "PL", "UA", "WAL", "HU", "RO", "GR", "SK", "SI", "GE", "IE", "FI", "IS", "BA", "AL"] },
    { id: "CAF", format: "pairs", slots: 9, teams: ["MA", "SN", "EG", "DZ", "CI", "GH", "TN", "ZA", "NG", "CM", "ML", "BF", "CD", "AO", "ZM", "GN", "GA", "UG"] },
    { id: "AFC", format: "pairs", slots: 8, teams: ["JP", "KR", "AU", "IR", "SA", "QA", "IQ", "UZ", "JO", "CN", "ID", "AE", "OM", "BH", "VN", "TH"] },
    { id: "CONMEBOL", format: "league", slots: 6, teams: ["AR", "BR", "UY", "CO", "EC", "PY", "CL", "PE", "VE", "BO"] },
    { id: "CONCACAF", format: "pairs", slots: 6, teams: ["US", "MX", "CA", "CR", "PA", "JM", "HN", "SV", "GT", "HT", "TT", "DO"] },
    { id: "OFC", format: "bracket", slots: 1, teams: ["NZ", "SB", "NC", "FJ", "PG", "VU", "PF", "WS"] },
  ],
};

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
  championJourney,
  whatIfConfig,
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
    <dialog class="champion-dialog" id="championDialog">
      <div class="celebration-scene">
        <canvas id="celebrationCanvas" aria-hidden="true"></canvas>
        <div class="celebration-copy">
          <p class="champion-kicker" id="celebrationKicker">FIFA WORLD CUP 2026</p>
          <h2 id="celebrationTitle">祝贺西班牙</h2>
          <p id="celebrationText">八场比赛，十四粒进球，七次零封。西班牙在纽约捧起队史第二座世界杯冠军奖杯。</p>
          <div class="celebration-actions">
            <button class="celebration-primary" id="openChampionReview" type="button">回顾夺冠之路</button>
            <button class="celebration-secondary" id="closeCelebration" type="button">进入赛程</button>
          </div>
        </div>
      </div>
    </dialog>
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
      body.focus-view .layout { grid-template-columns: minmax(0, 1fr); }
      body.focus-view .side { display: none; }
      body.focus-view #mainView { min-width: 0; }
      body.focus-view .filters,
      body.focus-view .view-controls,
      body.focus-view .meta-row { display: none; }
      .champion-view {
        display: grid;
        gap: 22px;
      }
      .champion-cover {
        min-height: 440px;
        position: relative;
        overflow: hidden;
        display: grid;
        align-items: end;
        border-radius: 8px;
        color: #fff;
        background:
          linear-gradient(90deg, rgba(5, 13, 29, .94) 0, rgba(5, 13, 29, .68) 42%, rgba(5, 13, 29, .08) 76%),
          url("./assets/spain-champions-hero.png") center / cover no-repeat;
        box-shadow: 0 24px 60px rgba(7, 22, 45, .24);
      }
      .champion-cover-copy {
        position: relative;
        z-index: 1;
        width: min(640px, 100%);
        padding: clamp(24px, 5vw, 64px);
      }
      .champion-kicker, .if-kicker {
        margin: 0 0 10px;
        color: #ffd14a;
        font-size: 13px;
        font-weight: 850;
        letter-spacing: .12em;
        text-transform: uppercase;
      }
      .champion-cover h2 {
        margin: 0;
        max-width: 580px;
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(38px, 6vw, 76px);
        line-height: .98;
        font-weight: 700;
      }
      .champion-cover p {
        margin: 18px 0 0;
        max-width: 560px;
        color: rgba(255,255,255,.84);
        line-height: 1.65;
      }
      .champion-stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;
      }
      .champion-stat {
        min-width: 0;
        padding: 18px;
        border-top: 4px solid #f4bf1b;
        border-radius: 6px;
        color: #fff;
        background: #a70d1c;
      }
      .champion-stat strong {
        display: block;
        font-size: clamp(26px, 4vw, 42px);
        line-height: 1;
      }
      .champion-stat span {
        display: block;
        margin-top: 7px;
        color: rgba(255,255,255,.78);
        font-size: 13px;
      }
      .champion-section-head {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
      }
      .champion-section-head h2,
      .if-header h2 {
        margin: 0;
        font-size: clamp(26px, 3vw, 38px);
      }
      .champion-section-head p,
      .if-header p {
        margin: 6px 0 0;
        color: var(--muted);
        line-height: 1.55;
      }
      .champion-path {
        position: relative;
        display: grid;
        gap: 12px;
      }
      .champion-path::before {
        content: "";
        position: absolute;
        left: 24px;
        top: 30px;
        bottom: 30px;
        width: 2px;
        background: linear-gradient(#c60b1e, #ffc400);
      }
      .journey-match {
        position: relative;
        display: grid;
        grid-template-columns: 50px minmax(180px, .72fr) minmax(0, 1.4fr);
        gap: 16px;
        align-items: center;
        min-width: 0;
        padding: 16px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 10px 28px rgba(17, 43, 86, .06);
      }
      .journey-index {
        position: relative;
        z-index: 1;
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border: 3px solid #fff;
        border-radius: 50%;
        color: #fff;
        background: #c60b1e;
        box-shadow: 0 0 0 2px #c60b1e;
        font-weight: 850;
      }
      .journey-stage {
        color: #9c1421;
        font-size: 12px;
        font-weight: 850;
        text-transform: uppercase;
      }
      .journey-scoreline {
        display: flex;
        gap: 8px;
        align-items: baseline;
        margin-top: 4px;
        font-weight: 850;
      }
      .journey-scoreline strong {
        color: #08182d;
        font-size: 28px;
      }
      .journey-meta {
        margin-top: 7px;
        color: var(--muted);
        font-size: 12px;
      }
      .journey-story {
        min-width: 0;
        color: #34414d;
        line-height: 1.58;
      }
      .journey-goals {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 9px;
      }
      .journey-goals span {
        border-radius: 999px;
        padding: 4px 8px;
        color: #7e101c;
        background: #fff0d3;
        font-size: 12px;
      }
      .champion-player-strip {
        min-height: 260px;
        border-radius: 8px;
        background: url("./assets/spain-champions-portraits.png") center / cover no-repeat;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,.12);
      }
      .champion-sources {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .champion-sources a {
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: 7px 11px;
        color: var(--blue);
        background: #fff;
        text-decoration: none;
        font-size: 13px;
      }
      .champion-dialog {
        width: min(1180px, calc(100vw - 24px));
        max-width: none;
        color: #fff;
        background: #07162d;
        box-shadow: 0 28px 100px rgba(0,0,0,.48);
      }
      .champion-dialog::backdrop {
        background: rgba(2, 8, 20, .82);
        backdrop-filter: blur(8px);
      }
      .celebration-scene {
        position: relative;
        min-height: min(720px, calc(100vh - 32px));
        overflow: hidden;
        display: grid;
        align-items: end;
        background:
          linear-gradient(90deg, rgba(3, 12, 28, .94) 0, rgba(3, 12, 28, .6) 45%, rgba(3, 12, 28, .1) 78%),
          url("./assets/spain-champions-hero.png") center / cover no-repeat;
      }
      #celebrationCanvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
      .celebration-copy {
        position: relative;
        z-index: 2;
        width: min(720px, 100%);
        padding: clamp(24px, 6vw, 72px);
      }
      .celebration-copy h2 {
        margin: 0;
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(46px, 7vw, 82px);
        line-height: .94;
      }
      .celebration-copy p {
        margin: 18px 0 0;
        color: rgba(255,255,255,.82);
        font-size: 16px;
        line-height: 1.6;
      }
      .celebration-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 24px;
      }
      .celebration-actions button,
      .if-action {
        border: 1px solid rgba(255,255,255,.35);
        border-radius: 8px;
        padding: 10px 14px;
        font-weight: 750;
      }
      .celebration-primary {
        color: #70101a;
        background: #ffd447;
      }
      .celebration-secondary {
        color: #fff;
        background: rgba(255,255,255,.12);
      }
      .if-view {
        display: grid;
        gap: 16px;
      }
      .if-header {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 16px;
        align-items: end;
        padding: 24px;
        border-radius: 8px;
        color: #fff;
        background:
          linear-gradient(120deg, rgba(9, 31, 72, .98), rgba(12, 114, 93, .96)),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
        background-size: auto, 48px 48px;
      }
      .if-header p { color: rgba(255,255,255,.72); }
      .if-header-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-end;
      }
      .if-action {
        border-color: rgba(255,255,255,.24);
        color: #fff;
        background: rgba(255,255,255,.1);
      }
      .if-action.primary { color: #14213b; background: #ffd447; }
      .if-phases {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
      }
      .if-phase {
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 12px;
        text-align: left;
        color: var(--ink);
        background: #fff;
      }
      .if-phase.active {
        color: #fff;
        border-color: transparent;
        background: linear-gradient(135deg, var(--blue), var(--pitch));
      }
      .if-phase[disabled] { opacity: .48; cursor: not-allowed; }
      .if-phase strong,
      .if-phase span { display: block; }
      .if-phase span { margin-top: 4px; font-size: 12px; opacity: .75; }
      .if-region-list, .if-group-list {
        display: grid;
        gap: 10px;
      }
      .if-region, .if-group {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
      }
      .if-region summary, .if-group summary {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        gap: 12px;
        padding: 14px 16px;
        font-weight: 800;
      }
      .if-region summary span, .if-group summary span {
        color: var(--muted);
        font-size: 12px;
        font-weight: 650;
      }
      .if-match-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        gap: 8px;
        padding: 0 12px 12px;
      }
      .if-match {
        min-width: 0;
        padding: 10px;
        border: 1px solid #e7edf2;
        border-radius: 7px;
        background: #f9fbfd;
      }
      .if-match-id {
        color: var(--muted);
        font-size: 11px;
        font-weight: 750;
      }
      .if-team-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 44px;
        gap: 8px;
        align-items: center;
        margin-top: 7px;
      }
      .if-team-name {
        min-width: 0;
        overflow-wrap: anywhere;
        font-size: 13px;
        font-weight: 750;
      }
      .if-score-input {
        width: 44px;
        border: 1px solid var(--line);
        border-radius: 6px;
        padding: 6px 4px;
        text-align: center;
        background: #fff;
      }
      .if-winner-select {
        width: 100%;
        margin-top: 8px;
        border: 1px solid var(--line);
        border-radius: 6px;
        padding: 6px;
        background: #fff;
        font-size: 12px;
      }
      .if-standings {
        overflow-x: auto;
        padding: 0 12px 12px;
      }
      .if-knockout-rounds {
        display: grid;
        grid-template-columns: repeat(6, minmax(245px, 1fr));
        gap: 10px;
        overflow-x: auto;
        padding-bottom: 8px;
      }
      .if-round {
        display: grid;
        align-content: start;
        gap: 8px;
      }
      .if-round h3 {
        position: sticky;
        top: 0;
        z-index: 1;
        margin: 0;
        padding: 8px 0;
        background: #fbfcff;
        font-size: 15px;
      }
      .if-champion {
        display: grid;
        place-items: center;
        min-height: 220px;
        padding: 28px;
        border-radius: 8px;
        text-align: center;
        color: #fff;
        background:
          radial-gradient(circle at 50% 10%, rgba(255,212,71,.34), transparent 15rem),
          linear-gradient(135deg, #8f0e1a, #07162d);
      }
      .if-champion strong { font-size: clamp(36px, 6vw, 70px); }
      .if-champion span { margin-top: 8px; color: rgba(255,255,255,.74); }
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
        .journey-match { grid-template-columns: 50px minmax(0, 1fr); }
        .journey-story { grid-column: 2; }
        .if-header { grid-template-columns: 1fr; }
        .if-header-actions { justify-content: flex-start; }
      }
      @media (max-width: 560px) {
        .matches, .group-grid { grid-template-columns: 1fr; }
        .teams { grid-template-columns: minmax(0, 1fr); }
        .team-slot.away { text-align: left; }
        .team-slot.away .team-line { justify-content: flex-start; }
        .score { width: 100%; }
        .predict-row { align-items: stretch; flex-direction: column; }
        .bracket-track { grid-template-columns: repeat(5, 245px); }
        .champion-cover { min-height: 540px; background-position: 68% center; }
        .champion-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .champion-player-strip { min-height: 180px; }
        .celebration-scene { background-position: 66% center; }
        .celebration-copy { padding-top: 180px; }
        .if-phases { grid-template-columns: 1fr; }
        .if-match-grid { grid-template-columns: 1fr; }
      }
      @media (prefers-reduced-motion: reduce) {
        #celebrationCanvas { display: none; }
      }
    </style>
  </head>
  <body>
    <header class="hero">
      <div class="hero-inner">
        <div>
          <h1 id="appTitle">2026 世界杯赛程与预测</h1>
          <p id="heroIntro">查看 104 场比赛、模拟比分和晋级路线。同步结果会缓存在本机，二次打开优先读取缓存；淘汰赛会根据已有结果推导候选球队，并支持阶梯式轮次查看、缩放和拖拽移动。</p>
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
    <dialog class="champion-dialog" id="championDialog">
      <div class="celebration-scene">
        <canvas id="celebrationCanvas" aria-hidden="true"></canvas>
        <div class="celebration-copy">
          <div class="champion-kicker" id="celebrationKicker">2026 FIFA World Cup</div>
          <h2 id="celebrationTitle">祝贺西班牙！</h2>
          <p id="celebrationText">西班牙击败阿根廷，第二次捧起世界杯冠军奖杯。</p>
          <div class="celebration-actions">
            <button class="celebration-primary" id="openChampionReview" type="button">回顾夺冠之路</button>
            <button class="celebration-secondary" id="closeCelebration" type="button">进入赛程</button>
          </div>
        </div>
      </div>
    </dialog>
    <dialog id="detailDialog">
      <div class="modal-head" id="detailTitle"></div>
      <div class="modal-body" id="detailBody"></div>
      <div class="modal-actions"><button class="close" id="closeDialog" type="button">关闭</button></div>
    </dialog>
    <script>
      const seedData = ${JSON.stringify(initialData)};
      const cacheKey = "wc2026.schedule.cache.v2";
      const celebrationKey = "wc2026.champion.celebration.v1";
      const stageNames = ["全部", "小组赛", "淘汰赛", "数据榜单", "冠军回顾", "If..."];
      const statusNames = [
        ["all", "statusAll"],
        ["scheduled", "scheduled"],
        ["live", "live"],
        ["finished", "finished"],
      ];
      const stageText = {
        zh: { "全部": "全部", "小组赛": "小组赛", "淘汰赛": "淘汰赛", "数据榜单": "数据榜单", "冠军回顾": "冠军回顾", "If...": "如果…", "Round of 32": "32 强", "Round of 16": "16 强", "Quarter-final": "1/4 决赛", "Semi-final": "半决赛", "Bronze final": "季军赛", "Final": "决赛" },
        en: { "全部": "All", "小组赛": "Groups", "淘汰赛": "Knockout", "数据榜单": "Stats", "冠军回顾": "Champions", "If...": "What if...", "Round of 32": "Round of 32", "Round of 16": "Round of 16", "Quarter-final": "Quarter-final", "Semi-final": "Semi-final", "Bronze final": "Bronze final", "Final": "Final" },
        es: { "全部": "Todo", "小组赛": "Grupos", "淘汰赛": "Eliminatorias", "数据榜单": "Datos", "冠军回顾": "Campeones", "If...": "¿Y si...?", "Round of 32": "Dieciseisavos", "Round of 16": "Octavos", "Quarter-final": "Cuartos", "Semi-final": "Semifinal", "Bronze final": "Tercer puesto", "Final": "Final" },
      };
      const copy = {
        zh: {
          appTitle: "2026 世界杯赛程与预测",
          heroIntro: "回看 104 场比赛与西班牙的冠军之路，或从预选赛开始重写整届世界杯。同步结果和所有模拟都会缓存在本机。",
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
          kickoff: "开球",
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
          detailDateVenue: "时间/场馆",
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
          heroIntro: "Revisit all 104 matches and Spain's championship run, or rewrite the tournament from regional qualifying onward. Synced data and every simulation are cached locally.",
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
          kickoff: "Kick-off",
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
          detailDateVenue: "Time / venue",
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
          heroIntro: "Revive los 104 partidos y el título de España, o reescribe el torneo desde las clasificatorias regionales. Los datos sincronizados y todas las simulaciones se guardan localmente.",
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
          kickoff: "Inicio",
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
          detailDateVenue: "Hora / sede",
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
      Object.assign(copy.zh, {
        celebrationKicker: "2026 世界杯冠军",
        celebrationTitle: "祝贺西班牙！",
        celebrationText: "加时赛击败阿根廷，斗牛士军团第二次捧起世界杯冠军奖杯。",
        celebrationReview: "回顾夺冠之路",
        celebrationContinue: "进入赛程",
        championKicker: "第二颗冠军星",
        championTitle: "西班牙，世界冠军",
        championIntro: "从亚特兰大的艰难开局到纽约新泽西的加时绝杀：八场比赛、七场零封，以及一条属于新一代西班牙队的冠军之路。",
        championMatches: "比赛",
        championWins: "胜利",
        championGoals: "进球",
        championCleanSheets: "零封",
        championPathTitle: "夺冠之路",
        championPathIntro: "逐场回看西班牙如何抵达并赢下决赛。",
        championPlayers: "冠军核心",
        championSources: "比赛资料",
        championReplay: "重播庆祝",
        championHeroCount: "西班牙 2026",
        championHeroSummary: "世界冠军 · 第二颗冠军星",
        ifKicker: "重写 2026",
        ifTitle: "如果……",
        ifIntro: "从六大洲预选赛开始，逐场改写比分，生成一届完全属于你的世界杯。",
        ifAutoFill: "智能填充当前阶段",
        ifReset: "重新开始",
        ifResetConfirm: "确定清空“如果……”中的全部模拟结果吗？",
        ifQualifiers: "大区预选赛",
        ifGroups: "世界杯小组赛",
        ifKnockout: "世界杯淘汰赛",
        ifSimplified: "这是用于完整模拟的简化预选赛赛制；它保留各大区名额和晋级逻辑，不复刻每个足联的历史赛程。",
        ifCompleted: "已完成 {done} / {total} 场",
        ifLocked: "先完成上一阶段",
        ifWorldPlayoff: "洲际附加赛",
        ifStandings: "积分榜",
        ifTeam: "球队",
        ifWinner: "平局晋级球队",
        ifChooseWinner: "请选择晋级球队",
        ifChampion: "你的 2026 世界冠军",
        ifAwaitingChampion: "完成决赛后将在这里揭晓冠军",
        ifTbd: "待定",
        ifSlots: "{count} 个名额",
        ifHeroCount: "如果……",
        ifHeroSummary: "93 + 72 + 32 场完整模拟",
      });
      Object.assign(copy.en, {
        celebrationKicker: "2026 WORLD CHAMPIONS",
        celebrationTitle: "Congratulations, Spain!",
        celebrationText: "After beating Argentina in extra time, La Roja lift the World Cup for a second time.",
        celebrationReview: "Relive the title run",
        celebrationContinue: "Enter the schedule",
        championKicker: "A SECOND STAR",
        championTitle: "Spain, champions of the world",
        championIntro: "From a difficult opening night in Atlanta to the extra-time winner in New York New Jersey: eight matches, seven clean sheets and a new generation's road to the title.",
        championMatches: "Matches",
        championWins: "Wins",
        championGoals: "Goals",
        championCleanSheets: "Clean sheets",
        championPathTitle: "Road to the trophy",
        championPathIntro: "Every step Spain took to reach and win the final.",
        championPlayers: "Championship core",
        championSources: "Match sources",
        championReplay: "Replay celebration",
        championHeroCount: "Spain 2026",
        championHeroSummary: "World champions · a second star",
        ifKicker: "REWRITE 2026",
        ifTitle: "What if...",
        ifIntro: "Start with all six regional qualifiers, change every score and generate a World Cup that ends your way.",
        ifAutoFill: "Auto-fill this phase",
        ifReset: "Start over",
        ifResetConfirm: "Clear every result in the What if simulation?",
        ifQualifiers: "Regional qualifiers",
        ifGroups: "World Cup groups",
        ifKnockout: "World Cup knockout",
        ifSimplified: "This is a streamlined qualification format for end-to-end simulation. It preserves regional slots and progression, rather than reproducing every confederation's historical fixture system.",
        ifCompleted: "{done} / {total} matches complete",
        ifLocked: "Complete the previous phase first",
        ifWorldPlayoff: "Inter-confederation play-offs",
        ifStandings: "Standings",
        ifTeam: "Team",
        ifWinner: "Advancing team after a draw",
        ifChooseWinner: "Choose the advancing team",
        ifChampion: "Your 2026 world champions",
        ifAwaitingChampion: "Complete the final to reveal your champions",
        ifTbd: "TBD",
        ifSlots: "{count} slots",
        ifHeroCount: "What if...",
        ifHeroSummary: "93 + 72 + 32-match simulation",
      });
      Object.assign(copy.es, {
        celebrationKicker: "CAMPEONES DEL MUNDO 2026",
        celebrationTitle: "¡Enhorabuena, España!",
        celebrationText: "Tras vencer a Argentina en la prórroga, La Roja levanta su segunda Copa del Mundo.",
        celebrationReview: "Revive el camino al título",
        celebrationContinue: "Entrar al calendario",
        championKicker: "LA SEGUNDA ESTRELLA",
        championTitle: "España, campeona del mundo",
        championIntro: "De un debut difícil en Atlanta al gol en la prórroga en Nueva York Nueva Jersey: ocho partidos, siete porterías a cero y el camino de una nueva generación.",
        championMatches: "Partidos",
        championWins: "Victorias",
        championGoals: "Goles",
        championCleanSheets: "Porterías a cero",
        championPathTitle: "Camino a la Copa",
        championPathIntro: "Cada paso de España hasta alcanzar y ganar la final.",
        championPlayers: "Núcleo campeón",
        championSources: "Fuentes de los partidos",
        championReplay: "Repetir celebración",
        championHeroCount: "España 2026",
        championHeroSummary: "Campeona del mundo · segunda estrella",
        ifKicker: "REESCRIBE 2026",
        ifTitle: "¿Y si...?",
        ifIntro: "Empieza en las seis confederaciones, cambia cada marcador y crea un Mundial con el desenlace que elijas.",
        ifAutoFill: "Completar esta fase",
        ifReset: "Empezar de nuevo",
        ifResetConfirm: "¿Borrar todos los resultados de la simulación?",
        ifQualifiers: "Clasificatorias regionales",
        ifGroups: "Grupos del Mundial",
        ifKnockout: "Eliminatorias del Mundial",
        ifSimplified: "Este es un formato clasificatorio simplificado para simular todo el torneo. Conserva los cupos y la progresión regional, sin reproducir cada calendario histórico.",
        ifCompleted: "{done} / {total} partidos completos",
        ifLocked: "Completa primero la fase anterior",
        ifWorldPlayoff: "Repechaje intercontinental",
        ifStandings: "Clasificación",
        ifTeam: "Equipo",
        ifWinner: "Equipo clasificado tras el empate",
        ifChooseWinner: "Elige el equipo clasificado",
        ifChampion: "Tu campeón del mundo 2026",
        ifAwaitingChampion: "Completa la final para revelar al campeón",
        ifTbd: "Por decidir",
        ifSlots: "{count} cupos",
        ifHeroCount: "¿Y si...?",
        ifHeroSummary: "Simulación completa: 93 + 72 + 32",
      });
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
        whatIf: {
          phase: "qualifiers",
          scores: {},
        },
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
        const group = /^Group ([A-L])$/.exec(stage);
        if (group) {
          if (state.language === "zh") return group[1] + " 组";
          if (state.language === "es") return "Grupo " + group[1];
          return "Group " + group[1];
        }
        return (stageText[state.language] && stageText[state.language][stage]) || stageText.zh[stage] || stage;
      }

      function groupLetter(stage) {
        const found = /Group ([A-L])/.exec(stage);
        return found ? found[1] : null;
      }

      function currentLocale() {
        if (state.language === "zh") return "zh-CN";
        if (state.language === "es") return "es-ES";
        return "en-US";
      }

      function matchSortTime(match) {
        const kickoff = Date.parse(match.kickoffUtc || "");
        if (Number.isFinite(kickoff)) return kickoff;
        const dateOnly = Date.parse((match.date || "") + "T00:00:00Z");
        return Number.isFinite(dateOnly) ? dateOnly : Number.MAX_SAFE_INTEGER;
      }

      function formatMatchTime(match, detailed = false) {
        const kickoff = Date.parse(match.kickoffUtc || "");
        if (!Number.isFinite(kickoff)) return match.date || "TBD";
        return new Intl.DateTimeFormat(currentLocale(), detailed ? {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZoneName: "short",
        } : {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date(kickoff));
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

      const ifTeamOverrides = {
        ENG: { zh: "英格兰", en: "England", es: "Inglaterra", flag: "🏴" },
        SCO: { zh: "苏格兰", en: "Scotland", es: "Escocia", flag: "🏴" },
        WAL: { zh: "威尔士", en: "Wales", es: "Gales", flag: "🏴" },
      };
      let celebrationFrame = 0;

      function ifTeamName(code) {
        if (!code) return t("ifTbd");
        const override = ifTeamOverrides[code];
        if (override) return override[state.language] || override.en;
        try {
          return new Intl.DisplayNames([currentLocale()], { type: "region" }).of(code) || code;
        } catch (error) {
          return code;
        }
      }

      function ifTeamFlag(code) {
        if (!code) return "·";
        if (ifTeamOverrides[code]) return ifTeamOverrides[code].flag;
        if (!/^[A-Z]{2}$/.test(code)) return "·";
        return String.fromCodePoint(...code.split("").map((character) => 127397 + character.charCodeAt(0)));
      }

      function ifTeamLabel(code) {
        return ifTeamFlag(code) + " " + ifTeamName(code);
      }

      function makeIfMatch(id, home, away, requiresWinner, label) {
        return { id, home: home || "", away: away || "", requiresWinner: Boolean(requiresWinner), label: label || id };
      }

      function ifScore(match) {
        const score = state.whatIf.scores[match.id];
        if (!score || !Number.isInteger(score.home) || !Number.isInteger(score.away)) return null;
        return score;
      }

      function ifMatchComplete(match) {
        const score = ifScore(match);
        if (!match.home || !match.away || !score) return false;
        return !match.requiresWinner || score.home !== score.away || [match.home, match.away].includes(score.winner);
      }

      function ifWinner(match) {
        const score = ifScore(match);
        if (!score || !match.home || !match.away) return "";
        if (score.home > score.away) return match.home;
        if (score.away > score.home) return match.away;
        return match.requiresWinner && [match.home, match.away].includes(score.winner) ? score.winner : "";
      }

      function ifLoser(match) {
        const winner = ifWinner(match);
        if (!winner) return "";
        return winner === match.home ? match.away : match.home;
      }

      function ifPairMatches(region) {
        const matches = [];
        for (let index = 0; index < region.teams.length; index += 2) {
          matches.push(makeIfMatch("IF-Q-" + region.id + "-" + (index / 2 + 1), region.teams[index], region.teams[index + 1], true));
        }
        return matches;
      }

      function ifLeagueMatches(region) {
        const matches = [];
        let matchNumber = 1;
        for (let home = 0; home < region.teams.length; home += 1) {
          for (let away = home + 1; away < region.teams.length; away += 1) {
            matches.push(makeIfMatch("IF-Q-" + region.id + "-" + matchNumber, region.teams[home], region.teams[away], false));
            matchNumber += 1;
          }
        }
        return matches;
      }

      function ifOfcMatches(region) {
        const quarterFinals = [];
        for (let index = 0; index < region.teams.length; index += 2) {
          quarterFinals.push(makeIfMatch("IF-Q-OFC-QF-" + (index / 2 + 1), region.teams[index], region.teams[index + 1], true));
        }
        const semiFinals = [
          makeIfMatch("IF-Q-OFC-SF-1", ifWinner(quarterFinals[0]), ifWinner(quarterFinals[1]), true),
          makeIfMatch("IF-Q-OFC-SF-2", ifWinner(quarterFinals[2]), ifWinner(quarterFinals[3]), true),
        ];
        const final = makeIfMatch("IF-Q-OFC-F", ifWinner(semiFinals[0]), ifWinner(semiFinals[1]), true);
        return { quarterFinals, semiFinals, final, all: [...quarterFinals, ...semiFinals, final] };
      }

      function ifRegionMatches(region) {
        if (region.format === "pairs") return ifPairMatches(region);
        if (region.format === "league") return ifLeagueMatches(region);
        return ifOfcMatches(region).all;
      }

      function ifLeagueTable(teams, matches) {
        const table = Object.fromEntries(teams.map((team) => [team, { team, played: 0, points: 0, gf: 0, ga: 0, gd: 0 }]));
        matches.forEach((match) => {
          const score = ifScore(match);
          if (!score || !table[match.home] || !table[match.away]) return;
          const home = table[match.home];
          const away = table[match.away];
          home.played += 1;
          away.played += 1;
          home.gf += score.home;
          home.ga += score.away;
          away.gf += score.away;
          away.ga += score.home;
          if (score.home > score.away) home.points += 3;
          else if (score.away > score.home) away.points += 3;
          else {
            home.points += 1;
            away.points += 1;
          }
        });
        return Object.values(table).map((row) => ({ ...row, gd: row.gf - row.ga })).sort((a, b) => (
          b.points - a.points || b.gd - a.gd || b.gf - a.gf || ifTeamName(a.team).localeCompare(ifTeamName(b.team))
        ));
      }

      function bestIfPairLoser(regionId) {
        const region = state.data.whatIfConfig.regions.find((item) => item.id === regionId);
        const candidates = ifPairMatches(region).filter(ifMatchComplete).map((match) => {
          const score = ifScore(match);
          const loser = ifLoser(match);
          const loserHome = loser === match.home;
          return {
            team: loser,
            gf: loserHome ? score.home : score.away,
            gd: loserHome ? score.home - score.away : score.away - score.home,
          };
        }).sort((a, b) => b.gf - a.gf || b.gd - a.gd || ifTeamName(a.team).localeCompare(ifTeamName(b.team)));
        return candidates[0]?.team || "";
      }

      function ifWorldPlayoffMatches() {
        const conmebol = state.data.whatIfConfig.regions.find((region) => region.id === "CONMEBOL");
        const conmebolMatches = ifLeagueMatches(conmebol);
        const conmebolTable = conmebolMatches.every(ifMatchComplete) ? ifLeagueTable(conmebol.teams, conmebolMatches) : [];
        const ofc = state.data.whatIfConfig.regions.find((region) => region.id === "OFC");
        const ofcFinal = ifOfcMatches(ofc).final;
        return [
          makeIfMatch("IF-PO-1", conmebolTable[6]?.team, bestIfPairLoser("CAF"), true),
          makeIfMatch("IF-PO-2", ifLoser(ofcFinal), bestIfPairLoser("AFC"), true),
        ];
      }

      function allIfQualifierMatches() {
        return [
          ...state.data.whatIfConfig.regions.flatMap(ifRegionMatches),
          ...ifWorldPlayoffMatches(),
        ];
      }

      function ifQualifiedTeams() {
        if (!allIfQualifierMatches().every(ifMatchComplete)) return [];
        const qualified = [];
        state.data.whatIfConfig.regions.forEach((region) => {
          if (region.format === "pairs") qualified.push(...ifPairMatches(region).map(ifWinner));
          if (region.format === "league") qualified.push(...ifLeagueTable(region.teams, ifLeagueMatches(region)).slice(0, region.slots).map((row) => row.team));
          if (region.format === "bracket") qualified.push(ifWinner(ifOfcMatches(region).final));
        });
        qualified.push(...ifWorldPlayoffMatches().map(ifWinner));
        return unique(qualified);
      }

      function ifGroups() {
        const teams = ifQualifiedTeams();
        const groups = Object.fromEntries("ABCDEFGHIJKL".split("").map((group) => [group, []]));
        teams.forEach((team, index) => groups["ABCDEFGHIJKL"[index % 12]].push(team));
        return groups;
      }

      function ifGroupMatches(group, teams) {
        const pairings = [[0, 1], [2, 3], [0, 2], [3, 1], [3, 0], [1, 2]];
        return pairings.map(([home, away], index) => makeIfMatch("IF-G-" + group + "-" + (index + 1), teams[home], teams[away], false));
      }

      function allIfGroupMatches() {
        return Object.entries(ifGroups()).flatMap(([group, teams]) => ifGroupMatches(group, teams));
      }

      function ifGroupTables() {
        return Object.fromEntries(Object.entries(ifGroups()).map(([group, teams]) => [group, ifLeagueTable(teams, ifGroupMatches(group, teams))]));
      }

      function ifKnockoutRounds() {
        const tables = ifGroupTables();
        const complete = allIfGroupMatches().length === 72 && allIfGroupMatches().every(ifMatchComplete);
        const seeds = [];
        if (complete) {
          Object.values(tables).forEach((table) => seeds.push(table[0]?.team, table[1]?.team));
          const thirds = Object.values(tables).map((table) => table[2]).filter(Boolean).sort((a, b) => (
            b.points - a.points || b.gd - a.gd || b.gf - a.gf
          )).slice(0, 8);
          seeds.push(...thirds.map((row) => row.team));
        }
        const roundOf32 = Array.from({ length: 16 }, (_, index) => (
          makeIfMatch("IF-KO-R32-" + (index + 1), seeds[index], seeds[31 - index], true)
        ));
        const roundOf16 = Array.from({ length: 8 }, (_, index) => (
          makeIfMatch("IF-KO-R16-" + (index + 1), ifWinner(roundOf32[index * 2]), ifWinner(roundOf32[index * 2 + 1]), true)
        ));
        const quarterFinals = Array.from({ length: 4 }, (_, index) => (
          makeIfMatch("IF-KO-QF-" + (index + 1), ifWinner(roundOf16[index * 2]), ifWinner(roundOf16[index * 2 + 1]), true)
        ));
        const semiFinals = Array.from({ length: 2 }, (_, index) => (
          makeIfMatch("IF-KO-SF-" + (index + 1), ifWinner(quarterFinals[index * 2]), ifWinner(quarterFinals[index * 2 + 1]), true)
        ));
        const bronze = makeIfMatch("IF-KO-BRONZE", ifLoser(semiFinals[0]), ifLoser(semiFinals[1]), true);
        const final = makeIfMatch("IF-KO-FINAL", ifWinner(semiFinals[0]), ifWinner(semiFinals[1]), true);
        return [
          { key: "R32", label: t("round32"), matches: roundOf32 },
          { key: "R16", label: t("round16"), matches: roundOf16 },
          { key: "QF", label: t("quarter"), matches: quarterFinals },
          { key: "SF", label: t("semi"), matches: semiFinals },
          { key: "FINALS", label: t("finalWeekend"), matches: [bronze, final] },
        ];
      }

      function allIfKnockoutMatches() {
        return ifKnockoutRounds().flatMap((round) => round.matches);
      }

      function ifProgress(matches) {
        return {
          done: matches.filter(ifMatchComplete).length,
          total: matches.length,
        };
      }

      function renderIfProgress(matches) {
        const progress = ifProgress(matches);
        return t("ifCompleted", progress);
      }

      function renderIfMatch(match) {
        const score = state.whatIf.scores[match.id] || {};
        const ready = Boolean(match.home && match.away);
        const tied = Number.isInteger(score.home) && Number.isInteger(score.away) && score.home === score.away;
        const disabled = ready ? "" : " disabled";
        return '<article class="if-match">' +
          '<div class="if-match-id">' + escapeHtml(match.label || match.id) + '</div>' +
          renderIfTeamRow(match, "home", score.home, disabled) +
          renderIfTeamRow(match, "away", score.away, disabled) +
          (ready && match.requiresWinner && tied ? '<label class="if-match-id">' + t("ifWinner") +
            '<select class="if-winner-select" data-if-winner="' + match.id + '">' +
            '<option value="">' + t("ifChooseWinner") + '</option>' +
            [match.home, match.away].map((team) => '<option value="' + team + '"' + (score.winner === team ? " selected" : "") + '>' + escapeHtml(ifTeamLabel(team)) + '</option>').join("") +
            '</select></label>' : '') +
          '</article>';
      }

      function renderIfTeamRow(match, side, value, disabled) {
        const team = match[side];
        return '<label class="if-team-row"><span class="if-team-name">' + escapeHtml(ifTeamLabel(team)) + '</span>' +
          '<input class="if-score-input" data-if-match="' + match.id + '" data-if-side="' + side + '" type="number" min="0" max="30" value="' + valueOrEmpty(value) + '"' + disabled + '></label>';
      }

      function renderIfTable(rows, qualifiedCount) {
        return '<div class="if-standings"><table><thead><tr><th>' + t("ifTeam") + '</th><th>' + t("standingsPlayed") + '</th><th>' + t("standingsPoints") + '</th><th>' + t("standingsGd") + '</th></tr></thead><tbody>' +
          rows.map((row, index) => '<tr><td class="' + (index < qualifiedCount ? "qual" : "") + '">' + escapeHtml(ifTeamLabel(row.team)) + '</td><td>' + row.played + '</td><td>' + row.points + '</td><td>' + row.gd + '</td></tr>').join("") +
          '</tbody></table></div>';
      }

      function renderIfQualifiers() {
        const regions = state.data.whatIfConfig.regions.map((region, index) => {
          const matches = ifRegionMatches(region);
          const table = region.format === "league" ? renderIfTable(ifLeagueTable(region.teams, matches), region.slots) : "";
          return '<details class="if-region"' + (index < 2 ? " open" : "") + '><summary>' + region.id +
            '<span>' + renderIfProgress(matches) + ' · ' + t("ifSlots", { count: region.slots }) + '</span></summary>' +
            table + '<div class="if-match-grid">' + matches.map(renderIfMatch).join("") + '</div></details>';
        }).join("");
        const playoffs = ifWorldPlayoffMatches();
        return '<div class="notice">' + t("ifSimplified") + '</div><div class="if-region-list">' + regions +
          '<details class="if-region" open><summary>' + t("ifWorldPlayoff") + '<span>' + renderIfProgress(playoffs) + '</span></summary>' +
          '<div class="if-match-grid">' + playoffs.map(renderIfMatch).join("") + '</div></details></div>';
      }

      function renderIfGroups() {
        const groups = ifGroups();
        return '<div class="if-group-list">' + Object.entries(groups).map(([group, teams], index) => {
          const matches = ifGroupMatches(group, teams);
          return '<details class="if-group"' + (index < 2 ? " open" : "") + '><summary>' + labelStage("Group " + group) +
            '<span>' + renderIfProgress(matches) + '</span></summary>' +
            renderIfTable(ifLeagueTable(teams, matches), 2) +
            '<div class="if-match-grid">' + matches.map(renderIfMatch).join("") + '</div></details>';
        }).join("") + '</div>';
      }

      function renderIfKnockout() {
        const rounds = ifKnockoutRounds();
        const final = rounds[rounds.length - 1].matches.find((match) => match.id === "IF-KO-FINAL");
        const champion = ifWinner(final);
        return '<div class="if-knockout-rounds">' + rounds.map((round) => (
          '<section class="if-round"><h3>' + escapeHtml(round.label) + '</h3>' + round.matches.map(renderIfMatch).join("") + '</section>'
        )).join("") + '</div><section class="if-champion"><span>' + t("ifChampion") + '</span>' +
          (champion ? '<strong>' + escapeHtml(ifTeamLabel(champion)) + '</strong>' : '<span>' + t("ifAwaitingChampion") + '</span>') +
          '</section>';
      }

      function renderWhatIf() {
        const qualifiers = allIfQualifierMatches();
        const qualifierDone = qualifiers.every(ifMatchComplete);
        const groups = allIfGroupMatches();
        const groupDone = qualifierDone && groups.length === 72 && groups.every(ifMatchComplete);
        const phases = [
          ["qualifiers", "ifQualifiers", qualifiers, true],
          ["groups", "ifGroups", groups, qualifierDone],
          ["knockout", "ifKnockout", allIfKnockoutMatches(), groupDone],
        ];
        if (!phases.some(([phase, , , enabled]) => phase === state.whatIf.phase && enabled)) state.whatIf.phase = "qualifiers";
        const activeBody = state.whatIf.phase === "groups" ? renderIfGroups() : state.whatIf.phase === "knockout" ? renderIfKnockout() : renderIfQualifiers();
        return '<section class="if-view"><header class="if-header"><div><div class="if-kicker">' + t("ifKicker") + '</div><h2>' + t("ifTitle") +
          '</h2><p>' + t("ifIntro") + '</p></div><div class="if-header-actions">' +
          '<button class="if-action primary" id="ifAutoFill" type="button">' + t("ifAutoFill") + '</button>' +
          '<button class="if-action" id="ifReset" type="button">' + t("ifReset") + '</button></div></header>' +
          '<div class="if-phases">' + phases.map(([phase, key, matches, enabled]) => (
            '<button class="if-phase ' + (state.whatIf.phase === phase ? "active" : "") + '" data-if-phase="' + phase + '" type="button"' + (enabled ? "" : " disabled") + '><strong>' + t(key) + '</strong><span>' + renderIfProgress(matches) + '</span></button>'
          )).join("") + '</div>' + activeBody + '</section>';
      }

      function renderChampionReview() {
        const journey = state.data.championJourney;
        const goals = journey.reduce((total, match) => total + (match.home === "Spain" ? match.score[0] : match.score[1]), 0);
        const wins = journey.filter((match) => (
          match.home === "Spain" ? match.score[0] > match.score[1] : match.score[1] > match.score[0]
        )).length;
        const cleanSheets = journey.filter((match) => (
          match.home === "Spain" ? match.score[1] === 0 : match.score[0] === 0
        )).length;
        const sources = [
          ["FIFA · Spain v Argentina", "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/spain-argentina-final-report-highlights"],
          ["FIFA · Knockout bracket", "https://www.fifa.com/en/articles/knockout-stage-match-schedule-bracket"],
          ["FIFA · Spain v Belgium", "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/spain-belgium-match-report-highlights"],
          ["All tournament results", "https://www.fourfourtwo.com/competition/all-of-the-world-cup-scores-so-far-at-the-2026-tournament"],
        ];
        return '<section class="champion-view"><div class="champion-cover"><div class="champion-cover-copy"><div class="champion-kicker">' + t("championKicker") +
          '</div><h2>' + t("championTitle") + '</h2><p>' + t("championIntro") + '</p><div class="celebration-actions"><button class="celebration-primary" id="replayCelebration" type="button">' + t("championReplay") + '</button></div></div></div>' +
          '<div class="champion-stats">' + [
            [journey.length, "championMatches"],
            [wins, "championWins"],
            [goals, "championGoals"],
            [cleanSheets, "championCleanSheets"],
          ].map(([value, key]) => '<div class="champion-stat"><strong>' + value + '</strong><span>' + t(key) + '</span></div>').join("") + '</div>' +
          '<div class="champion-section-head"><div><h2>' + t("championPathTitle") + '</h2><p>' + t("championPathIntro") + '</p></div></div>' +
          '<div class="champion-path">' + journey.map((match, index) => renderJourneyMatch(match, index)).join("") + '</div>' +
          '<div class="champion-section-head"><div><h2>' + t("championPlayers") + '</h2></div></div><div class="champion-player-strip" role="img" aria-label="' + escapeHtml(t("championPlayers")) + '"></div>' +
          '<div class="champion-section-head"><div><h2>' + t("championSources") + '</h2></div></div><div class="champion-sources">' +
          sources.map(([label, url]) => '<a href="' + url + '" target="_blank" rel="noreferrer">' + escapeHtml(label) + '</a>').join("") +
          '</div></section>';
      }

      function renderJourneyMatch(match, index) {
        const date = new Intl.DateTimeFormat(currentLocale(), { year: "numeric", month: "short", day: "numeric" }).format(new Date(match.date + "T12:00:00Z"));
        return '<article class="journey-match"><div class="journey-index">' + (index + 1) + '</div><div><div class="journey-stage">' + escapeHtml(labelStage(match.stage)) +
          '</div><div class="journey-scoreline"><span>' + escapeHtml(displayTeamName(match.home)) + '</span><strong>' + match.score[0] + ' - ' + match.score[1] + '</strong><span>' + escapeHtml(displayTeamName(match.away)) +
          '</span></div><div class="journey-meta">' + escapeHtml(date + " · " + match.venue) + '</div></div><div class="journey-story">' +
          escapeHtml(match.summary[state.language] || match.summary.en) +
          (match.goals.length ? '<div class="journey-goals">' + match.goals.map((goal) => '<span>' + escapeHtml(goal) + '</span>').join("") + '</div>' : "") +
          '</div></article>';
      }

      function bindSpecialViewEvents(root) {
        root.querySelector("#replayCelebration")?.addEventListener("click", showCelebration);
        root.querySelectorAll("[data-if-phase]").forEach((button) => button.addEventListener("click", () => {
          state.whatIf.phase = button.dataset.ifPhase;
          saveCache();
          render();
        }));
        root.querySelectorAll("[data-if-match]").forEach((input) => input.addEventListener("change", onIfScoreChange));
        root.querySelectorAll("[data-if-winner]").forEach((select) => select.addEventListener("change", onIfWinnerChange));
        root.querySelector("#ifAutoFill")?.addEventListener("click", autoFillIfPhase);
        root.querySelector("#ifReset")?.addEventListener("click", () => {
          if (!window.confirm(t("ifResetConfirm"))) return;
          state.whatIf = { phase: "qualifiers", scores: {} };
          saveCache();
          render();
        });
      }

      function onIfScoreChange(event) {
        const id = event.target.dataset.ifMatch;
        const side = event.target.dataset.ifSide;
        const value = event.target.value === "" ? null : Math.max(0, Math.min(30, Number(event.target.value)));
        state.whatIf.scores[id] = state.whatIf.scores[id] || {};
        if (value === null || !Number.isInteger(value)) delete state.whatIf.scores[id][side];
        else state.whatIf.scores[id][side] = value;
        clearIfDownstream(id);
        saveCache();
        requestAnimationFrame(render);
      }

      function onIfWinnerChange(event) {
        const id = event.target.dataset.ifWinner;
        state.whatIf.scores[id] = state.whatIf.scores[id] || {};
        if (event.target.value) state.whatIf.scores[id].winner = event.target.value;
        else delete state.whatIf.scores[id].winner;
        clearIfDownstream(id);
        saveCache();
        requestAnimationFrame(render);
      }

      function clearIfDownstream(id) {
        const scores = state.whatIf.scores;
        const removePrefixes = [];
        if (id.startsWith("IF-Q-") || id.startsWith("IF-PO-")) removePrefixes.push("IF-G-", "IF-KO-");
        if (id.startsWith("IF-Q-") && !id.startsWith("IF-Q-OFC-")) removePrefixes.push("IF-PO-");
        if (id.startsWith("IF-Q-OFC-QF-")) removePrefixes.push("IF-Q-OFC-SF-", "IF-Q-OFC-F", "IF-PO-");
        if (id.startsWith("IF-Q-OFC-SF-")) removePrefixes.push("IF-Q-OFC-F", "IF-PO-");
        if (id === "IF-Q-OFC-F") removePrefixes.push("IF-PO-");
        if (id.startsWith("IF-G-")) removePrefixes.push("IF-KO-");
        const knockoutOrder = ["R32", "R16", "QF", "SF"];
        const knockoutPart = knockoutOrder.find((part) => id.startsWith("IF-KO-" + part));
        if (knockoutPart) {
          const index = knockoutOrder.indexOf(knockoutPart);
          knockoutOrder.slice(index + 1).forEach((part) => removePrefixes.push("IF-KO-" + part));
          removePrefixes.push("IF-KO-BRONZE", "IF-KO-FINAL");
        }
        Object.keys(scores).forEach((key) => {
          if (key !== id && removePrefixes.some((prefix) => key.startsWith(prefix))) delete scores[key];
        });
      }

      function deterministicIfScore(match) {
        let hash = 0;
        const source = match.id + match.home + match.away;
        for (let index = 0; index < source.length; index += 1) hash = (hash * 31 + source.charCodeAt(index)) >>> 0;
        if (!match.requiresWinner && hash % 5 === 0) return { home: hash % 3, away: hash % 3 };
        const homeWins = hash % 3 !== 0;
        return homeWins ? { home: 2 + hash % 2, away: hash % 2 } : { home: hash % 2, away: 2 + hash % 2 };
      }

      function autoFillIfPhase() {
        const phase = state.whatIf.phase;
        let guard = 0;
        while (guard < 10) {
          guard += 1;
          const matches = phase === "qualifiers" ? allIfQualifierMatches() : phase === "groups" ? allIfGroupMatches() : allIfKnockoutMatches();
          let changed = false;
          matches.forEach((match) => {
            if (!match.home || !match.away || ifMatchComplete(match)) return;
            state.whatIf.scores[match.id] = deterministicIfScore(match);
            changed = true;
          });
          if (!changed) break;
        }
        saveCache();
        render();
      }

      function showCelebration() {
        const dialog = document.querySelector("#championDialog");
        if (!dialog.open) dialog.showModal();
        startCelebration();
      }

      function startCelebration() {
        cancelAnimationFrame(celebrationFrame);
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const canvas = document.querySelector("#celebrationCanvas");
        const context = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.max(1, Math.round(rect.width * ratio));
        canvas.height = Math.max(1, Math.round(rect.height * ratio));
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        const colors = ["#ffcf31", "#c60b1e", "#ffffff", "#f28c28", "#ffeb7a"];
        const confetti = Array.from({ length: 130 }, () => ({
          x: Math.random() * rect.width,
          y: -Math.random() * rect.height,
          vx: (Math.random() - .5) * 2,
          vy: 1.8 + Math.random() * 3,
          size: 4 + Math.random() * 7,
          rotation: Math.random() * Math.PI,
          turn: (Math.random() - .5) * .16,
          color: colors[Math.floor(Math.random() * colors.length)],
        }));
        let sparks = [];
        let lastBurst = 0;
        const start = performance.now();
        function burst() {
          const x = rect.width * (.18 + Math.random() * .64);
          const y = rect.height * (.08 + Math.random() * .36);
          const color = colors[Math.floor(Math.random() * colors.length)];
          sparks.push(...Array.from({ length: 34 }, (_, index) => {
            const angle = Math.PI * 2 * index / 34;
            const speed = 1.5 + Math.random() * 3.2;
            return { x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, color };
          }));
        }
        function draw(now) {
          const elapsed = now - start;
          context.clearRect(0, 0, rect.width, rect.height);
          if (elapsed - lastBurst > 620 && elapsed < 5600) {
            lastBurst = elapsed;
            burst();
          }
          confetti.forEach((piece) => {
            piece.x += piece.vx;
            piece.y += piece.vy;
            piece.rotation += piece.turn;
            if (piece.y > rect.height + 12) {
              piece.y = -12;
              piece.x = Math.random() * rect.width;
            }
            context.save();
            context.translate(piece.x, piece.y);
            context.rotate(piece.rotation);
            context.fillStyle = piece.color;
            context.fillRect(-piece.size / 2, -piece.size / 3, piece.size, piece.size * .62);
            context.restore();
          });
          sparks.forEach((spark) => {
            spark.x += spark.vx;
            spark.y += spark.vy;
            spark.vy += .035;
            spark.life -= .018;
            context.globalAlpha = Math.max(0, spark.life);
            context.fillStyle = spark.color;
            context.fillRect(spark.x, spark.y, 3, 3);
          });
          context.globalAlpha = 1;
          sparks = sparks.filter((spark) => spark.life > 0);
          if (elapsed < 7200 && document.querySelector("#championDialog").open) celebrationFrame = requestAnimationFrame(draw);
        }
        celebrationFrame = requestAnimationFrame(draw);
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
        const list = document.querySelector("#matches");
        const specialView = state.activeStage === "冠军回顾" || state.activeStage === "If...";
        document.body.classList.toggle("focus-view", specialView);
        if (state.activeStage === "冠军回顾") {
          list.className = "champion-view";
          list.innerHTML = renderChampionReview();
          bindSpecialViewEvents(list);
          return;
        }
        if (state.activeStage === "If...") {
          list.className = "if-view";
          list.innerHTML = renderWhatIf();
          bindSpecialViewEvents(list);
          return;
        }
        hydrateKnockouts();
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
        }).sort((a, b) => matchSortTime(a) - matchSortTime(b) || a.id - b.id);
      }

      function renderGroupedMatches(matches) {
        const byGroup = Object.fromEntries(Object.keys(state.data.groups).map((group) => [group, []]));
        matches.forEach((match) => {
          const group = groupLetter(match.stage);
          if (group && byGroup[group]) byGroup[group].push(match);
        });
        return Object.entries(byGroup).map(([group, items]) => (
          '<section class="group-section"><h2>' + labelStage("Group " + group) + '</h2><div class="group-grid">' +
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
          '<div class="match-head"><span>M' + match.id + ' · ' + escapeHtml(formatMatchTime(match)) + '</span><span class="badge ' + match.status + '">' + statusLabel(match.status) + '</span></div>' +
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
          '<div class="fact-row"><span>' + t("stage") + '</span><span>' + escapeHtml(labelStage(match.stage)) + '</span></div>' +
          '<div class="fact-row"><span>' + t("kickoff") + '</span><span>' + escapeHtml(formatMatchTime(match)) + '</span></div>' +
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
          '<div class="match-head"><span>M' + match.id + ' · ' + escapeHtml(formatMatchTime(match)) + '</span><span class="badge ' + match.status + '">' + statusLabel(match.status) + '</span></div>' +
          '<div class="bracket-team"><div class="slot-row">' + renderTeamIdentity(getTeam(match, "home"), "home") + '<span class="bracket-score">' + (score ? score.home : "-") + '</span></div>' + renderBracketPicker(match, "home") + '</div>' +
          '<div class="bracket-team"><div class="slot-row">' + renderTeamIdentity(getTeam(match, "away"), "away") + '<span class="bracket-score">' + (score ? score.away : "-") + '</span></div>' + renderBracketPicker(match, "away") + '</div>' +
          '<div class="facts"><div class="fact-row"><span>' + t("kickoff") + '</span><span>' + escapeHtml(formatMatchTime(match)) + '</span></div><div class="fact-row"><span>' + t("venue") + '</span><span>' + escapeHtml(match.venue) + '</span></div></div>' +
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
                if (isTeam(match[side])) {
                  if (selection[side]) {
                    delete selection[side];
                    changed = true;
                  }
                  return;
                }
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
        const box = document.querySelector("#standings");
        if (state.activeStage === "冠军回顾" || state.activeStage === "If...") {
          box.innerHTML = "";
          document.querySelector("#thirds").innerHTML = "";
          return;
        }
        const tables = buildStandings();
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
          '<p><strong>' + t("stage") + '：</strong>' + escapeHtml(labelStage(match.stage)) + '</p>' +
          '<p><strong>' + t("detailDateVenue") + '：</strong>' + escapeHtml(formatMatchTime(match, true)) + ' · ' + escapeHtml(match.venue) + '</p>' +
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
        document.querySelector("#celebrationKicker").textContent = t("celebrationKicker");
        document.querySelector("#celebrationTitle").textContent = t("celebrationTitle");
        document.querySelector("#celebrationText").textContent = t("celebrationText");
        document.querySelector("#openChampionReview").textContent = t("celebrationReview");
        document.querySelector("#closeCelebration").textContent = t("celebrationContinue");
        document.querySelector("#languageSelect").value = state.language;
        document.querySelector("#lastUpdated").textContent = t("lastUpdated", { time: state.lastUpdated ? new Date(state.lastUpdated).toLocaleString(currentLocale()) : t("neverSynced") });
        document.querySelector("#syncStatus").textContent = state.syncMessage;
        const counts = state.data.matches.reduce((acc, match) => {
          acc[match.status] = (acc[match.status] || 0) + 1;
          return acc;
        }, {});
        if (state.activeStage === "冠军回顾") {
          document.querySelector("#heroCount").textContent = t("championHeroCount");
          document.querySelector("#heroSummary").textContent = t("championHeroSummary");
        } else if (state.activeStage === "If...") {
          document.querySelector("#heroCount").textContent = t("ifHeroCount");
          document.querySelector("#heroSummary").textContent = t("ifHeroSummary");
        } else {
          document.querySelector("#heroCount").textContent = t("heroCount", { count: state.data.matches.length });
          document.querySelector("#heroSummary").textContent = t("heroSummary", { scheduled: counts.scheduled || 0, live: counts.live || 0, finished: counts.finished || 0 });
        }
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
          if (match.id > 72) {
            if (next.home && state.data.teamMeta[next.home]) next.homeSeed = next.home;
            if (next.away && state.data.teamMeta[next.away]) next.awaySeed = next.away;
          }
          Object.assign(match, next);
          if (remember) state.syncedMatches[update.id] = sanitiseUpdate(update);
        });
        normaliseKnockoutState();
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
        if (update.home && state.data.teamMeta[update.home]) clean.home = update.home;
        if (update.away && state.data.teamMeta[update.away]) clean.away = update.away;
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
            whatIf: state.whatIf,
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
          if (cached.whatIf && cached.whatIf.scores) {
            state.whatIf = {
              phase: ["qualifiers", "groups", "knockout"].includes(cached.whatIf.phase) ? cached.whatIf.phase : "qualifiers",
              scores: cached.whatIf.scores,
            };
          }
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
      normaliseKnockoutState();
      document.querySelector("#syncButton").addEventListener("click", syncData);
      document.querySelector("#languageSelect").addEventListener("change", (event) => {
        state.language = event.target.value;
        saveCache();
        render();
      });
      document.querySelector("#closeDialog").addEventListener("click", () => document.querySelector("#detailDialog").close());
      document.querySelector("#closeCelebration").addEventListener("click", () => document.querySelector("#championDialog").close());
      document.querySelector("#openChampionReview").addEventListener("click", () => {
        document.querySelector("#championDialog").close();
        state.activeStage = "冠军回顾";
        saveCache();
        render();
      });
      document.querySelector("#championDialog").addEventListener("close", () => cancelAnimationFrame(celebrationFrame));
      render();
      try {
        if (!sessionStorage.getItem(celebrationKey)) {
          sessionStorage.setItem(celebrationKey, "shown");
          requestAnimationFrame(showCelebration);
        }
      } catch (error) {
        requestAnimationFrame(showCelebration);
      }
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

function resolveKnownTeamName(name) {
  const target = canonicalName(name);
  return Object.keys(teamMeta).find((team) => canonicalName(team) === target) || name;
}

function findMatchByTeams(homeName, awayName, kickoffUtc = "") {
  const home = canonicalName(homeName);
  const away = canonicalName(awayName);
  const teamMatch = initialData.matches.find((match) => {
    const mh = canonicalName(match.home);
    const ma = canonicalName(match.away);
    return (mh === home && ma === away) || (mh === away && ma === home);
  });
  if (teamMatch) return teamMatch;

  const kickoff = Date.parse(kickoffUtc || "");
  if (!Number.isFinite(kickoff)) return null;
  return initialData.matches.find((match) => {
    if (match.id <= 72 || !match.kickoffUtc) return false;
    return Math.abs(Date.parse(match.kickoffUtc) - kickoff) <= 90 * 60 * 1000;
  }) || null;
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
  const match = findMatchByTeams(homeName, awayName, event.date);
  if (!match) return null;
  const status = mapEspnState(event.status?.type?.state);
  const score = {
    home: Number(home.score || 0),
    away: Number(away.score || 0),
  };
  const reversed = canonicalName(match.home) === canonicalName(awayName);
  const details = Array.isArray(competition.details) ? competition.details : [];
  const update = {
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
  if (match.id > 72) {
    update.home = resolveKnownTeamName(reversed ? awayName : homeName);
    update.away = resolveKnownTeamName(reversed ? homeName : awayName);
  }
  return update;
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
