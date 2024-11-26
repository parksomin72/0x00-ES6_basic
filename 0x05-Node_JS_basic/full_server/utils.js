import fs from 'fs';

export const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            const students = {};
            const lines = data.trim().split('\n');
            const headers = lines.shift().split(',');

            lines.forEach((line) => {
                const fields = line.split(',');
                const field = fields[headers.indexOf('field')];
                const firstName = fields[headers.indexOf('firstname')];

                if (!students[field]) {
                    students[field] = [];
                }
                students[field].push(firstName);
            });

            resolve(students);
        });
    });
};
