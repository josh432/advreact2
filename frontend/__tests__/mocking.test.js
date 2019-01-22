function Person(name, foods) {
    this.name = name;
    this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
    return new Promise((resolve, reject) => {
        //simulates an API
        setTimeout(() => resolve(this.foods), 2000);
    });
};

it('can create a person', async () => {
    const me = new Person("Josh", ['pizza', 'burgers']);
    expect (me.name).toBe("Josh");
});

it('can fetch foods', async () => {
    const me = new Person("Josh", ['pizza', 'burgers']);
    //mock the favFoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue([
        'sushi', 'ramen'
    ]);
    const favFoods = await me.fetchFavFoods();
    console.log(favFoods);
    expect(favFoods).toContain('sushi');
});




describe('mocking learning', () => {
    it('mocks a reg function', () => {
        const fetchDogs = jest.fn();
        fetchDogs('snickers');
        expect(fetchDogs).toHaveBeenCalled();
        expect(fetchDogs).toHaveBeenCalledWith('snickers');
        fetchDogs('hugo');
        expect(fetchDogs).toHaveBeenCalledTimes(2);
    });
});