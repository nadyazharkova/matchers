import sortLifes from '../src/sortLifes';

test('sort lifes', () => {
    const inputArray = [
        {
            name: 'мечник', health: 10
        },
        {
            name: 'маг', health: 100
        },
        {
            name: 'лучник', health: 80
        },
    ];
    const outputArray = [
        {
            name: 'маг', health: 100
        },
        {
            name: 'лучник', health: 80
        },
        {
            name: 'мечник', health: 10
        },
    ];
    expect(sortLifes(inputArray)).toEqual(outputArray);
});