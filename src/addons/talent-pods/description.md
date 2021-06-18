Formating Hero Squads on per Mission scope works great for maximum flexibility and optimal allocation in the Engineering talent pool. However, over time, this can lead to some inherent drawbacks:

- Lack of ownership of developed features or components.
- Lack of continuous improvement through retrospectives and follow-up action items.
- Less transparency and more challenging work on the management side to help individuals grow and get better in their role.

This add-on introduces the idea of **Talent pod**, a more concrete, yet flexible team, in the ecosystem of the Talent pool.

#### What is a Talent pod?

- A team of 3 or more Engineers that, **by default**, stay together for a long time.
- Flexible enough team to lend people here and there, **if needed**, to assist on running missions, returning back to their home team when and if no longer needed elsewhere.
- Contributors to the Guardian Squad, either as a whole or as individual contributors across pods.

A Talent pod can exercise component and feature ownership. If they
have worked on feature A, the probability of working on the next version of the
same feature is much higher, leading to better and faster development cycles.

Talent pods foster more meaningful continuous improvement ceremonies and
better bonding among members.

To highlight the key differences from the default Squad formation of Agile Squads framework, here is how a Talent pool is looking without pods:

```
 Talent Pool (no pods)
|-----|-----|-----|-----|-----|
| E1  | E2  | E3  | E4  | E5  |
|-----|-----|-----|-----|-----|
| E6  | E7  | E8  | E9  | E10 |
|-----|-----|-----|-----|-----|
| E11 | E12 | E13 | E14 | E15 |
|-----|-----|-----|-----|-----|
| E16 | E17 | E18 | E19 | E20 |
|-----|-----|-----|-----|-----|
```

With Talent pods, the Talend pool is becoming a pool of teams instead of
individual contributors:

```
 Talent Pool (with Pods)
|------|------|------|------|------|
| POD1 | POD2 | POD3 | POD4 | POD5 |
|--^---|--^---|--^---|--^---|--^---|
| E1   | E5   | E9   | E13  | E17  |
| E2   | E6   | E10  | E14  | E18  |
| E3   | E7   | E11  | E15  | E19  |
| E4   | E8   | E12  | E16  | E20  |
|------|------|------|------|------|
```

During a cycle, Hero Squads and the Guardian Squad are formed on a pod (or multiple pods) level:

```
|------------|------------|------------|-----------|
| Hero Squad | Hero Squad | Hero Squad | Guardians |
|------------|------------|------------|-----------|
| POD1, POD3 | POD2       | POD5       | POD4      |
|------------|------------|------------|-----------|
```

An alternative scheme for Guardian Squad allocation is to "borrow" members from
various pods:

```
|------------|------------|------------|-------------|
| Hero Squad | Hero Squad | Hero Squad | Guardians   |
|------------|------------|------------|-------------|
| POD1, POD3 | POD2       | POD5, POD4 | E1, E7, E20 |
|------------|------------|------------|-------------|
```

As a general rule, a Talent pod can keep its member for a long time. However a good practice would be to rebuild pods, maybe once or twice a year,
to create diversity, knowledge sharing and new people dynamics.
