---
layout: post
title: "Jacob Initial Post"
date: 2024-07-26 09:50:00 +0000
categories: [blog]
---

Test post.

```python
import sys
import numpy as np
import pandas as pd
import math

##---Return products of Gaussian probabilities for each feature
def compute_gaussian(x, mean, var):
    res = 1

    for i in range(0, len(x)):
        exp = math.exp(-((x[i]-mean[i])**2 / (2 * var[i] )))
        res *= (1 / (math.sqrt(2 * math.pi * var[i]))) * exp
    return res

### ---- IRIS DATASET ---- ###

def main(): 
    ##---Load in the Iris dataset using Pandas read.csv
    df = pd.read_csv("C:/Users/jacob/Documents/M.S. COMPUTER SCIENCE/Spring 2023/Data Mining/Assignment 2/iris.csv") 
    
    #---Randomize data and assign randomized data into dfrandom
    #--.sample shuffles ourdata
    #--.reset_index creates a new index for the shuffled data and drops the old index
    dfrandom = df.sample(frac=1, random_state=1119).reset_index(drop=True) 
    print(dfrandom)

    # data read from a file is read as a string, so convert the first 4 cols to float 
    df1 = dfrandom.iloc[:,0:4].astype(float) 
    print(df1)

    #---separate out the last column 
    df2 = dfrandom.iloc[:,4] 
   
    #---combine the 4 numerical columns and the ast column that has the flower category 
    dfrandom = pd.concat([df1,df2],axis=1) 
    print(dfrandom) 
    
    #---separate the data into training and test parts 
    dftrain = dfrandom.iloc[0:100,:] 
    print(dftrain) 
    dftest = dfrandom.iloc[100:,:] 
    print(dftest)
```

```bash
mkdir enguno
cd ..
cd ..
mv assets/style/* ./
```
