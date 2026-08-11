function Ex3() {

    const companies = [
        { name: "Company One", category: "Finance", start: 1981, end: 2004 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];

    const ages = [
        33, 12, 20, 16, 5, 54, 21,
        44, 61, 13, 15, 45, 25, 64, 32
    ];

    const person = {
        name: "Costas",
        address: {
            street: "Lalaland 12"
        }
    };


    // 1. Print name of each company using forEach
    const companyNames = [];

    companies.forEach(company => {
        companyNames.push(company.name);
    });


    // 2. Print name of each company that started after 1987
    const companiesAfter1987 = companies.filter(
        company => company.start > 1987
    );


    // 3. Get Retail companies and increment start by 1
    const retailCompanies = companies
        .filter(company => company.category === "Retail")
        .map(company => ({
            ...company,
            start: company.start + 1
        }));


    // 4. Sort companies based on end date ascending
    const sortedCompanies = [...companies].sort(
        (a, b) => a.end - b.end
    );


    // 5. Sort ages descending
    const sortedAges = [...ages].sort(
        (a, b) => b - a
    );


    // 6. Sum ages using reduce
    const ageSum = ages.reduce(
        (sum, age) => sum + age,
        0
    );


    // 7. Object with same name and category as companies[0]
    const { name, category } = companies[0];

    const companyObject = {
        name,
        category,
        print() {
            return this.name;
        }
    };


    // 8. Function takes unknown number of numbers and returns sum
    const sumNumbers = (...numbers) => {
        return numbers.reduce(
            (sum, number) => sum + number,
            0
        );
    };


    // 9. Function takes unknown arguments of any type
    // If argument is an array -> add its values
    const addToArray = (...args) => {
        return args.reduce((result, item) => {
            if (Array.isArray(item)) {
                return [...result, ...item];
            }

            return [...result, item];
        }, []);
    };


    // 10. Destructuring street
    const {
        address: { street }
    } = person;


    // 11. Function that increments from 0 every time it is called
    let count = 0;

    const increment = () => {
        return count++;
    };


    return (
        <div style={{ textAlign: "center" }}>

            <h2>Exercise 3</h2>

            {/* 1 */}
            <h3>1. Company names</h3>

            {companyNames.map((name, index) => (
                <div key={index}>
                    {name}
                </div>
            ))}


            {/* 2 */}
            <h3>2. Companies started after 1987</h3>

            {companiesAfter1987.map((company, index) => (
                <div key={index}>
                    {company.name}
                </div>
            ))}


            {/* 3 */}
            <h3>3. Retail companies</h3>

            {retailCompanies.map((company, index) => (
                <div key={index}>
                    <p>Name: {company.name}</p>
                    <p>Category: {company.category}</p>
                    <p>Start: {company.start}</p>
                    <p>End: {company.end}</p>
                </div>
            ))}


            {/* 4 */}
            <h3>4. Companies sorted by end date</h3>

            {sortedCompanies.map((company, index) => (
                <div key={index}>
                    {company.name} - {company.end}
                </div>
            ))}


            {/* 5 */}
            <h3>5. Ages descending</h3>

            <div>
                {sortedAges.join(", ")}
            </div>


            {/* 6 */}
            <h3>6. Sum of ages</h3>

            <div>
                {ageSum}
            </div>


            {/* 7 */}
            <h3>7. Object destructuring</h3>

            <div>
                Name: {companyObject.name}
            </div>

            <div>
                Category: {companyObject.category}
            </div>

            <div>
                Print: {companyObject.print()}
            </div>


            {/* 8 */}
            <h3>8. Sum unknown numbers</h3>

            <div>
                {sumNumbers(1, 2, 3, 4, 5)}
            </div>


            {/* 9 */}
            <h3>9. Add unknown arguments to array</h3>

            <div>
                {addToArray(1, 2, [3, 4], 5, [6, 7]).join(", ")}
            </div>


            {/* 10 */}
            <h3>10. Destructuring street</h3>

            <div>
                {street}
            </div>


            {/* 11 */}
            <h3>11. Increment function</h3>

            <div>
                {increment()}
            </div>

        </div>
    );
}

export default Ex3;