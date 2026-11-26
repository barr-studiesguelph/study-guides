---
title: Supply and Demand
description: Equilibrium, elasticity, taxes and price controls, with worked examples and practice questions.
---

# Supply and Demand

!!! abstract "What you need to know"
    - Equilibrium is where quantity demanded equals quantity supplied.
    - **Shifts** of a curve come from non-price factors; **movements along** a curve come from a change in the good's own price.
    - Elasticity measures how strongly quantity responds to price.
    - A per-unit tax creates a gap between what buyers pay and what sellers receive, and causes a deadweight loss.
    - A binding price ceiling causes a shortage; a binding price floor causes a surplus.

## Key terms

| Term | Meaning |
|---|---|
| Quantity demanded ($Q_d$) | How much buyers want to buy at a given price |
| Quantity supplied ($Q_s$) | How much sellers want to sell at a given price |
| Equilibrium | The price and quantity where $Q_d = Q_s$ |
| Shortage | $Q_d > Q_s$, which happens when price is below equilibrium |
| Surplus | $Q_s > Q_d$, which happens when price is above equilibrium |
| Deadweight loss | Total surplus lost because trades that would benefit both sides no longer happen |

## Shift vs. movement along

This is the most common exam trap.

=== "Demand shifters"

    Income, prices of substitutes and complements, tastes, expectations, number of buyers.

=== "Supply shifters"

    Input costs, technology, expectations, number of sellers, taxes and subsidies.

!!! tip "Exam tip"
    If the question says "the price of coffee rises," that's a movement **along** the coffee demand curve, not a shift. It may *shift* demand for a related good, such as tea (a substitute) or cream (a complement).

## Finding equilibrium

Set quantity demanded equal to quantity supplied and solve for price.

!!! example "Worked example"
    - Demand: $Q_d = 100 - 2P$
    - Supply: $Q_s = 20 + 2P$

    1. Set them equal: $100 - 2P = 20 + 2P$
    2. Rearrange: $80 = 4P$, so $P^* = 20$
    3. Plug back in: $Q^* = 100 - 2(20) = 60$

    **Equilibrium: $P^* = \$20$, $Q^* = 60$ units.**

    Consumer surplus is the triangle under demand and above price. Demand hits zero at $P = 50$, so:

    $$CS = \tfrac{1}{2}(50 - 20)(60) = 900$$

## Price elasticity of demand

$$
E_d = \frac{\%\Delta Q_d}{\%\Delta P}
$$

At a single point on a linear demand curve:

$$
E_d = \frac{\Delta Q}{\Delta P} \times \frac{P}{Q}
$$

| $\lvert E_d \rvert$ | Demand is… | If price rises, total revenue… |
|---|---|---|
| $> 1$ | Elastic | Falls |
| $= 1$ | Unit elastic | Stays the same |
| $< 1$ | Inelastic | Rises |

!!! example "Worked example"
    Using $Q_d = 100 - 2P$ at the equilibrium $P = 20,\ Q = 60$:

    $$E_d = (-2) \times \frac{20}{60} = -0.67$$

    Since $\lvert -0.67 \rvert < 1$, demand is **inelastic** at this point.

## Taxes

A per-unit tax $t$ on sellers raises their cost, so the supply curve shifts up by $t$. Replace $P$ with $(P - t)$ in the supply equation.

!!! example "Worked example: a \$4 tax on sellers"
    New supply: $Q_s = 20 + 2(P - 4) = 12 + 2P$

    1. Set equal to demand: $100 - 2P = 12 + 2P$, so $P_{\text{buyers}} = 22$
    2. Sellers keep $22 - 4 = 18$
    3. New quantity: $Q = 100 - 2(22) = 56$

    | | Before tax | After tax |
    |---|---|---|
    | Price buyers pay | \$20 | \$22 |
    | Price sellers keep | \$20 | \$18 |
    | Quantity | 60 | 56 |

    - **Tax revenue:** $4 \times 56 = 224$
    - **Deadweight loss:** $\tfrac{1}{2} \times 4 \times (60 - 56) = 8$
    - **Who bears it:** buyers pay \$2 more and sellers keep \$2 less, so the burden is split evenly here because the curves are equally steep.

!!! tip "Who bears more of a tax?"
    The side that is **less elastic** (less able to walk away) bears more of the tax, no matter who legally pays it.

## Price controls

- **Price ceiling** (a legal maximum) only matters if it's set *below* equilibrium. It creates a shortage.
- **Price floor** (a legal minimum) only matters if it's set *above* equilibrium. It creates a surplus.

## Practice questions

Try each one before opening the answer.

??? question "1. Demand changes to $Q_d = 120 - 2P$ (supply unchanged). Find the new equilibrium."
    $120 - 2P = 20 + 2P$, so $100 = 4P$, giving $P^* = 25$ and $Q^* = 120 - 50 = 70$.

    Demand shifted right, so both price and quantity rose, as expected.

??? question "2. Using the original demand, is demand elastic or inelastic at $P = 30$?"
    At $P = 30$, $Q = 100 - 60 = 40$.

    $E_d = (-2) \times \frac{30}{40} = -1.5$

    $\lvert -1.5 \rvert > 1$, so demand is **elastic** there. Elasticity changes along a straight-line demand curve: it is more elastic at higher prices.

??? question "3. The government sets a price ceiling of \$15. What happens?"
    \$15 is below the \$20 equilibrium, so the ceiling binds.

    - $Q_d = 100 - 30 = 70$
    - $Q_s = 20 + 30 = 50$

    There is a **shortage of 20 units**.

??? question "4. True or false: a fall in the price of tea shifts the demand curve for tea to the right."
    **False.** A change in tea's own price causes a movement *along* the tea demand curve (quantity demanded rises). It would shift demand for a *substitute*, such as coffee, to the left.
