---
layout: post
title: "Basic ETL Using U.S. Census Trade Data"
date: 2024-11-19 09:50:00 +0000
author: Jacob Dichter
categories: [blog]
---

I will implement a simple step-by-step outline of a basic ETL project where we will load a CSV into Python, clean, then load the data into SQLite where it can be queried.

# 1. Review the US. Census API Documentation

- Basics (API key not needed for <50 requests, JSON format, etc.)
- Understanding the query string
- Selecting the applicable endpoint
- Deciding the constraints of our data request
- "State exports (all states) of HS-4 to all countries"

# 2. Python ETL Process

- Library dependencies (requests, pandas)
- Approach to query string loop
```python
url = "https://api.census.gov/data/timeseries/intltrade/exports/statehs?get=STATE,CTY_NAME,CTY_CODE,E_COMMODITY,E_COMMODITY_SDESC,ALL_VAL_MO,ALL_VAL_YR&COMM_LVL=HS4&time=2022-12&STATE="

state_codes = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", 
    "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", 
    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", 
    "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", 
    "WI", "WY"
]```

- Execution of ```requests.get(url)```, HTTP status code, pandas DataFrame operations
- Execution of data extraction loop
```python
for i in state_codes:
    new_url = url + i
    response = requests.get(new_url)
    if response.status_code == 200:
        data = response.json()
        headers = data[0]
        rows = data[1:]
        df = pd.DataFrame(rows, columns=headers)
        df.to_csv(f'hs4_exports_{i}_2022')
        print(f'Saved 2022 data for {i} successfully...')
    else:
        print(f"Error: {response.status.code} for {i}")
```
- **Screenshot of .csv population

# 3. Validation of Data Extraction (?)


# 4. Loading the Data into Postgres Database

- Docker container for postgres process
- psycopg2 library
- copyexpert() method
- SQL string
- - Validation of data integrity
