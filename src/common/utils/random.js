export const random = (min, max) => Math.random() * (max - min) + min;

export const randomId = () => String(random(0, 1e20)).padStart(20);
