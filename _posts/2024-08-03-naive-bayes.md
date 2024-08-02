---
layout: post
title: "Implementing the Naive Bayes Classifier on the Iris Dataset"
date: 2024-08-02 07:04:00 +0000
categories: [blog]
---

The code below implements a Naive Bayes classifier for the Iris dataset by first loading and randomizing the dataset, then splitting it into training and test sets. It calculates the mean and variance for each flower class (setosa, versicolor, and virginica) and uses these to compute Gaussian probabilities for classification. The classifier predicts the species of each test instance and calculates the classification accuracy based on the proportion of correct predictions.


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
 
    #---assemble the data by categories i.e., classes 
    dfsetosa = dfrandom[dfrandom['species'] == 'setosa'] 
    print(dfsetosa) 
    dfversicolor = dfrandom[dfrandom['species'] == 'versicolor'] 
    print(dfversicolor) 
    dfvirginica = dfrandom[dfrandom['species'] == 'virginica'] 
    print(dfvirginica) 
    
    #---------find mean of each class--------- 
    mean_setosa = dfsetosa.iloc[:,0:4].mean(axis=0) 
    print('mean setosa\n',mean_setosa) 
    mean_versicolor = dfversicolor.iloc[:,0:4].mean(axis=0)     
    print('mean versicolor\n',mean_versicolor)     
    mean_virginica = dfvirginica.iloc[:,0:4].mean(axis=0)     
    print('mean virginica\n',mean_virginica)      
    
    #---------find variance of each class---------     
    var_setosa = dfsetosa.iloc[:,0:4].var(axis=0)     
    print('var setosa\n',var_setosa)     
    var_versicolor = dfversicolor.iloc[:,0:4].var(axis=0)     
    print('var versicolor\n',mean_versicolor)     
    var_virginica = dfvirginica.iloc[:,0:4].var(axis=0)     
    print('var virginica\n',var_virginica)      
    
    #---do prediction on the test set via Naive Bayes     
    count_correct = 0     
    print(len(dftest))     
    for i in range(0,len(dftest)):         
        x = dftest.iloc[i,0:4].values         
        probC1 = compute_gaussian(x,mean_setosa.values,var_setosa.values)         
        probC2 = compute_gaussian(x,mean_versicolor.values,var_versicolor.values)         
        probC3 = compute_gaussian(x,mean_virginica.values,var_virginica.values)         
        probs = np.array([probC1,probC2,probC3])         
        maxindex = probs.argmax(axis=0)          
        
        if dftest.iloc[i,4] == 'setosa':             
            index = 0         
        if dftest.iloc[i,4] == 'versicolor':             
            index = 1         
        if dftest.iloc[i,4] == 'virginica':             
            index = 2         
        if maxindex == index:             
            count_correct = count_correct + 1         
        #print(probC1,' ', probC2,' ', probC3,' class=',dftest.iloc[i,4])     
        print('classification accuracy =', count_correct/len(dftest)*100)
        
main()

if __name__ == 'main':
    sys.exit(int(main() or 0))
```
