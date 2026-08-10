function Ex1() {
    const people = [
        { name: 'Jack', age: 50 },
        { name: 'Michael', age: 9 },
        { name: 'John', age: 40 },
        { name: 'Ann', age: 19 },
        { name: 'Elisabeth', age: 16 }
    ];

    // 1. Find first teenager
    const firstTeenager = people.find(
        person => person.age >= 10 && person.age <= 20
    );

    // 2. Find all teenagers
    const allTeenagers = people.filter(
        person => person.age >= 10 && person.age <= 20
    );

    // 3. Check every person is teenager
    const everyTeenager = people.every(
        person => person.age >= 10 && person.age <= 20
    );

    // 4. Check any person is teenager
    const anyTeenager = people.some(
        person => person.age >= 10 && person.age <= 20
    );

    return (
        <div style={{ textAlign: "center" }}>
            
            <h2>People</h2>

            {people.map((person, index) => (
                <div key={index}>
                    {person.name} - {person.age}
                </div>
            ))}

            <hr />

            <h3>1. First teenager</h3>
            <div>
                {firstTeenager.name} - {firstTeenager.age}
            </div>

            <h3>2. All teenagers</h3>
            {allTeenagers.map((person, index) => (
                <div key={index}>
                    {person.name} - {person.age}
                </div>
            ))}

            <h3>3. Every person is teenager?</h3>
            <div>
                {everyTeenager.toString()}
            </div>

            <h3>4. Any person is teenager?</h3>
            <div>
                {anyTeenager.toString()}
            </div>

        </div>
    );
}

export default Ex1;