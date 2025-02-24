---
layout: post
title: "Generalizing Regression: t-tests and OLS"
date: 2024-12-23 09:50:00 +0000
author: Jacob Dichter
categories: [blog]
---

### Is a t-Test Equivalent to Regression on a Group Dummy Variable?

Yes, running a t-test comparing two groups is mathematically equivalent to performing a simple linear regression where the outcome variable is regressed on a single binary (dummy) variable indicating group membership. Here's why:

---

### The t-Test
A t-test for two independent groups compares the means of a dependent variable (\(Y\)) between two groups (e.g., Group A and Group B). The null hypothesis is that the means of the two groups are equal (\(H_0: \mu_A = \mu_B\)).

---

### Simple Linear Regression
In simple linear regression, you can model the dependent variable (\(Y\)) as:

\[
Y_i = \beta_0 + \beta_1 X_i + \epsilon_i
\]

where:
- \(X_i\) is a binary variable (e.g., 0 for Group A and 1 for Group B),
- \(\beta_0\) is the mean of \(Y\) for Group A,
- \(\beta_1\) is the difference in means between Group B and Group A (\(\mu_B - \mu_A\)),
- \(\epsilon_i\) is the error term.

---

### Equivalence
- The t-statistic for the slope (\(\beta_1\)) in this regression is the same as the t-statistic from the t-test comparing the two groups.
- The regression's \(p\)-value for testing whether \(\beta_1 = 0\) is identical to the \(p\)-value from the t-test for the null hypothesis that the two group means are equal.
- The estimated coefficients in the regression (\(\beta_0\) and \(\beta_1\)) correspond directly to the group means and the mean difference.

---

### Assumptions
For the equivalence to hold, the assumptions underlying both methods must be satisfied:
1. The dependent variable is approximately normally distributed within each group.
2. The variances of the dependent variable in the two groups are equal (homoscedasticity).
3. Observations are independent.

---

### Why Use One Over the Other?
- **t-Test:** Direct and simpler for comparing two group means.
- **Regression:** More flexible, especially when additional covariates are included (e.g., adjusting for confounders or interacting variables).
