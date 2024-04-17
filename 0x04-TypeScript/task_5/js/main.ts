// Define interfaces with brand property
interface MajorCredits {
    credits: number;
    _majorBrand: 'MajorCredits'; // Brand property
}

interface MinorCredits {
    credits: number;
    _minorBrand: 'MinorCredits'; // Brand property
}

// Functions to sum credits and return the branded interfaces
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: 'MajorCredits', // Maintain the brand property
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: 'MinorCredits', // Maintain the brand property
    };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 4, _majorBrand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 3, _majorBrand: 'MajorCredits' };

const minorSubject1: MinorCredits = { credits: 2, _minorBrand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 1, _minorBrand: 'MinorCredits' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log(totalMajorCredits);
console.log(totalMinorCredits);
