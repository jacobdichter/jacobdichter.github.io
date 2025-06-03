---
layout: post
title: "Jacob Initial Post"
date: 2024-07-26 09:50:00 +0000
author: Jacob Dichter
categories: [blog]
---
<span class="date" style="padding-top: 0px; margin-top: 0px;">{{ page.date | date: "%B %-d, %Y" }}</span>

Test post.
<div class="vine-divider">
  <svg width="100%" height="16px" viewBox="0 0 1200 16">
    <path 
      d="M0,8 C200,2 400,14 600,8 C800,2 1000,14 1200,8" 
      stroke="#5A9C4A" 
      fill="none" 
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#000"><path d="M0 0h1000v4H0z"></path><path d="M0 0h1000v80.8S550 100 500 100 0 80.8 0 80.8V0Z" opacity=".2"></path><path d="M0 0h1000v61.6S600 100 500 100 0 61.6 0 61.6V0Z" opacity=".3"></path><path d="M0 0h1000v42.4S650 100 500 100 0 42.4 0 42.4V0Z" opacity=".4"></path><path d="M0 0h1000v23.2S700 100 500 100 0 23.2 0 23.2V0Z" opacity=".5"></path><path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z"></path></g></svg>

<br>
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

The below chart shows the number of messages sent by Daniel and me over the decade preceding 2023. We can observe a low period when we lived together 2016 into 2017, moving to a max around when we were working full-time in office or remote. Finally, the chart declines when we both met our girlfriends and began relationships.

<div style="text-align: center;">
<iframe src="/assets/dj_chart.html" width="700" height="500" frameborder="0"></iframe>
</div>
<br>

Notes from old Home Page:

Gaussian Mixture Model
$$
p(x) = \sum_{k=1}^K \pi_k \cdot \mathcal{N}(x \mid \mu_k, \Sigma_k)
$$<br>

_________

A few suggestions: 
- Simple links as above. Can be short write-ups *or* just links to Kaggle notebooks or hosted Jupyter notebooks. I would suggest something like Chris Khan's [hosted notebooks](https://chriskhanhtran.github.io/minimal-portfolio/projects/ames-house-price.html).


A few more Markdown notes:

Astericks can be *used* (1 *) for **emphasis** (2 **) and other formatting ~~choices~~ (2 ~~)

Unordered lists can be indicated with * or - or +

* I think
- Minus
+ Plus

We can also use `inline emphasis` with single backticks.

Code blocks can be inserted with triple ``` and optionally the name of the language right after opening:

```python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

data = pd.DataFrame({'Brand': ['Maruti', 'Hyundai', 'Tata',
                    'Mahindra', 'Maruti'],
                     'Year': [2012, 2014, 2011, 2015, 2012],
                     'Kms Driven': [50000, 30000, 60000, 25000, 10000],
                     'City': ['Gurgaon', 'Delhi', 'Mumbai', 'Delhi', 'Mumbai'],
                     'Mileage': [28, 27, 25, 32, 26]})
```
<div class="content-line"></div>

LaTeX testing:

Block math formatting:
$$
E = mc^2
$$<br>

Linear regression
$$
y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_p x_p + \epsilon
$$<br>

Normal distribution
$$
f(x \mid \mu, \sigma^2) = \frac{1}{\sqrt{2 \pi \sigma^2}} \exp\left(-\frac{(x - \mu)^2}{2 \sigma^2}\right)
$$<br>

