---
layout: post
title: "Figuring Out Star Schema in Power BI"
date: 2025-06-19 09:50:00 +0000
author: Jacob Dichter
categories: [blog]
description: "After developing my first PowerBI project, I learn and implement preferred practices in semantic modeling and the star schema approach to dashboard development."
---
<span class="date" style="padding-top: 0px; margin-top: 0px;">{{ page.date | date: "%B %-d, %Y" }}</span>


### My Prompt:
"My US exports dashboard has an Exports_2024 table with cty_name, hs2_code, hs4_code, hs4_desc, isCountry, State, year_value, and apparently some added measures I added for KPI tiles like TopMarket and TopState based on a selected good. I also have a crosswalk for official HS codes and more natural language versions, and a crosswalk of ALL CAPS country and state abbreviations with their full names. this is the whole star schema right. I want to add 2023 exports, maybe 2022 exports as well and add calculated data such as %_state_exports, %_growth. I have no idea how to approach this."


### ChatGPT said:
Thanks for laying it out clearly. Here’s a straight path forward based on what you’ve got and where you want to go. Right now you’re working with a single fact table (Exports_2024) and a couple of potential dimension tables (crosswalks), but you're not yet fully using a star schema, and that’s fine — we’ll get you there.

🔧 Your Current Schema (Flattened Fact Table)
```scss
Exports_2024
├── cty_name
├── hs2_code
├── hs4_code
├── hs4_desc
├── isCountry
├── State
├── year_value
├── TopMarket (measure)
├── TopState (measure)
```
You also have:

- HS Code Crosswalk (for display names)
- Country/State Abbreviation Crosswalk

🧭 Goal
Add 2023, 2022 export data

Add derived metrics:

- %_state_exports (share of total state exports for that good)

- %_growth (YoY change)

Move toward a proper star schema for scale and clarity

### 🛠 Step-by-Step Guide
## ✅ Step 1: Consolidate Historical Data
Create a unified fact table:

Fact_Exports

```perl
Copy
Edit
| year | state | cty_abbr | hs4_code | hs2_code | export_value |
```
Append all years: 2022, 2023, 2024

Remove any textual fluff — we’ll add display names via dimensions

One row = one export record by year, state, country, HS code

## ✅ Step 2: Create Dimension Tables
Dim_Date
```sql
Copy
Edit
| year |
Dim_Product
Copy
Edit
| hs4_code | hs4_desc | hs2_code | hs2_desc |
```
Use your HS crosswalk here

Dim_Geography
Copy
Edit
| state_abbr | state_full | cty_abbr | cty_full | isCountry |
Use your country/state abbreviation table here

If one row per entity doesn’t work, split it into Dim_State and Dim_Country

## ✅ Step 3: Build Relationships
Your star schema will now look like this:
```
markdown
Copy
Edit
        Dim_Date
           |
           |
       Fact_Exports
       /     |     \
Dim_Product  |   Dim_Geography
             |
Each dimension has a 1:many relationship to the fact table.
```

## ✅ Step 4: Add Measures
Now that you have a normalized structure, write clean DAX measures:

Total Exports
```sql
Total Exports := SUM(Fact_Exports[export_value])
% of State Exports
```
```sql
% State Exports :=
VAR totalState = CALCULATE([Total Exports], ALLEXCEPT(Dim_Geography, Dim_Geography[state_abbr]), Dim_Date)
RETURN DIVIDE([Total Exports], totalState)
```

YoY Growth
```sql
YoY Growth :=
VAR prevYear = CALCULATE([Total Exports], Dim_Date[year] = SELECTEDVALUE(Dim_Date[year]) - 1)
RETURN DIVIDE([Total Exports] - prevYear, prevYear)
```

## ✅ Step 5: KPI Tiles (Optional Cleanup)
Now that you're not tied to Exports_2024, recreate your KPI measures off the new fact:

```sql
Top Market :=
TOPN(1, VALUES(Dim_Geography[cty_full]), [Total Exports], DESC)
```

### 🧠 Final Advice
You’re halfway there. Just need to:

Merge data by stacking years (Power Query → Append Queries)

Normalize dimension tables

Use relationships to drive filtering instead of relying on columns like TopMarket built into the fact table

