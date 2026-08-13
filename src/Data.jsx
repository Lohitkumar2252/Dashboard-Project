import { faker } from "@faker-js/faker";

// faker.seed(42);

export const PLANS = [
  { id: "Starter", label: "Starter", mrr: 19 },
  { id: "Pro", label: "Pro", mrr: 89 },
  { id: "Enterprise", label: "Enterprise", mrr: 249 },
];

// Weighted so most users are Starter/Pro and Enterprise is rare —
// mirrors a real SaaS customer distribution instead of an even 1/3 split.
function randomPlan() {
  const roll = Math.random();
  if (roll < 0.5) return PLANS[0];
  if (roll < 0.85) return PLANS[1];
  return PLANS[2];
}

function getRandomUserCount(min = 100, max = 250) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const userCount = getRandomUserCount(50, 100);



function generateUsers(count = 150) {
  return Array.from({ length: count }, () => {
    const plan = randomPlan();
    return {
      id: faker.string.uuid(),
      fullName: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      plan: plan.id,
      mrr: plan.mrr,
      joinedAt: faker.date.past({ years: 1 }).toISOString(),
    };
  });
}

function generateRevenueSeries(days = 30) {
  let value = 1200;
  return Array.from({ length: days }, (_, i) => {
    value += faker.number.int({ min: -80, max: 160 });
    const date = new Date();
    date.setDate(date.getDate() - (days - i));
    return {
      date: date.toISOString().slice(0, 10),
      revenue: Math.max(value, 400),
    };
  });
}

// Generate once, module-level, so every component importing this file
// sees the same dataset for the whole session.
const REVENUE_SERIES = generateRevenueSeries(30);
const USERS = generateUsers(userCount);

const NETWORK_DELAY = 400;

export function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(USERS), NETWORK_DELAY);
  });
}

export function fetchRevenueSeries() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(REVENUE_SERIES), NETWORK_DELAY);
  });
}

export function fetchKpiSummary() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const totalRevenue = REVENUE_SERIES.reduce(
        (sum, d) => sum + d.revenue,
        0,
      );
      const activeUsers = USERS.length;
      resolve({
        revenue: totalRevenue,
        activeUsers,
        churnRate: 2.3,
        avgSessionSeconds: 402,
      });
    }, NETWORK_DELAY);
  });
}

export function fetchRevenueByPlan() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const byPlan = PLANS.map((plan) => {
        const customers = USERS.filter((u) => u.plan === plan.id);
        return {
          plan: plan.id,
          label: plan.label,
          mrr: customers.reduce((sum, u) => sum + u.mrr, 0),
          customerCount: customers.length,
        };
      });
      resolve(byPlan);
    }, NETWORK_DELAY);
  });
}

export const planColors = {
  Starter: { bg: "#FAEEDA", text: "#412402", bar: "#5DCAA5" },
  Pro: { bg: "#E1F5EE", text: "#04342C", bar: "#1D9E75" },
  Enterprise: { bg: "#EAF0F7", text: "#1A1D23", bar: "#04342C" },
};
