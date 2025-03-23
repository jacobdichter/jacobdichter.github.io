---
layout: post
title: "Some notes on the SQL GROUP BY statement"
date: 2024-08-05 07:04:00 +0000
author: Jacob Dichter
categories: [blog]
---
<span class="date" style="padding-top: 0px; margin-top: 0px;">{{ page.date | date: "%B %-d, %Y" }}</span>

I was reviewing some StrataScratch SQL questions and found I still lacked a good intuition for writing SQL even though logically parsing
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

--

11/23/24

I wanted to add a few more notes for this same idea arose when querying my US Census trade data. First, I want to count the records for a given state:

```sql
SELECT COUNT(*)
FROM state_exports
WHERE state = 'AR';
```

Simple - this returns a single value representing the numbers of rows that satify the WHERE condition, regardless of null values. Next I wanted to know how many unique commodities each state had. I could get the value for a single state:

```sql
SELECT COUNT(DISTINCT(export_commodity))
FROM state_exports
WHERE state = 'AR'
```

But how do I get this result **for each** state? 

We use the GROUP BY clause. We add the ```state``` variable to the SELECT clause and to the GROUP BY clause.

```sql
SELECT state, COUNT(DISTINCT(export_commodity))
FROM state_exports
GROUP BY state
```
