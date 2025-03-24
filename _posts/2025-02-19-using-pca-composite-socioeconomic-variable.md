---
layout: post
title: "Using Principal Component Analysis to Produce a Composite Variable for Socioeconomic Analysis"
date: 2025-2-19 09:50:00 +0000
author: Jacob Dichter
categories: [blog]
---
<span class="date" style="padding-top: 0px; margin-top: 0px;">{{ page.date | date: "%B %-d, %Y" }}</span>

I will implement a simple step-by-step outline of a basic ETL project where we will load a CSV into Python, clean, then load the data into SQLite where it can be queried.

## Motivation

Literature and problem-scope basis for PCA on target variable.

## Paper

The target variable, Socioeconomic Status (SES) Change ( $$Y=ΔSES_{2018−2023}$$ ) is operationalized using Principal Component Analysis (PCA) to address endogeneity and multicollinearity concerns that a simple weighted average may introduce. Reades (2018) used PCA to reduce 4 dimensions to a single principal component vector (PC1) and had this serve as the target variable in their analysis. In this analysis, PCA is employed to reduce the three variables into a single principal component vector which will serve as the target variable. The data is first standardized to ensure compatibility with PCA, and the covariance matrix is decomposed to derive eigenvalues and eigenvectors. PC1, representing the largest proportion of variance, is selected as the composite index of SES change.

With the PCA-based approach, the loadings of each variable in PC1 reflect their contribution to the overall variance, offering a more empirically grounded measure of SES change than an arbitrarily weighted average. Validation such as correlation analysis and variance checks should be employed to ensure the robustness of the selected component and align our analysis with best practices in dimensionality reduction and quantitative socioeconomic research.
