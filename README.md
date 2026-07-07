# ⚔️ Battle Arena - ES6 RPG Engine

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

A lightweight role-playing game (RPG) core logic engine engineered entirely with modern **JavaScript (ES6+) Class syntax**. This project models combat mechanics, runtime type safety, and foundational Object-Oriented Programming (OOP) architectures across multiple hero specializations (`Warrior`, `Mage`, `Archer`).

---

## 🚀 Implemented OOP Concepts

The engine serves as a concrete sandbox demonstrating 5 critical JavaScript paradigms:

1. **Encapsulation:** Protecting raw object states by maintaining semi-private instance fields (`_attribute`) mapped via the constructor.
2. **Data Validation (Getters & Setters):** Intercepting property modifications at runtime to enforce clean type checking (`typeof`) and throwing explicit `TypeError` diagnostics on invalid inputs.
3. **Classical Inheritance:** Scaling architectures cleanly by deriving specific subclasses from a central parent blueprint using `extends` and `super()`.
4. **Static Scope Pipelines:** Decoupling orchestrational domain logic from individual instances via static evaluation layers (`Character.battle`).
5. **Metaprogramming (`Symbol.toPrimitive`):** Hooking directly into the ECMAScript runtime engine to alter object behavior contextually during type coercion (implicit conversion to numbers or template strings).

---

## 🏗️ Class Hierarchy

```text
Character (Base Class)
  ├── Warrior (Specialization) ── Additional Property: shield
  ├── Mage    (Specialization) ── Additional Property: mana
  └── Archer  (Specialization) ── Additional Property: arrows