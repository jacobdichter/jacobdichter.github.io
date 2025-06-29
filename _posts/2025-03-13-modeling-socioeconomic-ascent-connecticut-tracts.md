---
layout: post
title: "Modeling Socioeconomic Ascent in Connecticut Census Tracts"
date: 2025-03-13 09:50:00 +0000
author: Jacob Dichter
categories: [blog]
description: "Using public Census data, I applied data mining algorithms to model the socioeconomic correlations of economic growth on the 884 official Census tracts of Connecticut to generate 5-year forecasts for the year 2028."
---
<span class="date" style="padding-top: 0px; margin-top: 0px;">{{ page.date | date: "%B %-d, %Y" }}</span>

## Abstract
Predicting socioeconomic development of towns and urban regions is crucial for effective resource allocation and strategic decision-making by governments and businesses. Socioeconomic studies have traditionally relied on conventional statistical methods or qualitative analyses, which can be limited in their ability to capture the complex, multi-dimensional nature of development dynamics and adapt to evolving patterns in the data. Recent advancements in machine learning offer new possibilities for understanding and predicting socioeconomic changes. Ensemble learning methods and neural networks have shown promising results in various domains, sometimes combining multiple modal approaches to improve prediction accuracy and robustness. This study focuses on comparing the various statistical learning methods, from OLS to ensemble learning techniques like random forest and gradient boosting, in predicting socioeconomic ascent across Connecticut’s census tracts. The project involves collecting and preprocessing a comprehensive set of socioeconomic indicators, training and evaluating multiple statistical learning models, and conducting a comparative analysis to identify the most effective approach. By providing insights into the relative strengths of these techniques, this research aims to support data-driven decision-making in urban planning, private sector investment, resource allocation, and economic development initiatives in Connecticut.

### Contents

A series of articles covers components of my M.S. project implementation incuding:
* Literature Review
* Data Ingestion / ETL Process
* Using PCA to Operationalize the Target Variable (SES)
* Modeling (Linear, traditional approaches)
* Ensemble Learning Implementation
* Model Validation & Discussion

### Why does this matter? Who cares?
## 1. Real Estate Investors & Developers

They want to know which areas will rise in home prices and desirability soon.

Your hotspots signal good investment or development opportunities.

##2. Local Governments & Urban Planners

Hotspots indicate areas needing infrastructure, schools, or transportation upgrades to support growth.

Helps with efficient resource allocation and long-term planning.

##3. Businesses & Retailers

Hotspots mean growing consumer spending power and educated workforce—ideal for targeting expansions or new stores.

##4. Policy Makers & Community Organizations

Identifying upward-trending areas helps in designing targeted policies to sustain growth or address inequalities.


