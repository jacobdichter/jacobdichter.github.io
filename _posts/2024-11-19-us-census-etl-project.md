---
layout: post
title: "Basic ETL Using U.S. Census Trade Data"
date: 2024-11-19 09:50:00 +0000
author: Jacob Dichter
categories: [blog]
---
I will implement a simple step-by-step outline of a basic ETL project where we will load a CSV into Python, clean, then load the data into SQLite where it can be queried.

## Review the US. Census API Documentation


This project outlines a simple ETL (Extract, Transform, Load) process that begins by loading a CSV file into Python. The first step in the ETL pipeline involves using Python’s built-in capabilities or popular libraries such as pandas to clean and preprocess the data. This can include tasks such as handling missing values, standardizing date formats, and correcting data inconsistencies. After the data is cleaned, we will load it into an SQLite database, a lightweight yet powerful relational database system, where we can easily query the data for analysis.

Additionally, we’ll explore the U.S. Census API, which provides access to a wealth of data for analysis, including economic, demographic, and geographic data. A key part of this project is understanding the structure of API requests, which typically involve making GET requests with query strings to access the desired data. The U.S. Census API provides data in JSON format, which makes it easy to parse and manipulate in Python. Notably, for fewer than 50 requests per day, no API key is required, making it more accessible for quick, small-scale analyses.

A critical part of working with the U.S. Census API is understanding how to construct the query string to select the data you need. The query string consists of parameters that define what data you are requesting, such as the specific geographic region, data type, and time period. In this case, the goal is to gather data on state exports of HS-4 products to all countries. This involves selecting the appropriate endpoint within the API documentation, which is where the data for exports is housed.

Once the correct endpoint is chosen, it’s important to set the proper constraints on the data request. This could involve specifying the states of interest, the HS-4 codes for specific products, and the export destination countries. By defining these constraints, we ensure that the data returned is relevant and manageable. In this case, the request would focus on state exports of HS-4 products to all countries, allowing for a detailed understanding of trade flows at a more granular level than national data alone.

Through this process, we can combine the cleaned data from our CSV file with real-time data pulled from the U.S. Census API, storing it in SQLite for querying and further analysis. This project will provide a practical demonstration of the ETL process and offer valuable experience in working with APIs, managing data, and using relational databases for data storage and querying.

- Basics (API key not needed for <50 requests, JSON format, etc.)
- Understanding the query string
- Selecting the applicable endpoint
- Deciding the constraints of our data request
- "State exports (all states) of HS-4 to all countries"

## Python ETL Process

- Library dependencies (requests, pandas)
- Approach to query string loop
  
```python
url = "https://api.census.gov/data/timeseries/intltrade/exports/statehs?get=OUR_QUERY_STRING"

state_codes = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", 
    "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", 
    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", 
    "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", 
    "WI", "WY"]
```

Query string: ```STATE,CTY_NAME,CTY_CODE,E_COMMODITY,E_COMMODITY_SDESC,ALL_VAL_MO,ALL_VAL_YR&COMM_LVL=HS4&time=2022-12&STATE="```

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

- **Screenshot of .csv population**

## Validation of Data Extraction (?)

### This is a Subheading

## Loading the Data into Postgres Database

- Docker container for postgres process
- psycopg2 library
- copyexpert() method
- SQL string
- - Validation of data integrity
