---
layout: post
title: "Some notes on the SQL GROUP BY statement"
date: 2024-08-05 07:04:00 +0000
categories: [blog]
---

I was reviewing some ```easy``` StrataScratch SQL questions and found I still lacked a good intuition for writing SQL even though logically parsing
someone else's written SQL statements seemed straightforward.

```sql

SELECT 
    user_id,
    ROUND(SUM(listen_duration) / 60) AS total_listen_duration,
    COUNT(DISTINCT song_id) AS unique_song_count
FROM 
    listening_habits
GROUP BY 
    user_id;
```

The blog post will continue with notes on GROUP BY relatedness to a for-loop in programming, and the importance of understanding the SQL
order of execution.
