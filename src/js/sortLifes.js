export default function sortLifes(heroes) {
    heroes.sort((prev, next) => next.health - prev.health);
    return heroes;
}