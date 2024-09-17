/**
 * A promise function that reads from the DataBase synchronously
 * @param {String} dataPath path t the CSV file
 * @author Comfort99
 */

const fs = require('fs').promises;

const countStudents = async (dataPath) => {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const fileLines = data
      .trim()
      .split('\n')
      .filter((line) => line.trim() !== '');

    if (fileLines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const studentData = fileLines.slice(1);
    const studentCount = studentData.length;
    console.log(`Number of students: ${studentCount}`);

    const studentField = studentData.reduce((acc, line) => {
      const [firstname, , , field] = line.split(',');
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(firstname);
      return acc;
    }, {});

    Object.entries(studentField).forEach(([field, students]) => {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
