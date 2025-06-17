---
layout: post
title: "Estimating LHRR Race Day Temperature"
author: Jacob Dichter
date: 2025-05-02 07:04:00 +0000
categories: [blog]
description: Estimate the probability distribution of temperatures on a specific calendar day (June 9th) in a specific town (Litchfield, CT) at a specific time (1:00pm)
---
<span class="date" style="padding-top: 0px; margin-top: 0px;">{{ page.date | date: "%B %-d, %Y" }}</span>

🎯 Goal:
Estimate the probability distribution of temperatures on a specific calendar day (June 9th) in a specific town (Litchfield, CT) at a specific time (1:00pm).

---

2. Collect Historical Weather Data
You’ll need historical temperature data for the same calendar day over many years.

Options:

NOAA/NCEI Climate Data (link)

Meteostat API (free, Python-friendly)

Visual Crossing or Weather API (easy to use, but sometimes have usage limits)

Key data to collect:

Date

Temperature at race time (or daily high/low if hourly not available)

Optional: humidity, wind, etc.

3. Clean and Prepare Data
Extract temperatures from the chosen date (and optionally ± a few days) for each year.

Handle missing values.

Normalize time zones and units (Fahrenheit vs Celsius).



