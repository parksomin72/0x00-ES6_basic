import { readDatabase } from '../utils.js';

class StudentsController {
    static async getAllStudents(req, res) {
        const databaseFile = process.argv[2];
        try {
            const students = await readDatabase(databaseFile);
            const sortedFields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

            let response = 'This is the list of our students\n';
            sortedFields.forEach((field) => {
                const firstNames = students[field];
                response += `Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}\n`;
            });

            res.status(200).send(response.trim());
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        const validMajors = ['CS', 'SWE'];
        const databaseFile = process.argv[2];

        if (!validMajors.includes(major)) {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(databaseFile);
            if (students[major]) {
                res.status(200).send(`List: ${students[major].join(', ')}`);
            } else {
                res.status(200).send('List: ');
            }
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;
