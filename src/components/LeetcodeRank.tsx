import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";

type ContestStats = {
  globalRanking: number;
  rating: number;
  attendedContestsCount: number;
  totalParticipants: number;
  topPercentage: number;
};

const CACHE_KEY = "leetcode_stats";
const CACHE_TIME = 24 * 60 * 60 * 1000; // 1 day in ms

export function LeetCodeRanking({ username }: { username: string }) {
  const [stats, setStats] = useState<ContestStats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cache = localStorage.getItem(CACHE_KEY);
    if (cache) {
      const { data, timestamp, cachedUsername } = JSON.parse(cache);
      if (Date.now() - timestamp < CACHE_TIME && cachedUsername === username) {
        setStats(data);
        return;
      }
    }

    const query = `
      query userContestRankingInfo($username: String!) {
        userContestRanking(username: $username) {
          globalRanking
          rating
          attendedContestsCount
          totalParticipants
          topPercentage
        }
      }
    `;

    fetch("https://portfolio-sdvn.onrender.com/leetcode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.data?.userContestRanking) {
          setStats(json.data.userContestRanking);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              data: json.data.userContestRanking,
              timestamp: Date.now(),
              cachedUsername: username,
            })
          );
        } else {
          setError("No ranking data returned");
        }
      })
      .catch(() => setError("Failed to fetch LeetCode data"));
  }, [username]);

  if (error) return <div className="error">{error}</div>;
  if (!stats) return <div>Loading…</div>;

  return (
    <div className="lc-stats pb-10 px-4 sm:px-6 md:px-8" data-theme="black">
      <div className="max-w-3xl mx-auto space-y-4 text-center md:text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold heading">
          DSA Journey
        </h3>
        <p>
          Leetcode:{" "}
          <a
            href="https://leetcode.com/u/udaykumar-dhokia/"
            target="_blank"
            className="text-white underline"
          >
            udaykumar-dhokia
          </a>
        </p>
        <ul className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0 w-full">
          <li>
            <strong>Global Rank:</strong> {stats.globalRanking.toLocaleString()}
          </li>
          <li>
            <strong>Rating:</strong> {stats.rating.toFixed(2)}
          </li>
          <li>
            <strong>Top:</strong> {stats.topPercentage}%
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
          <Badge className="bg-green-800">Arrays</Badge>
          <Badge className="bg-green-800">Sorting</Badge>
          <Badge className="bg-green-800">Binary Search</Badge>
          <Badge className="bg-green-800">Linked Lists</Badge>
          <Badge>Strings</Badge>
          <Badge>Stacks & Queues</Badge>
          <Badge>Graphs</Badge>
          <Badge>DP</Badge>
          <Badge>Tries</Badge>
        </div>
      </div>
    </div>
  );
}
