import { SiCodeforces, SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

export const handles = {
  codeforces: "Akhilesh_23",
  leetcode: "Akhil2304",
  codechef: "dpcode_123",
  gfg: "akhildcle7wm3",
};

/** Static profile data (from resume). Codeforces numbers are refreshed live. */
export const platforms = [
  {
    judge: "Codeforces",
    icon: SiCodeforces,
    color: "#60a5fa",
    handle: handles.codeforces,
    link: `https://codeforces.com/profile/${handles.codeforces}`,
    headline: "1200+",
    headlineLabel: "max rating",
    badge: "Pupil (max)",
  },
  {
    judge: "LeetCode",
    icon: SiLeetcode,
    color: "#fbbf24",
    handle: handles.leetcode,
    link: `https://leetcode.com/u/${handles.leetcode}/`,
    headline: "1611",
    headlineLabel: "max rating",
    badge: "Top 15%",
  },
  {
    judge: "CodeChef",
    icon: SiCodechef,
    color: "#d97706",
    handle: handles.codechef,
    link: `https://www.codechef.com/users/${handles.codechef}`,
    headline: "1600+",
    headlineLabel: "max rating",
    badge: "3 ★",
  },
  {
    judge: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    color: "#22c55e",
    handle: handles.gfg,
    link: `https://www.geeksforgeeks.org/profile/${handles.gfg}`,
    headline: "100+",
    headlineLabel: "problems solved",
    badge: "Practice",
  },
];

/** Best contest finishes (from resume). */
export const standings = [
  { contest: "CodeChef Starters 157 (Div. 4)", judge: "CodeChef", rank: 591, note: "Global" },
  { contest: "Codeforces Round 1007 (Div. 2)", judge: "Codeforces", rank: 2534, note: "Global" },
  { contest: "LeetCode Weekly Contest 421", judge: "LeetCode", rank: 3279, note: "AIR 6345" },
  { contest: "Codeforces Round 1058 (Div. 2)", judge: "Codeforces", rank: 3526, note: "of 25,000+" },
];

/** Live Codeforces profile + rating history. Returns null on failure. */
export async function fetchCodeforces() {
  try {
    const [infoRes, ratingRes] = await Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${handles.codeforces}`),
      fetch(`https://codeforces.com/api/user.rating?handle=${handles.codeforces}`),
    ]);
    const info = await infoRes.json();
    const rating = await ratingRes.json();
    if (info.status !== "OK" || rating.status !== "OK") return null;
    return { user: info.result[0], history: rating.result };
  } catch {
    return null;
  }
}
